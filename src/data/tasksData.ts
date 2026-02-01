// Unlimited Easy Random Tasks - These are simple tasks that keep trainees engaged
// Tasks are designed to be easy but require continuous work

export interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Simple' | 'Quick';
  estimatedTime: string;
  hint?: string;
}

// HTML Tasks
const htmlTasks: Omit<Task, 'id'>[] = [
  { category: 'HTML', title: 'Create a Heading', description: 'Create an HTML page with an <h1> heading that says "Welcome to My Website"', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use the <h1> tag' },
  { category: 'HTML', title: 'Make a List', description: 'Create an unordered list with 5 items of your favorite foods', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use <ul> and <li> tags' },
  { category: 'HTML', title: 'Add an Image', description: 'Add an image to your HTML page using the <img> tag with alt text', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Remember src and alt attributes' },
  { category: 'HTML', title: 'Create a Link', description: 'Create a hyperlink that goes to google.com', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use the <a> tag with href' },
  { category: 'HTML', title: 'Build a Table', description: 'Create a simple 3x3 table with some data', difficulty: 'Easy', estimatedTime: '5 min', hint: 'Use <table>, <tr>, <td> tags' },
  { category: 'HTML', title: 'Form Input', description: 'Create a text input field with a label', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use <label> and <input type="text">' },
  { category: 'HTML', title: 'Add a Button', description: 'Create a button that says "Click Me"', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use the <button> tag' },
  { category: 'HTML', title: 'Paragraph with Bold', description: 'Write a paragraph with some words in bold', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use <strong> or <b> tags' },
  { category: 'HTML', title: 'Create Navigation', description: 'Create a simple navigation menu with 3 links', difficulty: 'Easy', estimatedTime: '4 min', hint: 'Use <nav> with <a> tags inside' },
  { category: 'HTML', title: 'Ordered List', description: 'Create a numbered list of steps to make coffee', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use <ol> and <li> tags' },
  { category: 'HTML', title: 'Add a Div', description: 'Create a div container with some text inside', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use the <div> tag' },
  { category: 'HTML', title: 'Span Element', description: 'Use a span to color one word differently in a paragraph', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use <span style="color: red">' },
  { category: 'HTML', title: 'Email Link', description: 'Create a link that opens email client', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use href="mailto:email@example.com"' },
  { category: 'HTML', title: 'Line Break', description: 'Write 3 lines of text with line breaks between them', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use <br> tag' },
  { category: 'HTML', title: 'Horizontal Rule', description: 'Add a horizontal line between two paragraphs', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use <hr> tag' },
];

// CSS Tasks
const cssTasks: Omit<Task, 'id'>[] = [
  { category: 'CSS', title: 'Change Background', description: 'Set the page background color to light blue', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Use background-color property' },
  { category: 'CSS', title: 'Center Text', description: 'Center align a heading using CSS', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Use text-align: center' },
  { category: 'CSS', title: 'Change Font Size', description: 'Make a paragraph text 20px in size', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use font-size property' },
  { category: 'CSS', title: 'Add Padding', description: 'Add 20px padding to a div element', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use padding: 20px' },
  { category: 'CSS', title: 'Add Margin', description: 'Add margin around a button element', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use margin property' },
  { category: 'CSS', title: 'Border Styling', description: 'Add a 2px solid border to an element', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use border: 2px solid black' },
  { category: 'CSS', title: 'Round Corners', description: 'Make the corners of a div rounded', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Use border-radius property' },
  { category: 'CSS', title: 'Change Text Color', description: 'Change the color of a heading to red', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use color property' },
  { category: 'CSS', title: 'Bold Text', description: 'Make a paragraph bold using CSS', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use font-weight: bold' },
  { category: 'CSS', title: 'Underline Text', description: 'Add underline to a heading', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use text-decoration: underline' },
  { category: 'CSS', title: 'Hover Effect', description: 'Change button color when hovering', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use :hover pseudo-class' },
  { category: 'CSS', title: 'Box Shadow', description: 'Add a shadow to a card element', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use box-shadow property' },
  { category: 'CSS', title: 'Width and Height', description: 'Set a div to be 200px wide and 100px tall', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Use width and height properties' },
  { category: 'CSS', title: 'Font Family', description: 'Change the font to Arial for the entire page', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use font-family on body' },
  { category: 'CSS', title: 'Opacity', description: 'Make an image 50% transparent', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Use opacity: 0.5' },
];

// JavaScript Tasks
const jsTasks: Omit<Task, 'id'>[] = [
  { category: 'JavaScript', title: 'Declare a Variable', description: 'Create a variable called "name" and store your name in it', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use let or const' },
  { category: 'JavaScript', title: 'Console Log', description: 'Print "Hello World" to the console', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use console.log()' },
  { category: 'JavaScript', title: 'Add Two Numbers', description: 'Create two number variables and add them together', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use the + operator' },
  { category: 'JavaScript', title: 'String Concatenation', description: 'Combine your first name and last name into one string', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use + or template literals' },
  { category: 'JavaScript', title: 'Create an Array', description: 'Create an array with 5 different colors', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use square brackets []' },
  { category: 'JavaScript', title: 'Array Length', description: 'Find and print the length of an array', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use .length property' },
  { category: 'JavaScript', title: 'Simple Function', description: 'Write a function that says "Hello" when called', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use function keyword' },
  { category: 'JavaScript', title: 'If Statement', description: 'Check if a number is greater than 10', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use if (num > 10)' },
  { category: 'JavaScript', title: 'For Loop', description: 'Print numbers 1 to 5 using a for loop', difficulty: 'Easy', estimatedTime: '3 min', hint: 'for (let i = 1; i <= 5; i++)' },
  { category: 'JavaScript', title: 'Alert Message', description: 'Show an alert box with a message', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use alert()' },
  { category: 'JavaScript', title: 'Object Creation', description: 'Create an object representing a person with name and age', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use curly braces {}' },
  { category: 'JavaScript', title: 'Array Push', description: 'Add a new item to the end of an array', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use .push() method' },
  { category: 'JavaScript', title: 'String Length', description: 'Find the length of a string', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use .length property' },
  { category: 'JavaScript', title: 'toUpperCase', description: 'Convert a string to uppercase', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use .toUpperCase() method' },
  { category: 'JavaScript', title: 'Boolean Variable', description: 'Create a boolean variable set to true', difficulty: 'Simple', estimatedTime: '1 min', hint: 'let isActive = true' },
];

// Logic Tasks
const logicTasks: Omit<Task, 'id'>[] = [
  { category: 'Logic', title: 'Even or Odd', description: 'Write code to check if a number is even or odd', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use modulo operator %' },
  { category: 'Logic', title: 'Find Maximum', description: 'Find the larger number between two numbers', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use if/else or Math.max()' },
  { category: 'Logic', title: 'Count to 10', description: 'Use a loop to count from 1 to 10', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use a for loop' },
  { category: 'Logic', title: 'Sum of Numbers', description: 'Calculate the sum of numbers from 1 to 5', difficulty: 'Easy', estimatedTime: '4 min', hint: 'Use a loop with accumulator' },
  { category: 'Logic', title: 'Reverse String', description: 'Write the steps to reverse a word (no code needed)', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Think step by step' },
  { category: 'Logic', title: 'Positive or Negative', description: 'Check if a number is positive, negative, or zero', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Use if/else if/else' },
  { category: 'Logic', title: 'Multiply Table', description: 'Print multiplication table of 5 (5x1 to 5x5)', difficulty: 'Easy', estimatedTime: '4 min', hint: 'Use a for loop' },
  { category: 'Logic', title: 'Countdown', description: 'Count down from 10 to 1', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Decrement in loop' },
  { category: 'Logic', title: 'Age Category', description: 'Categorize age as child (<13), teen (13-19), or adult (20+)', difficulty: 'Easy', estimatedTime: '4 min', hint: 'Use multiple conditions' },
  { category: 'Logic', title: 'Simple Calculator', description: 'Add, subtract, multiply or divide two numbers', difficulty: 'Easy', estimatedTime: '5 min', hint: 'Use switch or if statements' },
  { category: 'Logic', title: 'Vowel Check', description: 'Check if a letter is a vowel', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Compare with a, e, i, o, u' },
  { category: 'Logic', title: 'Pass or Fail', description: 'Check if score >= 60 is pass or fail', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Simple if/else' },
  { category: 'Logic', title: 'Array First Item', description: 'Get the first item from an array', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use index 0' },
  { category: 'Logic', title: 'Array Last Item', description: 'Get the last item from an array', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Use length - 1' },
  { category: 'Logic', title: 'Temperature Convert', description: 'Convert Celsius to Fahrenheit: F = C × 9/5 + 32', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Apply the formula' },
];

// Debugging Tasks
const debugTasks: Omit<Task, 'id'>[] = [
  { category: 'Debug', title: 'Fix Missing Bracket', description: 'Find and fix: function hello( { console.log("hi"); }', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Count opening and closing brackets' },
  { category: 'Debug', title: 'Fix Variable Name', description: 'Find the error: let 1name = "John";', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Variable names cannot start with numbers' },
  { category: 'Debug', title: 'Fix String Quotes', description: 'Fix this: let msg = "Hello World\';', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Matching quotes needed' },
  { category: 'Debug', title: 'Fix Semicolon', description: 'Fix: let x = 5 let y = 10;', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Statements need semicolons' },
  { category: 'Debug', title: 'Fix HTML Tag', description: 'Fix: <h1>Hello World<h1>', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Closing tags need /' },
  { category: 'Debug', title: 'Fix Comparison', description: 'Why is this wrong? if (x = 5) { }', difficulty: 'Easy', estimatedTime: '2 min', hint: '= is assignment, not comparison' },
  { category: 'Debug', title: 'Fix Array Index', description: 'Why error? let arr = [1,2,3]; console.log(arr[3]);', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Arrays start at index 0' },
  { category: 'Debug', title: 'Fix Infinite Loop', description: 'Fix: for(let i=0; i<10; i--)', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Check loop direction' },
  { category: 'Debug', title: 'Fix Function Call', description: 'Fix: function greet() {} greet;', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Function calls need ()' },
  { category: 'Debug', title: 'Fix CSS Property', description: 'Fix: color = red;', difficulty: 'Easy', estimatedTime: '1 min', hint: 'CSS uses : not =' },
  { category: 'Debug', title: 'Fix HTML Attribute', description: 'Fix: <img scr="pic.jpg">', difficulty: 'Easy', estimatedTime: '1 min', hint: 'Check spelling' },
  { category: 'Debug', title: 'Fix String Addition', description: 'Why is "5" + 5 = "55"?', difficulty: 'Easy', estimatedTime: '2 min', hint: 'String concatenation vs addition' },
  { category: 'Debug', title: 'Fix Undefined', description: 'Why undefined? let obj = {}; console.log(obj.name);', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Property does not exist' },
  { category: 'Debug', title: 'Fix Case Sensitivity', description: 'Fix: Document.getElementById("id")', difficulty: 'Easy', estimatedTime: '1 min', hint: 'JavaScript is case-sensitive' },
  { category: 'Debug', title: 'Fix NaN', description: 'Why NaN? let result = "hello" * 2;', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Cannot multiply strings' },
];

// AI Tasks
const aiTasks: Omit<Task, 'id'>[] = [
  { category: 'AI', title: 'Write a Prompt', description: 'Write a prompt asking AI to explain what HTML is', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Be specific in your question' },
  { category: 'AI', title: 'Ask for Examples', description: 'Ask AI to give you 3 examples of CSS selectors', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Ask for specific examples' },
  { category: 'AI', title: 'Debug with AI', description: 'Paste a code error and ask AI to help fix it', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Include the error message' },
  { category: 'AI', title: 'Learn a Concept', description: 'Ask AI to explain JavaScript variables in simple terms', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Ask for beginner-level explanation' },
  { category: 'AI', title: 'Code Review', description: 'Ask AI to review a simple code snippet you wrote', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Share your code and ask for feedback' },
  { category: 'AI', title: 'Compare Concepts', description: 'Ask AI to compare let vs const in JavaScript', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Ask for differences' },
  { category: 'AI', title: 'Best Practices', description: 'Ask AI for 3 best practices in writing HTML', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Ask for professional tips' },
  { category: 'AI', title: 'Generate Comments', description: 'Ask AI to add comments to your code', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Share code, ask for comments' },
  { category: 'AI', title: 'Simplify Explanation', description: 'Ask AI to explain DOM in simple words', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Ask for ELI5 explanation' },
  { category: 'AI', title: 'Quiz Yourself', description: 'Ask AI to give you 5 easy HTML quiz questions', difficulty: 'Easy', estimatedTime: '5 min', hint: 'Request practice questions' },
  { category: 'AI', title: 'Project Ideas', description: 'Ask AI for 3 simple beginner project ideas', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Specify your skill level' },
  { category: 'AI', title: 'Error Explanation', description: 'Ask AI to explain what "undefined" means', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Ask for common causes' },
  { category: 'AI', title: 'Learning Path', description: 'Ask AI what to learn after HTML basics', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Ask for next steps' },
  { category: 'AI', title: 'Code Translation', description: 'Ask AI to convert a CSS class to inline style', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Provide the CSS class' },
  { category: 'AI', title: 'Improve Code', description: 'Ask AI to make your code more readable', difficulty: 'Easy', estimatedTime: '3 min', hint: 'Share messy code first' },
];

// Quick Practice
const quickTasks: Omit<Task, 'id'>[] = [
  { category: 'Quick', title: 'Type Speed', description: 'Type "The quick brown fox jumps over the lazy dog" 3 times', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Practice typing speed' },
  { category: 'Quick', title: 'File Creation', description: 'Create a new file called "practice.html"', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Use your code editor' },
  { category: 'Quick', title: 'Folder Structure', description: 'Create folders: css, js, images in your project', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Organize your files' },
  { category: 'Quick', title: 'Open DevTools', description: 'Open browser DevTools and find Console tab', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Press F12' },
  { category: 'Quick', title: 'Inspect Element', description: 'Right-click any element and inspect it', difficulty: 'Simple', estimatedTime: '1 min', hint: 'See the HTML structure' },
  { category: 'Quick', title: 'Save Shortcut', description: 'Practice using Ctrl+S to save files 5 times', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Build muscle memory' },
  { category: 'Quick', title: 'Copy-Paste Code', description: 'Copy a code snippet and paste it in your editor', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Ctrl+C, Ctrl+V' },
  { category: 'Quick', title: 'Undo Action', description: 'Make a change and undo it using Ctrl+Z', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Very useful shortcut' },
  { category: 'Quick', title: 'Find and Replace', description: 'Use Ctrl+H to find and replace text', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Useful for renaming' },
  { category: 'Quick', title: 'Multiple Cursors', description: 'Try Ctrl+D in VS Code to select same word', difficulty: 'Easy', estimatedTime: '2 min', hint: 'Edit multiple places' },
  { category: 'Quick', title: 'Comment Code', description: 'Use Ctrl+/ to comment out a line of code', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Toggle comments' },
  { category: 'Quick', title: 'Zoom In/Out', description: 'Practice zooming in browser with Ctrl+/Ctrl-', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Test responsiveness' },
  { category: 'Quick', title: 'New Tab', description: 'Open a new browser tab with Ctrl+T', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Learn shortcuts' },
  { category: 'Quick', title: 'Close Tab', description: 'Close current tab with Ctrl+W', difficulty: 'Simple', estimatedTime: '1 min', hint: 'Be careful!' },
  { category: 'Quick', title: 'Refresh Page', description: 'Refresh the page with F5 or Ctrl+R', difficulty: 'Simple', estimatedTime: '1 min', hint: 'See your changes' },
];

// Combine all tasks
const allTasks = [
  ...htmlTasks,
  ...cssTasks,
  ...jsTasks,
  ...logicTasks,
  ...debugTasks,
  ...aiTasks,
  ...quickTasks,
];

// Function to get a random task
export function getRandomTask(): Task {
  const randomIndex = Math.floor(Math.random() * allTasks.length);
  const task = allTasks[randomIndex];
  return {
    ...task,
    id: `task-${Date.now()}-${randomIndex}`,
  };
}

// Function to get a random task by category
export function getRandomTaskByCategory(category: string): Task {
  const categoryTasks = allTasks.filter(t => t.category === category);
  if (categoryTasks.length === 0) {
    return getRandomTask();
  }
  const randomIndex = Math.floor(Math.random() * categoryTasks.length);
  const task = categoryTasks[randomIndex];
  return {
    ...task,
    id: `task-${Date.now()}-${randomIndex}`,
  };
}

// Get all categories
export function getCategories(): string[] {
  return ['All', 'HTML', 'CSS', 'JavaScript', 'Logic', 'Debug', 'AI', 'Quick'];
}

// Stats tracking
export interface TaskStats {
  completed: number;
  skipped: number;
  totalTime: number;
  streak: number;
  categoryCounts: Record<string, number>;
}

export function createInitialStats(): TaskStats {
  return {
    completed: 0,
    skipped: 0,
    totalTime: 0,
    streak: 0,
    categoryCounts: {},
  };
}
