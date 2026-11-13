# 孫晴盈-基金管理（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
孫晴盈 - 基金管理專案。負責客戶理財帳戶管理、資產配置記錄、操作明細追蹤與績效報告生成。

## 關鍵時程


## 目標與路線圖
- [x] 階段一：專案需求確認與基礎建置 (L1, L2, L3 已建立)
- [/] 階段二：基金管理系統功能開發與客戶資料記錄
  - [x] 客戶 sun 帳戶基礎資料庫與追蹤日誌建置
  - [x] 記錄並計算帳戶 1 (2318) & 帳戶 2 (9318) 操作明細、扣款費用與即時績效
  - [x] 雙帳戶綜合理理財儀錶板與 GitHub Pages 發布網頁建置 (含基金 30天淨值與持股研究)
  - [x] 依使用者需求全數移除中國地產國企基金追蹤、資料集與連結
  - [x] 精選 8 檔關注基金最新淨值動態追蹤與帳戶估值連動 (新增富蘭克林華美多重資產收益基金)
  - [x] 補充建置帳戶 3 (6318) 詳細資料、保單資訊、持股配置與扣款明細
  - [x] 三大帳戶綜合財務儀錶板、資產配置圓餅圖與交易紀錄連動更新
  - [x] 三大帳戶（2318、9318、6318）最新官方對帳單數據、配息與扣款明細全面精確校對與同步更新
  - [x] 帳戶 2 (9318) 操作觸發準則確立：等待柏瑞特別收益淨值負差異小於 3%（淨值 >= 6.4407 元）再啟動轉換
  - [x] 帳戶 3 (6318) 再平衡決策更新定案：等待東方匯理損益兩平（淨值 >= 9.8900 元 / 含息 9.8324 元）即執行 80% 東方匯理 + 10% 台灣50 + 10% 富蘭克林華美多重資產（RR3 平衡型取代原中信科技）
  - [x] 收錄最新一週國際重大財經情報（原油 $115、10年期美債拉回至 5.0%、Big Tech Capex 質疑）並建置決策連動基準
  - [x] 全數 8 檔基金最新淨值（2026/10/29~30）追蹤更新與三大帳戶即時估值連動（帳戶 2 距轉換觸發點僅差 1.08%）
  - [x] 確立三大帳戶前瞻佈局計劃與動態決策作戰手冊（帳戶1中信科技12.10換出富蘭克林華美RR3、帳戶2達標6.4407啟動轉換、帳戶3兩平9.8900執行80/10/10，確立全帳戶終極80/10/10鋼鐵防線）
  - [x] 依 2026/11/12 官方最新對帳單截圖完成三大帳戶估值與最新基金淨值全面同步（柏瑞回升至 6.4210 距轉換僅差 0.02 元、東方匯理 9.7800 含息翻紅達 +0.06%）
  - [ ] 監控帳戶 1、帳戶 2 與帳戶 3 淨值觸發條件並於達標時執行線上保單轉換與數據同步

## 資料夾結構
```
[Project] 孫晴盈-基金管理/
├── .gitignore
├── AGENTS.md
├── handoff.md
├── index.html
├── featured_funds.html
├── nomura_financial_income_research.html
├── fund_research.html
├── allianz_growth_research.html
├── nomura_multi_opp_research.html
├── amundi_real_income_research.html
├── yuanta_reits_research.html
├── ctbc_tech_research.html
├── ftft_multi_asset_research.html
├── ftft_multi_asset_research.js
├── 三大基金投資研究報告.md
├── 四檔新基金投資研究報告.md
├── styles.css
├── app.js
├── accounts/
│   └── sun_portfolio.md
└── data/
    ├── accounts.json
    ├── fund_details.json
    ├── allianz_details.json
    ├── amundi_details.json
    ├── ctbc_details.json
    ├── nomura_fin_details.json
    ├── nomura_multi_details.json
    ├── yuanta_reits_details.json
    ├── ftft_multi_details.json
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
