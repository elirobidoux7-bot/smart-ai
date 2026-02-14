function getAction(change) {
  if (change > 5) return { action: "SELL", risk: "High" };
  if (change < -5) return { action: "BUY", risk: "Medium" };
  return { action: "HOLD", risk: "Low" };
}
