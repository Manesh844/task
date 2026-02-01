export interface PracticalTask {
  id: string;
  category: 'web' | 'app-logic' | 'debugging' | 'ai' | 'software-it';
  title: string;
  scenario: string;
  givenCode?: string;
  givenFiles?: { name: string; content: string }[];
  objective: string;
  constraints: string[];
  expectedOutput: string;
  completionCriteria: string[];
  difficulty: 'beginner' | 'intermediate';
  estimatedTime: string;
}

export const practicalTasks: PracticalTask[] = [
  // ==================== WEB DEVELOPMENT TASKS ====================
  {
    id: 'WEB-001',
    category: 'web',
    title: 'Improve Login Page UI/UX',
    scenario: 'The client has complained that the login page looks outdated and unprofessional. Your team lead has assigned you to improve the visual appearance without changing any functionality. The backend team has warned you not to modify any form attributes or input names.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <style>
    body { font-family: Arial; }
    input { margin: 5px; }
    button { margin: 10px; }
  </style>
</head>
<body>
  <h1>Login</h1>
  <form action="/api/login" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>
</body>
</html>`,
    objective: 'Redesign the login page to look modern and professional. Add proper spacing, colors, centering, and visual hierarchy.',
    constraints: [
      'Do NOT change the form action or method',
      'Do NOT rename input fields',
      'Do NOT add JavaScript',
      'Keep the same HTML structure'
    ],
    expectedOutput: 'A visually appealing, centered login form with proper colors, shadows, and professional styling.',
    completionCriteria: [
      'Form is horizontally and vertically centered',
      'Inputs have proper padding and borders',
      'Button has hover effect',
      'Overall design looks professional'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'WEB-002',
    category: 'web',
    title: 'Fix Broken Navigation Menu',
    scenario: 'A junior developer created a navigation menu but it has several issues. The links don\'t look clickable, the hover states are missing, and the menu doesn\'t work well on mobile. Your task is to fix these issues.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .nav { background: #333; }
    .nav ul { list-style: none; }
    .nav li { display: inline; }
    .nav a { color: gray; text-decoration: none; }
  </style>
</head>
<body>
  <nav class="nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`,
    objective: 'Fix the navigation menu to be fully functional, accessible, and responsive.',
    constraints: [
      'Keep the same HTML structure',
      'Do NOT change the href values',
      'Use only CSS for fixes'
    ],
    expectedOutput: 'A professional navigation bar with proper spacing, visible links, hover effects, and mobile-friendly layout.',
    completionCriteria: [
      'Links are clearly visible (proper contrast)',
      'Hover states are implemented',
      'Proper padding/spacing between items',
      'Navigation is usable on mobile devices'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },
  {
    id: 'WEB-003',
    category: 'web',
    title: 'Create Employee Card Component',
    scenario: 'The HR department needs a reusable employee card component for the internal directory. They have provided a rough sketch and want you to implement it. Each card should display employee photo, name, position, department, and contact info.',
    givenCode: `<!-- HR Department Requirements:
- Card should be 300px wide
- Employee photo: 100x100px circular
- Name should be prominent
- Position in smaller text
- Department with colored badge
- Email and phone icons with info
- Subtle shadow and rounded corners
-->

<!-- Sample Data to Use -->
<div class="employee-card">
  <!-- Photo: https://i.pravatar.cc/100 -->
  <!-- Name: Sarah Johnson -->
  <!-- Position: Senior Developer -->
  <!-- Department: Engineering -->
  <!-- Email: s.johnson@company.com -->
  <!-- Phone: +1 234 567 890 -->
</div>`,
    objective: 'Build a complete, styled employee card component based on the requirements.',
    constraints: [
      'Card width must be exactly 300px',
      'Must use the placeholder image URL provided',
      'All information must be visible without scrolling'
    ],
    expectedOutput: 'A polished employee card component that looks like it belongs in a professional HR system.',
    completionCriteria: [
      'All required information is displayed',
      'Photo is circular and properly sized',
      'Department badge has background color',
      'Card has shadow and rounded corners',
      'Layout is clean and organized'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },
  {
    id: 'WEB-004',
    category: 'web',
    title: 'Implement Responsive Grid Layout',
    scenario: 'The marketing team has a page showing 6 product cards. Currently, they display in a single column on all devices. Your task is to make them display in a responsive grid: 1 column on mobile, 2 columns on tablet, 3 columns on desktop.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .product-grid {
      /* Add your styles here */
    }
    .product-card {
      background: white;
      border: 1px solid #ddd;
      padding: 20px;
      margin: 10px 0;
    }
    .product-card h3 { margin: 0 0 10px 0; }
    .product-card p { color: #666; }
    .product-card .price { color: green; font-weight: bold; }
  </style>
</head>
<body>
  <div class="product-grid">
    <div class="product-card">
      <h3>Product One</h3>
      <p>Description of product one goes here.</p>
      <span class="price">$29.99</span>
    </div>
    <div class="product-card">
      <h3>Product Two</h3>
      <p>Description of product two goes here.</p>
      <span class="price">$39.99</span>
    </div>
    <div class="product-card">
      <h3>Product Three</h3>
      <p>Description of product three goes here.</p>
      <span class="price">$19.99</span>
    </div>
    <div class="product-card">
      <h3>Product Four</h3>
      <p>Description of product four goes here.</p>
      <span class="price">$49.99</span>
    </div>
    <div class="product-card">
      <h3>Product Five</h3>
      <p>Description of product five goes here.</p>
      <span class="price">$24.99</span>
    </div>
    <div class="product-card">
      <h3>Product Six</h3>
      <p>Description of product six goes here.</p>
      <span class="price">$34.99</span>
    </div>
  </div>
</body>
</html>`,
    objective: 'Implement a responsive CSS grid layout that adapts to different screen sizes.',
    constraints: [
      'Do NOT use JavaScript',
      'Do NOT modify the HTML structure',
      'Must use CSS Grid or Flexbox',
      'Breakpoints: mobile (<600px), tablet (600-900px), desktop (>900px)'
    ],
    expectedOutput: 'A responsive grid that shows 1/2/3 columns based on screen size with proper spacing.',
    completionCriteria: [
      '1 column layout on mobile',
      '2 column layout on tablet',
      '3 column layout on desktop',
      'Equal gaps between cards',
      'Cards stretch to fill available space'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'WEB-005',
    category: 'web',
    title: 'Style Form Validation States',
    scenario: 'The UX team has designed validation states for a registration form, but the current form has no visual feedback. Users can\'t tell if their input is valid or invalid. Add CSS to show clear validation states.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; }
    input { width: 100%; padding: 10px; border: 1px solid #ccc; }
    
    /* Add validation styles below */
    /* .input-valid { } */
    /* .input-invalid { } */
    /* .error-message { } */
    /* .success-message { } */
  </style>
</head>
<body>
  <form>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="input-valid" value="user@example.com">
      <span class="success-message">Email is valid</span>
    </div>
    
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="input-invalid" value="123">
      <span class="error-message">Password must be at least 8 characters</span>
    </div>
    
    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="input-invalid" value="1234">
      <span class="error-message">Passwords do not match</span>
    </div>
    
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="input-valid" value="john_doe">
      <span class="success-message">Username is available</span>
    </div>
  </form>
</body>
</html>`,
    objective: 'Create clear visual distinction between valid and invalid form states using CSS.',
    constraints: [
      'Do NOT modify the HTML',
      'Use appropriate colors (green for valid, red for invalid)',
      'Messages must be clearly visible',
      'Do NOT use JavaScript'
    ],
    expectedOutput: 'Form inputs with clear visual feedback - green borders/icons for valid, red for invalid, with styled messages.',
    completionCriteria: [
      'Valid inputs have green border',
      'Invalid inputs have red border',
      'Error messages are styled in red',
      'Success messages are styled in green',
      'Icons or visual indicators are added'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-25 minutes'
  },
  {
    id: 'WEB-006',
    category: 'web',
    title: 'Create Pricing Table',
    scenario: 'The sales team urgently needs a pricing table for the website. They want 3 plans: Basic ($9/mo), Pro ($29/mo), and Enterprise ($99/mo). The Pro plan should be highlighted as "Most Popular".',
    givenCode: `<!-- Pricing Table Requirements:
- 3 columns side by side
- Each plan shows: Name, Price, Features list, CTA button
- Pro plan should stand out (highlighted, larger, or different color)
- Must be responsive

Features by plan:
Basic: 5 Projects, 10GB Storage, Email Support
Pro: 25 Projects, 100GB Storage, Priority Support, API Access
Enterprise: Unlimited Projects, 1TB Storage, 24/7 Support, API Access, Custom Integrations
-->

<div class="pricing-container">
  <!-- Build your pricing table here -->
</div>`,
    objective: 'Build a complete, professional pricing table from scratch based on the requirements.',
    constraints: [
      'Must include all 3 plans',
      'Pro plan must be visually highlighted',
      'Must be responsive (stack on mobile)',
      'All features must be listed with checkmarks or bullets'
    ],
    expectedOutput: 'A professional pricing table that compares plans clearly and encourages Pro plan selection.',
    completionCriteria: [
      'All 3 plans displayed with correct info',
      'Pro plan is visually prominent',
      'Features are listed clearly',
      'CTA buttons are styled',
      'Responsive on mobile'
    ],
    difficulty: 'intermediate',
    estimatedTime: '40-50 minutes'
  },
  {
    id: 'WEB-007',
    category: 'web',
    title: 'Fix Footer Layout Issues',
    scenario: 'The company footer has layout problems. Elements are not aligned, spacing is inconsistent, and it doesn\'t look professional. The footer should have 4 columns: About, Quick Links, Services, and Contact Info.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .footer {
      background: #1a1a2e;
      color: white;
      padding: 20px;
    }
    .footer-section {
      margin: 10px;
    }
    .footer h4 {
      color: white;
    }
    .footer ul {
      list-style: none;
    }
    .footer a {
      color: gray;
    }
    .footer-bottom {
      text-align: center;
    }
  </style>
</head>
<body>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>We are a leading software company providing innovative solutions.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">App Development</a></li>
          <li><a href="#">Cloud Solutions</a></li>
          <li><a href="#">AI Services</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: info@company.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Tech Street</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,
    objective: 'Fix the footer layout to display 4 columns properly with consistent styling.',
    constraints: [
      'Do NOT change the HTML structure',
      'Keep the same color scheme',
      'Must be responsive'
    ],
    expectedOutput: 'A professional 4-column footer with proper alignment, spacing, and hover effects on links.',
    completionCriteria: [
      '4 columns displayed side by side on desktop',
      'Consistent spacing between sections',
      'Links have hover effects',
      'Footer stacks properly on mobile',
      'Bottom copyright is separated'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },

  // ==================== APP LOGIC TASKS ====================
  {
    id: 'APP-001',
    category: 'app-logic',
    title: 'Implement Shopping Cart Total Calculator',
    scenario: 'The e-commerce team has a shopping cart that displays items but doesn\'t calculate the total. They need you to implement the calculation logic. The cart should show subtotal, tax (10%), and final total.',
    givenCode: `// Shopping Cart Data
const cart = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, name: "Mouse", price: 29.99, quantity: 2 },
  { id: 3, name: "Keyboard", price: 79.99, quantity: 1 },
  { id: 4, name: "Monitor", price: 349.99, quantity: 1 }
];

const TAX_RATE = 0.10; // 10%

// TODO: Implement these functions

function calculateSubtotal(cart) {
  // Calculate sum of (price * quantity) for all items
  // Return the subtotal
}

function calculateTax(subtotal) {
  // Calculate tax based on TAX_RATE
  // Return the tax amount
}

function calculateTotal(subtotal, tax) {
  // Return the final total
}

function formatCurrency(amount) {
  // Format number as currency string like "$1,234.56"
}

function displayCartSummary(cart) {
  // Use above functions to display:
  // Subtotal: $X,XXX.XX
  // Tax (10%): $XXX.XX
  // Total: $X,XXX.XX
}

// Run the function
displayCartSummary(cart);`,
    objective: 'Implement all the cart calculation functions to display a complete order summary.',
    constraints: [
      'Do NOT modify the cart data structure',
      'Do NOT change the TAX_RATE',
      'All monetary values must be formatted with 2 decimal places',
      'Must use the provided function signatures'
    ],
    expectedOutput: 'Console output showing formatted Subtotal, Tax, and Total for the cart items.',
    completionCriteria: [
      'Subtotal correctly sums all items',
      'Tax is calculated at 10%',
      'Total = Subtotal + Tax',
      'All values are formatted as currency',
      'Output is clear and readable'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },
  {
    id: 'APP-002',
    category: 'app-logic',
    title: 'Build Password Strength Checker',
    scenario: 'The security team needs a password strength checker for the registration page. It should analyze a password and return a strength level: Weak, Medium, or Strong based on specific criteria.',
    givenCode: `// Password Strength Criteria:
// WEAK: Less than 8 characters
// MEDIUM: At least 8 chars AND has both letters and numbers
// STRONG: At least 12 chars AND has uppercase, lowercase, numbers, AND special chars

// Special characters: !@#$%^&*()_+-=[]{}|;:,.<>?

function checkPasswordStrength(password) {
  // TODO: Implement password strength logic
  // Return an object: { strength: "Weak/Medium/Strong", feedback: "..." }
}

function hasLowercase(str) {
  // TODO: Check if string has lowercase letters
}

function hasUppercase(str) {
  // TODO: Check if string has uppercase letters
}

function hasNumbers(str) {
  // TODO: Check if string has numbers
}

function hasSpecialChars(str) {
  // TODO: Check if string has special characters
}

// Test cases - your function should handle all of these
console.log(checkPasswordStrength("abc"));           // Weak
console.log(checkPasswordStrength("password"));      // Weak  
console.log(checkPasswordStrength("password123"));   // Medium
console.log(checkPasswordStrength("Password123!@#")); // Strong`,
    objective: 'Implement a complete password strength checker with helper functions.',
    constraints: [
      'Must return an object with strength and feedback',
      'Must use the provided helper function structure',
      'Feedback should explain why the password is weak/what\'s missing'
    ],
    expectedOutput: 'Function returns correct strength rating for any password input with helpful feedback.',
    completionCriteria: [
      'All test cases return correct strength',
      'Helper functions work correctly',
      'Feedback explains missing requirements',
      'Edge cases handled (empty string, etc.)'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },
  {
    id: 'APP-003',
    category: 'app-logic',
    title: 'Create Task Priority Sorter',
    scenario: 'The project management team has a list of tasks with different priorities. They need a function that sorts tasks by priority (High > Medium > Low) and then by deadline (earliest first).',
    givenCode: `const tasks = [
  { id: 1, title: "Fix login bug", priority: "High", deadline: "2024-01-15" },
  { id: 2, title: "Update documentation", priority: "Low", deadline: "2024-01-10" },
  { id: 3, title: "Review PR #234", priority: "Medium", deadline: "2024-01-12" },
  { id: 4, title: "Deploy to staging", priority: "High", deadline: "2024-01-11" },
  { id: 5, title: "Team meeting prep", priority: "Medium", deadline: "2024-01-14" },
  { id: 6, title: "Security audit", priority: "High", deadline: "2024-01-13" },
  { id: 7, title: "Clean up old files", priority: "Low", deadline: "2024-01-09" }
];

// Priority order: High (1) > Medium (2) > Low (3)

function getPriorityValue(priority) {
  // TODO: Return numeric value for priority
  // High = 1, Medium = 2, Low = 3
}

function sortTasksByPriority(tasks) {
  // TODO: Sort tasks by priority first, then by deadline
  // Return sorted array (don't modify original)
}

function groupTasksByPriority(tasks) {
  // TODO: Group tasks into { high: [], medium: [], low: [] }
}

function getUrgentTasks(tasks) {
  // TODO: Return high priority tasks due within 3 days of today
}

function displayTaskList(tasks) {
  // TODO: Display tasks in a formatted way
  // Show: [PRIORITY] Task Title - Due: DATE
}

// Test your functions
const sorted = sortTasksByPriority(tasks);
displayTaskList(sorted);

console.log("\\nGrouped Tasks:");
console.log(groupTasksByPriority(tasks));`,
    objective: 'Implement task sorting and grouping functions for a project management feature.',
    constraints: [
      'Do NOT modify the original tasks array',
      'Priority order must be High > Medium > Low',
      'Dates should be compared correctly'
    ],
    expectedOutput: 'Properly sorted task list with high priority items first, and secondary sort by deadline.',
    completionCriteria: [
      'Tasks sorted by priority correctly',
      'Tasks with same priority sorted by deadline',
      'Group function returns correct structure',
      'Display function shows formatted output'
    ],
    difficulty: 'beginner',
    estimatedTime: '35-45 minutes'
  },
  {
    id: 'APP-004',
    category: 'app-logic',
    title: 'Implement Search Filter Logic',
    scenario: 'The product catalog needs a search filter that can filter products by name, category, price range, and availability. Implement the filtering logic.',
    givenCode: `const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29.99, inStock: true },
  { id: 2, name: "USB Keyboard", category: "Electronics", price: 49.99, inStock: true },
  { id: 3, name: "Office Chair", category: "Furniture", price: 199.99, inStock: false },
  { id: 4, name: "Desk Lamp", category: "Furniture", price: 34.99, inStock: true },
  { id: 5, name: "Notebook Set", category: "Stationery", price: 12.99, inStock: true },
  { id: 6, name: "Pen Pack", category: "Stationery", price: 8.99, inStock: false },
  { id: 7, name: "Monitor Stand", category: "Electronics", price: 79.99, inStock: true },
  { id: 8, name: "Desk Organizer", category: "Furniture", price: 24.99, inStock: true }
];

function filterProducts(products, filters) {
  // filters object can contain:
  // { 
  //   searchTerm: "mouse",       // search in name (case-insensitive)
  //   category: "Electronics",   // exact match
  //   minPrice: 10,              // minimum price
  //   maxPrice: 50,              // maximum price
  //   inStockOnly: true          // only show in-stock items
  // }
  
  // TODO: Implement filtering logic
  // All filters are optional - only apply if present
  // Return filtered array
}

function getCategories(products) {
  // TODO: Return array of unique categories
}

function getPriceRange(products) {
  // TODO: Return { min: X, max: Y } of all product prices
}

// Test cases
console.log("Electronics under $50:");
console.log(filterProducts(products, { category: "Electronics", maxPrice: 50 }));

console.log("\\nIn-stock items with 'desk' in name:");
console.log(filterProducts(products, { searchTerm: "desk", inStockOnly: true }));

console.log("\\nAll categories:", getCategories(products));
console.log("Price range:", getPriceRange(products));`,
    objective: 'Build a flexible product filtering system that handles multiple optional filters.',
    constraints: [
      'All filters are optional',
      'Search should be case-insensitive',
      'Do NOT modify original products array',
      'Return empty array if no matches'
    ],
    expectedOutput: 'Filtering function that correctly handles any combination of filter criteria.',
    completionCriteria: [
      'Search term filter works (case-insensitive)',
      'Category filter works (exact match)',
      'Price range filter works',
      'In-stock filter works',
      'Multiple filters work together',
      'Helper functions return correct data'
    ],
    difficulty: 'intermediate',
    estimatedTime: '35-45 minutes'
  },
  {
    id: 'APP-005',
    category: 'app-logic',
    title: 'Build Form Data Validator',
    scenario: 'The backend team needs front-end validation before form submission. Create a validator that checks all form fields and returns validation results.',
    givenCode: `// Form data to validate
const formData = {
  username: "john_doe",
  email: "john.doe@email",  // Invalid - missing TLD
  password: "pass123",       // Invalid - too short, no uppercase
  confirmPassword: "pass124", // Invalid - doesn't match
  age: "17",                 // Invalid - must be 18+
  phone: "123-456-789",      // Invalid - wrong format
  website: "www.example"     // Invalid - must start with http/https
};

// Validation rules
const rules = {
  username: { 
    minLength: 3, 
    maxLength: 20, 
    pattern: /^[a-zA-Z0-9_]+$/, 
    message: "Username: 3-20 chars, letters, numbers, underscore only" 
  },
  email: { 
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, 
    message: "Please enter a valid email address" 
  },
  password: { 
    minLength: 8, 
    requireUppercase: true, 
    requireNumber: true, 
    message: "Password: min 8 chars with uppercase and number" 
  },
  age: { 
    min: 18, 
    max: 120, 
    message: "Age must be between 18 and 120" 
  },
  phone: { 
    pattern: /^\\d{3}-\\d{3}-\\d{4}$/, 
    message: "Phone format: XXX-XXX-XXXX" 
  },
  website: { 
    pattern: /^https?:\\/\\/.+\\..+/, 
    message: "Website must start with http:// or https://" 
  }
};

function validateField(fieldName, value, rules) {
  // TODO: Validate single field against its rules
  // Return { valid: true/false, error: "message if invalid" }
}

function validateForm(formData, rules) {
  // TODO: Validate entire form
  // Return { 
  //   isValid: true/false, 
  //   errors: { fieldName: "error message", ... },
  //   validFields: ["field1", "field2", ...]
  // }
}

function validatePasswordMatch(password, confirmPassword) {
  // TODO: Check if passwords match
}

// Run validation
const result = validateForm(formData, rules);
console.log("Form Valid:", result.isValid);
console.log("Errors:", result.errors);
console.log("Valid Fields:", result.validFields);`,
    objective: 'Create a complete form validation system that checks all fields and reports errors.',
    constraints: [
      'Must use the provided rules structure',
      'Must handle all rule types (minLength, maxLength, pattern, etc.)',
      'Password confirmation must be checked separately',
      'Return structured validation result'
    ],
    expectedOutput: 'Validation result showing which fields passed/failed with specific error messages.',
    completionCriteria: [
      'Each field is validated against its rules',
      'Pattern matching works correctly',
      'Length validation works',
      'Number range validation works',
      'Password match is checked',
      'Result object has correct structure'
    ],
    difficulty: 'intermediate',
    estimatedTime: '40-50 minutes'
  },
  {
    id: 'APP-006',
    category: 'app-logic',
    title: 'Implement Pagination Logic',
    scenario: 'The data table component needs pagination. Implement the logic to handle page navigation, calculate page info, and slice data for display.',
    givenCode: `// Sample data - 47 items
const allData = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  name: \`Item \${i + 1}\`,
  value: Math.floor(Math.random() * 1000)
}));

const ITEMS_PER_PAGE = 10;

function calculateTotalPages(totalItems, itemsPerPage) {
  // TODO: Return total number of pages needed
}

function getPageData(data, currentPage, itemsPerPage) {
  // TODO: Return slice of data for current page
  // Page 1 = items 0-9, Page 2 = items 10-19, etc.
}

function getPageInfo(currentPage, totalPages, totalItems, itemsPerPage) {
  // TODO: Return object with:
  // {
  //   currentPage: 1,
  //   totalPages: 5,
  //   startItem: 1,      // First item number on this page
  //   endItem: 10,       // Last item number on this page
  //   totalItems: 47,
  //   hasNextPage: true,
  //   hasPrevPage: false
  // }
}

function goToPage(targetPage, totalPages) {
  // TODO: Validate and return valid page number
  // Handle: negative numbers, 0, beyond total pages
}

// Test pagination
let currentPage = 1;
const totalPages = calculateTotalPages(allData.length, ITEMS_PER_PAGE);

console.log("Page Info:", getPageInfo(currentPage, totalPages, allData.length, ITEMS_PER_PAGE));
console.log("Page 1 Data:", getPageData(allData, 1, ITEMS_PER_PAGE));
console.log("Page 5 Data:", getPageData(allData, 5, ITEMS_PER_PAGE));

// Test navigation
console.log("Go to page 0:", goToPage(0, totalPages));   // Should return 1
console.log("Go to page 10:", goToPage(10, totalPages)); // Should return totalPages`,
    objective: 'Build complete pagination logic for a data table component.',
    constraints: [
      'Use ITEMS_PER_PAGE constant',
      'Handle edge cases (first/last page)',
      'Page numbers start from 1, not 0',
      'Last page may have fewer items'
    ],
    expectedOutput: 'Working pagination functions that correctly slice data and provide navigation info.',
    completionCriteria: [
      'Total pages calculated correctly (ceil)',
      'Correct data slice for each page',
      'Page info shows accurate start/end items',
      'Has next/prev flags work correctly',
      'Navigation handles invalid page numbers'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },

  // ==================== DEBUGGING TASKS ====================
  {
    id: 'DEBUG-001',
    category: 'debugging',
    title: 'Fix Broken Event Counter',
    scenario: 'A junior developer wrote a click counter but it\'s not working correctly. The counter should increment by 1 on each click, but users are reporting strange behavior. Find and fix all bugs.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .counter-display { font-size: 48px; text-align: center; margin: 20px; }
    .btn { padding: 15px 30px; font-size: 18px; margin: 5px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="counter-display" id="counter">0</div>
  <button class="btn" onclick="increment">+1</button>
  <button class="btn" onclick="decrement">-1</button>
  <button class="btn" onclick="reset">Reset</button>
  
  <script>
    let count = "0";
    
    function increment() {
      count = count + 1;
      updateDisplay();
    }
    
    function decrement() {
      count = count - 1;
      if (count < 0) count = 0;
      updateDisplay();
    }
    
    function reset() {
      count = 0;
      updateDisplay;
    }
    
    function updateDisplay() {
      document.getElementById("Counter").innerHTML = count;
    }
  </script>
</body>
</html>`,
    objective: 'Find and fix all bugs in the counter application.',
    constraints: [
      'Do NOT change the overall structure',
      'Keep the same functionality',
      'Counter should not go below 0',
      'All three buttons must work'
    ],
    expectedOutput: 'A working counter that increments, decrements, and resets correctly.',
    completionCriteria: [
      'Increment adds 1 correctly',
      'Decrement subtracts 1 correctly',
      'Counter doesn\'t go negative',
      'Reset sets counter to 0',
      'Display updates properly'
    ],
    difficulty: 'beginner',
    estimatedTime: '15-25 minutes'
  },
  {
    id: 'DEBUG-002',
    category: 'debugging',
    title: 'Fix User Registration Form',
    scenario: 'The registration form is submitting even when validation fails, and some validations are not working at all. The QA team found 6 bugs. Find and fix them all.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .error { color: red; font-size: 12px; display: none; }
    .input-error { border: 2px solid red; }
    input { display: block; margin: 10px 0; padding: 10px; width: 300px; }
    button { padding: 10px 20px; background: blue; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <form id="regForm" onsubmit="validateForm()">
    <h2>Registration</h2>
    
    <input type="text" id="username" placeholder="Username (min 3 chars)">
    <span class="error" id="usernameError">Username must be at least 3 characters</span>
    
    <input type="text" id="email" placeholder="Email">
    <span class="error" id="emailError">Please enter a valid email</span>
    
    <input type="password" id="password" placeholder="Password (min 6 chars)">
    <span class="error" id="passwordError">Password must be at least 6 characters</span>
    
    <input type="password" id="confirmPassword" placeholder="Confirm Password">
    <span class="error" id="confirmError">Passwords do not match</span>
    
    <button type="submit">Register</button>
    <p id="successMsg" style="color: green; display: none;">Registration successful!</p>
  </form>

  <script>
    function validateForm() {
      let isValid = true;
      
      // Clear previous errors
      document.querySelectorAll('.error').forEach(e => e.style.display = 'none');
      document.querySelectorAll('input').forEach(i => i.classList.remove('input-error'));
      
      // Validate username
      const username = document.getElementById('username').value;
      if (username.length < 3) {
        document.getElementById('usernameError').style.display = 'block';
        document.getElementById('username').classList.add('input-error');
        isValid = false;
      }
      
      // Validate email
      const email = document.getElementById('email');
      if (!email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
      }
      
      // Validate password
      const password = document.getElementById('password');
      if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('password').classList.add('input-error');
        isValid == false;
      }
      
      // Validate confirm password
      const confirmPassword = document.getElementById('confirmPassword').value;
      if (password != confirmPassword) {
        document.getElementById('confirmError').style.display = 'block';
        document.getElementById('confirmPassword').classList.add('input-error');
        isValid = false;
      }
      
      if (isValid) {
        document.getElementById('successMsg').style.display = 'block';
      }
      
      return isValid;
    }
  </script>
</body>
</html>`,
    objective: 'Find and fix all 6 bugs in the registration form validation.',
    constraints: [
      'Do NOT change the HTML structure',
      'Keep all existing validation rules',
      'Form should not submit if validation fails'
    ],
    expectedOutput: 'Form that properly validates all fields and prevents submission on error.',
    completionCriteria: [
      'Form doesn\'t submit on validation failure',
      'Username validation works',
      'Email validation works',
      'Password length validation works',
      'Password match validation works',
      'Error messages display correctly'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'DEBUG-003',
    category: 'debugging',
    title: 'Fix Array Processing Functions',
    scenario: 'The data processing module has several buggy functions. The unit tests are failing. Fix the functions to make all tests pass.',
    givenCode: `// Buggy Functions - Fix them!

function findLargest(numbers) {
  // Should return the largest number in array
  let largest = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

function removeDuplicates(array) {
  // Should return array with duplicates removed
  let result = [];
  for (let item of array) {
    if (!result.includes(item)) {
      array.push(item);
    }
  }
  return result;
}

function calculateAverage(numbers) {
  // Should return the average of all numbers
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.count;
}

function reverseArray(array) {
  // Should return a new reversed array (don't modify original)
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

function countOccurrences(array, value) {
  // Should count how many times value appears
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] = value) {
      count++;
    }
  }
  return count;
}

// Test Cases - All should pass after fixes
console.log("Test findLargest:");
console.log(findLargest([3, 7, 2, 9, 1]) === 9); // true
console.log(findLargest([-5, -2, -10]) === -2);  // true (negative numbers!)

console.log("\\nTest removeDuplicates:");
console.log(JSON.stringify(removeDuplicates([1, 2, 2, 3, 3, 3])) === JSON.stringify([1, 2, 3]));

console.log("\\nTest calculateAverage:");
console.log(calculateAverage([10, 20, 30]) === 20);

console.log("\\nTest reverseArray:");
const original = [1, 2, 3];
const reversed = reverseArray(original);
console.log(JSON.stringify(reversed) === JSON.stringify([3, 2, 1]));
console.log(JSON.stringify(original) === JSON.stringify([1, 2, 3])); // Original unchanged!

console.log("\\nTest countOccurrences:");
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2) === 3);`,
    objective: 'Fix all 5 buggy array processing functions to pass the test cases.',
    constraints: [
      'Keep the same function signatures',
      'reverseArray must NOT modify the original array',
      'All test cases must pass'
    ],
    expectedOutput: 'All console.log test results should show "true".',
    completionCriteria: [
      'findLargest handles negative numbers',
      'removeDuplicates returns correct array',
      'calculateAverage returns correct value',
      'reverseArray doesn\'t modify original',
      'countOccurrences counts correctly'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },
  {
    id: 'DEBUG-004',
    category: 'debugging',
    title: 'Fix CSS Layout Issues',
    scenario: 'The design team is frustrated because the CSS is not producing the expected layout. The card should be centered, the image should be contained, and the layout should be responsive. Find and fix all CSS bugs.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      min-height: 100vh;
    }
    
    /* Card should be centered horizontally AND vertically */
    .card-container {
      display: flex;
      justify-content: center;
      /* Missing vertical centering */
    }
    
    .card {
      background: white;
      width: 350;  /* Bug here */
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    /* Image should fill width but maintain aspect ratio */
    .card-image {
      width: 100%;
      height: 200;  /* Bug here */
      object-fit: covered;  /* Bug here */
    }
    
    .card-content {
      padding: 20px;
    }
    
    .card-title {
      font-size: 24;  /* Bug here */
      color: #333;
      margin-bottom: 10px;
    }
    
    .card-text {
      color: #666;
      line-height: 1.6;
    }
    
    /* Button should be full width with hover effect */
    .card-button {
      display: block;
      background: #007bff;
      color: white;
      padding: 12px;
      text-align: center;
      text-decoration: none;
      border: none;
      cursor: pointer;
      margin: 20px;
      border-radius: 5;  /* Bug here */
    }
    
    .card-button:hover {
      background: #0056b3;
      /* Transition not working */
    }
    
    /* Responsive - card should be smaller on mobile */
    @media (max-width: 480px) {
      .card {
        width: 90%;
        /* Something wrong with percentage */
      }
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card">
      <img class="card-image" src="https://picsum.photos/400/200" alt="Card Image">
      <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-text">This is a sample card with some content. It should be centered on the page with proper styling.</p>
        <a href="#" class="card-button">Learn More</a>
      </div>
    </div>
  </div>
</body>
</html>`,
    objective: 'Fix all CSS bugs to achieve the expected layout and styling.',
    constraints: [
      'Do NOT change the HTML',
      'Keep the same color scheme',
      'Card must be responsive'
    ],
    expectedOutput: 'Centered card with proper image sizing, correct units, and smooth hover transition.',
    completionCriteria: [
      'Card is centered horizontally AND vertically',
      'All values have proper CSS units',
      'Image maintains aspect ratio',
      'Button has smooth hover transition',
      'Responsive layout works on mobile'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'DEBUG-005',
    category: 'debugging',
    title: 'Fix Todo List Application',
    scenario: 'The todo list app has multiple bugs. Adding, completing, and deleting todos are all broken. The lead developer estimates there are 7 bugs. Find and fix them all.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
    .todo-input { padding: 10px; width: 70%; font-size: 16px; }
    .add-btn { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    .todo-list { list-style: none; padding: 0; margin-top: 20px; }
    .todo-item { display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #eee; }
    .todo-item.completed span { text-decoration: line-through; color: #888; }
    .todo-item span { flex: 1; }
    .todo-item button { margin-left: 10px; cursor: pointer; }
    .delete-btn { background: #ff4444; color: white; border: none; padding: 5px 10px; }
    .complete-btn { background: #44aa44; color: white; border: none; padding: 5px 10px; }
  </style>
</head>
<body>
  <h1>Todo List</h1>
  <input type="text" class="todo-input" id="todoInput" placeholder="Enter a new task...">
  <button class="add-btn" onclick="addTodo">Add</button>
  
  <ul class="todo-list" id="todoList"></ul>
  
  <script>
    let todos = [];
    
    function addTodo() {
      const input = document.getElementById('todoInput');
      const text = input.value;
      
      if (text.trim() = '') {
        alert('Please enter a task');
        return;
      }
      
      const todo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      
      todos.push(todo);
      input.value = '';
      renderTodos;
    }
    
    function toggleComplete(id) {
      const todo = todos.find(t => t.id = id);
      if (todo) {
        todo.completed != todo.completed;
      }
      renderTodos();
    }
    
    function deleteTodo(id) {
      todos = todos.filter(t => t.id !== id);
      // Missing render call
    }
    
    function renderTodos() {
      const list = document.getElementById('todoList');
      list.innerHtml = '';
      
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');
        
        li.innerHTML = \`
          <span>\${todo.text}</span>
          <button class="complete-btn" onclick="toggleComplete(\${todo.id})">✓</button>
          <button class="delete-btn" onclick="deleteTodo(\${todo.id})">✕</button>
        \`;
        
        list.appendChild(li);
      });
    }
  </script>
</body>
</html>`,
    objective: 'Find and fix all 7 bugs in the todo list application.',
    constraints: [
      'Keep the same structure and styling',
      'All CRUD operations must work',
      'Do NOT change the CSS'
    ],
    expectedOutput: 'Fully functional todo list where you can add, complete, and delete items.',
    completionCriteria: [
      'Adding new todos works',
      'Empty todos are prevented',
      'Completing todos toggles correctly',
      'Deleting todos removes them',
      'List re-renders after each action',
      'All event handlers work'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },
  {
    id: 'DEBUG-006',
    category: 'debugging',
    title: 'Fix API Data Fetching',
    scenario: 'The data fetching code is throwing errors and not displaying data correctly. The promise handling is broken and error states aren\'t managed properly.',
    givenCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 0 auto; padding: 20px; }
    .loading { color: blue; }
    .error { color: red; padding: 20px; background: #ffeeee; border-radius: 5px; }
    .user-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
    .user-card h3 { margin: 0 0 10px 0; }
    button { padding: 10px 20px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>User Directory</h1>
  <button onclick="fetchUsers">Load Users</button>
  <div id="status"></div>
  <div id="userList"></div>
  
  <script>
    async function fetchUsers() {
      const statusDiv = document.getElementById('status');
      const listDiv = document.getElementById('userList');
      
      statusDiv.innerHTML = '<p class="loading">Loading users...</p>';
      listDiv.innerHTML = '';
      
      try {
        const response = fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const users = response.json();
        statusDiv.innerHTML = '';
        displayUsers(users);
        
      } catch (error) {
        statusDiv.innerHTML = '<p class="error">Error: ' + error.message '</p>';
      }
    }
    
    function displayUsers(users) {
      const listDiv = document.getElementById('userList');
      
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        
        card.innerHTML = 
          '<h3>' + user.name + '</h3>' +
          '<p>Email: ' + user.email + '</p>' +
          '<p>Company: ' + user.company.name + '</p>' +
          '<p>City: ' + user.address.city + '</p>'
        ;
        
        listDiv.appendChild(card);
      });
    }
    
    // Also fetch a single user
    function fetchSingleUser(id) {
      fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json)
        .then(user => {
          console.log('User:', user.name);
        })
        .catch(error => {
          console.log('Error fetching user');
        });
    }
  </script>
</body>
</html>`,
    objective: 'Fix all bugs in the async data fetching code.',
    constraints: [
      'Keep using async/await in fetchUsers',
      'Keep using .then() in fetchSingleUser',
      'Must handle errors gracefully'
    ],
    expectedOutput: 'Working user directory that loads and displays user data from the API.',
    completionCriteria: [
      'Fetch uses await correctly',
      'Response.json() is awaited',
      'Button onclick is correct',
      'Error message concatenation is fixed',
      '.then() uses proper method calls',
      'Loading state shows correctly'
    ],
    difficulty: 'beginner',
    estimatedTime: '20-30 minutes'
  },

  // ==================== AI TASKS ====================
  {
    id: 'AI-001',
    category: 'ai',
    title: 'Write Effective AI Prompts for Code Generation',
    scenario: 'Your team is evaluating AI coding assistants. You need to write prompts that generate specific, useful code snippets. The prompts must be clear enough that the AI produces exactly what\'s needed.',
    givenCode: `// Your Task: Write prompts for each scenario

/* SCENARIO 1: Form Validation
   Need: Email validation function
   Requirements: Returns true/false, checks @ and domain
   
   Your Prompt:
   _______________________________________________
   _______________________________________________
   _______________________________________________
*/

/* SCENARIO 2: Data Transformation  
   Need: Function to convert array of objects to CSV string
   Input: [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]
   Output: "name,age\\nJohn,30\\nJane,25"
   
   Your Prompt:
   _______________________________________________
   _______________________________________________
   _______________________________________________
*/

/* SCENARIO 3: API Integration
   Need: Function to fetch weather data and extract temperature
   API: https://api.weather.com/v1/current?city=London
   Handle: Loading state, errors, success
   
   Your Prompt:
   _______________________________________________
   _______________________________________________
   _______________________________________________
*/

/* SCENARIO 4: UI Component
   Need: React/HTML toggle switch component
   Features: On/off state, accessible, animated
   
   Your Prompt:
   _______________________________________________
   _______________________________________________
   _______________________________________________
*/

/* SCENARIO 5: Error Handling
   Need: Wrapper function that retries failed async operations
   Parameters: function to retry, max attempts, delay between retries
   
   Your Prompt:
   _______________________________________________
   _______________________________________________
   _______________________________________________
*/

// After writing prompts, test them with an AI tool and paste the results`,
    objective: 'Write 5 precise, effective prompts that would generate the exact code needed for each scenario.',
    constraints: [
      'Prompts must be specific enough to get usable code',
      'Include input/output examples in prompts',
      'Specify language/framework if needed',
      'Include edge cases to handle'
    ],
    expectedOutput: 'Clear prompts that, when given to an AI, produce working code for each scenario.',
    completionCriteria: [
      'Each prompt is detailed and specific',
      'Input/output examples are included',
      'Error cases are mentioned',
      'Prompts tested with actual AI',
      'Generated code meets requirements'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },
  {
    id: 'AI-002',
    category: 'ai',
    title: 'Create AI-Assisted Code Review Checklist',
    scenario: 'You\'re building a tool that uses AI to review code. Create a comprehensive checklist of things the AI should check for, with example prompts for each category.',
    givenCode: `// AI Code Review Checklist Template
// Fill in the prompts for each category

const codeReviewChecklist = {
  
  // 1. Code Quality
  quality: {
    description: "Check for clean code practices",
    items: [
      "Variable naming conventions",
      "Function length and complexity",
      "Code duplication"
    ],
    aiPrompt: "" // Write a prompt that asks AI to check these
  },
  
  // 2. Potential Bugs
  bugs: {
    description: "Identify possible bugs and issues",
    items: [
      "Off-by-one errors",
      "Null/undefined handling",
      "Type mismatches"
    ],
    aiPrompt: "" // Write a prompt for bug detection
  },
  
  // 3. Security
  security: {
    description: "Check for security vulnerabilities",
    items: [
      "Input validation",
      "SQL injection risks",
      "XSS vulnerabilities"
    ],
    aiPrompt: "" // Write a security audit prompt
  },
  
  // 4. Performance
  performance: {
    description: "Identify performance issues",
    items: [
      "Unnecessary loops",
      "Memory leaks",
      "Inefficient algorithms"
    ],
    aiPrompt: "" // Write a performance review prompt
  },
  
  // 5. Documentation
  documentation: {
    description: "Check code documentation",
    items: [
      "Function comments",
      "Complex logic explanations",
      "API documentation"
    ],
    aiPrompt: "" // Write a documentation check prompt
  }
};

// Example code to review (for testing your prompts):
const sampleCode = \`
function proc(d) {
  var r = [];
  for(var i = 0; i <= d.length; i++) {
    if(d[i].active == true) {
      r.push(d[i].name);
    }
  }
  return r;
}
\`;

// Test your prompts with this code`,
    objective: 'Create comprehensive AI prompts for each code review category.',
    constraints: [
      'Prompts must be specific to each category',
      'Should request actionable feedback',
      'Include severity levels in output format',
      'Ask for fix suggestions'
    ],
    expectedOutput: 'Complete checklist with effective prompts that produce useful code review feedback.',
    completionCriteria: [
      'All 5 categories have detailed prompts',
      'Prompts ask for specific issues',
      'Output format is specified',
      'Prompts tested against sample code',
      'AI feedback is actionable'
    ],
    difficulty: 'intermediate',
    estimatedTime: '35-45 minutes'
  },
  {
    id: 'AI-003',
    category: 'ai',
    title: 'Design AI Test Case Generator',
    scenario: 'Create a system that uses AI to generate test cases for functions. You need to design prompts that generate comprehensive test cases including edge cases.',
    givenCode: `// Functions that need test cases generated by AI

// Function 1: Calculate discount
function calculateDiscount(price, discountPercent, memberType) {
  // memberType: 'regular', 'premium', 'vip'
  // VIP gets extra 5%, Premium gets extra 2%
  // Returns final price after discount
}

// Function 2: Validate credit card
function validateCreditCard(cardNumber) {
  // Checks: length (13-19 digits), Luhn algorithm, starts with valid prefix
  // Returns: { valid: boolean, cardType: string, errors: [] }
}

// Function 3: Parse date string
function parseDate(dateString, format) {
  // Formats: 'YYYY-MM-DD', 'MM/DD/YYYY', 'DD-MM-YYYY'
  // Returns Date object or null if invalid
}

// Function 4: Rate limiter
function checkRateLimit(userId, action, timeWindowMs, maxRequests) {
  // Returns: { allowed: boolean, remainingRequests: number, resetTime: Date }
}

/* YOUR TASK:
   For each function, write an AI prompt that generates:
   1. Normal test cases (happy path)
   2. Edge cases (boundaries, limits)
   3. Error cases (invalid inputs)
   4. Special cases (nulls, empty values, special characters)
   
   Format your prompts below:
*/

// Prompt for calculateDiscount:
const discountTestPrompt = \`

\`;

// Prompt for validateCreditCard:
const cardTestPrompt = \`

\`;

// Prompt for parseDate:
const dateTestPrompt = \`

\`;

// Prompt for checkRateLimit:
const rateLimitTestPrompt = \`

\`;

// After writing prompts, run them through AI and document the generated test cases`,
    objective: 'Write prompts that generate comprehensive test cases covering all scenarios.',
    constraints: [
      'Must cover happy path, edge cases, and error cases',
      'Test cases should be in a runnable format',
      'Include expected outputs',
      'Cover boundary conditions'
    ],
    expectedOutput: 'Prompts that produce 10+ useful test cases for each function.',
    completionCriteria: [
      'Normal cases covered',
      'Edge cases covered',
      'Error cases covered',
      'Prompts generate runnable tests',
      'Test cases include assertions'
    ],
    difficulty: 'intermediate',
    estimatedTime: '40-50 minutes'
  },
  {
    id: 'AI-004',
    category: 'ai',
    title: 'Build AI Documentation Generator',
    scenario: 'Create prompts that use AI to generate professional documentation for undocumented code. The documentation should include descriptions, parameters, return values, examples, and edge cases.',
    givenCode: `// Undocumented functions - Create AI prompts to generate docs for these

function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function deepMerge(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function retry(fn, retriesLeft = 3, interval = 1000, exponential = false) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retriesLeft === 0) {
          reject(error);
          return;
        }
        setTimeout(() => {
          const nextInterval = exponential ? interval * 2 : interval;
          retry(fn, retriesLeft - 1, nextInterval, exponential)
            .then(resolve)
            .catch(reject);
        }, interval);
      });
  });
}

/* YOUR TASK:
   Create prompts that will generate JSDoc-style documentation for each function
   The documentation should include:
   - Description
   - @param tags for each parameter
   - @returns description
   - @example with usage code
   - @throws if applicable
   - Notes about edge cases
*/

// Your prompts:
const debounceDocPrompt = \`

\`;

const deepMergeDocPrompt = \`

\`;

const retryDocPrompt = \`

\`;`,
    objective: 'Create prompts that generate professional, complete documentation.',
    constraints: [
      'Must use JSDoc format',
      'Include working examples',
      'Document all parameters',
      'Explain return values clearly'
    ],
    expectedOutput: 'Prompts that produce documentation good enough for an open-source library.',
    completionCriteria: [
      'All functions documented',
      'Parameters fully described',
      'Examples are correct and runnable',
      'Edge cases noted',
      'Documentation is professional quality'
    ],
    difficulty: 'intermediate',
    estimatedTime: '35-45 minutes'
  },
  {
    id: 'AI-005',
    category: 'ai',
    title: 'AI-Powered Code Refactoring',
    scenario: 'Use AI to refactor messy code into clean, maintainable code. Write prompts that ask AI to improve code quality while maintaining functionality.',
    givenCode: `// Messy code that needs refactoring via AI prompts

// Problem 1: Long function with multiple responsibilities
function processOrder(o) {
  if(!o) return null;
  if(!o.items) return null;
  if(o.items.length==0) return null;
  var t=0;for(var i=0;i<o.items.length;i++){t+=o.items[i].price*o.items[i].qty;}
  var d=0;if(o.coupon){if(o.coupon=='SAVE10'){d=t*0.1;}else if(o.coupon=='SAVE20'){d=t*0.2;}else if(o.coupon=='HALF'){d=t*0.5;}}
  var tax=t*0.08;var ship=t>100?0:10;var final=t-d+tax+ship;
  var email="Order Confirmation\\n";email+="Items: "+o.items.length+"\\n";email+="Subtotal: $"+t+"\\n";email+="Discount: -$"+d+"\\n";email+="Tax: $"+tax+"\\n";email+="Shipping: $"+ship+"\\n";email+="Total: $"+final;
  console.log(email);
  return{total:final,breakdown:{subtotal:t,discount:d,tax:tax,shipping:ship}};
}

// Problem 2: Deeply nested conditionals
function getAccessLevel(user) {
  if (user) {
    if (user.role) {
      if (user.role === 'admin') {
        if (user.verified) {
          if (user.twoFactorEnabled) {
            return 'full';
          } else {
            return 'high';
          }
        } else {
          return 'medium';
        }
      } else if (user.role === 'moderator') {
        if (user.verified) {
          return 'medium';
        } else {
          return 'low';
        }
      } else {
        return 'basic';
      }
    } else {
      return 'none';
    }
  } else {
    return 'none';
  }
}

// Problem 3: Magic numbers and poor naming
function calc(a, b, c) {
  var x = a * 0.15;
  var y = b * 0.08;
  var z = c > 50000 ? c * 0.02 : 0;
  if (a > 10) x = x * 1.5;
  if (b > 5) y = y * 1.25;
  return x + y + z + 250;
}

/* YOUR TASK:
   Write prompts for AI to:
   1. Refactor processOrder into smaller, single-responsibility functions
   2. Flatten the nested conditionals in getAccessLevel
   3. Add meaningful names and constants to calc
   
   The prompts should specify:
   - What improvements are needed
   - What coding standards to follow
   - That functionality must be preserved
*/

const refactorPrompt1 = \`

\`;

const refactorPrompt2 = \`

\`;

const refactorPrompt3 = \`

\`;`,
    objective: 'Write prompts that produce clean, well-refactored code.',
    constraints: [
      'Original functionality must be preserved',
      'Refactored code should follow best practices',
      'Use meaningful variable/function names',
      'Separate concerns properly'
    ],
    expectedOutput: 'Prompts that transform messy code into clean, maintainable code.',
    completionCriteria: [
      'Functions are split by responsibility',
      'Nested conditionals are flattened',
      'Magic numbers replaced with constants',
      'Names are descriptive',
      'Code is readable and maintainable'
    ],
    difficulty: 'intermediate',
    estimatedTime: '40-50 minutes'
  },

  // ==================== SOFTWARE & IT TASKS ====================
  {
    id: 'IT-001',
    category: 'software-it',
    title: 'Set Up Git Repository Structure',
    scenario: 'You are setting up a new project repository. Create the proper folder structure, essential files, and git configuration for a professional project.',
    givenCode: `# Project: E-commerce Dashboard
# Type: React + Node.js Full Stack Application

# Your task: Create the following files with appropriate content

# 1. .gitignore - What files should be ignored?
# Create appropriate gitignore content for a Node.js/React project
# Include: node_modules, build folders, env files, IDE settings, logs

.gitignore:
"""
# TODO: Add your gitignore content
"""

# 2. README.md - Project documentation
# Include: Project title, description, setup instructions, scripts, tech stack

README.md:
"""
# TODO: Add your README content
"""

# 3. CONTRIBUTING.md - Contribution guidelines
# Include: How to contribute, branch naming, commit messages, PR process

CONTRIBUTING.md:
"""
# TODO: Add contribution guidelines
"""

# 4. Folder structure - Create appropriate structure
# Show the folders and their purposes

project-structure.txt:
"""
├── TODO: Create folder structure
"""

# 5. package.json scripts - What npm scripts should exist?
# List essential scripts for development workflow

essential-scripts:
"""
"scripts": {
  // TODO: Add essential scripts
}
"""`,
    objective: 'Create professional project setup files and structure.',
    constraints: [
      'Use industry-standard patterns',
      'Include all necessary ignored files',
      'README should be beginner-friendly',
      'Structure should separate concerns'
    ],
    expectedOutput: 'Complete set of setup files ready to commit to a new repository.',
    completionCriteria: [
      '.gitignore covers all necessary files',
      'README has clear setup instructions',
      'CONTRIBUTING.md is professional',
      'Folder structure is logical',
      'Scripts cover dev workflow'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },
  {
    id: 'IT-002',
    category: 'software-it',
    title: 'Create Environment Configuration',
    scenario: 'The DevOps team needs environment configuration files for development, staging, and production. Create configuration files that handle different environments properly.',
    givenCode: `// Configuration Requirements:
// - Database URLs (different per environment)
// - API keys (some shared, some environment-specific)
// - Feature flags
// - Logging levels
// - External service URLs

// 1. Create .env.example (template with dummy values)
// This file is committed to git to show required variables

".env.example":
\`
# TODO: Create environment template
# Database
# API Keys
# Feature Flags
# Logging
# External Services
\`

// 2. Create config loader that reads environment variables
// config.js - handles defaults and validation

"config.js":
\`
// TODO: Create configuration loader
// Should:
// - Read from process.env
// - Provide defaults for development
// - Validate required variables
// - Export configuration object
\`

// 3. Create environment-specific settings
// Different values for dev, staging, prod

"environments.md":
\`
# TODO: Document environment differences

## Development
- Database: 
- Logging: 
- Features:

## Staging
- Database:
- Logging:
- Features:

## Production
- Database:
- Logging:
- Features:
\`

// 4. Create validation script
// Script to verify environment is properly configured

"validate-env.js":
\`
// TODO: Script that checks all required env vars are set
// Exits with error if configuration is invalid
\``,
    objective: 'Create complete environment configuration system for multi-environment deployment.',
    constraints: [
      'Never commit actual secrets',
      '.env.example has placeholder values only',
      'Config loader validates required variables',
      'Handle missing variables gracefully'
    ],
    expectedOutput: 'Environment configuration system that works across all deployment stages.',
    completionCriteria: [
      '.env.example covers all variables',
      'Config loader works correctly',
      'Validation catches missing variables',
      'Environments are clearly documented',
      'Secrets are never in code'
    ],
    difficulty: 'beginner',
    estimatedTime: '35-45 minutes'
  },
  {
    id: 'IT-003',
    category: 'software-it',
    title: 'Write Commit Messages and PR Description',
    scenario: 'You\'ve completed a feature that adds user authentication. Write proper git commit messages for each step and a professional pull request description.',
    givenCode: `# Feature: User Authentication System
# Changes made:
# 1. Created User model with email, password hash, name
# 2. Added login endpoint with JWT token generation
# 3. Added register endpoint with validation
# 4. Added password reset request endpoint
# 5. Created authentication middleware
# 6. Added unit tests for auth functions
# 7. Updated API documentation

# YOUR TASK: Write commit messages for each change

# Commit 1: User model
git commit -m ""

# Commit 2: Login endpoint
git commit -m ""

# Commit 3: Register endpoint
git commit -m ""

# Commit 4: Password reset
git commit -m ""

# Commit 5: Auth middleware
git commit -m ""

# Commit 6: Unit tests
git commit -m ""

# Commit 7: Documentation
git commit -m ""

# Now write the Pull Request description:

"""
## Pull Request: [Title]

### Description


### Changes Made


### Testing Done


### Screenshots/Evidence


### Checklist
- [ ] 
- [ ] 
- [ ] 

### Related Issues


### Notes for Reviewers

"""`,
    objective: 'Write professional commit messages and a complete PR description.',
    constraints: [
      'Follow conventional commit format',
      'Commit messages should be descriptive but concise',
      'PR description should be comprehensive',
      'Include testing information'
    ],
    expectedOutput: 'Well-written commits and PR description ready for code review.',
    completionCriteria: [
      'Commits follow conventional format',
      'Commit messages explain what and why',
      'PR describes all changes',
      'Testing is documented',
      'Checklist is complete'
    ],
    difficulty: 'beginner',
    estimatedTime: '25-35 minutes'
  },
  {
    id: 'IT-004',
    category: 'software-it',
    title: 'Create Error Logging System',
    scenario: 'Implement a simple error logging utility that can be used across the application. It should log to console in development and could be extended for production logging.',
    givenCode: `// Logger Requirements:
// - Different log levels: debug, info, warn, error
// - Include timestamp
// - Include source/context
// - Colored output for console
// - Can be enabled/disabled per level
// - Should work in browser and Node.js

// Create the logger utility:

const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

class Logger {
  constructor(context, minLevel = LogLevel.DEBUG) {
    // TODO: Initialize logger with context and minimum level
  }
  
  debug(message, data = null) {
    // TODO: Log debug message (blue color if in terminal)
  }
  
  info(message, data = null) {
    // TODO: Log info message (green color)
  }
  
  warn(message, data = null) {
    // TODO: Log warning message (yellow color)
  }
  
  error(message, error = null) {
    // TODO: Log error message (red color)
    // Should include stack trace if error object provided
  }
  
  formatMessage(level, message) {
    // TODO: Format with timestamp and context
    // Example: [2024-01-15 10:30:45] [INFO] [UserService] User logged in
  }
  
  shouldLog(level) {
    // TODO: Check if this level should be logged
  }
}

// Usage example:
const userLogger = new Logger('UserService', LogLevel.INFO);
userLogger.debug('This will not show'); // Below minimum level
userLogger.info('User logged in', { userId: 123 });
userLogger.error('Failed to save user', new Error('Database connection failed'));

// Factory function for easy creation
function createLogger(context) {
  const level = process.env.NODE_ENV === 'production' ? LogLevel.WARN : LogLevel.DEBUG;
  return new Logger(context, level);
}`,
    objective: 'Implement a complete, reusable logging utility.',
    constraints: [
      'Must support all log levels',
      'Timestamps must be readable',
      'Context must be included',
      'Lower levels are filtered out'
    ],
    expectedOutput: 'Working logger utility that produces formatted, leveled log output.',
    completionCriteria: [
      'All log levels work',
      'Filtering by level works',
      'Timestamps are included',
      'Context is shown',
      'Error stacks are logged',
      'Factory function works'
    ],
    difficulty: 'beginner',
    estimatedTime: '30-40 minutes'
  },
  {
    id: 'IT-005',
    category: 'software-it',
    title: 'Create API Documentation Template',
    scenario: 'Document a REST API following industry standards. Create clear, developer-friendly documentation that other team members can use.',
    givenCode: `# API: User Management Service
# Base URL: https://api.company.com/v1

# Endpoints to document:

# 1. GET /users - List all users
#    Query params: page, limit, sort, filter
#    Response: Array of user objects

# 2. GET /users/:id - Get single user
#    Response: User object

# 3. POST /users - Create user
#    Body: name, email, role
#    Response: Created user with ID

# 4. PUT /users/:id - Update user
#    Body: Partial user object
#    Response: Updated user

# 5. DELETE /users/:id - Delete user
#    Response: Success message

# YOUR TASK: Create complete API documentation

"""
# User Management API Documentation

## Overview
TODO: Write overview

## Authentication
TODO: Document auth method

## Base URL
TODO: Document base URL

## Endpoints

### List Users
TODO: Document this endpoint with:
- Method and URL
- Query parameters (with types and descriptions)
- Example request
- Example response
- Error responses

### Get User
TODO: Document

### Create User
TODO: Document

### Update User
TODO: Document

### Delete User
TODO: Document

## Data Models

### User Object
TODO: Document all fields with types

## Error Handling
TODO: Document error format and codes

## Rate Limiting
TODO: Document limits

## Examples
TODO: Add curl examples
"""`,
    objective: 'Create comprehensive API documentation that developers can use immediately.',
    constraints: [
      'Use consistent format throughout',
      'Include all parameters and responses',
      'Add realistic example data',
      'Document error cases'
    ],
    expectedOutput: 'Complete API documentation ready to share with other developers.',
    completionCriteria: [
      'All endpoints documented',
      'Parameters have descriptions and types',
      'Request/response examples included',
      'Error responses documented',
      'Data models described',
      'Curl examples work'
    ],
    difficulty: 'beginner',
    estimatedTime: '35-45 minutes'
  }
];

// Function to get random task
export function getRandomTask(category?: string): PracticalTask {
  let availableTasks = practicalTasks;
  
  if (category && category !== 'all') {
    availableTasks = practicalTasks.filter(t => t.category === category);
  }
  
  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  return availableTasks[randomIndex];
}

// Function to get tasks by category
export function getTasksByCategory(category: string): PracticalTask[] {
  if (category === 'all') return practicalTasks;
  return practicalTasks.filter(t => t.category === category);
}

// Get category stats
export function getCategoryStats() {
  const categories = ['web', 'app-logic', 'debugging', 'ai', 'software-it'];
  return categories.map(cat => ({
    category: cat,
    count: practicalTasks.filter(t => t.category === cat).length
  }));
}
