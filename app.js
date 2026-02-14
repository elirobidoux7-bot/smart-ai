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
  if (change > 5) return ["SELL", "High"];
  if (change < -5) return ["BUY", "Medium"];
  return ["HOLD", "Low"];
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

// ===== ANALYZE STOCK (FIXED) =====
function analyze() {
  const symbol = document.getElementById("symbol").value.toUpperCase();
  const shares = document.getElementById("shares").value;

  const found = stocks.find(s => s.symbol === symbol);

  if (!found) {
    alert("Stock not found. Please choose one from the dashboard.");
    return;
  }

  localStorage.setItem("symbol", symbol);
  localStorage.setItem("shares", shares);
  window.location.href = "stock.html";
}

// ===== STOCK PAGE =====
function loadStock() {
  const symbol = localStorage.getItem("symbol");
  const shares = localStorage.getItem("shares");

  const data = stocks.find(s => s.symbol === symbol) || stocks[0];
  const [action, risk] = getAction(data.change);
  const value = (data.price * shares).toFixed(2);

  document.getElementById("title").innerText = symbol + " Analysis";
  document.getElementById("action").innerText = "Action: " + action;
  document.getElementById("risk").innerText = "Risk: " + risk;
  document.getElementById("price").innerText = "Price: $" + data.price;
  document.getElementById("value").innerText = "Total Value: $" + value;
}

