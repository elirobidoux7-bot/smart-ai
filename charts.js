<div id="nav"></div>
<script>
fetch("nav.html").then(r => r.text()).then(d => {
  document.getElementById("nav").innerHTML = d;
});
</script>

function generatePrices(start) {
  let prices = [start];
  for (let i = 0; i < 10; i++) {
    let change = (Math.random() - 0.5) * 5;
    prices.push((prices[i] + change).toFixed(2));
  }
  return prices;
}

function drawChart(canvasId, prices) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const max = Math.max(...prices);
  const min = Math.min(...prices);

  ctx.beginPath();
  ctx.moveTo(0, 100);

  prices.forEach((p, i) => {
    const x = i * 30;
    const y = 200 - ((p - min) / (max - min)) * 180;
    ctx.lineTo(x, y);
  });

  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 3;
  ctx.stroke();
}
