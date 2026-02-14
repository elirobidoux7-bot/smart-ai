function savePortfolio(symbol, shares) {
  localStorage.setItem(
    "portfolio",
    JSON.stringify({ symbol, shares })
  );
}

function loadPortfolio() {
  return JSON.parse(localStorage.getItem("portfolio"));
}
