function getConfidence(change) {
  let score = Math.abs(change) * 10;
  if (score > 95) score = 95;
  return Math.round(score);
}
