const stocks = [
  { symbol: "AAPL", price: 180, change: 3.2 },
  { symbol: "MSFT", price: 320, change: -2.5 },
  { symbol: "TSLA", price: 250, change: 6.1 },
  { symbol: "AMZN", price: 140, change: -6.8 },
  { symbol: "GOOGL", price: 130, change: 1.1 }
];

function getAction(change) {
  if (change > 5) return ["SELL", "High"];
  if (change < -5) return ["BUY", "Medium"];
  return ["HOLD", "Low"];
}

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
      </div>`;
  });
}

function analyze() {
  localStorage.setItem("symbol", document.getElementById("symbol").value.toUpperCase());
  localStorage.setItem("shares", document.getElementById("shares").value);
  window.location.href = "stock.html";
}

function loadStock() {
  const symbol = localStorage.getItem("symbol");
  const shares = localStorage.getItem("shares");

  const data = stocks[Math.floor(Math.random() * stocks.length)];
  const [action, risk] = getAction(data.change);
  const value = (data.price * shares).toFixed(2);

  document.getElementById("title").innerText = symbol + " Analysis";
  document.getElementById("action").innerText = "Action: " + action;
  document.getElementById("risk").innerText = "Risk: " + risk;
  document.getElementById("price").innerText = "Price: $" + data.price;
  document.getElementById("value").innerText = "Total Value: $" + value;
}
