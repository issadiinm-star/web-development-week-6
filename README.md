# SpendWise — Personal Budget & Expense Tracker

## Project Description
SpendWise is a responsive, interactive personal budgeting web application built with HTML5, CSS3, and JavaScript. Users can set a monthly budget, log categorized expenses, delete individual transactions, and view live spending totals, remaining balances, and color-coded budget health alerts directly on the dashboard.

## Key Features
* **Live Budget Tracking:** Real-time calculation of total budget, total expenses, percentage spent, and remaining balance.
* **Smart Status Alerts:** Color-coded banners that warn users when spending reaches 80% or exceeds the monthly budget.
* **Expense Management:** Add categorized expenses (Rent & Housing, Food & Groceries, Transport, Utilities, Entertainment, Other), delete individual items, or clear all records.
* **Responsive & Dark Mode Ready:** Adapts cleanly across mobile, tablet, and desktop screens and supports automatic system dark mode.

## Technologies Used
* **HTML5:** Semantic dashboard shell, accessible input forms, and structured expense table.
* **CSS3:** CSS Grid, Flexbox, `:root` custom properties, responsive media queries, card hover/focus animations, and automatic dark mode (`prefers-color-scheme: dark`).
* **JavaScript (ES6+):** Arrays, loops, conditional decision-making, DOM manipulation, and event listeners.
* **Git & GitHub:** Version control and cloud source code hosting.
* **Netlify:** Cloud hosting and automated continuous deployment (CI/CD).

## Project Structure
```text
spendwise/
├── index.html   # Main dashboard structure and forms
├── style.css    # Responsive Grid/Flexbox layout, theme variables, and dark mode
├── script.js    # Budget logic, array state management, and DOM updates
└── README.md    # Project documentation and deployment details
```

## GitHub Repository Information
* **Repository Name:** `[web-development-week-6]`
* **Repository URL:** `[https://github.com/issadiinm-star/web-development-week-6]`
* **Deployed Branch:** `main`

## Live Netlify Website URL
* **Live Website:** [https://netlify.app](https://netlify.app)

## Deployment Process Summary
1. **Deployment Readiness:** Verified that `index.html`, `style.css`, `script.js`, and `README.md` were placed in the root directory with lowercase filenames and relative paths.
2. **GitHub Repository:** Pushed all project files to a public GitHub repository on the `main` branch.
3. **Netlify Deployment:** Connected the GitHub repository to Netlify and deployed the site directly from the root directory.
4. **Custom Site Name:** Updated the default Netlify subdomain to `spendwise-tracker-issa` under **Domain management**.
5. **Continuous Deployment Test:** Added a visible footer update to `index.html`, committed the change on GitHub, and confirmed that Netlify automatically built and published the update to the live site.

## Challenges Encountered During Deployment
* **Finding an Available Subdomain:** Initial custom domain names on Netlify were already taken, which was resolved by adding a personal identifier (`spendwise-tracker-issa`) to create a unique subdomain.
* **Verifying Relative File Paths:** Checked that all CSS and JavaScript links in `index.html` matched exact lowercase filenames (`style.css` and `script.js`) so Netlify's servers loaded all assets without errors.

## Lessons Learned
* **Continuous Deployment (CI/CD):** Connecting GitHub directly to Netlify automates production updates so every commit pushed to `main` rebuilds and updates the live website within seconds.
* **Live Environment Testing:** Testing the published `.netlify.app` URL in a separate browser window confirms that responsive layouts, styles, and interactive scripts work properly for end users.
