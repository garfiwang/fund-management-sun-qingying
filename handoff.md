# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
1. **基金申購**：已記錄帳戶 1 (2318) 申購「柏瑞多重資產特別收益基金-B類型 - (配現金)」（NT$ 2,000,778）。
2. **基金配息**：已記錄帳戶 1 (2318) 配息基準日 2026/06/30 之現金配息 **NT$ 14,692**（單位數 293,837.860957 * $0.05/單位，銀行轉帳）。
3. **扣款費用記錄**：已成功記錄帳戶 1 (2318) 的 9 筆保單/帳戶扣款費用明細（2026/07/02 與 2026/07/23），扣款總金額小計 **NT$ 12,550**。
4. **最新估值紀錄**：已更新帳戶 1 (2318) 於 2026/08/08 的最新保單帳戶價值總額為 **NT$ 1,968,336**（基本保額 $2,800,000，身故保險金 $2,785,308）。
5. **雙帳戶總儀錶板 Web App**：已將主題更新為**淺色簡約風格 (Light Minimalist Theme)**，去除冗餘動畫與玻璃特效，以高對比顏色（綠/紅/金/藍）與粗體字強調重點數據與指標。
6. **全 7 檔精選基金標的獨立研究頁面全數發布**：新增「野村全球金融收益基金」(`nomura_financial_income_research.html`)、「野村環球時機多重資產基金」(`nomura_multi_opp_research.html`)、「東方匯理實質收息多重資產基金」(`amundi_real_income_research.html`)與「元大全球不動產證券化基金」(`yuanta_reits_research.html`)獨立研究頁面，全網站已有 7 檔基金獨立研究頁面並完成 GitHub Pages 自動化發布！

## 🚦 目前狀態
- 客戶 sun 的 `accounts/sun_portfolio.md` 已補齊保單詳細資訊、估值、配息與扣款費用
- 所有 7 檔基金 JSON 資料集 (`fund_details.json`, `allianz_details.json`, `ctbc_details.json`, `amundi_details.json`, `yuanta_reits_details.json`, `nomura_multi_details.json`, `nomura_fin_details.json`) 已與網頁全數連動
- 儲存庫為 Public，GitHub Pages 已部署 8 個獨立網頁頁面並可公開訪問

## ➡️ 下一步
1. 繼續接收使用者輸入的後續操作記錄（帳戶 1 或 帳戶 2）
2. 補充帳戶 3 之詳細資訊（若提供）

## ⚠️ 注意事項
- 本專案位於 Google 雲端硬碟，請確保 Google 雲端硬碟桌面版的同步圖示已打勾。
- GitHub Pages 主儀錶板：`https://garfiwang.github.io/fund-management-sun-qingying/`
- 👑 野村金融收益研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/nomura_financial_income_research.html`
- 柏瑞特別收益研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/fund_research.html`
- 安聯收益成長研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/allianz_growth_research.html`
- 野村環球時機研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/nomura_multi_opp_research.html`
- 東方匯理實質收息研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/amundi_real_income_research.html`
- 元大全球不動產研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/yuanta_reits_research.html`
- 中信科技趨勢研究頁：`https://garfiwang.github.io/fund-management-sun-qingying/ctbc_tech_research.html`

## 🕐 最後更新
- 時間：2026-08-09 09:09
- 更新者：Antigravity @ M3-Air---garfiwang-3
- 最新進度：已成功完成第二批 4 檔基金之深度財經數據檢索、建置獨立研究儀錶板並發布至 GitHub Pages，總計已上線 7 檔基金。
- Git push：✅ 已推 (`main` & `gh-pages`)
