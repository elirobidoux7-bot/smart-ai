// ===== STOCK DATA (ONLY ONE LIST) =====
const stocks = [
  // Tech
  { symbol: "AAPL", price: 180, change: 3.2 },
  { symbol: "MSFT", price: 320, change: -2.5 },
  { symbol: "GOOGL", price: 130, change: 1.1 },
  { symbol: "NVDA", price: 720, change: 8.4 },
  { symbol: "META", price: 485, change: -1.9 },

  // EV & Auto
  { symbol: "TSLA", price: 250, change: 6.1 },
  { symbol: "RIVN", price: 18, change: -4.6 },
  { symbol: "F", price: 12, change: 2.3 },

  // Finance
  { symbol: "JPM", price: 170, change: 1.7 },
  { symbol: "BAC", price: 34, change: -0.8 },
  { symbol: "V", price: 275, change: 4.2 },

  // Retail & Consumer
  { symbol: "AMZN", price: 140, change: -6.8 },
  { symbol: "WMT", price: 60, change: 0.9 },
  { symbol: "COST", price: 730, change: 5.6 },

  // Entertainment
  { symbol: "NFLX", price: 610, change: 2.4 },
  { symbol: "DIS", price: 95, change: -3.2 },

  // Crypto-style stocks
  { symbol: "COIN", price: 210, change: 7.9 },
  { symbol: "MSTR", price: 1550, change: 9.2 }
];

// ===== AI LOGIC =====
function getAction(change) {
  if (change > 6) return ["SELL", "High", "Strong upward movement"];
  if (change < -6) return ["BUY", "Medium", "Strong downward movement"];
  return ["HOLD", "Low", "Stable movement"];
}

// ===== DASHBOARD RENDER =====
const grid = document.getElementById("stocks");

if (grid) {
  stocks.forEach(s => {
    const [action, risk] = getAction(s.change);
    grid.innerHTML += `
      <div class="card">
        <h3>${s.symbol}</h3>
        <p>Price: $${s.price}</p>
        <p>Change: ${s.change}%</p>
        <span class="badge ${action}">${action}</span>
        <p>Risk: ${risk}</p>
      </div>
    `;
  });
}

// ===== FILL DROPDOWN AUTOMATICALLY =====
const select = document.getElementById("symbol");
if (select) {
  stocks.forEach(stock => {
    const option = document.createElement("option");
    option.value = stock.symbol;
    option.textContent = stock.symbol;
    select.appendChild(option);
  });
}

// ===== ANALYZE STOCK =====
function analyze() {
  const symbol = document.getElementById("symbol").value;
  const shares = Number(document.getElementById("shares").value);

  if (!symbol) {
    alert("Please select a stock.");
    return;
  }

  if (!shares || shares <= 0) {
    alert("Please enter a valid number of shares.");
    return;
  }

  localStorage.setItem("symbol", symbol);
  localStorage.setItem("shares", shares);
  window.location.href = "stock.html";
}

// ===== STOCK PAGE =====
function loadStock() {
  const symbol = localStorage.getItem("symbol");
  const shares = Number(localStorage.getItem("shares"));

  const data = stocks.find(s => s.symbol === symbol) || stocks[0];
  const [action, risk, reason] = getAction(data.change);
  const value = (data.price * shares).toFixed(2);

  document.getElementById("title").innerText = `${symbol} Analysis`;
  document.getElementById("action").innerText = `Action: ${action}`;
  document.getElementById("risk").innerText = `Risk: ${risk}`;
  document.getElementById("price").innerText = `Price: $${data.price}`;
  document.getElementById("value").innerText = `Total Value: $${value}`;
  document.getElementById("reason").innerText = `AI Insight: ${reason}`;
}
function searchStock() {
  const query = document.getElementById("search").value.toUpperCase();
  if (!query) return;

  const fakeStock = {
    symbol: query,
    price: (Math.random() * 500 + 10).toFixed(2),
    change: (Math.random() * 10 - 5).toFixed(2)
  };

  localStorage.setItem("symbol", fakeStock.symbol);
  localStorage.setItem("shares", 1);
  window.location.href = "stock.html";
}


