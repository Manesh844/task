// LOGICAL THINKING & ARCHITECTURAL WORK TASKS
// These tasks are designed to test how trainees THINK like web developers
// Tasks require action, implementation, or design - NOT question-answer format
// All tasks are beginner-friendly but appear professional

export interface LogicalTask {
  id: string;
  category: 'architecture' | 'data-flow' | 'system-design' | 'decision-making' | 'feature-design' | 'problem-solving';
  title: string;
  scenario: string;
  taskDescription: string;
  constraints: string[];
  deliverables: string[];
  timeEstimate: string;
  difficulty: 'beginner' | 'intermediate';
}

export const logicalTasks: LogicalTask[] = [
  // ==================== ARCHITECTURE TASKS ====================
  {
    id: 'ARCH-001',
    category: 'architecture',
    title: 'Design File Structure for E-Commerce Website',
    scenario: 'As a web developer, you have joined a team building an e-commerce website. The frontend UI mockups are complete, but no one has created the project structure. Your team lead has assigned you to design the folder and file organization before the team starts coding.',
    taskDescription: 'Create a complete folder structure for an e-commerce website that includes: homepage, product listing, product details, shopping cart, user authentication, and checkout. Consider where HTML files, CSS stylesheets, JavaScript files, and images should be organized.',
    constraints: [
      'Must be scalable for future features',
      'Must follow industry naming conventions',
      'CSS and JS must be in separate folders',
      'Images must be organized by type/purpose',
      'Must include a README.md location'
    ],
    deliverables: [
      'Complete folder tree diagram',
      'Brief explanation (1-2 sentences) for each main folder',
      'File naming convention document'
    ],
    timeEstimate: '20-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'ARCH-002',
    category: 'architecture',
    title: 'Plan Component Structure for Blog Platform',
    scenario: 'As a web developer, you are tasked with building a blog platform. The designer has provided mockups showing: header with navigation, sidebar with categories, main content area with blog posts, and a footer. Your task is to break this down into reusable components.',
    taskDescription: 'Identify all the reusable components needed for this blog platform. For each component, define what data it needs and what it displays. Consider which components can be reused across different pages.',
    constraints: [
      'Components should be single-responsibility',
      'Avoid duplicate functionality',
      'Consider mobile responsiveness',
      'Think about what data each component needs'
    ],
    deliverables: [
      'List of all components with names',
      'Component hierarchy diagram',
      'Data requirements for each component',
      'Notes on which components are reusable'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'ARCH-003',
    category: 'architecture',
    title: 'Organize CSS Architecture for Large Project',
    scenario: 'As a web developer, you have inherited a project with a single 3000-line CSS file. The team wants to refactor this into a maintainable structure. Design a CSS organization system that will make the project easier to maintain.',
    taskDescription: 'Design a CSS folder and file structure that separates concerns properly. Consider base styles, layout styles, component styles, utility classes, and page-specific styles. Create a plan for how to split the existing monolithic CSS file.',
    constraints: [
      'Must support multiple pages',
      'Must avoid CSS conflicts',
      'Must be easy for new developers to understand',
      'Consider using a naming convention like BEM'
    ],
    deliverables: [
      'CSS folder structure',
      'File naming convention',
      'Import order documentation',
      'Brief migration plan from single file'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'intermediate'
  },

  // ==================== DATA FLOW TASKS ====================
  {
    id: 'FLOW-001',
    category: 'data-flow',
    title: 'Map Data Flow for User Registration',
    scenario: 'As a web developer, you are building a user registration system. The frontend has a registration form (name, email, password). You need to design how data flows from the form to the server and back, including validation and error handling.',
    taskDescription: 'Create a data flow diagram showing: what happens when user fills the form, what validation occurs and where (frontend vs backend), how data is sent to the server, what the server does with it, and how success/error responses are handled.',
    constraints: [
      'Must include client-side validation',
      'Must handle all possible error cases',
      'Password must never be logged or displayed',
      'Must provide user feedback at each step'
    ],
    deliverables: [
      'Step-by-step data flow diagram',
      'List of validation checks (frontend and backend)',
      'Error scenarios and how each is handled',
      'Success flow description'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'FLOW-002',
    category: 'data-flow',
    title: 'Design Shopping Cart State Management',
    scenario: 'As a web developer, you are building a shopping cart for an online store. The cart needs to persist items as users browse, update when quantities change, and calculate totals. Design how cart data flows through the application.',
    taskDescription: 'Plan the data flow for the shopping cart: where cart data is stored, how it updates when items are added/removed, how totals are calculated, how it persists across page refreshes, and how it syncs with the backend.',
    constraints: [
      'Cart must persist after page refresh',
      'Cart must work across browser tabs',
      'Must handle out-of-stock scenarios',
      'Performance: avoid unnecessary recalculations'
    ],
    deliverables: [
      'Cart data structure design',
      'Storage strategy (where and how)',
      'Update flow for add/remove/quantity change',
      'Sync strategy with backend'
    ],
    timeEstimate: '30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'FLOW-003',
    category: 'data-flow',
    title: 'Plan API Data Fetching Strategy',
    scenario: 'As a web developer, you are building a dashboard that displays data from 5 different API endpoints. Some data changes frequently, some is static. Design a fetching strategy that balances freshness with performance.',
    taskDescription: 'Design when and how each API is called: on page load, on user action, or periodically. Decide what data should be cached and for how long. Plan how to handle loading states and errors for multiple simultaneous requests.',
    constraints: [
      'Page must load in under 3 seconds',
      'Some data must always be fresh',
      'Must handle failed requests gracefully',
      'Consider user is on slow connection'
    ],
    deliverables: [
      'Fetching strategy for each endpoint',
      'Caching policy document',
      'Loading state strategy',
      'Error handling plan'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'intermediate'
  },

  // ==================== SYSTEM DESIGN TASKS ====================
  {
    id: 'SYS-001',
    category: 'system-design',
    title: 'Design Database Structure for Music Streaming App',
    scenario: 'As a web developer, you are building a music streaming website. The frontend UI is already completed. Your task is to design how audio files, metadata, and user playlists should be logically stored and connected.',
    taskDescription: 'Create a simple database structure (tables/fields only) for: songs (with metadata like title, artist, duration), albums, artists, user accounts, and playlists. Show how these tables relate to each other.',
    constraints: [
      'A song can belong to multiple playlists',
      'Users can create multiple playlists',
      'An album can have multiple songs',
      'An artist can have multiple albums',
      'Keep it simple - no advanced database concepts needed'
    ],
    deliverables: [
      'Table list with fields for each',
      'Simple diagram showing relationships',
      'Explanation of key connections',
      'Sample data for one table'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'SYS-002',
    category: 'system-design',
    title: 'Design URL Structure for News Website',
    scenario: 'As a web developer, you are building a news website with categories, articles, and search functionality. Design the URL structure that will be user-friendly, SEO-friendly, and logically organized.',
    taskDescription: 'Create URL patterns for: homepage, category pages, individual articles, author pages, search results, and tag pages. Consider how URLs should look, what information they should contain, and how they should be structured.',
    constraints: [
      'URLs must be readable by humans',
      'URLs must be SEO-friendly',
      'No unnecessarily long URLs',
      'Consider pagination in lists',
      'Avoid query parameters when possible'
    ],
    deliverables: [
      'URL pattern for each page type',
      'Examples for each pattern',
      'Explanation of naming choices',
      'Handling of special characters in titles'
    ],
    timeEstimate: '20-25 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'SYS-003',
    category: 'system-design',
    title: 'Plan Notification System for Task Manager',
    scenario: 'As a web developer, you are adding notifications to a task management app. Users should be notified about: due dates, task assignments, comments on their tasks, and completed tasks. Design the notification system.',
    taskDescription: 'Design how notifications will work: what triggers each notification, how they are stored, how they are displayed to users, and how users can manage them (mark read, delete, preferences).',
    constraints: [
      'Notifications must not overwhelm users',
      'Users should be able to customize preferences',
      'Recent notifications should be easy to access',
      'Old notifications should not clutter the UI'
    ],
    deliverables: [
      'List of notification types and triggers',
      'Notification data structure',
      'Display strategy (where and how)',
      'User preference options'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'intermediate'
  },

  // ==================== DECISION MAKING TASKS ====================
  {
    id: 'DEC-001',
    category: 'decision-making',
    title: 'Choose Storage Strategy for User Preferences',
    scenario: 'As a web developer, you need to store user preferences for a website (theme, language, notification settings). You need to decide where to store this data: localStorage, sessionStorage, cookies, or server database.',
    taskDescription: 'Analyze each storage option and decide which is best for user preferences. Consider persistence, security, capacity, and access patterns. Provide your recommendation with reasoning.',
    constraints: [
      'Preferences should persist across sessions',
      'Some preferences may contain sensitive data',
      'Site must work even if user is not logged in',
      'Consider GDPR implications for cookies'
    ],
    deliverables: [
      'Comparison table of storage options',
      'Your recommendation with reasoning',
      'Implementation approach',
      'Fallback strategy if primary storage fails'
    ],
    timeEstimate: '20-25 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'DEC-002',
    category: 'decision-making',
    title: 'Decide Image Loading Strategy',
    scenario: 'As a web developer, you are building a photo gallery that displays 100+ images. The current implementation loads all images at once, causing slow page loads. Decide on a better loading strategy.',
    taskDescription: 'Evaluate different image loading strategies: lazy loading, pagination, infinite scroll, or a combination. Recommend the best approach for this use case and explain your reasoning.',
    constraints: [
      'Page must feel fast on initial load',
      'Users should be able to see all images eventually',
      'Consider mobile users with limited data',
      'Consider accessibility implications'
    ],
    deliverables: [
      'Analysis of each loading strategy',
      'Your recommended approach',
      'Implementation outline',
      'Performance metrics to measure'
    ],
    timeEstimate: '20-25 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'DEC-003',
    category: 'decision-making',
    title: 'Select Form Validation Approach',
    scenario: 'As a web developer, you are building a multi-step registration form. You need to decide when and how to validate user input: on every keystroke, on blur, on submit, or a combination.',
    taskDescription: 'Analyze different validation timing approaches and their impact on user experience. Recommend the best approach for a multi-step form and explain your reasoning.',
    constraints: [
      'Users should get timely feedback',
      'Validation should not be annoying',
      'Some fields depend on other fields',
      'Consider performance impact'
    ],
    deliverables: [
      'Comparison of validation timing options',
      'Your recommended approach for each field type',
      'Error message display strategy',
      'Handle dependencies between fields'
    ],
    timeEstimate: '20-25 minutes',
    difficulty: 'beginner'
  },

  // ==================== FEATURE DESIGN TASKS ====================
  {
    id: 'FEAT-001',
    category: 'feature-design',
    title: 'Design Search Functionality for Recipe Website',
    scenario: 'As a web developer, you are adding search functionality to a recipe website. Users should be able to search by recipe name, ingredients, cooking time, and dietary restrictions. Design how this search feature should work.',
    taskDescription: 'Design the search feature: what filters are available, how the search bar works, how results are displayed, and how users can refine their search. Consider both simple and advanced search needs.',
    constraints: [
      'Must be easy for beginners to use',
      'Must support complex searches for advanced users',
      'Results must be relevant and well-ordered',
      'Consider mobile interface'
    ],
    deliverables: [
      'Search interface design (describe elements)',
      'Filter options and how they work',
      'Search algorithm logic (simple description)',
      'Results display format'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'FEAT-002',
    category: 'feature-design',
    title: 'Design Comment System for Blog',
    scenario: 'As a web developer, you are adding a comment system to a blog platform. Users should be able to post comments, reply to comments, like comments, and report inappropriate content. Design this feature.',
    taskDescription: 'Design the complete comment system: how comments are structured (threading), how users interact with them, how moderation works, and how to prevent spam.',
    constraints: [
      'Support nested replies (at least 2 levels)',
      'Must handle high traffic',
      'Must prevent spam and abuse',
      'Consider anonymous vs logged-in users'
    ],
    deliverables: [
      'Comment data structure',
      'UI interaction flow',
      'Moderation system design',
      'Spam prevention strategies'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'FEAT-003',
    category: 'feature-design',
    title: 'Design User Profile Page',
    scenario: 'As a web developer, you are building the user profile page for a professional networking platform. The profile should display user information, their activity, and allow editing. Design this page.',
    taskDescription: 'Design the user profile page structure: what sections it includes, what information is displayed in each, how users can edit their profile, and how privacy settings work.',
    constraints: [
      'Some information may be private',
      'Consider different viewer perspectives (self vs others)',
      'Profile should be shareable',
      'Must be responsive for mobile'
    ],
    deliverables: [
      'Profile sections and their content',
      'Privacy levels for each section',
      'Edit mode design',
      'Public vs private view differences'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },

  // ==================== PROBLEM SOLVING TASKS ====================
  {
    id: 'PROB-001',
    category: 'problem-solving',
    title: 'Identify Missing Features in Login System',
    scenario: 'As a web developer, you are reviewing a basic login system that only has email/password login. The product manager wants to improve it. Identify what features are missing and how to add them.',
    taskDescription: 'Analyze the current login system and identify at least 8 features that are missing or could be improved. For each feature, briefly describe what it does and why it is important.',
    constraints: [
      'Focus on security and user experience',
      'Consider common user needs',
      'Think about edge cases',
      'Consider accessibility'
    ],
    deliverables: [
      'List of 8+ missing features',
      'Priority ranking (must-have vs nice-to-have)',
      'Brief implementation approach for top 3',
      'Security considerations'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'PROB-002',
    category: 'problem-solving',
    title: 'Solve Performance Issues on Product Listing Page',
    scenario: 'As a web developer, users are complaining that the product listing page is slow. It displays 50 products with images, descriptions, prices, and filtering options. Identify potential causes and solutions.',
    taskDescription: 'Analyze what could be causing the slow performance and propose solutions. Consider image loading, data fetching, rendering, and JavaScript execution.',
    constraints: [
      'Cannot reduce the number of products shown',
      'Must maintain all current features',
      'Consider users on slow connections',
      'Solutions should be practical to implement'
    ],
    deliverables: [
      'List of potential performance bottlenecks',
      'Solution for each bottleneck',
      'Prioritized action plan',
      'How to measure improvement'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'PROB-003',
    category: 'problem-solving',
    title: 'Fix User Experience Issues in Checkout Flow',
    scenario: 'As a web developer, the checkout process has a 70% abandonment rate. Users start checkout but don\'t complete it. Analyze what might be wrong and how to improve it.',
    taskDescription: 'Identify at least 10 possible reasons users abandon checkout and propose solutions for each. Consider UX, trust signals, payment options, and form design.',
    constraints: [
      'Cannot remove required fields (name, address, payment)',
      'Must maintain security',
      'Consider mobile users',
      'Consider international users'
    ],
    deliverables: [
      'List of 10+ potential abandonment reasons',
      'Solution for each issue',
      'Redesign recommendations',
      'A/B testing suggestions'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'intermediate'
  },
  {
    id: 'PROB-004',
    category: 'problem-solving',
    title: 'Design Error Handling Strategy',
    scenario: 'As a web developer, your web application currently shows generic error messages like "Something went wrong." Design a better error handling strategy that helps users understand and recover from errors.',
    taskDescription: 'Create an error handling strategy: what types of errors can occur, what message to show for each, how to help users recover, and how to log errors for developers.',
    constraints: [
      'Error messages must be user-friendly',
      'Must not expose sensitive information',
      'Must help users take next steps',
      'Must provide useful info for debugging'
    ],
    deliverables: [
      'Error categorization (types of errors)',
      'User-facing message for each category',
      'Recovery actions for each error type',
      'Developer logging strategy'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  },
  {
    id: 'PROB-005',
    category: 'problem-solving',
    title: 'Plan Mobile Responsive Conversion',
    scenario: 'As a web developer, you have a desktop-only website that needs to become mobile-responsive. The site has a header, sidebar, main content, and footer. Plan how to adapt the layout for mobile.',
    taskDescription: 'Create a plan to make the website responsive: how each section should adapt, what the mobile navigation should look like, and what content prioritization should occur.',
    constraints: [
      'All content must remain accessible',
      'No functionality should be removed',
      'Touch targets must be large enough',
      'Consider different mobile sizes'
    ],
    deliverables: [
      'Layout changes for each screen size',
      'Mobile navigation design',
      'Content priority order for mobile',
      'Breakpoint strategy'
    ],
    timeEstimate: '25-30 minutes',
    difficulty: 'beginner'
  }
];

// Function to get random logical task
export function getRandomLogicalTask(category?: string): LogicalTask {
  let availableTasks = logicalTasks;
  
  if (category && category !== 'all') {
    availableTasks = logicalTasks.filter(t => t.category === category);
  }
  
  if (availableTasks.length === 0) {
    availableTasks = logicalTasks;
  }
  
  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  return availableTasks[randomIndex];
}

// Get all categories
export function getLogicalTaskCategories() {
  return [
    { id: 'all', label: 'All Tasks', count: logicalTasks.length },
    { id: 'architecture', label: 'Architecture & Structure', count: logicalTasks.filter(t => t.category === 'architecture').length },
    { id: 'data-flow', label: 'Data Flow Design', count: logicalTasks.filter(t => t.category === 'data-flow').length },
    { id: 'system-design', label: 'System Design', count: logicalTasks.filter(t => t.category === 'system-design').length },
    { id: 'decision-making', label: 'Decision Making', count: logicalTasks.filter(t => t.category === 'decision-making').length },
    { id: 'feature-design', label: 'Feature Design', count: logicalTasks.filter(t => t.category === 'feature-design').length },
    { id: 'problem-solving', label: 'Problem Solving', count: logicalTasks.filter(t => t.category === 'problem-solving').length }
  ];
}
