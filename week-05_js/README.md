# Week 05 — JavaScript Conditionals

This week we focus on one of the most important building blocks in JavaScript: **conditionals** — code that makes decisions.

---

## What you will learn

- How to write `if`, `if...else`, and `if...else if...else` statements
- How to write a **ternary operator** as a shorter alternative to `if...else`
- When to use each form — and when _not_ to
- How conditionals are used in real e-commerce web apps

---

## Before you start

Make sure you have [Node.js](https://nodejs.org) installed. You can run any file in this project from your terminal with:

```bash
node filename.js
```

For example:

```bash
node examples/js-conditionals.js
```

---

## How to work through this material

Go in order — each step builds on the previous one.

### Step 1 — Read the concept file

**`statement-vs-expression.js`**

A short explainer on the difference between a statement and an expression. This matters because the ternary operator is an expression, which is why it behaves differently from an `if` statement.

### Step 2 — Study the examples

**`examples/js-conditionals.js`**

Four worked examples showing the four forms of conditionals. Each `if...else` example is paired with its ternary equivalent so you can compare them directly.

| Example | Form                   | Scenario                    |
| ------- | ---------------------- | --------------------------- |
| 1       | `if`                   | Unlock free shipping        |
| 2       | `if...else` vs ternary | Login check before checkout |
| 3       | `if...else if...else`  | Order status messages       |
| 4       | `if...else` vs ternary | Assigning a shipping label  |

Read each example carefully. Try changing the variable values and re-running the file to see how the output changes.

### Step 3 — Attempt the debugging exercises

**`exercises/exercise-01.js` through `exercise-08.js`**

Each file contains code that is either broken or incomplete. A comment at the top tells you what the code _should_ do. Your job is to find the bug and fix it.

| Exercise | Bug type                                       |
| -------- | ---------------------------------------------- |
| 01       | Wrong operator: `=` instead of `===`           |
| 02       | Wrong comparison: `>` instead of `>=`          |
| 03       | Missing `else` branch                          |
| 04       | Wrong logical operator: `&&` instead of `\|\|` |
| 05       | Ternary syntax error: missing `:`              |
| 06       | Ternary logic error: labels are swapped        |
| 07       | Missing final `else` in a chain                |
| 08       | Refactor: rewrite `if...else` as a ternary     |

**Tip:** Try to find and fix the bug yourself before checking the solution. Even if your fix is wrong, attempting it first will make the explanation stick better.

### Step 4 — Check your solutions

**`solutions/solution-01.js` through `solution-08.js`**

Each solution file contains the corrected code and a step-by-step explanation of what was wrong and why the fix works.

---

## Key rules to remember

```
=   → assigns a value          let x = 5
=== → checks if values match   if (x === 5)

>   → strictly greater than    (5 > 5) is false
>=  → greater than or equal    (5 >= 5) is true

&&  → AND: both conditions must be true
||  → OR:  at least one condition must be true
```

**Ternary structure:**

```
condition ? valueIfTrue : valueIfFalse
```

**When to use ternary vs if...else:**

| Situation                               | Use                   |
| --------------------------------------- | --------------------- |
| Only need to act when something is true | `if`                  |
| Choosing between two actions or values  | ternary               |
| More than two outcomes                  | `if...else if...else` |
| Each branch has multiple lines of code  | `if...else`           |
