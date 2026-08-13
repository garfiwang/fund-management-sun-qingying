# 孫晴盈-基金管理（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
孫晴盈 - 基金管理專案。負責客戶理財帳戶管理、資產配置記錄、操作明細追蹤與績效報告生成。

## 關鍵時程


## 目標與路線圖
- [x] 階段一：專案需求確認與基礎建置 (L1, L2, L3 已建立)
- [/] 階段二：基金管理系統功能開發與客戶資料記錄
  - [x] 客戶 sun 帳戶基礎資料庫與追蹤日誌建置
  - [x] 記錄並計算帳戶 1 (2318) & 帳戶 2 (9318) 操作明細與即時績效
  - [x] 雙帳戶綜合理財儀錶板與 GitHub Pages 發布網頁建置 (含基金 30天淨值與持股研究)
  - [x] 中國地產國企 4 檔基金投資紀錄整理、Markdown 研究報告與雙子分頁 Web App 重構
  - [ ] 補充帳戶 3 詳細資料

## 資料夾結構
```
[Project] 孫晴盈-基金管理/
├── .gitignore
├── AGENTS.md
├── handoff.md
├── index.html
├── featured_funds.html
├── china_property_soe_research.html
├── nomura_financial_income_research.html
├── fund_research.html
├── allianz_growth_research.html
├── nomura_multi_opp_research.html
├── amundi_real_income_research.html
├── yuanta_reits_research.html
├── ctbc_tech_research.html
├── 三大基金投資研究報告.md
├── 四檔新基金投資研究報告.md
├── 四檔中國地產國企新基金投資研究報告.md
├── styles.css
├── app.js
├── accounts/
│   └── sun_portfolio.md
└── data/
    ├── accounts.json
    ├── fund_details.json
    ├── hsbc_china_details.json
    ├── fidelity_china_details.json
    ├── fuhhwa_infra_details.json
    ├── jpmorgan_china_details.json
    └── transactions.json
```

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地（GDrive） | `AGENTS.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | garfiwang/fund-management-sun-qingying | 指定時 |
| L3 | Obsidian | `[Project] 孫晴盈-基金管理/專案工作流程.md` | 有需要時 |

## 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文
- 修改前先確認計畫，優先保留原有資料結構
