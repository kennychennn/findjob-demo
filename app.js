const jobs = [
  {
    id: 'fj-01', company: '森果數據', name: '資料分析助理', city: '台北市', district: '大安區', address: '台北市大安區和平東路',
    salary: 'NT$ 38,000–48,000', type: '全職', education: '大學以上', experience: '經驗不拘', initial: '森', color: '',
    lat: 25.0262, lng: 121.5437, posted: '今天更新', skill: 'Excel、Python、資料整理',
    description: '協助整理營運資料、製作每週分析報表，並與團隊一起把數據洞察轉化為改善方案。歡迎喜歡拆解問題、細心負責的夥伴加入。'
  },
  {
    id: 'fj-02', company: '日常製造所', name: '品牌行銷企劃', city: '新北市', district: '板橋區', address: '新北市板橋區文化路',
    salary: 'NT$ 35,000–45,000', type: '全職', education: '大學以上', experience: '1 年以上', initial: '日', color: 'orange',
    lat: 25.0136, lng: 121.4637, posted: '1 天前更新', skill: '社群經營、內容企劃',
    description: '規劃品牌社群內容與線上活動，追蹤成效並提出優化方向。工作方式彈性，重視想法交流與跨部門合作。'
  },
  {
    id: 'fj-03', company: '北辰雲端', name: '前端工程師', city: '台中市', district: '西屯區', address: '台中市西屯區臺灣大道',
    salary: 'NT$ 52,000–72,000', type: '全職', education: '大學以上', experience: '2 年以上', initial: '北', color: 'blue',
    lat: 24.1638, lng: 120.6467, posted: '2 天前更新', skill: 'JavaScript、React、CSS',
    description: '與產品設計和後端團隊合作，打造好用、易維護的網頁介面。團隊重視程式品質，也提供每週固定的學習交流時間。'
  },
  {
    id: 'fj-04', company: '好日子生活', name: '營運專員（實習）', city: '高雄市', district: '左營區', address: '高雄市左營區博愛二路',
    salary: 'NT$ 190–220 / 時', type: '實習', education: '在學學生', experience: '經驗不拘', initial: '好', color: 'purple',
    lat: 22.6658, lng: 120.3039, posted: '3 天前更新', skill: '溝通協調、文書處理',
    description: '協助日常營運流程、顧客回饋整理與簡單資料建檔。適合想了解新創團隊運作的在學學生，排班可配合課表調整。'
  }
];

const $ = (selector) => document.querySelector(selector);
const list = $('#job-list');
const keywordInput = $('#keyword');
const citySelect = $('#city');
const emptyState = $('#empty-state');
const favoritesToggle = $('#favorites-toggle');
const saved = new Set(JSON.parse(localStorage.getItem('findjob-demo-favorites') || '[]'));
let favoritesOnly = false;
let selectedId = null;
let toastTimer;

const map = L.map('map', { scrollWheelZoom: false, zoomControl: true, preferCanvas: true });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = new Map();
jobs.forEach((job) => {
  const icon = L.divIcon({
    className: '',
    html: `<div class="custom-pin" data-pin="${job.id}"><span>${job.initial}</span></div>`,
    iconSize: [33, 33],
    iconAnchor: [17, 30],
    popupAnchor: [0, -29]
  });
  const marker = L.marker([job.lat, job.lng], { icon }).addTo(map);
  marker.bindPopup(`<div class="popup-title">${job.name}</div><div class="popup-sub">${job.company}・${job.city}${job.district}</div>`);
  marker.on('click', () => selectJob(job.id, false));
  markers.set(job.id, marker);
});

const allCoordinates = jobs.map((job) => [job.lat, job.lng]);
map.fitBounds(allCoordinates, { padding: [34, 34], maxZoom: 6 });

function filteredJobs() {
  const term = keywordInput.value.trim().toLocaleLowerCase();
  const city = citySelect.value;
  return jobs.filter((job) => {
    const searchText = `${job.name} ${job.company} ${job.skill} ${job.address}`.toLocaleLowerCase();
    const matchesKeyword = !term || searchText.includes(term);
    const matchesCity = city === '全部地區' || job.city === city;
    const matchesFavorite = !favoritesOnly || saved.has(job.id);
    return matchesKeyword && matchesCity && matchesFavorite;
  });
}

function render() {
  const results = filteredJobs();
  list.innerHTML = results.map((job) => `
    <article class="job-card ${selectedId === job.id ? 'selected' : ''}" data-job="${job.id}" tabindex="0" aria-label="${job.name}，${job.company}">
      <div class="company-avatar ${job.color}">${job.initial}</div>
      <div class="job-main">
        <strong class="job-title">${job.name}</strong>
        <span class="company-name">${job.company}</span>
        <div class="job-meta">
          <span class="place">${job.city}・${job.district}</span>
          <span class="kind">${job.type}</span>
          <span>${job.experience}</span>
        </div>
      </div>
      <div class="salary">${job.salary}</div>
      <div class="card-footer">
        <span class="posted">${job.posted}</span>
        <span class="card-actions">
          <button class="detail-button" type="button" data-detail="${job.id}">查看詳情 ↗</button>
          <button class="save-button ${saved.has(job.id) ? 'saved' : ''}" type="button" data-save="${job.id}" aria-label="${saved.has(job.id) ? '取消收藏' : '收藏職缺'}" aria-pressed="${saved.has(job.id)}">${saved.has(job.id) ? '♥' : '♡'}</button>
        </span>
      </div>
    </article>`).join('');

  emptyState.hidden = results.length !== 0;
  list.hidden = results.length === 0;
  $('#result-count').textContent = String(results.length).padStart(2, '0');
  $('#map-count').textContent = String(results.length);
  $('#hero-job-count').textContent = String(results.length).padStart(2, '0');
  $('#favorite-count').textContent = String(saved.size);
  favoritesToggle.setAttribute('aria-pressed', String(favoritesOnly));

  markers.forEach((marker, id) => {
    const visible = results.some((job) => job.id === id);
    if (visible && !map.hasLayer(marker)) marker.addTo(map);
    if (!visible && map.hasLayer(marker)) map.removeLayer(marker);
  });
  if (results.length) {
    const coords = results.map((job) => [job.lat, job.lng]);
    map.fitBounds(coords, { padding: [34, 34], maxZoom: results.length === 1 ? 12 : 6, animate: false });
  }
}

function selectJob(id, openPopup = true) {
  selectedId = id;
  const marker = markers.get(id);
  if (marker && map.hasLayer(marker)) {
    map.panTo(marker.getLatLng(), { animate: true, duration: 0.35 });
    if (openPopup) marker.openPopup();
  }
  render();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
}

function showDetails(id) {
  const job = jobs.find((item) => item.id === id);
  if (!job) return;
  $('#detail-city').textContent = `${job.city}・${job.district}  /  ${job.type}`;
  $('#detail-title').textContent = job.name;
  $('#detail-company').textContent = job.company;
  $('#detail-meta').innerHTML = `<span>${job.salary}</span><span>${job.education}</span><span>${job.experience}</span>`;
  $('#detail-description').textContent = job.description;
  $('#detail-dialog').showModal();
}

list.addEventListener('click', (event) => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (saved.has(id)) saved.delete(id);
    else saved.add(id);
    localStorage.setItem('findjob-demo-favorites', JSON.stringify([...saved]));
    render();
    showToast(saved.has(id) ? '已加入收藏' : '已取消收藏');
    return;
  }
  const detailsButton = event.target.closest('[data-detail]');
  if (detailsButton) {
    showDetails(detailsButton.dataset.detail);
    return;
  }
  const card = event.target.closest('[data-job]');
  if (card) selectJob(card.dataset.job);
});

list.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-job]')) {
    event.preventDefault();
    selectJob(event.target.dataset.job);
  }
});

keywordInput.addEventListener('input', render);
citySelect.addEventListener('change', render);
$('#search-button').addEventListener('click', () => {
  render();
  $('#jobs').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#clear-filters').addEventListener('click', () => {
  keywordInput.value = '';
  citySelect.value = '全部地區';
  favoritesOnly = false;
  render();
});
favoritesToggle.addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;
  render();
});
$('#dialog-close').addEventListener('click', () => $('#detail-dialog').close());
$('#detail-dialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
window.addEventListener('resize', () => map.invalidateSize());

render();
