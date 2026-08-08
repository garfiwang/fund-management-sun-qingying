/**
 * Sun Qingying Fund Management - Account 1 & Account 2 Dashboard Logic
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
        current_balance: 1968336,
        total_deductions: 12550,
        total_dividends: 14692,
        valuation_date: "2026-08-08",
        basic_sum_insured: 2800000,
        life_death_benefit: 2785308,
        start_date: "2026-05-22",
        status: "active",
        holdings: [
          {
            target_name: "BGTPB022柏瑞多重資產特別收益基金-B類型 - (配現金)",
            units: 295073.887267,
            avg_price: 6.7806,
            latest_price: 6.6707,
            cost_amount: 2000778,
            current_valuation: 1968336
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
    total_current_valuation: 2968336,
    total_deductions: 12550,
    total_dividends: 14692,
    last_updated: "2026-08-08T23:30:30+08:00"
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
  ]
};

let appState = {
  accountsData: null,
  transactionsData: null,
  currentFilter: 'all',
  searchQuery: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderSummary();
  renderCharts();
  renderTransactionsTable();
  setupEventListeners();
});

// Load JSON data or fallback
async function loadData() {
  try {
    const [accRes, txRes] = await Promise.all([
      fetch('data/accounts.json'),
      fetch('data/transactions.json')
    ]);
    if (accRes.ok && txRes.ok) {
      appState.accountsData = await accRes.json();
      const txRaw = await txRes.json();
      appState.transactionsData = txRaw.transactions || txRaw;
    } else {
      throw new Error('Data fetch not OK');
    }
  } catch (err) {
    console.log('Using local embedded fallback data...');
    appState.accountsData = fallbackData.accounts;
    appState.transactionsData = fallbackData.transactions;
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
  
  // Calculate Net Profit/Loss (Valuation - Initial + Dividends - Fees)
  // Or Capital Gain/Loss: $1,968,336 - $2,000,000 = -$31,664. With Dividends +14,692 => -$16,972
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

// Render Chart.js Visualizations
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
          backgroundColor: 'rgba(99, 102, 241, 0.7)',
          borderColor: '#6366f1',
          borderWidth: 1.5,
          borderRadius: 6
        },
        {
          label: '目前估值 (TWD)',
          data: [acc1 ? acc1.current_balance : 1968336, acc2 ? acc2.current_balance : 1000000],
          backgroundColor: 'rgba(245, 158, 11, 0.85)',
          borderColor: '#f59e0b',
          borderWidth: 1.5,
          borderRadius: 6
        },
        {
          label: '累積配息 (TWD)',
          data: [acc1 ? acc1.total_dividends : 14692, acc2 ? acc2.total_dividends : 0],
          backgroundColor: 'rgba(16, 185, 129, 0.85)',
          borderColor: '#10b981',
          borderWidth: 1.5,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: $${context.raw.toLocaleString()}`
          }
        }
      },
      scales: {
        x: { ticks: { color: '#cbd5e1' }, grid: { display: false } },
        y: {
          ticks: {
            color: '#94a3b8',
            callback: (val) => '$' + (val / 10000) + '萬'
          },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
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
          'rgba(245, 158, 11, 0.85)',
          'rgba(6, 182, 212, 0.85)'
        ],
        borderColor: '#0b0f19',
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#cbd5e1', padding: 16, font: { family: 'Plus Jakarta Sans', size: 11 } }
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
      <td style="font-weight: 500;">${itemName}</td>
      <td style="color: var(--text-secondary);">${unitsStr}</td>
      <td style="color: var(--text-secondary);">${priceStr}</td>
      <td style="font-weight: 700; color: ${item.type === '配息' ? 'var(--accent-emerald)' : (item.type === '扣款' ? 'var(--accent-rose)' : 'var(--text-primary)')};">
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
