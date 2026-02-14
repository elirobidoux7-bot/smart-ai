function addToWatchlist(symbol) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  if (!list.includes(symbol)) {
    list.push(symbol);
    localStorage.setItem("watchlist", JSON.stringify(list));
    alert(symbol + " added to watchlist");
  }
}

function loadWatchlist() {
  const list = JSON.parse(localStorage.getItem("watchlist")) || [];
  const div = document.getElementById("watchlist");

  if (list.length === 0) {
    div.innerHTML = "<p>No stocks saved.</p>";
    return;
  }

  list.forEach(s => {
    div.innerHTML += `<div class="card">${s}</div>`;
  });
}
