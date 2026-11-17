// ==========================================
// 1. DATA STORAGE (Variables & Arrays)
// ==========================================
let totalBudget = 0;
let expenses = []; // Array of expense objects

// ==========================================
// 2. DOM ELEMENT SELECTIONS
// ==========================================
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseAmountInput = document.getElementById("expense-amount");

const headerBadge = document.getElementById("header-badge");
const displayBudget = document.getElementById("display-budget");
const displaySpent = document.getElementById("display-spent");
const displayBalance = document.getElementById("display-balance");
const displayPercent = document.getElementById("display-percent");
const displayHealth = document.getElementById("display-health");
const statusBanner = document.getElementById("status-banner");
const expenseTableBody = document.getElementById("expense-table-body");
const clearBtn = document.getElementById("clear-btn");

// ==========================================
// 3. EVENT LISTENERS (User Interactions)
// ==========================================

// Handle Budget Form Submission
budgetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const enteredBudget = parseFloat(budgetInput.value);

  // Conditional validation
  if (isNaN(enteredBudget) || enteredBudget <= 0) {
    alert("Please enter a valid monthly budget greater than 0.");
    return;
  }

  totalBudget = enteredBudget;
  budgetInput.value = "";
  updateDashboard();
});

// Handle Add Expense Form Submission
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = expenseNameInput.value.trim();
  const category = expenseCategoryInput.value;
  const amount = parseFloat(expenseAmountInput.value);

  // Conditional validation
  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and positive amount.");
    return;
  }

  // Add new expense object to the expenses array
  expenses.push({
    id: Date.now(),
    name: name,
    category: category,
    amount: amount
  });

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  updateDashboard();
});

// Handle Clear All Button
clearBtn.addEventListener("click", function () {
  if (expenses.length === 0) return;
  expenses = [];
  updateDashboard();
});

// ==========================================
// 4. LOOPS & CALCULATIONS
// ==========================================
function calculateTotalExpenses() {
  let sum = 0;

  // Loop through the expenses array to calculate total spending
  for (let i = 0; i < expenses.length; i++) {
    sum += expenses[i].amount;
  }

  return sum;
}

function deleteExpense(id) {
  expenses = expenses.filter(function (expense) {
    return expense.id !== id;
  });
  updateDashboard();
}

// ==========================================
// 5. DOM MANIPULATION & DECISION MAKING
// ==========================================
function renderExpenseTable() {
  expenseTableBody.innerHTML = "";

  // Conditional check if no expenses exist
  if (expenses.length === 0) {
    expenseTableBody.innerHTML =
      '<tr><td colspan="4" class="empty-msg">No expenses added yet.</td></tr>';
    return;
  }

  // Loop through stored records to dynamically create table rows
  expenses.forEach(function (expense) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.category}</td>
      <td>$${expense.amount.toFixed(2)}</td>
      <td>
        <button type="button" class="delete-btn" onclick="deleteExpense(${expense.id})">
          Delete
        </button>
      </td>
    `;
    expenseTableBody.appendChild(row);
  });
}

function evaluateBudgetStatus(totalSpent, remainingBalance) {
  // Conditional decision making for user feedback
  if (totalBudget === 0) {
    statusBanner.className = "banner neutral";
    statusBanner.textContent = "Set your monthly budget below to begin tracking your spending.";
    displayHealth.textContent = "Not Set";
  } else if (remainingBalance < 0) {
    statusBanner.className = "banner danger";
    statusBanner.textContent = `⚠️ Over Budget! You have exceeded your budget by $${Math.abs(remainingBalance).toFixed(2)}.`;
    displayHealth.textContent = "Over Budget";
  } else if (totalSpent >= totalBudget * 0.8) {
    statusBanner.className = "banner warning";
    statusBanner.textContent = `⚡ Warning: You have used 80% or more of your budget ($${remainingBalance.toFixed(2)} remaining).`;
    displayHealth.textContent = "Caution";
  } else {
    statusBanner.className = "banner safe";
    statusBanner.textContent = `✅ On Track: You are within your budget with $${remainingBalance.toFixed(2)} remaining.`;
    displayHealth.textContent = "Healthy";
  }
}

function updateDashboard() {
  const totalSpent = calculateTotalExpenses();
  const remainingBalance = totalBudget - totalSpent;
  const percentUsed = totalBudget > 0 ? ((totalSpent / totalBudget) * 100).toFixed(1) : "0.0";

  // Update DOM text elements
  headerBadge.textContent = `Budget: $${totalBudget.toFixed(2)}`;
  displayBudget.textContent = `$${totalBudget.toFixed(2)}`;
  displaySpent.textContent = `$${totalSpent.toFixed(2)}`;
  displayBalance.textContent = `$${remainingBalance.toFixed(2)}`;
  displayPercent.textContent = `${percentUsed}%`;

  // Conditional styling for negative balance
  displayBalance.style.color = remainingBalance < 0 ? "#dc2626" : "var(--text-primary)";

  evaluateBudgetStatus(totalSpent, remainingBalance);
  renderExpenseTable();
}
