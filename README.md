# FindJob GitHub Pages 展示版

這是一個可直接放上 GitHub Pages 的靜態展示頁，包含職缺搜尋、地區篩選、收藏、職缺詳情，以及職缺地圖。使用者可授權瀏覽器取得目前位置，再調整 1–100 公里的搜尋半徑；職缺會依直線距離篩選與排序，地圖會標出目前位置及半徑。頁面中的職缺、公司和位置均為模擬資料；收藏只存在瀏覽器的 `localStorage`，不會連接原專案的 PHP 或 MySQL。

定位座標只在目前瀏覽器中進行篩選和排序，不會送到職缺伺服器。地圖底圖使用 OpenStreetMap；載入附近地圖時，OpenStreetMap 會收到相應地圖範圍的圖磚請求。瀏覽器會在使用者按下「使用目前位置」後詢問定位權限。

## 預覽

直接以瀏覽器開啟 `index.html`。地圖底圖使用 OpenStreetMap，Leaflet 與字型由 CDN 載入，因此預覽和使用地圖時需要網路連線。

## 發布到 GitHub Pages

1. 將此資料夾的內容放入 GitHub repository。
2. 在 repository 的 **Settings → Pages** 選擇 **Deploy from a branch**。
3. 選擇 `main` 分支與 `/ (root)`，儲存後等待 GitHub 發布。

免費 GitHub 帳號需使用公開 repository 才能啟用 Pages。此展示頁沒有後端；原本的 PHP／MySQL 登入、資料寫入和收藏功能不會在 Pages 上運作。
