/**
 * Sun Qingying Fund Management - Account 1 & Account 2 Dashboard Logic (Light Minimalist Theme)
 */

// Embed fallback data matching JSON files exactly to ensure offline / file:// preview works flawlessly
const fallbackData = {
  accounts: {
    client: "sun",
    currency: "TWD",
    accounts: [
      {
        account_id: "2318",
        name: "帳戶1",
        initial_amount: 2000000,
        current_balance: 1988355,
        total_deductions: 12550,
        total_dividends: 14692,
        valuation_date: "2026-08-13",
        basic_sum_insured: 2800000,
        life_death_benefit: 2805327,
        start_date: "2026-05-22",
        status: "active",
        holdings: [
          {
            target_name: "BGTPB022柏瑞多重資產特別收益基金-B類型 - (配現金)",
            units: 295073.887267,
            avg_price: 6.7806,
            latest_price: 6.7385,
            cost_amount: 2000778,
            current_valuation: 1988355
          }
        ]
      },
      {
        account_id: "9318",
        name: "帳戶2",
        initial_amount: 1000000,
        current_balance: 1000000,
        total_deductions: 0,
        total_dividends: 0,
        start_date: "2026-06-30",
        status: "active",
        holdings: []
      }
    ],
    total_initial_amount: 3000000,
    total_current_valuation: 2988355,
    total_deductions: 12550,
    total_dividends: 14692,
    last_updated: "2026-08-13T18:00:00+08:00"
  },
  transactions: [
    {
      id: "TX-2318-20260629-01",
      date: "2026-06-29",
      account_id: "2318",
      target_name: "柏瑞多重資產特別收益基金-B類型 - (配現金)",
      currency: "TWD",
      type: "申購",
      units: 295073.887267,
      price: 6.7806,
      total_amount: 2000778
    },
    {
      id: "DIV-2318-20260630-01",
      date: "2026-06-30",
      account_id: "2318",
      target_name: "柏瑞多重資產特別收益基金-B類型 - (配現金)",
      type: "配息",
      payment_method: "銀行轉帳",
      units: 293837.860957,
      price: 0.05,
      total_amount: 14692
    },
    { id: "FEE-2318-20260723-01", date: "2026-07-23", account_id: "2318", type: "扣款", target_name: "保單管理費/行政管理費", units: "-", price: "-", total_amount: 100 },
    { id: "FEE-2318-20260723-02", date: "2026-07-23", account_id: "2318", type: "扣款", target_name: "標的維護費/帳戶管理費", units: "-", price: "-", total_amount: 3974 },
    { id: "FEE-2318-20260723-03", date: "2026-07-23", account_id: "2318", type: "扣款", target_name: "保險成本", units: "-", price: "-", total_amount: 95 },
    { id: "FEE-2318-20260702-01", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "保單管理費/行政管理費", units: "-", price: "-", total_amount: 100 },
    { id: "FEE-2318-20260702-02", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "標的維護費/帳戶管理費", units: "-", price: "-", total_amount: 3991 },
    { id: "FEE-2318-20260702-03", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "保險成本", units: "-", price: "-", total_amount: 95 },
    { id: "FEE-2318-20260702-04", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "保單管理費/行政管理費", units: "-", price: "-", total_amount: 100 },
    { id: "FEE-2318-20260702-05", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "標的維護費/帳戶管理費", units: "-", price: "-", total_amount: 4000 },
    { id: "FEE-2318-20260702-06", date: "2026-07-02", account_id: "2318", type: "扣款", target_name: "保險成本", units: "-", price: "-", total_amount: 95 }
  ],
  fundDetails: {
    fund_code: "BGTPB022",
    fund_name: "柏瑞多重資產特別收益證券投資信託基金 - B類型 - (配現金)",
    subscription_price: 6.7806,
    nav_30_days: [
      { date: "2026/08/13", nav: 6.7385, change: 0.0065 },
      { date: "2026/08/12", nav: 6.7320, change: 0.0040 },
      { date: "2026/08/11", nav: 6.7280, change: 0.0065 },
      { date: "2026/08/10", nav: 6.7215, change: 0.0100 },
      { date: "2026/08/07", nav: 6.7115, change: -0.0015 },
      { date: "2026/08/06", nav: 6.7130, change: 0.0002 },
      { date: "2026/08/05", nav: 6.7128, change: 0.0046 },
      { date: "2026/08/04", nav: 6.7082, change: 0.0139 },
      { date: "2026/08/01", nav: 6.6943, change: -0.0272 },
      { date: "2026/07/31", nav: 6.7215, change: 0.0035 },
      { date: "2026/07/30", nav: 6.7180, change: 0.0090 },
      { date: "2026/07/29", nav: 6.7090, change: -0.0220 },
      { date: "2026/07/28", nav: 6.7310, change: 0.0060 },
      { date: "2026/07/25", nav: 6.7250, change: 0.0040 },
      { date: "2026/07/24", nav: 6.7210, change: -0.0095 },
      { date: "2026/07/23", nav: 6.7305, change: -0.0275 },
      { date: "2026/07/22", nav: 6.7580, change: -0.0042 },
      { date: "2026/07/21", nav: 6.7622, change: 0.0032 },
      { date: "2026/07/18", nav: 6.7590, change: 0.0080 },
      { date: "2026/07/17", nav: 6.7510, change: 0.0030 },
      { date: "2026/07/16", nav: 6.7480, change: -0.0170 },
      { date: "2026/07/15", nav: 6.7650, change: -0.0060 },
      { date: "2026/07/14", nav: 6.7710, change: 0.0020 },
      { date: "2026/07/11", nav: 6.7690, change: -0.0060 },
      { date: "2026/07/10", nav: 6.7750, change: -0.0030 },
      { date: "2026/07/09", nav: 6.7780, change: -0.0026 }
    ],
    yearly_nav_summary: [
      { year: "2024", nav_range: "6.75 - 7.15 元", dividend_note: "月配 NT$ 0.05 / 單位", description: "全球債市受降息預期影響，淨值於 6.75~7.15 區間震盪" },
      { year: "2025", nav_range: "6.65 - 6.95 元", dividend_note: "月配 NT$ 0.05 / 單位", description: "利息持續穩定發放，除息後淨值保持相對穩定" },
      { year: "2026 (至今)", nav_range: "6.67 - 6.79 元", dividend_note: "月配 NT$ 0.05 / 單位", description: "截至 8 月最新報價 6.7385 元 (2026/08/13)，申購價為 6.7806 元 (2026/06/29)" }
    ],
    top_holdings: [
      { rank: 1, name: "柏瑞環球重點股票基金 Y (PineBridge Global Focus Equity Y)", type: "股票型基金", country: "愛爾蘭", weight: "9.23%" },
      { rank: 2, name: "花旗集團 Citigroup (C 0 / C 6.45)", type: "金融特別股/債", country: "美國", weight: "3.26%" },
      { rank: 3, name: "美國銀行 Bank of America (BAC 6.45 K*)", type: "金融特別股/債", country: "美國", weight: "3.21%" },
      { rank: 4, name: "瑞銀集團 UBS 7 3/4 PERP", type: "金融永續債", country: "瑞士", weight: "2.41%" },
      { rank: 5, name: "荷蘭國際集團 ING Group (INTNED 8 PERP)", type: "金融永續債", country: "荷蘭", weight: "2.36%" },
      { rank: 6, name: "加拿大帝國商業銀行 CIBC (CM 7 10/28/2085)", type: "金融長天期債", country: "加拿大", weight: "2.24%" },
      { rank: 7, name: "南方電力 Southern Co (SO 6.5)", type: "公用事業特別債", country: "美國", weight: "2.00%" },
      { rank: 8, name: "福特汽車公司 Ford Motor Co (F 6.5)", type: "企業債券", country: "美國", weight: "1.89%" },
      { rank: 9, name: "聯合能源 Xcel Energy (XEL 6.25)", type: "公用事業特別債", country: "美國", weight: "1.73%" },
      { rank: 10, name: "柱石電力 Dominion Energy (D 7 06/01/54)", type: "公用事業特別債", country: "美國", weight: "1.51%" }
    ],
    regions: [
      { region: "美國 (United States)", flag: "🇺🇸", weight: "62.5%", desc: "主要配置於金融特別股、公用事業債及高收益債" },
      { region: "加拿大 (Canada)", flag: "🇨🇦", weight: "10.2%", desc: "大型銀行金融債與公用事業資產" },
      { region: "歐洲 / 歐元區 (Europe)", flag: "🇪🇺", weight: "13.8%", desc: "包含英國、荷蘭、瑞士、愛爾蘭之系統性銀行永續債" },
      { region: "台灣 / 亞洲其他 (Asia)", flag: "🇹🇼", weight: "4.5%", desc: "具收益吸引力之優質固定收益與特別股" },
      { region: "現金與衍生性商品預備", flag: "💵", weight: "9.0%", desc: "保持流動性與匯率避險操作" }
    ],
    asset_allocation: [
      { category: "固定收益債券 (Bonds)", icon: "fa-shield-halved", weight: "68.5%", desc: "涵蓋美國非投資等級債、投資級永續債與企業債" },
      { category: "特別股 / 優先證券 (Preferreds)", icon: "fa-gem", weight: "24.0%", desc: "股息優先且固定，波動度低於一般普通股" },
      { category: "股票與基金受益憑證 (Equities)", icon: "fa-chart-line", weight: "4.5%", desc: "配置如柏瑞環球重點股票基金，補充長期資本增值" },
      { category: "現金及貨幣市場工具 (Cash)", icon: "fa-coins", weight: "3.0%", desc: "流動性與配息準備資金" }
    ]
  }
};

let appState = {
  accountsData: null,
  transactionsData: null,
  fundDetailsData: null,
  currentFilter: 'all',
  searchQuery: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderSummary();
  renderCharts();
  renderFundResearchSection();
  renderTransactionsTable();
  setupEventListeners();
  setupFundTabListeners();
});

// Load JSON data or fallback
async function loadData() {
  try {
    const [accRes, txRes, fundRes] = await Promise.all([
      fetch('data/accounts.json'),
      fetch('data/transactions.json'),
      fetch('data/fund_details.json')
    ]);
    if (accRes.ok && txRes.ok) {
      appState.accountsData = await accRes.json();
      const txRaw = await txRes.json();
      appState.transactionsData = txRaw.transactions || txRaw;
    } else {
      throw new Error('Data fetch not OK');
    }
    if (fundRes.ok) {
      appState.fundDetailsData = await fundRes.json();
    } else {
      appState.fundDetailsData = fallbackData.fundDetails;
    }
  } catch (err) {
    console.log('Using local embedded fallback data...');
    appState.accountsData = fallbackData.accounts;
    appState.transactionsData = fallbackData.transactions;
    appState.fundDetailsData = fallbackData.fundDetails;
  }
}

// Render Summary KPIs
function renderSummary() {
  const data = appState.accountsData;
  if (!data) return;

  const fmt = (num) => 'NT$ ' + num.toLocaleString();
  
  document.getElementById('totalValuation').textContent = fmt(data.total_current_valuation);
  document.getElementById('totalDividends').textContent = fmt(data.total_dividends);
  document.getElementById('totalDeductions').textContent = fmt(data.total_deductions);
  
  const netIncome = (data.total_current_valuation + data.total_dividends) - data.total_initial_amount;
  const netIncomePct = ((netIncome / data.total_initial_amount) * 100).toFixed(2);

  const netEl = document.getElementById('netIncomeVal');
  const netRateEl = document.getElementById('netIncomeRate');
  
  if (netIncome >= 0) {
    netEl.textContent = '+' + fmt(netIncome);
    netEl.className = 'metric-value text-emerald';
    netRateEl.className = 'metric-sub text-emerald';
    netRateEl.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> +${netIncomePct}% 總含息報酬`;
  } else {
    netEl.textContent = '-' + fmt(Math.abs(netIncome));
    netEl.className = 'metric-value text-rose';
    netRateEl.className = 'metric-sub text-rose';
    netRateEl.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> ${netIncomePct}% 總含息報酬`;
  }

  // Account Card Values
  const acc1 = data.accounts.find(a => a.account_id === '2318');
  const acc2 = data.accounts.find(a => a.account_id === '9318');
  if (acc1) document.getElementById('acc1Valuation').textContent = '$' + acc1.current_balance.toLocaleString();
  if (acc2) document.getElementById('acc2Valuation').textContent = '$' + acc2.current_balance.toLocaleString();
}

// Render Chart.js Visualizations (Light Theme Palette)
function renderCharts() {
  const data = appState.accountsData;
  if (!data) return;

  const acc1 = data.accounts.find(a => a.account_id === '2318');
  const acc2 = data.accounts.find(a => a.account_id === '9318');

  // Chart 1: Dual Account Comparison (Bar)
  const ctxComparison = document.getElementById('comparisonChart').getContext('2d');
  new Chart(ctxComparison, {
    type: 'bar',
    data: {
      labels: ['帳戶 1 (2318)', '帳戶 2 (9318)'],
      datasets: [
        {
          label: '投入本金 (TWD)',
          data: [acc1 ? acc1.initial_amount : 2000000, acc2 ? acc2.initial_amount : 1000000],
          backgroundColor: '#3b82f6',
          borderRadius: 4
        },
        {
          label: '目前估值 (TWD)',
          data: [acc1 ? acc1.current_balance : 1968336, acc2 ? acc2.current_balance : 1000000],
          backgroundColor: '#d97706',
          borderRadius: 4
        },
        {
          label: '累積配息 (TWD)',
          data: [acc1 ? acc1.total_dividends : 14692, acc2 ? acc2.total_dividends : 0],
          backgroundColor: '#059669',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' } }
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: $${context.raw.toLocaleString()}`
          }
        }
      },
      scales: {
        x: { ticks: { color: '#475569', font: { weight: '600' } }, grid: { display: false } },
        y: {
          ticks: {
            color: '#475569',
            callback: (val) => '$' + (val / 10000) + '萬'
          },
          grid: { color: '#f1f5f9' }
        }
      }
    }
  });

  // Chart 2: Asset Allocation (Doughnut)
  const ctxAllocation = document.getElementById('allocationChart').getContext('2d');
  new Chart(ctxAllocation, {
    type: 'doughnut',
    data: {
      labels: ['帳戶 1 - 柏瑞多重資產特別收益基金', '帳戶 2 - 儲備現金'],
      datasets: [{
        data: [acc1 ? acc1.current_balance : 1968336, acc2 ? acc2.current_balance : 1000000],
        backgroundColor: [
          '#d97706',
          '#0284c7'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#334155', padding: 16, font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((context.raw / total) * 100).toFixed(1);
              return `${context.label}: $${context.raw.toLocaleString()} (${pct}%)`;
            }
          }
        }
      },
      cutout: '70%'
    }
  });
}

// Render Transactions & Fees Table
function renderTransactionsTable() {
  const tbody = document.getElementById('txTableBody');
  tbody.innerHTML = '';

  let txList = appState.transactionsData || [];

  // Filter by Type Pill
  if (appState.currentFilter !== 'all') {
    txList = txList.filter(t => t.type === appState.currentFilter);
  }

  // Filter by Search Input
  if (appState.searchQuery.trim() !== '') {
    const q = appState.searchQuery.toLowerCase();
    txList = txList.filter(t => 
      (t.date && t.date.toLowerCase().includes(q)) ||
      (t.target_name && t.target_name.toLowerCase().includes(q)) ||
      (t.item && t.item.toLowerCase().includes(q)) ||
      (t.account_id && t.account_id.toLowerCase().includes(q)) ||
      (t.type && t.type.toLowerCase().includes(q))
    );
  }

  if (txList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">尚無符合條件的交易紀錄</td></tr>`;
    return;
  }

  txList.forEach(item => {
    const tr = document.createElement('tr');
    
    let badgeClass = 'buy';
    if (item.type === '配息') badgeClass = 'dividend';
    if (item.type === '扣款') badgeClass = 'fee';

    const itemName = item.target_name || item.item || item.summary || '費用扣款';
    const unitsStr = typeof item.units === 'number' ? item.units.toLocaleString(undefined, {maximumFractionDigits: 2}) : (item.units || '-');
    const priceStr = typeof item.price === 'number' ? '$' + item.price : (item.dividend_per_unit ? '$' + item.dividend_per_unit : '-');
    const amountVal = item.total_amount || item.amount || 0;

    tr.innerHTML = `
      <td>${item.date || item.record_date || '-'}</td>
      <td><span class="account-tag" style="font-size:0.7rem; padding: 2px 8px;">帳戶 ${item.account_id === '2318' ? '1 (2318)' : '2 (' + item.account_id + ')'}</span></td>
      <td><span class="badge-tx ${badgeClass}">${item.type}</span></td>
      <td style="font-weight: 700;">${itemName}</td>
      <td style="color: var(--text-secondary);">${unitsStr}</td>
      <td style="color: var(--text-secondary);">${priceStr}</td>
      <td style="font-weight: 800; color: ${item.type === '配息' ? 'var(--color-emerald)' : (item.type === '扣款' ? 'var(--color-rose)' : 'var(--text-primary)')};">
        ${item.type === '配息' ? '+' : (item.type === '扣款' ? '-' : '')}$${amountVal.toLocaleString()}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Search Input
  document.getElementById('searchInput').addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderTransactionsTable();
  });

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentFilter = btn.getAttribute('data-filter');
      renderTransactionsTable();
    });
  });
}

// Render Fund Research Section & 30-Day NAV
function renderFundResearchSection() {
  const fund = appState.fundDetailsData;
  if (!fund) return;

  // 1. Render 30-Day NAV Chart
  const nav30Data = fund.nav_30_days || [];
  const labels = nav30Data.map(item => item.date.substring(5)).reverse(); // e.g. "07/09" -> "08/07"
  const navValues = nav30Data.map(item => item.nav).reverse();
  const subPrice = fund.subscription_price || 6.7806;
  const subPriceLine = labels.map(() => subPrice);

  const ctx30 = document.getElementById('nav30Chart');
  if (ctx30) {
    new Chart(ctx30.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: '每日淨值 (TWD)',
            data: navValues,
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.25,
            pointRadius: 3,
            pointBackgroundColor: '#2563eb'
          },
          {
            label: `申購單價基準 ($${subPrice})`,
            data: subPriceLine,
            borderColor: '#d97706',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw} TWD`
            }
          }
        },
        scales: {
          x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { display: false } },
          y: {
            ticks: { color: '#64748b' },
            grid: { color: '#f1f5f9' }
          }
        }
      }
    });
  }

  // 2. Render 30-Day Daily NAV Table
  const navTableBody = document.getElementById('nav30TableBody');
  if (navTableBody) {
    navTableBody.innerHTML = '';
    nav30Data.forEach(item => {
      const tr = document.createElement('tr');
      const diffFromSub = (item.nav - subPrice).toFixed(4);
      const diffClass = item.change > 0 ? 'text-emerald' : (item.change < 0 ? 'text-rose' : 'text-secondary');
      const diffSubClass = diffFromSub >= 0 ? 'text-emerald' : 'text-rose';
      const changeStr = item.change > 0 ? `+${item.change.toFixed(4)}` : `${item.change.toFixed(4)}`;

      tr.innerHTML = `
        <td style="font-weight:600;">${item.date}</td>
        <td style="font-weight:700;">$${item.nav.toFixed(4)}</td>
        <td class="${diffClass}" style="font-weight:600;">${changeStr}</td>
        <td class="${diffSubClass}" style="font-weight:700;">${diffFromSub >= 0 ? '+' : ''}${diffFromSub}</td>
      `;
      navTableBody.appendChild(tr);
    });
  }

  // 3. Render Top 10 Holdings Table
  const holdingsBody = document.getElementById('holdingsTableBody');
  if (holdingsBody && fund.top_holdings) {
    holdingsBody.innerHTML = '';
    fund.top_holdings.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--color-indigo);">${item.rank}</td>
        <td style="font-weight:700;">${item.name}</td>
        <td><span class="badge-tx buy" style="font-size:0.72rem;">${item.type}</span></td>
        <td style="color:var(--text-secondary);">${item.country}</td>
        <td style="font-weight:800; text-align:right; color:var(--text-primary);">${item.weight}</td>
      `;
      holdingsBody.appendChild(tr);
    });
  }

  // 4. Render Region Allocation
  const regionContainer = document.getElementById('regionListContainer');
  if (regionContainer && fund.regions) {
    regionContainer.innerHTML = '';
    fund.regions.forEach(item => {
      const pct = parseFloat(item.weight);
      const div = document.createElement('div');
      div.style.padding = '10px 14px';
      div.style.background = 'var(--bg-subtle)';
      div.style.borderRadius = 'var(--radius-md)';
      div.style.border = '1px solid var(--border-color)';
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
          <span style="font-weight:700;">${item.flag} ${item.region}</span>
          <span style="font-weight:800; color:var(--color-indigo);">${item.weight}</span>
        </div>
        <div class="alloc-bar-bg">
          <div class="alloc-bar-fill" style="width: ${pct}%; background: var(--color-indigo);"></div>
        </div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${item.desc}</div>
      `;
      regionContainer.appendChild(div);
    });
  }

  // 5. Render Asset Class Allocation
  const assetContainer = document.getElementById('assetClassContainer');
  if (assetContainer && fund.asset_allocation) {
    assetContainer.innerHTML = '';
    fund.asset_allocation.forEach(item => {
      const pct = parseFloat(item.weight);
      const div = document.createElement('div');
      div.style.padding = '10px 14px';
      div.style.background = 'var(--bg-subtle)';
      div.style.borderRadius = 'var(--radius-md)';
      div.style.border = '1px solid var(--border-color)';
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
          <span style="font-weight:700;"><i class="fa-solid ${item.icon}" style="color:var(--color-gold); margin-right:6px;"></i>${item.category}</span>
          <span style="font-weight:800; color:var(--color-gold);">${item.weight}</span>
        </div>
        <div class="alloc-bar-bg">
          <div class="alloc-bar-fill" style="width: ${pct}%; background: var(--color-gold);"></div>
        </div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${item.desc}</div>
      `;
      assetContainer.appendChild(div);
    });
  }

  // 6. Render 2024-2026 Yearly Summary Table
  const historyBody = document.getElementById('historyTableBody');
  if (historyBody && fund.yearly_nav_summary) {
    historyBody.innerHTML = '';
    fund.yearly_nav_summary.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:800; color:var(--color-indigo);">${item.year}</td>
        <td style="font-weight:700;">${item.nav_range}</td>
        <td><span class="badge-tx dividend" style="font-size:0.72rem;">${item.dividend_note}</span></td>
        <td style="color:var(--text-secondary); font-size:0.83rem;">${item.description}</td>
      `;
      historyBody.appendChild(tr);
    });
  }
}

// Setup Fund Section Tab Switching
function setupFundTabListeners() {
  const tabBtns = document.querySelectorAll('.fund-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.fund-tab-content').forEach(content => {
        content.classList.remove('active');
      });

      if (targetTab === 'nav30') document.getElementById('fundTabNav30').classList.add('active');
      if (targetTab === 'holdings') document.getElementById('fundTabHoldings').classList.add('active');
      if (targetTab === 'allocation') document.getElementById('fundTabAllocation').classList.add('active');
      if (targetTab === 'history') document.getElementById('fundTabHistory').classList.add('active');
    });
  });
}

