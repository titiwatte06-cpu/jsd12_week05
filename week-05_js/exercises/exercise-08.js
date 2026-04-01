// Exercise 8 — Refactor
// ---------------------
// GOAL: The if...else below works correctly. Rewrite it as a single ternary
//       expression that assigns the value to shippingLabel.
// Hint: you only need one line to replace the entire if...else block.

const cartTotal = 1200;
let shippingLabel;

// if (cartTotal >= 1000) {
//   shippingLabel = "FREE";
// } else {
//   shippingLabel = "$9.99";
// }

(cartTotal >= 1000) ? shippingLabel = "FREE":shippingLabel = "$9.99";

console.log("Shipping: " + shippingLabel);

// Refactor:
