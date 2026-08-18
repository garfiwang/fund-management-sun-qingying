# 專案交接檔 (Handoff) - 程蘭英 (MOM) 基金管理

> 本檔紀錄最新執行狀態與未竟事項。每次收工前更新，開工時先讀。

## 📍 目前做到哪

- [x] **客戶代號 MOM 專案初始化完成**：
  - 客戶 profile: 85 歲，極低風險偏好，本金保全導向，目標超越通膨 (2-3%)。
  - 初始投入總本金: NT$ 2,000,000。
  - 追蹤三檔基金配置：
    1. 元大全球ETF穩健組合基金 40% (NT$ 800,000 / 34,028.07 單位 / 淨值 $23.51)
    2. 安聯四季回報債券組合基金-A類型(累積)-新臺幣 30% (NT$ 600,000 / 35,226.35 單位 / 淨值 $17.0327)
    3. 野村全球高股息基金累積型新台幣 30% (NT$ 600,000 / 13,544.02 單位 / 淨值 $44.3000)
- [x] **系統資料庫與總儀錶板更新**：
  - 更新 `data/accounts.json`, `data/transactions.json`, `data/fund_details_mom.json`, `accounts/mom_portfolio.md`
  - 重構 `index.html` 與 `app.js` 總儀表版（支援 40/30/30 配置圓餅圖、估值柱狀圖、持股卡片與交易紀錄）
- [x] **三層級初始化與 GitHub Pages 發布**：
  - L1 本地藍圖 `AGENTS.md` + `handoff.md`
  - L2 GitHub 提交並 push 至 GitHub Pages
  - L3 Obsidian 筆記於 `/Users/garfiwang/Documents/Obsidian/[Project] 基金管理-程蘭英/專案工作流程.md`

## 🎯 下一步做什麼
1. 定期追蹤三大基金每日最新淨值並連動估值計算。
2. 若有新增配息或交易扣款紀錄，填入 `data/transactions.json`。

---
*最後更新時間：2026-08-18 11:26 | 更新者：Antigravity @ Mac*
