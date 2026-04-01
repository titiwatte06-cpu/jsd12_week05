// Exercise 4
// ----------
// GOAL: Apply a discount if the user is a member OR their cart total is over 500.
//       Otherwise log "No discount available."
// A non-member with a cart of 600 should get the discount, but currently they don't.
// Find and fix the bug.

const isMember = false;
const cartTotal = 600;

if (isMember || cartTotal > 500) {
  console.log("Discount applied!");
} else {
  console.log("No discount available.");
}

// Fix:
