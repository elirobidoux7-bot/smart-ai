
// ===== STOCK DATA (ONLY ONE LIST) =====
const stocks = [
  { symbol: "AAPL", price: 180, change: 3.2 },
  { symbol: "MSFT", price: 320, change: -2.5 },
  { symbol: "GOOGL", price: 130, change: 1.1 },
  { symbol: "NVDA", price: 720, change: 8.4 },
  { symbol: "META", price: 485, change: -1.9 },

  { symbol: "TSLA", price: 250, change: 6.1 },
  { symbol: "RIVN", price: 18, change: -4.6 },
  { symbol: "F", price: 12, change: 2.3 },

  { symbol: "JPM", price: 170, change: 1.7 },
  { symbol: "BAC", price: 34, change: -0.8 },
  { symbol: "V", price: 275, change: 4.2 },

  { symbol: "AMZN", price: 140, change: -6.8 },
  { symbol: "WMT", price: 60, change: 0.9 },
  { symbol: "COST", price: 730, change: 5.6 },

  { symbol: "NFLX", price: 610, change: 2.4 },
  { symbol: "DIS", price: 95, change: -3.2 },

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
  stocks.forEach(stock => {
    const [action, risk] = getAction(stock.change);

    grid.innerHTML += `
      <div class="card">
        <h3>${stock.symbol}</h3>
        <p>Price: $${stock.price}</p>
        <p>Change: ${stock.change}%</p>
        <span class="badge ${action}">${action}</span>
        <p>Risk: ${risk}</p>

        <button class="watch-btn" onclick="addToWatchlist('${stock.symbol}')">
          ⭐ Add to Watchlist
        </button>
      </div>
    `;
  });
}

// ===== FILL DROPDOWN =====
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
    alert("Enter a valid number of shares.");
    return;
  }

  localStorage.setItem("symbol", symbol);
  localStorage.setItem("shares", shares);
  window.location.href = "stock.html";
}

// ===== SEARCH STOCK =====
function searchStock() {
  const query = document.getElementById("search").value.toUpperCase();
  if (!query) return;

  localStorage.setItem("symbol", query);
  localStorage.setItem("shares", 1);
  window.location.href = "stock.html";
}

// ===== WATCHLIST =====
function addToWatchlist(symbol) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (!list.includes(symbol)) {
    list.push(symbol);
    localStorage.setItem("watchlist", JSON.stringify(list));
    alert(symbol + " added to watchlist ⭐");
  } else {
    alert(symbol + " is already in your watchlist");
  }
}


