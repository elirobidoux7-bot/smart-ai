<div id="nav"></div>
<script>
fetch("nav.html").then(r => r.text()).then(d => {
  document.getElementById("nav").innerHTML = d;
});
</script>

<div id="nav"></div>
<script>
fetch("nav.html").then(r => r.text()).then(d => {
  document.getElementById("nav").innerHTML = d;
});
</script>

function savePortfolio(symbol, shares) {
  localStorage.setItem(
    "portfolio",
    JSON.stringify({ symbol, shares })
  );
}

function loadPortfolio() {
  return JSON.parse(localStorage.getItem("portfolio"));
}
function loadPortfolio() {
  const symbol = localStorage.getItem("symbol");
  const shares = Number(localStorage.getItem("shares"));

  if (!symbol || !shares) {
    document.getElementById("portfolio").innerHTML =
      "<p>No portfolio data yet.</p>";
    return;
  }

  const price = Math.floor(Math.random() * 200 + 50);
  const total = (price * shares).toFixed(2);

  document.getElementById("portfolio").innerHTML = `
    <div class="card">
      <h3>${symbol}</h3>
      <p>Shares: ${shares}</p>
      <p>Est. Price: $${price}</p>
      <p><strong>Total Value: $${total}</strong></p>
    </div>
  `;
}
