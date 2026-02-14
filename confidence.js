<div id="nav"></div>
<script>
fetch("nav.html").then(r => r.text()).then(d => {
  document.getElementById("nav").innerHTML = d;
});
</script>

function getConfidence(change) {
  let score = Math.abs(change) * 10;
  if (score > 95) score = 95;
  return Math.round(score);
}
