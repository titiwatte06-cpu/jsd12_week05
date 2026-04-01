// Exercise 6
// ----------
// GOAL: Set buttonLabel to "Out of Stock" when stock is 0,
//       and "Add to Cart" when stock is greater than 0.
// The ternary is syntactically correct but the logic is wrong.
// Find and fix the bug.

const stock = 0;

const buttonLabel = stock > 0 ? "Add to Cart" : "Out of Stock";
console.log(buttonLabel);

// Fix:
