// Exercise 2
// ----------
// GOAL: Log "Free shipping unlocked!" when cartTotal is 1000 or more.
//       Log "Add more items for free shipping." when it is under 1000.
// A customer with exactly 1000 in their cart should get free shipping,
// but currently they don't. Find and fix the bug.

const cartTotal = 1000;

if (cartTotal >= 1000) {
  console.log("Free shipping unlocked!");
} else {
  console.log("Add more items for free shipping.");
}

// Fix:
