# FindJob GitHub Pages 展示版

這是一個可直接放上 GitHub Pages 的靜態展示頁，包含 12 筆資料科學相關模擬職缺，以及職缺搜尋、地區篩選、收藏、職缺詳情和地圖。職稱涵蓋資料科學、資料分析、資料工程、機器學習、NLP、電腦視覺、推薦系統與 MLOps。使用者可授權瀏覽器取得目前位置，或直接在地圖點選搜尋中心，再調整 1–100 公里的搜尋半徑；職缺會依直線距離篩選與排序，地圖會標出搜尋中心及半徑。職缺、公司和地圖座標皆為模擬內容；收藏只存在瀏覽器的 `localStorage`，不會連接原專案的 PHP 或 MySQL。

定位座標只在目前瀏覽器中進行篩選和排序，不會送到職缺伺服器。地圖底圖使用 OpenStreetMap；載入附近地圖時，OpenStreetMap 會收到相應地圖範圍的圖磚請求。瀏覽器會在使用者按下「使用目前位置」後詢問定位權限；也可以選擇「在地圖選中心」並點選地圖，手動設定搜尋中心。

## 預覽

直接以瀏覽器開啟 `index.html`。地圖底圖使用 OpenStreetMap，Leaflet 與字型由 CDN 載入，因此預覽和使用地圖時需要網路連線。

## 發布到 GitHub Pages

1. 將此資料夾的內容放入 GitHub repository。
2. 在 repository 的 **Settings → Pages** 選擇 **Deploy from a branch**。
3. 選擇 `main` 分支與 `/ (root)`，儲存後等待 GitHub 發布。

免費 GitHub 帳號需使用公開 repository 才能啟用 Pages。此展示頁沒有後端；原本的 PHP／MySQL 登入、資料寫入和收藏功能不會在 Pages 上運作。
