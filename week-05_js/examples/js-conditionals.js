// The common ways of JS conditionals
//
// 1. if
// 2. if...else
// 3. if...else if...else
// 4. ternary operator: condition ? valueIfTrue : valueIfFalse

// ---------------------------------------------------------------------------
// Example 1 — if
// ---------------------------------------------------------------------------
// Use a plain `if` when you only need to act on the true case.

const cartTotal = 1200;

if (cartTotal >= 1000) {
  console.log("Free shipping unlocked!");
}

// Note: the ternary operator always requires both a true AND a false branch.
// For one-sided checks like this, a plain `if` is the right choice.

// ---------------------------------------------------------------------------
// Example 2 — if...else  vs  ternary (choosing between two actions)
// ---------------------------------------------------------------------------

// 2.1 — if...else
const isLoggedInOne = false;

if (isLoggedInOne) {
  console.log("Proceed to checkout");
} else {
  console.log("Please log in before checkout");
}

// 2.2 — ternary (same logic, shorter)
const isLoggedInTwo = false;

isLoggedInTwo
  ? console.log("Proceed to checkout")
  : console.log("Please log in before checkout");

// ---------------------------------------------------------------------------
// Example 3 — if...else if...else
// ---------------------------------------------------------------------------
// Use this when there are more than two possible outcomes.
// The ternary is not a good fit here — stick with if...else if...else.

const orderStatus = "shipped";

if (orderStatus === "processing") {
  console.log("Your order is being processed.");
} else if (orderStatus === "shipped") {
  console.log("Your order is on the way!");
} else if (orderStatus === "delivered") {
  console.log("Your order has been delivered.");
} else {
  console.log("Status unknown. Please contact support.");
}

// ---------------------------------------------------------------------------
// Example 4 — if...else  vs  ternary (assigning a value)
// ---------------------------------------------------------------------------
// The most common real-world use of ternary: picking between two values
// to assign to a variable.

// 4.1 — if...else
const cartTotalOne = 1200;
let shippingLabelOne;

if (cartTotalOne >= 1000) {
  shippingLabelOne = "FREE";
} else {
  shippingLabelOne = "$9.99";
}

console.log("Shipping: " + shippingLabelOne);

// 4.2 — ternary (same logic, one line, variable can now be const)
const cartTotalTwo = 1200;

const shippingLabelTwo = cartTotalTwo >= 1000 ? "FREE" : "$9.99";

console.log("Shipping: " + shippingLabelTwo);

// const is safer than let because it can't be accidentally reassigned later in the code.
// Switching to ternary isn't just shorter —
// it also lets you use the more protective keyword.
