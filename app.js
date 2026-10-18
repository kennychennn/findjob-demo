const jobs = [
  {
    id: 'ds-01', company: '森野數據實驗室', name: '資料科學家', city: '台北市', district: '信義區', address: '台北市信義區松仁路',
    salary: 'NT$ 85,000–120,000', type: '全職', education: '碩士以上', experience: '3 年以上', initial: '森', color: '',
    lat: 25.0330, lng: 121.5654, posted: '今天更新', skill: 'Python、SQL、統計建模、A/B 測試',
    description: '運用統計方法與機器學習分析產品及營運資料，設計實驗並把分析結果整理成可執行的產品建議。'
  },
  {
    id: 'ds-02', company: '晴川數據科技', name: '資料分析師', city: '台北市', district: '中山區', address: '台北市中山區南京東路',
    salary: 'NT$ 55,000–78,000', type: '全職', education: '大學以上', experience: '1 年以上', initial: '晴', color: 'orange',
    lat: 25.0628, lng: 121.5330, posted: '1 天前更新', skill: 'Python、SQL、Power BI、資料視覺化',
    description: '整合多來源資料、建立營運指標與互動式儀表板，和產品及營運團隊合作提出可驗證的改善假設。'
  },
  {
    id: 'ds-03', company: '微光智能', name: '機器學習工程師', city: '新北市', district: '板橋區', address: '新北市板橋區縣民大道',
    salary: 'NT$ 80,000–115,000', type: '全職', education: '碩士以上', experience: '2 年以上', initial: '微', color: 'blue',
    lat: 25.0113, lng: 121.4619, posted: '今天更新', skill: 'Python、PyTorch、模型部署、特徵工程',
    description: '開發與維護預測模型，和資料工程師合作建立訓練流程，並追蹤模型上線後的品質與效能。'
  },
  {
    id: 'ds-04', company: '雲杉資料平台', name: '資料工程師', city: '台北市', district: '內湖區', address: '台北市內湖區瑞光路',
    salary: 'NT$ 72,000–105,000', type: '全職', education: '大學以上', experience: '2 年以上', initial: '雲', color: 'purple',
    lat: 25.0697, lng: 121.5881, posted: '2 天前更新', skill: 'SQL、Spark、Airflow、dbt、資料倉儲',
    description: '建置可靠的批次與串流資料管線，維護資料倉儲和資料品質檢查，支援分析與模型團隊的日常需求。'
  },
  {
    id: 'ds-05', company: '方格商業分析', name: '商業智慧分析師', city: '桃園市', district: '中壢區', address: '桃園市中壢區高鐵站前西路',
    salary: 'NT$ 55,000–76,000', type: '全職', education: '大學以上', experience: '1 年以上', initial: '方', color: '',
    lat: 24.9538, lng: 121.2255, posted: '3 天前更新', skill: 'SQL、Tableau、Power BI、指標設計',
    description: '將跨部門需求轉化為資料指標與報表，分析營運趨勢，並協助團隊建立一致的數據決策流程。'
  },
  {
    id: 'ds-06', company: '青禾語言智能', name: '自然語言處理工程師', city: '新竹市', district: '東區', address: '新竹市東區光復路',
    salary: 'NT$ 88,000–125,000', type: '全職', education: '碩士以上', experience: '2 年以上', initial: '青', color: 'blue',
    lat: 24.8016, lng: 120.9714, posted: '今天更新', skill: 'Python、Transformers、LLM 評估、向量搜尋',
    description: '研究並實作繁體中文文字模型應用，建立模型評估資料集，和產品團隊迭代檢索及生成流程。'
  },
  {
    id: 'ds-07', company: '山線視覺運算', name: '電腦視覺工程師', city: '台中市', district: '西屯區', address: '台中市西屯區臺灣大道',
    salary: 'NT$ 78,000–112,000', type: '全職', education: '碩士以上', experience: '2 年以上', initial: '山', color: 'orange',
    lat: 24.1638, lng: 120.6467, posted: '4 天前更新', skill: 'Python、OpenCV、PyTorch、影像辨識',
    description: '開發影像分類與物件偵測模型，整理訓練資料及實驗結果，協助模型在實際場域穩定運行。'
  },
  {
    id: 'ds-08', company: '拾光推薦系統', name: '推薦系統資料科學家', city: '台北市', district: '南港區', address: '台北市南港區經貿二路',
    salary: 'NT$ 90,000–130,000', type: '全職', education: '碩士以上', experience: '3 年以上', initial: '拾', color: 'purple',
    lat: 25.0541, lng: 121.6068, posted: '1 天前更新', skill: '推薦系統、排序模型、Python、因果推論',
    description: '設計候選生成與排序模型，透過線上實驗評估推薦品質，持續改善使用者與內容的配對效果。'
  },
  {
    id: 'ds-09', company: '南方資料工坊', name: 'Analytics Engineer', city: '台南市', district: '東區', address: '台南市東區長榮路',
    salary: 'NT$ 65,000–92,000', type: '全職', education: '大學以上', experience: '2 年以上', initial: '南', color: '',
    lat: 22.9931, lng: 120.2330, posted: '5 天前更新', skill: 'SQL、dbt、BigQuery、資料建模',
    description: '整理分析用資料模型與文件，改善資料測試和版本管理，讓團隊能使用一致且可信賴的數據。'
  },
  {
    id: 'ds-10', company: '雲脈模型服務', name: 'MLOps 工程師', city: '新竹市', district: '東區', address: '新竹市東區慈雲路',
    salary: 'NT$ 88,000–125,000', type: '全職', education: '大學以上', experience: '3 年以上', initial: '雲', color: 'blue',
    lat: 24.7867, lng: 121.0060, posted: '2 天前更新', skill: 'Docker、Kubernetes、MLflow、CI/CD',
    description: '打造模型訓練、部署與監控工具，協助資料科學團隊縮短實驗到上線的交付週期。'
  },
  {
    id: 'ds-11', company: '迴聲產品研究', name: '產品數據分析師', city: '新北市', district: '新店區', address: '新北市新店區北新路',
    salary: 'NT$ 58,000–82,000', type: '全職', education: '大學以上', experience: '1 年以上', initial: '迴', color: 'orange',
    lat: 24.9678, lng: 121.5415, posted: '今天更新', skill: 'SQL、Python、漏斗分析、實驗設計',
    description: '分析產品使用行為與轉換流程，規劃實驗並與產品經理合作，將分析結果轉成產品改善方向。'
  },
  {
    id: 'ds-12', company: '港灣智慧研究', name: '統計建模工程師', city: '高雄市', district: '前鎮區', address: '高雄市前鎮區成功二路',
    salary: 'NT$ 68,000–98,000', type: '全職', education: '碩士以上', experience: '2 年以上', initial: '港', color: 'purple',
    lat: 22.6066, lng: 120.3039, posted: '6 天前更新', skill: 'R、Python、時間序列、貝氏統計',
    description: '建立時間序列與統計預測模型，整理模型假設及驗證結果，和領域團隊共同評估模型的實用性。'
  }
];

const $ = (selector) => document.querySelector(selector);
const list = $('#job-list');
const keywordInput = $('#keyword');
const citySelect = $('#city');
const emptyState = $('#empty-state');
const favoritesToggle = $('#favorites-toggle');
const saved = new Set(JSON.parse(localStorage.getItem('findjob-demo-favorites') || '[]').filter((id) => jobs.some((job) => job.id === id)));
localStorage.setItem('findjob-demo-favorites', JSON.stringify([...saved]));
let favoritesOnly = false;
let selectedId = null;
let toastTimer;
let userLocation = null;
let searchRadiusKm = 20;
let userMarker = null;
let radiusCircle = null;
let manualSelectionEnabled = false;

const locateButton = $('#locate-button');
const radiusRange = $('#radius-range');
const radiusValue = $('#radius-value');
const locationStatus = $('#location-status');
const clearLocationButton = $('#clear-location');
const manualLocationButton = $('#manual-location');

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
  const results = jobs.filter((job) => {
    const searchText = `${job.name} ${job.company} ${job.skill} ${job.address}`.toLocaleLowerCase();
    const matchesKeyword = !term || searchText.includes(term);
    const matchesCity = city === '全部地區' || job.city === city;
    const matchesFavorite = !favoritesOnly || saved.has(job.id);
    const distance = userLocation ? distanceInKm(userLocation, job) : null;
    const matchesRadius = !userLocation || distance <= searchRadiusKm;
    return matchesKeyword && matchesCity && matchesFavorite && matchesRadius;
  });
  if (userLocation) results.sort((a, b) => distanceInKm(userLocation, a) - distanceInKm(userLocation, b));
  return results;
}

function distanceInKm(origin, destination) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const latDelta = radians(destination.lat - origin.lat);
  const lngDelta = radians(destination.lng - origin.lng);
  const a = Math.sin(latDelta / 2) ** 2
    + Math.cos(radians(origin.lat)) * Math.cos(radians(destination.lat)) * Math.sin(lngDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(distance) {
  return distance < 10 ? `${distance.toFixed(1)} 公里` : `${Math.round(distance)} 公里`;
}

function updateLocationLayers() {
  if (!userLocation) return;
  if (radiusCircle) {
    radiusCircle.setLatLng([userLocation.lat, userLocation.lng]);
    radiusCircle.setRadius(searchRadiusKm * 1000);
  }
  else {
    radiusCircle = L.circle([userLocation.lat, userLocation.lng], {
      radius: searchRadiusKm * 1000,
      color: '#52775e',
      weight: 1.5,
      fillColor: '#a9c69c',
      fillOpacity: 0.16
    }).addTo(map);
  }
  if (!userMarker) {
    userMarker = L.circleMarker([userLocation.lat, userLocation.lng], {
      radius: 8,
      color: '#fff',
      weight: 3,
      fillColor: '#315f4b',
      fillOpacity: 1
    }).bindPopup('目前搜尋中心').addTo(map);
  } else userMarker.setLatLng([userLocation.lat, userLocation.lng]);
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
          ${userLocation ? `<span class="distance-badge">${formatDistance(distanceInKm(userLocation, job))}</span>` : ''}
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
  $('#map-hint').textContent = userLocation ? `距離 ${searchRadiusKm} 公里內` : '選擇標記查看職缺';

  markers.forEach((marker, id) => {
    const visible = results.some((job) => job.id === id);
    if (visible && !map.hasLayer(marker)) marker.addTo(map);
    if (!visible && map.hasLayer(marker)) map.removeLayer(marker);
  });
  if (results.length) {
    const coords = results.map((job) => [job.lat, job.lng]);
    if (userLocation) coords.push([userLocation.lat, userLocation.lng]);
    map.fitBounds(coords, { padding: [34, 34], maxZoom: results.length === 1 ? 12 : 6, animate: false });
  } else if (userLocation) {
    map.setView([userLocation.lat, userLocation.lng], 12, { animate: false });
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
function setSearchLocation(latitude, longitude, message) {
  userLocation = { lat: Number(latitude), lng: Number(longitude) };
  manualSelectionEnabled = false;
  manualLocationButton.setAttribute('aria-pressed', 'false');
  radiusRange.disabled = false;
  clearLocationButton.hidden = false;
  updateLocationLayers();
  locationStatus.textContent = message;
  map.setView([userLocation.lat, userLocation.lng], 12, { animate: true });
  render();
}

locateButton.addEventListener('click', () => {
  manualSelectionEnabled = false;
  manualLocationButton.setAttribute('aria-pressed', 'false');
  if (!navigator.geolocation) {
    locationStatus.textContent = '目前瀏覽器不支援定位功能。';
    showToast('瀏覽器不支援定位功能');
    return;
  }
  locateButton.disabled = true;
  locationStatus.textContent = '正在取得目前位置…';
  navigator.geolocation.getCurrentPosition((position) => {
    locateButton.disabled = false;
    locateButton.querySelector('span').textContent = '更新目前位置';
    setSearchLocation(position.coords.latitude, position.coords.longitude, '已取得位置；座標只在本機比對，職缺依直線距離排序。');
    showToast('已取得位置，正在搜尋附近職缺');
  }, (error) => {
    locateButton.disabled = false;
    const message = error.code === 1
      ? '定位權限未開啟；請在瀏覽器允許此網站使用位置，或改用地圖選擇中心。'
      : error.code === 3
        ? '取得位置逾時，請確認定位服務後再試一次，或改用地圖選擇中心。'
        : '目前無法取得位置，請稍後再試或改用地圖選擇中心。';
    locationStatus.textContent = message;
    showToast(message);
  }, { enableHighAccuracy: false, timeout: 12000, maximumAge: 60000 });
});

manualLocationButton.addEventListener('click', () => {
  manualSelectionEnabled = !manualSelectionEnabled;
  manualLocationButton.setAttribute('aria-pressed', String(manualSelectionEnabled));
  locationStatus.textContent = manualSelectionEnabled
    ? '請在地圖上點選搜尋中心；位置只會在此瀏覽器比對。'
    : '已取消地圖選擇。';
});

map.on('click', (event) => {
  if (!manualSelectionEnabled) return;
  locateButton.querySelector('span').textContent = '使用目前位置';
  setSearchLocation(event.latlng.lat, event.latlng.lng, '已使用地圖上的位置作為搜尋中心。');
  showToast('已設定搜尋中心');
});

radiusRange.addEventListener('input', () => {
  searchRadiusKm = Number(radiusRange.value);
  radiusValue.textContent = `${searchRadiusKm} 公里`;
  if (userLocation) {
    updateLocationLayers();
    locationStatus.textContent = `顯示搜尋中心 ${searchRadiusKm} 公里內的模擬職缺。`;
    render();
  }
});
clearLocationButton.addEventListener('click', () => {
  userLocation = null;
  manualSelectionEnabled = false;
  manualLocationButton.setAttribute('aria-pressed', 'false');
  radiusRange.disabled = true;
  clearLocationButton.hidden = true;
  locateButton.querySelector('span').textContent = '使用目前位置';
  locationStatus.textContent = '已關閉附近搜尋；可重新定位或在地圖選擇中心。';
  if (userMarker) map.removeLayer(userMarker);
  if (radiusCircle) map.removeLayer(radiusCircle);
  userMarker = null;
  radiusCircle = null;
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
