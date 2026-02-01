export interface DayContent {
  day: number;
  title: string;
  objectives: string[];
  concepts: { title: string; explanation: string }[];
  practiceTasks: string[];
  debuggingTask: { code: string; hint: string; solution: string };
  aiTask: string;
  dailyChallenge: string;
  tips: string[];
}

export interface WeekOverview {
  week: number;
  title: string;
  theme: string;
  focus: string[];
}

export const weekOverviews: WeekOverview[] = [
  {
    week: 1,
    title: "Basics & Foundations",
    theme: "Building Your Foundation",
    focus: [
      "Understanding how the web works",
      "HTML structure and semantics",
      "CSS fundamentals and styling",
      "Introduction to programming logic",
      "Setting up your development environment",
      "Version control basics with Git"
    ]
  },
  {
    week: 2,
    title: "Practical Development Skills",
    theme: "Hands-On Coding",
    focus: [
      "JavaScript fundamentals",
      "DOM manipulation",
      "Event handling",
      "Responsive design",
      "Working with APIs",
      "Basic app development concepts"
    ]
  },
  {
    week: 3,
    title: "Problem Solving, Debugging & AI",
    theme: "Think Like a Developer",
    focus: [
      "Debugging strategies",
      "Error identification",
      "AI tools for developers",
      "Prompt engineering basics",
      "Code optimization",
      "Testing fundamentals"
    ]
  },
  {
    week: 4,
    title: "Mini Projects & Evaluation",
    theme: "Prove Your Skills",
    focus: [
      "Building complete projects",
      "Code review practices",
      "Portfolio development",
      "Interview preparation",
      "Final evaluations",
      "Career readiness"
    ]
  }
];

export const trainingDays: DayContent[] = [
  // WEEK 1 - Foundations
  {
    day: 1,
    title: "Welcome & Development Environment Setup",
    objectives: [
      "Understand the training program structure",
      "Set up VS Code and essential extensions",
      "Create your first HTML file",
      "Understand how websites work"
    ],
    concepts: [
      {
        title: "How the Web Works",
        explanation: "When you type a website address, your browser sends a request to a server. The server responds with files (HTML, CSS, JavaScript) that your browser displays as a webpage. Think of it like ordering food: you make a request, the kitchen (server) prepares it, and it's delivered to you."
      },
      {
        title: "What is HTML?",
        explanation: "HTML (HyperText Markup Language) is the skeleton of every webpage. It tells the browser WHAT to display - headings, paragraphs, images, links, etc. It uses 'tags' like <h1> for headings and <p> for paragraphs."
      },
      {
        title: "Development Environment",
        explanation: "A development environment is your workspace for coding. VS Code is a free, powerful code editor. Extensions add extra features like auto-completion, error highlighting, and live preview."
      }
    ],
    practiceTasks: [
      "Download and install VS Code",
      "Install extensions: Live Server, Prettier, HTML CSS Support",
      "Create a folder called 'training-projects'",
      "Create your first file: index.html",
      "Write a basic HTML structure with a heading and paragraph"
    ],
    debuggingTask: {
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page<title>
</head>
<body>
  <h1>Welcome to My Website<h1>
  <p>This is my first webpage.</p>
</body>
</html>`,
      hint: "Look carefully at the closing tags. Something is missing!",
      solution: "The closing tags </title> and </h1> are missing the forward slash. They should be </title> and </h1>"
    },
    aiTask: "Ask an AI assistant: 'Explain what HTML tags are and give me 5 common examples with their uses.' Write down what you learn.",
    dailyChallenge: "Create an HTML page about yourself with your name as a heading, a short bio paragraph, and three things you want to learn.",
    tips: [
      "Always save your files with Ctrl+S (Cmd+S on Mac)",
      "Use Live Server extension to see changes instantly",
      "Keep your code organized with proper indentation"
    ]
  },
  {
    day: 2,
    title: "HTML Document Structure & Common Tags",
    objectives: [
      "Understand HTML document structure",
      "Learn essential HTML tags",
      "Create structured content with headings and lists",
      "Understand semantic HTML"
    ],
    concepts: [
      {
        title: "HTML Document Structure",
        explanation: "Every HTML page has a structure: <!DOCTYPE html> tells the browser it's HTML5, <html> wraps everything, <head> contains metadata (title, links to CSS), and <body> contains visible content."
      },
      {
        title: "Headings (h1-h6)",
        explanation: "Headings range from <h1> (most important, largest) to <h6> (least important, smallest). Use <h1> for main titles, <h2> for sections, and so on. Don't skip levels!"
      },
      {
        title: "Lists",
        explanation: "<ul> creates unordered (bullet) lists, <ol> creates ordered (numbered) lists. Each item inside uses <li>. Lists are great for navigation menus, features, or any grouped items."
      }
    ],
    practiceTasks: [
      "Create a new HTML file called 'about-me.html'",
      "Add proper document structure (DOCTYPE, html, head, body)",
      "Add a page title in the <head> section",
      "Create sections with different heading levels (h1, h2, h3)",
      "Add an unordered list of your hobbies",
      "Add an ordered list of your top 3 goals"
    ],
    debuggingTask: {
      code: `<ul>
  <li>First item
  <li>Second item</li>
  <li>Third item</ol>
</ul>`,
      hint: "Check if all tags are properly closed and matched",
      solution: "Line 2 is missing </li>, and line 4 has </ol> instead of </li>. Correct: <li>First item</li> and <li>Third item</li>"
    },
    aiTask: "Use AI to generate a list of 10 most-used HTML tags. For each tag, write one sentence explaining when to use it.",
    dailyChallenge: "Create a 'My Favorite Things' page with: a main heading, 3 categories (each with h2), and a list under each category.",
    tips: [
      "Use only ONE <h1> per page for SEO",
      "Semantic HTML helps screen readers and search engines",
      "Always indent nested elements for readability"
    ]
  },
  {
    day: 3,
    title: "Links, Images & Navigation",
    objectives: [
      "Create hyperlinks to other pages",
      "Add and size images properly",
      "Build a simple navigation menu",
      "Understand file paths"
    ],
    concepts: [
      {
        title: "Hyperlinks",
        explanation: "The <a> tag creates links. The 'href' attribute specifies where to go. Example: <a href='https://google.com'>Visit Google</a>. Use target='_blank' to open in a new tab."
      },
      {
        title: "Images",
        explanation: "The <img> tag displays images. It needs 'src' (source path) and 'alt' (description for accessibility). Example: <img src='photo.jpg' alt='A beautiful sunset'>. Images are self-closing tags."
      },
      {
        title: "File Paths",
        explanation: "Relative paths point from your current file location: 'images/photo.jpg' means a folder called 'images' in the same directory. '../' goes up one folder level. Absolute paths start with http:// or https://."
      }
    ],
    practiceTasks: [
      "Create a navigation menu with links to 3 pages",
      "Add external links to useful websites",
      "Create an 'images' folder and add some images",
      "Display images with proper alt text",
      "Link an image (clickable image)",
      "Create internal page links (anchor links)"
    ],
    debuggingTask: {
      code: `<a href="contact.html">Contact Us<a>
<img scr="logo.png" alt="Company Logo">
<a href="https://google.com" target="blank">Google</a>`,
      hint: "Look for typos in attribute names and missing characters",
      solution: "Line 1: missing / in closing </a>. Line 2: 'scr' should be 'src'. Line 3: target should be '_blank' (with underscore)"
    },
    aiTask: "Ask AI: 'What are best practices for image optimization on websites?' Summarize 5 key points.",
    dailyChallenge: "Create a simple portfolio page with: navigation menu, your photo (or placeholder), links to your social media, and links to 3 websites you admire.",
    tips: [
      "Always use descriptive alt text for accessibility",
      "Optimize images for web (smaller file sizes load faster)",
      "Use relative paths for local files, absolute for external"
    ]
  },
  {
    day: 4,
    title: "Introduction to CSS - Styling Basics",
    objectives: [
      "Understand what CSS does",
      "Learn three ways to add CSS",
      "Apply basic styling (colors, fonts, sizes)",
      "Understand CSS selectors"
    ],
    concepts: [
      {
        title: "What is CSS?",
        explanation: "CSS (Cascading Style Sheets) controls HOW your HTML looks - colors, fonts, spacing, layout. If HTML is the skeleton, CSS is the skin and clothing. Without CSS, websites would be plain black text on white background."
      },
      {
        title: "Three Ways to Add CSS",
        explanation: "1) Inline: style attribute on element (not recommended for large projects). 2) Internal: <style> tag in <head>. 3) External: separate .css file linked with <link> tag (best practice!)."
      },
      {
        title: "CSS Selectors",
        explanation: "Selectors target HTML elements to style. 'p' targets all paragraphs. '.classname' targets elements with that class. '#idname' targets the element with that ID. Classes are reusable; IDs are unique."
      }
    ],
    practiceTasks: [
      "Create a styles.css file and link it to your HTML",
      "Change the background color of the page",
      "Style headings with different colors and sizes",
      "Add a class to multiple elements and style them",
      "Use an ID for a unique element style",
      "Change font family and font size"
    ],
    debuggingTask: {
      code: `.heading {
  color; blue;
  font-size: 24 px;
  background-color: #fff
}

#main-title
  color: red;
}`,
      hint: "Check for proper CSS syntax: colons, semicolons, brackets",
      solution: "Line 2: semicolon after 'color' should be colon. Line 3: no space in '24px'. Line 4: missing semicolon. Line 7: missing opening curly brace."
    },
    aiTask: "Ask AI to generate a color palette for a professional website. Get 5 colors with their hex codes and suggested uses.",
    dailyChallenge: "Restyle your 'About Me' page: add a background color, style all headings, change paragraph fonts, and add a colored border around the page.",
    tips: [
      "Use external CSS files for maintainability",
      "Class names should be descriptive (e.g., 'nav-link' not 'blue-text')",
      "Always end CSS properties with semicolons"
    ]
  },
  {
    day: 5,
    title: "CSS Box Model & Layout Basics",
    objectives: [
      "Understand the CSS Box Model",
      "Apply margin, padding, and borders",
      "Control element dimensions",
      "Center elements on page"
    ],
    concepts: [
      {
        title: "The Box Model",
        explanation: "Every HTML element is a box with four parts: Content (the actual text/image), Padding (space inside the border), Border (the edge), and Margin (space outside the border). Think of it like a framed picture: the picture is content, the mat is padding, the frame is border, and the wall space is margin."
      },
      {
        title: "Margin vs Padding",
        explanation: "Padding adds space INSIDE the element (between content and border). Margin adds space OUTSIDE the element (between this element and others). Background color fills the padding area but not the margin."
      },
      {
        title: "Box Sizing",
        explanation: "By default, width/height only apply to content. Adding padding/border increases total size. Use 'box-sizing: border-box' to include padding and border in the specified width/height."
      }
    ],
    practiceTasks: [
      "Create a card component with padding and border",
      "Add margin between multiple cards",
      "Set fixed width and height on elements",
      "Use border-radius for rounded corners",
      "Center a div using margin: auto",
      "Experiment with different border styles"
    ],
    debuggingTask: {
      code: `.card {
  width: 300px;
  padding: 20px;
  margin 10px auto;
  border: 2px solid blue
  border-radius: 8;
}`,
      hint: "Check for missing colons, semicolons, and units",
      solution: "Line 4: missing colon after 'margin'. Line 5: missing semicolon at end. Line 6: missing 'px' unit on border-radius value."
    },
    aiTask: "Ask AI: 'Create a CSS code snippet for a professional-looking card component with shadow.' Implement it in your project.",
    dailyChallenge: "Create a profile card with: a colored border, rounded corners, padding inside, proper margins, a centered layout, and a subtle shadow effect.",
    tips: [
      "Add 'box-sizing: border-box' to all elements with * { box-sizing: border-box; }",
      "Use browser DevTools (F12) to visualize the box model",
      "Shorthand: margin: 10px 20px means top/bottom 10px, left/right 20px"
    ]
  },
  {
    day: 6,
    title: "CSS Flexbox - Modern Layouts",
    objectives: [
      "Understand Flexbox concepts",
      "Create flexible layouts",
      "Align items horizontally and vertically",
      "Build a navigation bar with Flexbox"
    ],
    concepts: [
      {
        title: "What is Flexbox?",
        explanation: "Flexbox is a CSS layout mode that makes it easy to arrange items in rows or columns. Add 'display: flex' to a container, and its children become flex items that can be easily aligned and distributed."
      },
      {
        title: "Flex Direction & Justify Content",
        explanation: "flex-direction controls the main axis (row = horizontal, column = vertical). justify-content aligns items along the main axis: flex-start, flex-end, center, space-between, space-around, space-evenly."
      },
      {
        title: "Align Items",
        explanation: "align-items positions items on the cross axis (perpendicular to main). Values: flex-start, flex-end, center, stretch, baseline. Combined with justify-content, you can perfectly center anything!"
      }
    ],
    practiceTasks: [
      "Create a flex container with three boxes",
      "Experiment with all justify-content values",
      "Experiment with all align-items values",
      "Build a horizontal navigation bar",
      "Create a centered hero section",
      "Make a footer with items spread across"
    ],
    debuggingTask: {
      code: `.nav {
  display: flexbox;
  justify-content: between;
  align-item: center;
}

.nav-item {
  flex: 1 1 0;
}`,
      hint: "Check the exact property names and values for Flexbox",
      solution: "Line 2: 'flexbox' should be 'flex'. Line 3: 'between' should be 'space-between'. Line 4: 'align-item' should be 'align-items'."
    },
    aiTask: "Ask AI to explain when to use Flexbox vs CSS Grid. Create a comparison chart with 5 scenarios for each.",
    dailyChallenge: "Build a complete navigation bar: logo on left, menu items centered, login button on right. All using Flexbox!",
    tips: [
      "Use 'gap' property for spacing between flex items",
      "flex: 1 makes items grow equally to fill space",
      "Flexbox Froggy game is great for practice!"
    ]
  },
  {
    day: 7,
    title: "Introduction to Git & GitHub",
    objectives: [
      "Understand version control",
      "Install and configure Git",
      "Learn basic Git commands",
      "Create your first GitHub repository"
    ],
    concepts: [
      {
        title: "What is Version Control?",
        explanation: "Version control tracks changes to your code over time. It lets you save snapshots (commits), go back to previous versions, and collaborate with others. Think of it like 'undo' on steroids, with history!"
      },
      {
        title: "Git vs GitHub",
        explanation: "Git is the version control tool installed on your computer. GitHub is a website that hosts Git repositories online, enabling collaboration, backup, and sharing. Git is the engine; GitHub is the garage where you park and share."
      },
      {
        title: "Basic Git Workflow",
        explanation: "1) git init - start tracking a folder. 2) git add - stage changes. 3) git commit - save a snapshot with message. 4) git push - upload to GitHub. 5) git pull - download latest changes."
      }
    ],
    practiceTasks: [
      "Install Git on your computer",
      "Configure your name and email in Git",
      "Create a GitHub account",
      "Initialize a Git repository in your project folder",
      "Make your first commit",
      "Create a repository on GitHub and push your code"
    ],
    debuggingTask: {
      code: `# These Git commands have errors
git innit
git add .
git commit "First commit"
git push origin mian`,
      hint: "Check for typos in commands and missing flags",
      solution: "Line 1: 'innit' should be 'init'. Line 3: missing -m flag, should be git commit -m 'First commit'. Line 4: 'mian' should be 'main'."
    },
    aiTask: "Ask AI to create a Git cheat sheet with the 15 most common commands. Save it as a reference document.",
    dailyChallenge: "Push all your training project files to a GitHub repository called 'training-portfolio'. Write meaningful commit messages.",
    tips: [
      "Commit often with clear messages describing what changed",
      "Never commit sensitive information (passwords, API keys)",
      "Create a .gitignore file to exclude unnecessary files"
    ]
  },
  // WEEK 2 - Practical Development
  {
    day: 8,
    title: "JavaScript Basics - Variables & Data Types",
    objectives: [
      "Understand what JavaScript does",
      "Declare variables with let, const, var",
      "Learn data types (string, number, boolean)",
      "Use console.log for debugging"
    ],
    concepts: [
      {
        title: "What is JavaScript?",
        explanation: "JavaScript makes websites interactive. While HTML provides structure and CSS provides style, JavaScript provides behavior - responding to clicks, validating forms, updating content dynamically, and much more."
      },
      {
        title: "Variables",
        explanation: "Variables store data. Use 'let' for values that change, 'const' for values that stay the same, avoid 'var' (old way). Example: let age = 25; const name = 'John'; Variable names should be descriptive!"
      },
      {
        title: "Data Types",
        explanation: "String: text in quotes ('hello'). Number: numeric values (42, 3.14). Boolean: true or false. Null: intentionally empty. Undefined: not yet assigned. Arrays: lists [1,2,3]. Objects: {key: value}."
      }
    ],
    practiceTasks: [
      "Create a script.js file and link it to HTML",
      "Declare variables for your name, age, and favorite color",
      "Use console.log to print variable values",
      "Practice string concatenation",
      "Try basic math operations (+, -, *, /)",
      "Use typeof to check data types"
    ],
    debuggingTask: {
      code: `const userName = "Alice";
userName = "Bob";

let age = "25";
let nextYear = age + 1;
console.log(nextYear);

const greeting = 'Hello, " + userName;`,
      hint: "Think about const vs let, string vs number, and quote consistency",
      solution: "Line 2: Can't reassign const, use let. Line 5: '25' is string, so result is '251' not 26 - use Number(age)+1. Line 8: Mismatched quotes - use consistent quotes."
    },
    aiTask: "Ask AI: 'What are the differences between let, const, and var in JavaScript?' Summarize the key points with examples.",
    dailyChallenge: "Create a 'personal info' script that stores your details in variables and prints a formatted introduction to the console.",
    tips: [
      "Always use const unless you need to reassign",
      "Use camelCase for variable names: firstName, lastName",
      "Open browser DevTools Console to see console.log output"
    ]
  },
  {
    day: 9,
    title: "JavaScript Operators & Conditionals",
    objectives: [
      "Use comparison operators",
      "Understand logical operators",
      "Write if/else statements",
      "Use ternary operator"
    ],
    concepts: [
      {
        title: "Comparison Operators",
        explanation: "Compare values: == (equal value), === (equal value AND type), != (not equal), !== (strict not equal), > (greater), < (less), >= (greater or equal), <= (less or equal). Always prefer === over ==."
      },
      {
        title: "Logical Operators",
        explanation: "&& (AND): both must be true. || (OR): at least one must be true. ! (NOT): reverses boolean. Example: if (age >= 18 && hasLicense) { canDrive = true; }"
      },
      {
        title: "Conditional Statements",
        explanation: "if/else lets code make decisions. If condition is true, run this block; otherwise, run else block. Can chain with else if for multiple conditions."
      }
    ],
    practiceTasks: [
      "Compare numbers and log results",
      "Create an age checker (adult/minor)",
      "Build a grade calculator (A, B, C, D, F)",
      "Use logical operators to check multiple conditions",
      "Convert an if/else to ternary operator",
      "Create a simple login check"
    ],
    debuggingTask: {
      code: `let score = 85;

if score >= 90 {
  console.log("A");
} elseif (score >= 80) {
  console.log("B");
} else (score >= 70) {
  console.log("C");
}`,
      hint: "Check the if statement syntax and else/else if keywords",
      solution: "Line 3: missing parentheses around condition. Line 5: 'elseif' should be 'else if'. Line 7: else doesn't take a condition - should be 'else if' or just 'else'."
    },
    aiTask: "Ask AI to generate 10 conditional logic practice problems. Solve at least 5 of them.",
    dailyChallenge: "Create a ticket pricing system: Regular adult $15, Child (under 12) $8, Senior (65+) $10, with 20% discount if member.",
    tips: [
      "Always use === instead of == to avoid type coercion bugs",
      "Keep conditions simple and readable",
      "Use early returns to reduce nested if statements"
    ]
  },
  {
    day: 10,
    title: "JavaScript Loops & Iteration",
    objectives: [
      "Understand why loops are needed",
      "Use for, while, and do-while loops",
      "Loop through arrays",
      "Avoid infinite loops"
    ],
    concepts: [
      {
        title: "Why Loops?",
        explanation: "Loops repeat code without writing it multiple times. Instead of console.log(1); console.log(2); console.log(3);... use a loop! Loops save time and make code maintainable."
      },
      {
        title: "For Loop",
        explanation: "Most common loop: for (let i = 0; i < 10; i++) { }. Three parts: initialization (let i = 0), condition (i < 10), increment (i++). Runs while condition is true."
      },
      {
        title: "While & Do-While",
        explanation: "while(condition) runs while true - may never run if false initially. do-while runs at least once, then checks condition. Use for when you know iterations; while when you don't."
      }
    ],
    practiceTasks: [
      "Print numbers 1-10 using a for loop",
      "Print even numbers from 2-20",
      "Calculate the sum of numbers 1-100",
      "Loop through an array of names",
      "Create a multiplication table",
      "Use a while loop to count down"
    ],
    debuggingTask: {
      code: `// This loop has a problem
for (let i = 1; i <= 10; i--) {
  console.log(i);
}

// Array iteration issue
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}`,
      hint: "One loop never ends, the other goes out of bounds",
      solution: "Line 2: i-- should be i++ (decreasing i never reaches 10). Line 8: <= should be < (array indices go 0 to length-1, so last one returns undefined)."
    },
    aiTask: "Ask AI: 'What are the different ways to loop through arrays in JavaScript?' Practice each method with a sample array.",
    dailyChallenge: "Create a FizzBuzz program: Loop 1-100. If divisible by 3, print 'Fizz'. If by 5, print 'Buzz'. If both, print 'FizzBuzz'.",
    tips: [
      "Always ensure your loop has an exit condition",
      "Use for...of for arrays when you don't need the index",
      "console.log inside loops to debug iteration issues"
    ]
  },
  {
    day: 11,
    title: "JavaScript Functions",
    objectives: [
      "Understand what functions are",
      "Write and call functions",
      "Use parameters and return values",
      "Understand function scope"
    ],
    concepts: [
      {
        title: "What are Functions?",
        explanation: "Functions are reusable blocks of code that perform a task. Instead of repeating code, wrap it in a function and call it when needed. Functions make code organized, readable, and maintainable."
      },
      {
        title: "Function Declaration & Expression",
        explanation: "Declaration: function greet() { }. Expression: const greet = function() { }. Arrow function: const greet = () => { }. All do the same thing, but arrow functions are modern and concise."
      },
      {
        title: "Parameters & Return",
        explanation: "Parameters are inputs: function add(a, b). Return sends a value back: return a + b;. If no return, function returns undefined. A function stops executing when it hits return."
      }
    ],
    practiceTasks: [
      "Write a function that says 'Hello, World!'",
      "Create an add function with two parameters",
      "Write a function that checks if a number is even",
      "Convert Celsius to Fahrenheit function",
      "Create a function that calculates rectangle area",
      "Practice with arrow functions"
    ],
    debuggingTask: {
      code: `function calculateTotal(price, quantity) {
  const total = price * quantity
  console.log(total);
}

const result = calculateTotal(10, 5);
console.log("Total is: " + result);

const addTax = (amount) = {
  return amount * 1.1;
}`,
      hint: "Check if functions return values and arrow function syntax",
      solution: "Lines 1-4: Function logs but doesn't return - add 'return total;'. Line 9: Arrow function syntax error - should be => not =."
    },
    aiTask: "Ask AI to explain 'pure functions' and why they're important. Then refactor one of your functions to be pure.",
    dailyChallenge: "Build a simple calculator with functions for add, subtract, multiply, divide. Each should take two numbers and return the result.",
    tips: [
      "One function should do one thing well",
      "Use descriptive function names: calculateTax not calc",
      "Keep functions short - if too long, break into smaller ones"
    ]
  },
  {
    day: 12,
    title: "JavaScript Arrays & Objects",
    objectives: [
      "Create and manipulate arrays",
      "Use common array methods",
      "Create and access objects",
      "Combine arrays and objects"
    ],
    concepts: [
      {
        title: "Arrays",
        explanation: "Arrays store multiple values in order. Create with [] brackets. Access by index (starting at 0): fruits[0]. Arrays have built-in methods: push, pop, shift, unshift, slice, splice, map, filter, find."
      },
      {
        title: "Objects",
        explanation: "Objects store data as key-value pairs. Create with {} braces: const person = { name: 'John', age: 30 }. Access with dot notation: person.name or bracket notation: person['name']."
      },
      {
        title: "Array Methods",
        explanation: "push() adds to end, pop() removes from end. map() transforms each item. filter() keeps items matching condition. find() returns first match. forEach() loops through. These make working with data easy!"
      }
    ],
    practiceTasks: [
      "Create an array of your favorite movies",
      "Add and remove items from arrays",
      "Use map to transform array values",
      "Use filter to get specific items",
      "Create an object representing a product",
      "Create an array of objects (like a product catalog)"
    ],
    debuggingTask: {
      code: `const users = [
  { name: "Alice", age: 25 }
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(user -> user.name);
const adults = users.filter(user => user.age > 18);

console.log(users[3].name);`,
      hint: "Check array syntax, arrow function syntax, and array bounds",
      solution: "Line 2: missing comma after first object. Line 7: 'map(user -> ' should be 'map(user => '. Line 10: users[3] is undefined (only indices 0,1,2 exist)."
    },
    aiTask: "Ask AI: 'Generate 5 practice exercises for JavaScript array methods.' Complete them and check your answers.",
    dailyChallenge: "Create a student database: array of student objects (name, age, grades array). Write functions to: find student by name, calculate average grade, filter students passing (avg > 60).",
    tips: [
      "Use array methods instead of loops when possible",
      "Objects are great for grouping related data",
      "Spread operator (...) copies arrays/objects without mutating"
    ]
  },
  {
    day: 13,
    title: "DOM Manipulation Basics",
    objectives: [
      "Understand what the DOM is",
      "Select elements with JavaScript",
      "Change element content and styles",
      "Create and remove elements"
    ],
    concepts: [
      {
        title: "What is the DOM?",
        explanation: "DOM (Document Object Model) is how JavaScript sees your HTML page - as a tree of objects. Each HTML element becomes a node that can be selected, modified, created, or deleted with JavaScript."
      },
      {
        title: "Selecting Elements",
        explanation: "document.getElementById('id') - select by ID. document.querySelector('.class') - select first match. document.querySelectorAll('p') - select ALL matches. querySelector is modern and flexible!"
      },
      {
        title: "Modifying Elements",
        explanation: "element.textContent = 'New text' - change text. element.innerHTML = '<b>Bold</b>' - change HTML. element.style.color = 'red' - change style. element.classList.add('active') - add class."
      }
    ],
    practiceTasks: [
      "Select an element by ID and change its text",
      "Select elements by class and loop through them",
      "Change the style of an element with JavaScript",
      "Add and remove CSS classes dynamically",
      "Create a new paragraph and add it to the page",
      "Remove an element from the page"
    ],
    debuggingTask: {
      code: `const title = document.getElementByID("main-title");
title.textContent = "New Title";

const items = document.querySelector(".list-item");
items.forEach(item => {
  item.style.color = "blue";
});

document.querySelector("#btn").style.backgroundColor = red;`,
      hint: "Check method names, querySelector vs querySelectorAll, and CSS value format",
      solution: "Line 1: 'getElementByID' should be 'getElementById' (lowercase 'd'). Line 4: querySelector returns single element, need querySelectorAll for multiple. Line 9: 'red' needs quotes as string."
    },
    aiTask: "Ask AI to explain the difference between textContent and innerHTML. When should you use each? Document safety concerns.",
    dailyChallenge: "Create a color changer: 4 color buttons that change the page background color when clicked (no event listeners yet - use onclick attribute in HTML).",
    tips: [
      "Use textContent over innerHTML when possible (security)",
      "classList.toggle() is great for on/off states",
      "Always check if element exists before manipulating"
    ]
  },
  {
    day: 14,
    title: "JavaScript Events & Event Handling",
    objectives: [
      "Understand what events are",
      "Add event listeners to elements",
      "Handle common events (click, submit, keyup)",
      "Use event object properties"
    ],
    concepts: [
      {
        title: "What are Events?",
        explanation: "Events are things that happen on the page: clicks, key presses, form submissions, mouse movements, page load. JavaScript can 'listen' for these events and run code in response."
      },
      {
        title: "Event Listeners",
        explanation: "element.addEventListener('click', function) attaches a listener. First argument is event type, second is the function to run. Better than onclick attribute - you can add multiple listeners!"
      },
      {
        title: "Event Object",
        explanation: "Event handlers receive an event object with useful info: event.target (element clicked), event.key (key pressed), event.preventDefault() (stop default action like form submit)."
      }
    ],
    practiceTasks: [
      "Add a click listener to a button",
      "Change text when clicking an element",
      "Create a simple counter with increment/decrement buttons",
      "Listen for key presses and display the key",
      "Create a hover effect with mouseenter/mouseleave",
      "Prevent a form from submitting"
    ],
    debuggingTask: {
      code: `const button = document.querySelector("#submit-btn");

button.addEventlistener("click", handleClick());

function handleClick(event) {
  event.preventdefault();
  console.log("Button clicked!");
}

document.querySelector("#input").addEventListener("keyup", (e) {
  console.log(e.target.value);
});`,
      hint: "Check method name capitalization and function reference syntax",
      solution: "Line 3: 'addEventlistener' should be 'addEventListener', and handleClick() should be handleClick (no parentheses). Line 6: 'preventdefault' should be 'preventDefault'. Line 10: missing => in arrow function."
    },
    aiTask: "Ask AI: 'What is event bubbling and event delegation in JavaScript?' Practice event delegation with a list.",
    dailyChallenge: "Create a simple todo input: text field, add button. When clicked, create a new list item with the text. Add delete button to each item.",
    tips: [
      "Pass function reference, not function call: fn, not fn()",
      "Use event delegation for dynamic elements",
      "Remove event listeners when no longer needed"
    ]
  },
  // WEEK 3 - Problem Solving & AI
  {
    day: 15,
    title: "Debugging Strategies & Developer Tools",
    objectives: [
      "Master browser Developer Tools",
      "Use console methods effectively",
      "Learn debugging strategies",
      "Set and use breakpoints"
    ],
    concepts: [
      {
        title: "Browser DevTools",
        explanation: "Press F12 to open DevTools. Elements tab: inspect HTML/CSS. Console tab: run JavaScript, see logs/errors. Sources tab: debug code with breakpoints. Network tab: see requests. This is your debugging headquarters!"
      },
      {
        title: "Console Methods",
        explanation: "console.log() - basic output. console.error() - red error message. console.warn() - yellow warning. console.table() - display arrays/objects as tables. console.time()/timeEnd() - measure execution time."
      },
      {
        title: "Debugging Process",
        explanation: "1) Reproduce the bug. 2) Read error messages carefully. 3) Check the line number. 4) Add console.logs to trace values. 5) Use breakpoints to pause and inspect. 6) Google the error message!"
      }
    ],
    practiceTasks: [
      "Open DevTools and explore each tab",
      "Use console.log with multiple arguments",
      "Use console.table with an array of objects",
      "Measure function execution time",
      "Set a breakpoint and step through code",
      "Inspect and edit HTML/CSS live in DevTools"
    ],
    debuggingTask: {
      code: `function calculateDiscount(price, discountPercent) {
  const discount = price * discountPercent;
  const finalPrice = price - discount;
  return finalPrice;
}

const result = calculateDiscount(100, 20);
console.log(result); // Expected: 80, Actual: -1900`,
      hint: "Think about what discountPercent represents and how it's used",
      solution: "discountPercent is passed as 20 (meaning 20%) but used directly. Should be: const discount = price * (discountPercent / 100); or pass 0.20 instead of 20."
    },
    aiTask: "Ask AI: 'What are the top 10 JavaScript debugging tips for beginners?' Create a personal debugging checklist.",
    dailyChallenge: "Given a broken shopping cart calculation function, use DevTools to find and fix three bugs. Document your debugging process.",
    tips: [
      "Read error messages - they tell you what's wrong and where",
      "When stuck, console.log EVERYTHING to see the values",
      "Rubber duck debugging: explain your code out loud"
    ]
  },
  {
    day: 16,
    title: "Common JavaScript Errors & Fixes",
    objectives: [
      "Recognize common error types",
      "Understand error messages",
      "Fix syntax, reference, and type errors",
      "Handle errors gracefully"
    ],
    concepts: [
      {
        title: "Error Types",
        explanation: "SyntaxError: code grammar is wrong (missing bracket). ReferenceError: variable doesn't exist. TypeError: wrong data type operation (calling non-function). These names help identify what went wrong!"
      },
      {
        title: "Reading Error Messages",
        explanation: "Errors show: type, message, file, and line number. Example: 'TypeError: Cannot read property 'length' of undefined at script.js:15' tells you exactly where to look!"
      },
      {
        title: "Try-Catch",
        explanation: "Wrap risky code in try-catch to handle errors gracefully: try { riskyCode(); } catch(error) { console.log('Error:', error.message); }. This prevents crashes and lets you show user-friendly messages."
      }
    ],
    practiceTasks: [
      "Create and fix a SyntaxError",
      "Create and fix a ReferenceError",
      "Create and fix a TypeError",
      "Use try-catch to handle potential errors",
      "Create custom error messages",
      "Practice reading stack traces"
    ],
    debuggingTask: {
      code: `const users = [
  { name: "Alice", address: { city: "NYC" } },
  { name: "Bob" }
];

users.forEach(user => {
  console.log(user.address.city);
});

const getUserCity = (user) => {
  return user?.address?.city || "Unknown";
};`,
      hint: "One user is missing the address property. What happens when you access a property of undefined?",
      solution: "Line 7 crashes on Bob because user.address is undefined, and undefined.city throws TypeError. Use optional chaining like in getUserCity: user.address?.city or check if address exists first."
    },
    aiTask: "Ask AI to generate 5 common JavaScript error scenarios. Predict the error type before running, then verify.",
    dailyChallenge: "Create a function that fetches user data. Handle all possible errors: invalid input, missing properties, and unexpected data types.",
    tips: [
      "Always check if data exists before accessing nested properties",
      "Use optional chaining (?.) for safe property access",
      "Never ignore errors - log them or handle them"
    ]
  },
  {
    day: 17,
    title: "Introduction to AI for Developers",
    objectives: [
      "Understand how AI helps developers",
      "Learn effective prompting techniques",
      "Use AI to explain code",
      "Use AI to debug issues"
    ],
    concepts: [
      {
        title: "AI as a Coding Assistant",
        explanation: "AI can explain code, write boilerplate, debug errors, suggest improvements, and answer questions. It's like having a knowledgeable colleague available 24/7. But always verify AI output - it can be wrong!"
      },
      {
        title: "Effective Prompting",
        explanation: "Be specific: instead of 'fix my code', say 'This function should return the sum of an array but returns undefined. Here's the code:'. Provide context, expected behavior, and actual result."
      },
      {
        title: "AI Limitations",
        explanation: "AI can hallucinate (make up) functions or give outdated answers. Always test AI-generated code. Use AI to learn and speed up work, but develop your own problem-solving skills too."
      }
    ],
    practiceTasks: [
      "Ask AI to explain a complex code snippet",
      "Use AI to generate comments for your code",
      "Ask AI to find bugs in deliberately broken code",
      "Have AI suggest improvements for your code",
      "Practice writing detailed, effective prompts",
      "Compare AI answers for the same question"
    ],
    debuggingTask: {
      code: `// This AI-generated code has issues. Find them!
function fetchUserData(userId) {
  const response = fetch('/api/users/' + userId);
  const data = response.json();
  return data;
}

// Expected: returns user object
// Actual: returns [object Promise]`,
      hint: "fetch() is asynchronous. Think about how promises work.",
      solution: "fetch() returns a Promise, so response is a Promise, not the response. Need async/await or .then(): async function fetchUserData(userId) { const response = await fetch(...); const data = await response.json(); return data; }"
    },
    aiTask: "Create a 'Prompt Engineering Cheat Sheet' with 10 tips for getting better answers from AI coding assistants.",
    dailyChallenge: "Take 5 pieces of code you've written this week. Use AI to review each one and suggest improvements. Implement the good suggestions.",
    tips: [
      "Always understand code before using it, even AI-generated code",
      "Use AI for learning, not just copying answers",
      "Provide context: language, framework, what you've tried"
    ]
  },
  {
    day: 18,
    title: "Problem Solving & Algorithm Thinking",
    objectives: [
      "Break down problems into steps",
      "Write pseudocode before coding",
      "Identify patterns in problems",
      "Practice basic algorithms"
    ],
    concepts: [
      {
        title: "Problem Solving Process",
        explanation: "1) Understand the problem fully. 2) Work through examples by hand. 3) Break into smaller steps. 4) Write pseudocode. 5) Write actual code. 6) Test with different inputs. Don't jump to coding!"
      },
      {
        title: "Pseudocode",
        explanation: "Pseudocode is plain-language description of your solution. Example: 'FOR each item in cart, ADD item price to total, RETURN total'. It helps plan logic before worrying about syntax."
      },
      {
        title: "Common Patterns",
        explanation: "Many problems follow patterns: Count occurrences, Find max/min, Filter items, Transform data, Accumulate total. Recognize the pattern, then apply the known solution approach."
      }
    ],
    practiceTasks: [
      "Solve: Find the largest number in an array",
      "Solve: Count vowels in a string",
      "Solve: Reverse a string",
      "Solve: Check if a word is a palindrome",
      "Write pseudocode for each before coding",
      "Test each with multiple inputs"
    ],
    debuggingTask: {
      code: `// Find the second largest number in array
function secondLargest(arr) {
  let largest = arr[0];
  let second = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest([1, 5, 3, 9, 2])); // Expected: 5, Actual: 5
console.log(secondLargest([9, 5, 3, 1, 2])); // Expected: 5, Actual: 9`,
      hint: "When you find a new largest, what should happen to 'second'?",
      solution: "When updating largest, you should save old largest as second: if (arr[i] > largest) { second = largest; largest = arr[i]; }. Currently, if largest is found first, second never gets updated properly."
    },
    aiTask: "Ask AI to explain 5 common algorithm patterns. For each, create a simple practice problem and solve it.",
    dailyChallenge: "Solve: Given an array of numbers, return a new array with only the unique numbers in their original order. Write pseudocode first!",
    tips: [
      "Spend more time understanding, less time coding",
      "Draw diagrams or trace through examples on paper",
      "Test edge cases: empty array, single item, duplicates"
    ]
  },
  {
    day: 19,
    title: "Responsive Design & Mobile First",
    objectives: [
      "Understand responsive design principles",
      "Use CSS media queries",
      "Apply mobile-first approach",
      "Test on different screen sizes"
    ],
    concepts: [
      {
        title: "Why Responsive?",
        explanation: "Users access websites on phones, tablets, laptops, and large monitors. Responsive design ensures your site looks good on ALL screen sizes. It's not optional - over 50% of web traffic is mobile!"
      },
      {
        title: "Media Queries",
        explanation: "@media (min-width: 768px) { } applies styles only when screen is 768px or wider. Mobile-first: start with mobile styles, add media queries for larger screens. Common breakpoints: 640px, 768px, 1024px, 1280px."
      },
      {
        title: "Fluid Layouts",
        explanation: "Use percentages and flexbox instead of fixed pixel widths. max-width prevents elements from getting too wide. Use rem/em for font sizes. vh/vw units are relative to viewport size."
      }
    ],
    practiceTasks: [
      "Add viewport meta tag to HTML",
      "Convert fixed widths to percentages",
      "Create a responsive navigation (hamburger menu)",
      "Make images responsive with max-width: 100%",
      "Use media queries to change layout at breakpoints",
      "Test with DevTools device toolbar"
    ],
    debuggingTask: {
      code: `.container {
  width: 1200px;
  margin: auto;
}

@media (max-width: 768) {
  .container {
    width: 100%
  }
  
  .nav {
    display: none;
  }
  
  .mobile-nav {
    display: visible;
  }
}`,
      hint: "Check media query syntax and CSS property values",
      solution: "Line 6: missing 'px' unit in media query. Line 8: missing semicolon. Line 15: 'visible' is not valid for display - use 'block', 'flex', etc. Should be: @media (max-width: 768px) and display: block;"
    },
    aiTask: "Ask AI: 'What are the best practices for responsive images in 2024?' Implement srcset or picture element.",
    dailyChallenge: "Make your portfolio page fully responsive: mobile navigation, flexible images, readable text on all devices.",
    tips: [
      "Always add: <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
      "Use DevTools device mode (Ctrl+Shift+M) to test",
      "Touch targets should be at least 44x44 pixels"
    ]
  },
  {
    day: 20,
    title: "Working with APIs & Fetch",
    objectives: [
      "Understand what APIs are",
      "Use fetch to get data",
      "Handle asynchronous code",
      "Display API data in the DOM"
    ],
    concepts: [
      {
        title: "What are APIs?",
        explanation: "APIs (Application Programming Interfaces) let different software communicate. Web APIs are URLs that return data (usually JSON) instead of web pages. Example: weather API returns temperature data."
      },
      {
        title: "Fetch API",
        explanation: "fetch(url) makes HTTP requests. It returns a Promise that resolves to a Response. Use .json() to parse the response. Fetch is asynchronous - the code doesn't wait for the response!"
      },
      {
        title: "Async/Await",
        explanation: "async functions let you use 'await' to pause until a Promise resolves. Makes asynchronous code look synchronous: const response = await fetch(url); Much easier to read than .then() chains!"
      }
    ],
    practiceTasks: [
      "Fetch data from JSONPlaceholder API",
      "Display fetched users in the DOM",
      "Handle loading and error states",
      "Create a search that filters API data",
      "Fetch and display posts with comments",
      "Build a simple weather widget"
    ],
    debuggingTask: {
      code: `async function getUsers() {
  const response = fetch("https://jsonplaceholder.typicode.com/users");
  const users = response.json();
  return users;
}

getUsers().then(users => {
  users.forEach(user => {
    document.body.innerHTML += "<p>" + user.name + "</p>";
  });
});`,
      hint: "fetch() returns a Promise. Are you awaiting all the right things?",
      solution: "Lines 2 and 3 are missing 'await'. Should be: const response = await fetch(...); const users = await response.json(); Without await, you get Promise objects instead of actual data."
    },
    aiTask: "Ask AI to list 10 free public APIs for practice. Build a simple widget using one of them.",
    dailyChallenge: "Build a GitHub profile viewer: input a username, fetch their data from GitHub API, display avatar, name, bio, and repos.",
    tips: [
      "Always handle errors: try-catch or .catch()",
      "Show loading states while fetching",
      "Check API documentation for correct endpoints"
    ]
  },
  {
    day: 21,
    title: "Introduction to App Development Concepts",
    objectives: [
      "Understand app architecture basics",
      "Learn about native vs hybrid apps",
      "Explore PWAs (Progressive Web Apps)",
      "Understand state management basics"
    ],
    concepts: [
      {
        title: "Types of Mobile Apps",
        explanation: "Native: built for specific platform (Swift for iOS, Kotlin for Android) - best performance. Hybrid: web tech wrapped in native container (React Native, Flutter). PWA: web app that feels like native - works offline, installable."
      },
      {
        title: "Progressive Web Apps",
        explanation: "PWAs are websites that behave like apps: work offline (service workers), can be installed, send push notifications. They use web tech (HTML/CSS/JS) but feel like native apps. Great starting point!"
      },
      {
        title: "App State",
        explanation: "State is data your app 'remembers': user login status, shopping cart items, form inputs. Managing state properly is crucial. Small apps: keep state in variables. Large apps: use state management libraries."
      }
    ],
    practiceTasks: [
      "Research and list 5 PWAs you can install",
      "Create a manifest.json for your project",
      "Add a service worker for offline caching",
      "Make your site installable on mobile",
      "Implement local storage for persistent data",
      "Create a simple state management pattern"
    ],
    debuggingTask: {
      code: `// LocalStorage issues
const saveUser = (user) => {
  localStorage.setItem("user", user);
};

const getUser = () => {
  return localStorage.getItem("user");
};

saveUser({ name: "Alice", age: 25 });
const user = getUser();
console.log(user.name); // Expected: "Alice", Actual: TypeError`,
      hint: "localStorage only stores strings. What happens when you save an object?",
      solution: "localStorage stores strings only. The object becomes '[object Object]'. Solution: saveUser should use JSON.stringify(user), and getUser should use JSON.parse(localStorage.getItem('user'))."
    },
    aiTask: "Ask AI: 'What are the key differences between React Native, Flutter, and PWAs?' Create a comparison table.",
    dailyChallenge: "Convert your portfolio into a PWA: add manifest.json, service worker for offline support, and make it installable.",
    tips: [
      "PWAs are a great entry point to app development",
      "Use JSON.stringify/parse with localStorage",
      "Test on actual mobile devices, not just emulators"
    ]
  },
  // WEEK 4 - Projects & Evaluation
  {
    day: 22,
    title: "Mini Project 1: Interactive Todo App",
    objectives: [
      "Build a complete project from scratch",
      "Apply HTML, CSS, JavaScript skills",
      "Implement CRUD operations",
      "Persist data with localStorage"
    ],
    concepts: [
      {
        title: "CRUD Operations",
        explanation: "CRUD = Create, Read, Update, Delete. Most apps do these four things with data. Todo app: Create new todos, Read/display todos, Update (mark complete), Delete todos."
      },
      {
        title: "Project Planning",
        explanation: "Before coding: 1) List all features. 2) Draw a simple wireframe. 3) Break into small tasks. 4) Build incrementally, testing each piece. Don't try to build everything at once!"
      },
      {
        title: "Code Organization",
        explanation: "Separate concerns: HTML for structure, CSS for styling, JS for behavior. In JS, group related functions. Comment your code. Use meaningful variable names. This makes code maintainable."
      }
    ],
    practiceTasks: [
      "Plan the todo app features on paper",
      "Create the HTML structure",
      "Style with CSS (make it look professional)",
      "Add todo items to the DOM",
      "Implement complete/uncomplete toggle",
      "Add delete functionality",
      "Persist todos in localStorage"
    ],
    debuggingTask: {
      code: `const todos = JSON.parse(localStorage.getItem("todos"));

function addTodo(text) {
  todos.push({ text, completed: false });
  saveTodos();
  renderTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// On first visit, todos is null - crashes!`,
      hint: "What if localStorage is empty on first visit?",
      solution: "Initialize with fallback: const todos = JSON.parse(localStorage.getItem('todos')) || []; The || [] provides empty array if localStorage returns null."
    },
    aiTask: "Ask AI to review your todo app code and suggest 3 improvements. Implement them.",
    dailyChallenge: "Add extra features: edit todo text, filter by status (all/active/completed), clear all completed button.",
    tips: [
      "Build the simplest version first, then add features",
      "Test each feature before moving to the next",
      "Commit to Git after each working feature"
    ]
  },
  {
    day: 23,
    title: "Mini Project 2: Weather Dashboard",
    objectives: [
      "Work with external APIs",
      "Handle asynchronous data",
      "Create a polished UI",
      "Implement search functionality"
    ],
    concepts: [
      {
        title: "API Keys",
        explanation: "Most APIs require an API key - a unique identifier that tracks your usage. Sign up on the API's website to get yours. Keep keys secret - don't commit them to public GitHub repos!"
      },
      {
        title: "Error Handling in APIs",
        explanation: "APIs can fail: invalid city name, server down, rate limits. Always wrap fetch in try-catch. Check response.ok before parsing. Show user-friendly error messages, not technical errors."
      },
      {
        title: "Loading States",
        explanation: "API calls take time. Show loading indicators so users know something is happening. Disable buttons during loading to prevent double-clicks. Hide loading and show data when complete."
      }
    ],
    practiceTasks: [
      "Sign up for a free weather API (OpenWeatherMap)",
      "Create the dashboard HTML layout",
      "Fetch weather for a hardcoded city",
      "Create search input for any city",
      "Display temperature, conditions, icon",
      "Add 5-day forecast display",
      "Style for both mobile and desktop"
    ],
    debuggingTask: {
      code: `async function getWeather(city) {
  try {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY;
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
}

// User types "asdfgh" - invalid city
// Nothing happens, no error shown to user`,
      hint: "The API returns 404 for invalid cities, but catch only handles network errors",
      solution: "Check response.ok before parsing: if (!response.ok) { throw new Error('City not found'); }. Also show error to user, not just console.log. Add error message element in UI."
    },
    aiTask: "Ask AI: 'How do I securely store API keys in a frontend application?' Learn about environment variables and proxies.",
    dailyChallenge: "Add features: save recent searches, toggle Celsius/Fahrenheit, show current location weather using Geolocation API.",
    tips: [
      "Read API documentation thoroughly",
      "Test with valid AND invalid inputs",
      "Never expose API keys in frontend code for production"
    ]
  },
  {
    day: 24,
    title: "Mini Project 3: Quiz Application",
    objectives: [
      "Build interactive UI with state",
      "Manage application flow",
      "Calculate and display scores",
      "Create engaging user experience"
    ],
    concepts: [
      {
        title: "Application State",
        explanation: "Quiz app tracks: current question index, user's answers, score, time remaining. Store state in variables or an object. Update UI whenever state changes. State drives the interface."
      },
      {
        title: "User Flow",
        explanation: "Plan the user journey: Start screen → Questions (one at a time) → Results. Each screen is a 'state'. Show/hide different sections based on current state. Smooth transitions improve UX."
      },
      {
        title: "Feedback & Progress",
        explanation: "Show users their progress: 'Question 3 of 10'. Give immediate feedback on answers if desired. At the end, show score with encouraging message. Consider showing correct answers for learning."
      }
    ],
    practiceTasks: [
      "Create an array of question objects",
      "Build start screen with instructions",
      "Display questions one at a time",
      "Track and update current question",
      "Check answers and update score",
      "Create results screen with score",
      "Add restart functionality"
    ],
    debuggingTask: {
      code: `const questions = [
  { q: "What is 2+2?", options: ["3", "4", "5"], correct: 1 },
  { q: "Capital of France?", options: ["London", "Paris", "Rome"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.querySelector("#question").textContent = q.q;
}

// After last question: Cannot read property 'q' of undefined`,
      hint: "What happens when currentQuestion exceeds array length?",
      solution: "In showQuestion, check if currentQuestion >= questions.length first, then show results screen instead: if (currentQuestion >= questions.length) { showResults(); return; }"
    },
    aiTask: "Ask AI to generate 10 programming trivia questions with 4 options each. Add them to your quiz.",
    dailyChallenge: "Add features: timer for each question, high score leaderboard in localStorage, different difficulty levels.",
    tips: [
      "Plan all states on paper before coding",
      "Use consistent naming: showQuestion, showResults, showStart",
      "Test the full flow from start to end"
    ]
  },
  {
    day: 25,
    title: "Code Review & Best Practices",
    objectives: [
      "Learn code review process",
      "Apply clean code principles",
      "Refactor your project code",
      "Document your code properly"
    ],
    concepts: [
      {
        title: "Clean Code Principles",
        explanation: "Code is read more than written. Use meaningful names: calculateTotal not ct. Keep functions small and focused. Don't repeat yourself (DRY). Remove dead code. Format consistently."
      },
      {
        title: "Code Review",
        explanation: "Code review is reading someone's code to find bugs, suggest improvements, and ensure quality. In teams, code is reviewed before merging. It catches errors and spreads knowledge."
      },
      {
        title: "Documentation",
        explanation: "Good code is self-documenting (clear names), but add comments for WHY, not WHAT. README explains project setup and features. JSDoc comments describe function parameters and return values."
      }
    ],
    practiceTasks: [
      "Review your todo app code",
      "Rename unclear variables and functions",
      "Extract repeated code into functions",
      "Add comments where logic is complex",
      "Create a README.md for your project",
      "Remove console.logs and unused code"
    ],
    debuggingTask: {
      code: `// What's wrong with this code? (Code smell, not error)
function calc(a, b, c) {
  let x = a * b;
  let y = x * c;
  let z = y / 100;
  return z;
}

const x = calc(100, 5, 10);
// What does this calculate? Who knows!`,
      hint: "The code works but is unreadable. What could make it clearer?",
      solution: "Use descriptive names: function calculateDiscountedPrice(price, quantity, discountPercent) { const subtotal = price * quantity; const discount = subtotal * discountPercent; return discount / 100; }"
    },
    aiTask: "Have AI review one of your projects. Get at least 5 improvement suggestions. Implement and explain each change.",
    dailyChallenge: "Refactor all three mini projects applying clean code principles. Get each reviewed by a peer or AI.",
    tips: [
      "If you have to add a comment explaining WHAT code does, it needs better naming",
      "Future you is a stranger - write code they can understand",
      "Consistent style matters more than any specific style"
    ]
  },
  {
    day: 26,
    title: "Testing Fundamentals",
    objectives: [
      "Understand why testing matters",
      "Write simple manual tests",
      "Learn test-driven thinking",
      "Create a testing checklist"
    ],
    concepts: [
      {
        title: "Why Test?",
        explanation: "Testing catches bugs before users see them. Tests give confidence to make changes. They document expected behavior. Manual testing: you test. Automated testing: code tests code. Both are valuable."
      },
      {
        title: "Types of Tests",
        explanation: "Unit tests: test individual functions. Integration tests: test components working together. E2E (End-to-end) tests: test full user flows. Start with unit tests - they're easiest to write."
      },
      {
        title: "Test Thinking",
        explanation: "For each function, ask: What are the inputs? What's the expected output? What edge cases exist? What should happen with bad input? Write tests for each scenario."
      }
    ],
    practiceTasks: [
      "List all features in your todo app",
      "Create manual test cases for each feature",
      "Test edge cases: empty input, very long text",
      "Test error scenarios: invalid data",
      "Document bugs found during testing",
      "Fix bugs and retest"
    ],
    debuggingTask: {
      code: `function isValidEmail(email) {
  return email.includes("@");
}

// Write test cases
console.log(isValidEmail("test@email.com")); // Expected: true ✓
console.log(isValidEmail("invalid")); // Expected: false ✓
// What other test cases should we add?`,
      hint: "Think of edge cases: empty string, multiple @, no domain, etc.",
      solution: "Add tests: isValidEmail('') - empty string. isValidEmail('a@@b.com') - multiple @. isValidEmail('@.com') - no local part. isValidEmail('a@') - no domain. The function is too simple for real email validation!"
    },
    aiTask: "Ask AI: 'How do I write unit tests in JavaScript?' Set up a simple test for one of your functions.",
    dailyChallenge: "Create a comprehensive test document for your quiz app: list every feature, write 3+ test cases per feature, execute all tests, document results.",
    tips: [
      "Test happy paths AND error paths",
      "Regression testing: retest after changes to ensure nothing broke",
      "Automate repetitive tests when possible"
    ]
  },
  {
    day: 27,
    title: "Portfolio Building & GitHub Profile",
    objectives: [
      "Create a professional portfolio site",
      "Optimize GitHub profile",
      "Write effective project descriptions",
      "Showcase your work professionally"
    ],
    concepts: [
      {
        title: "Portfolio Essentials",
        explanation: "Your portfolio shows what you can do. Include: About section, Skills list, 3-5 projects with descriptions, Contact information. Keep it simple, professional, and easy to navigate."
      },
      {
        title: "GitHub Profile",
        explanation: "Recruiters check GitHub! Have a profile README, organized repos with good READMEs, consistent commit history, and clean code. Pin your best repositories. Your commits show you're actively coding."
      },
      {
        title: "Project Presentation",
        explanation: "For each project: clear title, brief description, technologies used, live demo link, GitHub link, key features, what you learned. Screenshots/GIFs are powerful - show, don't just tell."
      }
    ],
    practiceTasks: [
      "Create or update your portfolio website",
      "Write compelling project descriptions",
      "Add live demo links for your projects",
      "Create a GitHub profile README",
      "Organize and clean up your repositories",
      "Add screenshots to project READMEs"
    ],
    debuggingTask: {
      code: `<!-- Portfolio project card - what's missing? -->
<div class="project-card">
  <h3>My Project</h3>
  <p>A project I made.</p>
  <a href="#">View Code</a>
</div>

<!-- What makes this ineffective? -->`,
      hint: "Think about what a recruiter needs to see to understand and evaluate your project",
      solution: "Missing: descriptive title, tech stack used, what problem it solves, screenshot/demo, live link, specific achievements. Better: 'Weather Dashboard - Real-time weather app using OpenWeatherMap API. Features: search cities, 5-day forecast, responsive design. Built with HTML, CSS, JavaScript.'"
    },
    aiTask: "Ask AI: 'Review my portfolio/GitHub profile and suggest improvements.' Make at least 5 changes based on feedback.",
    dailyChallenge: "Complete your portfolio: 3+ projects with demos, professional bio, contact form, responsive design, deployed to GitHub Pages.",
    tips: [
      "Quality over quantity - 3 great projects > 10 basic ones",
      "Update regularly to show you're actively learning",
      "Get feedback from others on your portfolio"
    ]
  },
  {
    day: 28,
    title: "Interview Preparation & Soft Skills",
    objectives: [
      "Prepare for technical interviews",
      "Practice explaining your projects",
      "Develop communication skills",
      "Handle technical questions"
    ],
    concepts: [
      {
        title: "Technical Interview Format",
        explanation: "Interviews may include: coding challenges, project discussion, technical questions, behavioral questions. Practice explaining your thought process. It's okay to ask questions and think out loud."
      },
      {
        title: "STAR Method",
        explanation: "For behavioral questions, use STAR: Situation (context), Task (what needed to be done), Action (what YOU did), Result (outcome). Example: Describe a bug you fixed using this structure."
      },
      {
        title: "Communication Skills",
        explanation: "Technical skills get you interviewed, soft skills get you hired. Be clear, concise, and honest. If you don't know, say so - then explain how you'd find out. Show enthusiasm and willingness to learn."
      }
    ],
    practiceTasks: [
      "Prepare 2-minute explanation of each project",
      "Practice answering 'Tell me about yourself'",
      "Research common JavaScript interview questions",
      "Practice coding while explaining your thinking",
      "Prepare questions to ask interviewers",
      "Do a mock interview with a peer"
    ],
    debuggingTask: {
      code: `// Common interview question: Explain this code
const nums = [1, 2, 3, 4, 5];

const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // What's the output? Explain step by step.`,
      hint: "Break down each step: filter, map, reduce",
      solution: "1) filter(n => n % 2 === 0): Keep even numbers → [2, 4]. 2) map(n => n * 2): Double each → [4, 8]. 3) reduce((sum, n) => sum + n, 0): Sum all starting from 0 → 12. Output is 12."
    },
    aiTask: "Ask AI to give you 10 JavaScript interview questions. Answer each, then ask AI to evaluate your answers.",
    dailyChallenge: "Record yourself explaining your weather dashboard project. Watch it back, identify areas to improve, re-record.",
    tips: [
      "Prepare stories about challenges you've overcome",
      "Research the company before interviews",
      "Be honest about your experience level"
    ]
  },
  {
    day: 29,
    title: "Final Project Work & Polish",
    objectives: [
      "Complete any unfinished projects",
      "Add final polish and features",
      "Ensure everything is deployed",
      "Prepare for evaluation"
    ],
    concepts: [
      {
        title: "Final Polish Checklist",
        explanation: "Before submitting: Test all features. Fix remaining bugs. Check responsive design. Verify all links work. Clean up code. Update README. Deploy latest version. Get someone else to test."
      },
      {
        title: "Professional Presentation",
        explanation: "First impressions matter. Ensure: consistent styling, proper loading states, error handling, no console errors, good performance, accessibility basics (alt text, focus states)."
      },
      {
        title: "Deployment",
        explanation: "Your projects should be live online. GitHub Pages is free for static sites. Verify deployed version matches local. Share the live URL, not localhost! Test on different devices and browsers."
      }
    ],
    practiceTasks: [
      "Test all three mini projects thoroughly",
      "Fix any bugs discovered",
      "Ensure all projects are deployed",
      "Update all READMEs with final information",
      "Clean up all code - remove console.logs",
      "Get someone else to test your projects"
    ],
    debuggingTask: {
      code: `<!-- Common deployment issue -->
<script src="script.js"></script>
<link href="styles.css">
<img src="C:\\Users\\John\\Pictures\\photo.jpg">

<!-- Why might these not work when deployed? -->`,
      hint: "Think about what changes between local development and production deployment",
      solution: "Absolute paths like C:\\Users... don't exist on servers. Use relative paths: src='images/photo.jpg'. Link tag missing rel='stylesheet'. Ensure file names match exactly (case-sensitive on some servers)."
    },
    aiTask: "Have AI do a final code review of your main project. Create a checklist of improvements and complete as many as possible.",
    dailyChallenge: "Create a final presentation of your portfolio: 5 slides covering your journey, skills learned, projects built, and future goals.",
    tips: [
      "Test deployed version, not just local",
      "Have fresh eyes review your work",
      "Prepare to demo your projects confidently"
    ]
  },
  {
    day: 30,
    title: "Evaluation Day & Moving Forward",
    objectives: [
      "Complete final evaluation",
      "Present your portfolio",
      "Receive feedback",
      "Plan continued learning"
    ],
    concepts: [
      {
        title: "Evaluation Criteria",
        explanation: "You'll be evaluated on: Project quality, Code cleanliness, Problem-solving ability, Communication skills, Consistency & attendance, Attitude & collaboration, Growth shown over 30 days."
      },
      {
        title: "Continued Learning",
        explanation: "This is just the beginning! Next steps could include: React/Vue frameworks, Node.js backend, Databases, Advanced JavaScript, TypeScript, Testing frameworks. Never stop learning!"
      },
      {
        title: "Career Path Options",
        explanation: "Frontend Developer: Focus on UI/UX. Backend Developer: Focus on servers/databases. Full-Stack: Both! Mobile Developer: React Native/Flutter. DevOps: Infrastructure. Choose based on what you enjoy most."
      }
    ],
    practiceTasks: [
      "Review all materials from 30 days",
      "Ensure portfolio is ready to present",
      "Prepare to answer questions about your journey",
      "Write a reflection on what you learned",
      "Set 3 learning goals for next month",
      "Connect with fellow trainees on LinkedIn"
    ],
    debuggingTask: {
      code: `// Final challenge: Fix all issues in this code
function getUserData(users, id) {
  for (let i = 0; i <= users.length; i++) {
    if (users[i].id = id) {
      return user[i];
    }
  }
  return "User not found";
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

console.log(getUserData(users, 2).name);`,
      hint: "Multiple issues: loop bounds, comparison operator, variable name",
      solution: "Line 3: <= should be <. Line 4: = should be === (comparison not assignment). Line 5: user[i] should be users[i]. Also, returning string vs object creates inconsistent return types."
    },
    aiTask: "Create a personal learning roadmap for the next 3 months with AI's help. Be specific about skills, projects, and milestones.",
    dailyChallenge: "Write a letter to your future self (3 months from now) describing where you are today and where you want to be.",
    tips: [
      "Be proud of how far you've come",
      "Stay curious and keep building",
      "Connect with the developer community"
    ]
  }
];

export const guidelines = {
  rules: [
    "Arrive on time: 9:00 AM sharp daily",
    "Maintain professional behavior at all times",
    "Complete all assigned tasks before day end",
    "Ask questions - there are no silly questions",
    "Help fellow trainees when possible",
    "Keep your workspace clean and organized",
    "No sharing of company information externally",
    "Mobile phones on silent during training hours",
    "Take breaks when needed to stay focused",
    "Commit all code to your GitHub repository daily"
  ],
  expectations: [
    "100% attendance unless emergency (inform in advance)",
    "Complete all daily challenges",
    "Participate actively in discussions",
    "Show continuous improvement",
    "Maintain positive attitude",
    "Take initiative in learning",
    "Meet project deadlines",
    "Follow coding standards",
    "Document your work properly",
    "Support your fellow trainees"
  ],
  evaluationCriteria: [
    { category: "Technical Skills", weight: 30, description: "Code quality, problem-solving, project completion" },
    { category: "Consistency", weight: 20, description: "Daily attendance, task completion, meeting deadlines" },
    { category: "Communication", weight: 15, description: "Asking questions, explaining code, presentation skills" },
    { category: "Attitude", weight: 15, description: "Positive mindset, willingness to learn, handling feedback" },
    { category: "Collaboration", weight: 10, description: "Helping others, teamwork, sharing knowledge" },
    { category: "Initiative", weight: 10, description: "Going beyond requirements, self-learning, overtime work" }
  ]
};

export const productivityTips = [
  { title: "Time Blocking", description: "Dedicate specific hours to specific tasks. 9-12: Learning, 12-1: Lunch, 1-3: Practice, 3-5: Projects." },
  { title: "Pomodoro Technique", description: "Work for 25 minutes, break for 5 minutes. After 4 cycles, take a 15-30 minute break." },
  { title: "Avoid Multitasking", description: "Focus on one task at a time. Switching between tasks wastes time and mental energy." },
  { title: "Morning Review", description: "Start each day reviewing yesterday's code. Fresh eyes catch bugs you missed." },
  { title: "End of Day Commit", description: "Always commit your code before leaving. Write clear commit messages." },
  { title: "Document As You Go", description: "Add comments and documentation while coding, not after. You'll forget otherwise." },
  { title: "Learn One Thing Well", description: "Don't try to learn everything at once. Master one concept before moving on." },
  { title: "Teach What You Learn", description: "Explaining concepts to others solidifies your understanding." },
  { title: "Take Care of Yourself", description: "Sleep, exercise, and eat well. A healthy body supports a sharp mind." },
  { title: "Embrace Struggle", description: "Feeling stuck is normal and temporary. Every expert was once a beginner." }
];

export const miniProjects = [
  {
    title: "Todo Application",
    difficulty: "Beginner",
    duration: "1 day",
    description: "A task management app with add, complete, and delete functionality. Data persists in localStorage.",
    requirements: [
      "Add new todos with input field",
      "Mark todos as complete/incomplete",
      "Delete individual todos",
      "Filter by status (all/active/completed)",
      "Persist data in localStorage",
      "Responsive design"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"]
  },
  {
    title: "Weather Dashboard",
    difficulty: "Beginner-Intermediate",
    duration: "1 day",
    description: "A weather app that fetches real-time data from an API and displays current conditions and forecast.",
    requirements: [
      "Search for any city",
      "Display current weather with icon",
      "Show 5-day forecast",
      "Handle loading and error states",
      "Save recent searches",
      "Responsive design"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API", "OpenWeatherMap API"]
  },
  {
    title: "Quiz Application",
    difficulty: "Beginner-Intermediate",
    duration: "1 day",
    description: "An interactive quiz with multiple choice questions, score tracking, and results display.",
    requirements: [
      "Multiple choice questions",
      "Track current question progress",
      "Calculate and display score",
      "Show correct answers at end",
      "Timer for each question (optional)",
      "Restart functionality"
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    difficulty: "Beginner",
    duration: "1-2 days",
    description: "A personal portfolio showcasing your projects, skills, and contact information.",
    requirements: [
      "About me section",
      "Skills display",
      "Project showcase with links",
      "Contact form or info",
      "Responsive design",
      "Deployed to GitHub Pages"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  }
];
