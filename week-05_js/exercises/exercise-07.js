// Exercise 7
// ----------
// GOAL: Log the matching message for each order status:
//   "processing" → "Your order is being processed."
//   "shipped"    → "Your order is on the way!"
//   "delivered"  → "Your order has been delivered."
//   anything else → "Status unknown. Please contact support."
// When orderStatus is "cancelled", nothing is logged. Fix the code.

const orderStatus = "cancelled";

if (orderStatus === "processing") {
  console.log("Your order is being processed.");
} else if (orderStatus === "shipped") {
  console.log("Your order is on the way!");
} else if (orderStatus === "delivered") {
  console.log("Your order has been delivered.");
} else if (orderStatus === "cancelled") {
} else {
    console.log("Status unknown. Please contact support.");
}
// Fix:
