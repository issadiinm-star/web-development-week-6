# SpendWise — Interactive Budgeting Application

## Improvements Made to SpendWise This Week
This week, SpendWise was upgraded from a prompt-and-console script into a fully interactive web application. Users can now set their monthly budget, add categorized expenses through HTML forms, delete individual items or clear the entire list, and immediately see updated totals, remaining balances, and color-coded budget status alerts directly on the webpage.

## How Conditionals Are Used in the Project
Conditional statements (`if`, `else if`, `else`) drive both input validation and real-time financial feedback:
* **Input Validation:** Verifies that submitted budget and expense amounts are positive numbers and that expense names are not empty before saving.
* **Budget Health Evaluation:** Compares `totalSpent` and `remainingBalance` against `totalBudget`:
  * Displays a **neutral** prompt when no budget has been set (`totalBudget === 0`).
  * Displays a **red danger alert** when expenses exceed the budget (`remainingBalance < 0`).
  * Displays a **yellow warning alert** when spending reaches 80% or more of the budget (`totalSpent >= totalBudget * 0.8`).
  * Displays a **green confirmation banner** when spending is safely within budget.
* **Empty State Check:** Checks `expenses.length === 0` to display a friendly placeholder message when the table has no records.

## How Arrays Are Used to Store Data
Instead of separate variables for each category, SpendWise stores all transactions inside a centralized `expenses` array (`let expenses = []`). Each time a user adds an expense, an object containing `{ id, name, category, amount }` is pushed into the array. Using an array makes it simple to store any number of records, sum totals dynamically, or remove a specific item using `.filter()`.

## How the DOM Is Updated
JavaScript manipulates the DOM using `document.getElementById()` and `document.createElement()`:
* **Summary Cards & Header Badge:** Updates `.textContent` for Total Budget, Total Spent, Percentage Used, Remaining Balance, and Budget Status whenever data changes.
* **Status Banner:** Dynamically updates both the banner's text message and CSS class (`neutral`, `safe`, `warning`, or `danger`).
* **Expense History Table:** Clears `expenseTableBody.innerHTML` and appends freshly created `<tr>` elements for every stored expense object.

## How User Interactions Are Handled Through Events
Event listeners (`addEventListener`) connect user actions on the page to JavaScript functions:
* **Budget Form (`submit`):** Captures the user's monthly budget, prevents default page reload with `event.preventDefault()`, updates `totalBudget`, and refreshes the dashboard.
* **Expense Form (`submit`):** Captures the expense name, category, and amount, pushes a new object into `expenses`, clears the form inputs, and refreshes the dashboard.
* **Clear All Button (`click`):** Empties the `expenses` array and resets the table and totals.
* **Delete Buttons (`click`):** Calls `deleteExpense(id)` to remove a single expense row and recalculate totals immediately.

## Challenges Encountered and How They Were Resolved
* **Form Submission Refreshing the Page:** Submitting either form initially reloaded the browser and wiped out stored JavaScript array data. Adding `event.preventDefault()` inside both `submit` event listeners resolved this issue.
* **Duplicate Table Rows on Re-Render:** Adding a second expense initially duplicated earlier rows in the table. Clearing `expenseTableBody.innerHTML = ""` at the start of `renderExpenseTable()` ensured the table cleanly re-renders the current array state every time.
