// Unlimited Task Generator - Creates infinite unique tasks

export interface GeneratedTask {
  id: string;
  category: string;
  title: string;
  scenario: string;
  description: string;
  constraints: string[];
  deliverables: string[];
  timeEstimate: string;
}

// Task Templates - Combinable parts for unlimited variations
const domains = [
  'e-commerce platform',
  'social media application',
  'online learning portal',
  'healthcare management system',
  'restaurant ordering app',
  'real estate listing website',
  'job portal',
  'event booking platform',
  'fitness tracking app',
  'music streaming service',
  'video sharing platform',
  'news aggregator website',
  'travel booking system',
  'banking dashboard',
  'inventory management system',
  'customer support portal',
  'project management tool',
  'online marketplace',
  'food delivery app',
  'hotel reservation system',
  'car rental platform',
  'online pharmacy',
  'gaming leaderboard',
  'blogging platform',
  'podcast hosting service',
  'freelance marketplace',
  'auction website',
  'subscription box service',
  'dating app',
  'pet adoption platform',
  'recipe sharing website',
  'book library system',
  'movie streaming platform',
  'sports betting portal',
  'charity donation platform',
  'online tutoring system',
  'virtual event platform',
  'crypto trading dashboard',
  'weather forecast app',
  'task automation tool'
];

const entities = [
  { name: 'users', fields: ['id', 'name', 'email', 'password', 'avatar', 'role', 'created_at'] },
  { name: 'products', fields: ['id', 'name', 'price', 'description', 'category', 'stock', 'images'] },
  { name: 'orders', fields: ['id', 'user_id', 'items', 'total', 'status', 'shipping_address', 'created_at'] },
  { name: 'posts', fields: ['id', 'author_id', 'title', 'content', 'likes', 'comments', 'created_at'] },
  { name: 'comments', fields: ['id', 'post_id', 'user_id', 'content', 'created_at'] },
  { name: 'categories', fields: ['id', 'name', 'parent_id', 'description', 'icon'] },
  { name: 'reviews', fields: ['id', 'user_id', 'item_id', 'rating', 'comment', 'created_at'] },
  { name: 'notifications', fields: ['id', 'user_id', 'type', 'message', 'read', 'created_at'] },
  { name: 'messages', fields: ['id', 'sender_id', 'receiver_id', 'content', 'read', 'created_at'] },
  { name: 'bookings', fields: ['id', 'user_id', 'service_id', 'date', 'time', 'status'] },
  { name: 'payments', fields: ['id', 'user_id', 'amount', 'method', 'status', 'transaction_id'] },
  { name: 'subscriptions', fields: ['id', 'user_id', 'plan_id', 'start_date', 'end_date', 'status'] },
  { name: 'favorites', fields: ['id', 'user_id', 'item_id', 'item_type', 'created_at'] },
  { name: 'settings', fields: ['id', 'user_id', 'theme', 'language', 'notifications_enabled'] },
  { name: 'logs', fields: ['id', 'user_id', 'action', 'details', 'ip_address', 'created_at'] }
];

const features = [
  'user authentication',
  'search functionality',
  'filtering system',
  'sorting options',
  'pagination',
  'infinite scroll',
  'real-time notifications',
  'file upload',
  'image gallery',
  'shopping cart',
  'wishlist',
  'rating system',
  'review system',
  'comment section',
  'sharing functionality',
  'bookmark feature',
  'dark mode toggle',
  'language switcher',
  'user profile',
  'settings page',
  'dashboard analytics',
  'export functionality',
  'import functionality',
  'batch operations',
  'drag and drop',
  'calendar view',
  'map integration',
  'chart visualization',
  'progress tracking',
  'reminder system'
];

const uiComponents = [
  'navigation bar',
  'sidebar menu',
  'footer section',
  'hero banner',
  'card grid',
  'data table',
  'form wizard',
  'modal dialog',
  'dropdown menu',
  'tabs component',
  'accordion section',
  'breadcrumb navigation',
  'pagination controls',
  'search bar',
  'filter panel',
  'notification badge',
  'user avatar',
  'loading spinner',
  'empty state',
  'error page',
  'success message',
  'confirmation dialog',
  'tooltip',
  'progress bar',
  'slider component',
  'toggle switch',
  'checkbox group',
  'radio button group',
  'date picker',
  'file uploader'
];

const problems = [
  'is not displaying correctly on mobile devices',
  'has inconsistent spacing between elements',
  'lacks proper error handling',
  'has confusing user flow',
  'is missing loading states',
  'has accessibility issues',
  'needs better visual hierarchy',
  'has poor color contrast',
  'lacks proper form validation',
  'has broken navigation links',
  'is missing empty states',
  'has inconsistent button styles',
  'lacks proper feedback messages',
  'has unclear call-to-action buttons',
  'is missing confirmation dialogs',
  'has poor information architecture',
  'lacks proper data organization',
  'has redundant code structure',
  'is missing proper documentation',
  'has unclear naming conventions'
];

// Actions and task types used for reference in task generation
const _actions = [
  'design the folder structure',
  'plan the component hierarchy',
  'create the database schema',
  'design the API endpoints',
  'plan the user flow',
  'organize the CSS architecture',
  'design the state management',
  'plan the routing structure',
  'create the data model',
  'design the error handling strategy',
  'plan the authentication flow',
  'organize the file naming convention',
  'design the form validation logic',
  'plan the notification system',
  'create the permission structure',
  'design the caching strategy',
  'plan the search functionality',
  'organize the utility functions',
  'design the testing strategy',
  'plan the deployment structure'
];

const _taskTypes = [
  'ARCHITECTURE',
  'DATA_FLOW',
  'SYSTEM_DESIGN',
  'DECISION_MAKING',
  'FEATURE_DESIGN',
  'PROBLEM_SOLVING',
  'UI_STRUCTURE',
  'API_DESIGN',
  'DATABASE_DESIGN',
  'FLOW_PLANNING'
];

// Suppress unused variable warnings
void _actions;
void _taskTypes;

// Helper functions
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateTaskId(): string {
  const prefix = getRandomItem(['TASK', 'DEV', 'WEB', 'SYS', 'ARCH', 'FLOW']);
  const number = Math.floor(Math.random() * 9000) + 1000;
  return `${prefix}-${number}`;
}

// Task Generation Templates
const taskTemplates = [
  // Architecture Tasks
  {
    category: 'Architecture & Structure',
    generate: () => {
      const domain = getRandomItem(domains);
      const components = getRandomItems(uiComponents, 4);
      return {
        title: `Design Component Architecture for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your team is building a ${domain}. The design team has completed the mockups, and now you need to plan how the frontend components will be organized.`,
        description: `As a web developer, you are assigned to design the component architecture for the ${domain}. The UI includes: ${components.join(', ')}. Your task is to create a component hierarchy showing parent-child relationships, shared components, and where each component should be placed in the folder structure.`,
        constraints: [
          'Do not write actual code - only structure and planning',
          'Maximum 3 levels of component nesting',
          'Each component must have a clear single responsibility',
          'Identify at least 2 reusable components'
        ],
        deliverables: [
          'Component tree diagram (text or visual)',
          'Folder structure with file names',
          'List of props each component needs',
          'Identification of shared/reusable components'
        ]
      };
    }
  },
  
  // Data Flow Tasks
  {
    category: 'Data Flow Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      const entity = getRandomItem(entities);
      return {
        title: `Design Data Flow for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `You are working on a ${domain}. The ${feature} feature needs to be implemented, and you must plan how data will flow through the application.`,
        description: `As a web developer, you are assigned to design the data flow for the ${feature} in a ${domain}. The feature involves ${entity.name} data with fields: ${entity.fields.join(', ')}. Plan how data moves from user action → frontend → API → database and back.`,
        constraints: [
          'Do not implement - only design the flow',
          'Consider both success and error scenarios',
          'Keep the flow simple and logical',
          'Maximum 6 steps in the flow'
        ],
        deliverables: [
          'Data flow diagram (text-based is acceptable)',
          'List of API calls needed',
          'State changes at each step',
          'Error handling points identified'
        ]
      };
    }
  },
  
  // Database Design Tasks
  {
    category: 'Database Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const entities2 = getRandomItems(entities, 3);
      return {
        title: `Design Database Schema for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `A new ${domain} is being developed. The backend team needs a database structure before they can start building APIs.`,
        description: `As a web developer, you are assigned to design the database schema for a ${domain}. The system needs to handle: ${entities2.map(e => e.name).join(', ')}. Create table structures showing fields, data types, and relationships between tables.`,
        constraints: [
          'Use simple data types (string, number, boolean, date)',
          'Maximum 8 fields per table',
          'Must include primary keys and foreign keys',
          'Do not over-engineer - keep it simple'
        ],
        deliverables: [
          'Table structures with field names and types',
          'Relationship diagram (one-to-many, many-to-many)',
          'Primary and foreign key identification',
          'Brief explanation of each table purpose'
        ]
      };
    }
  },
  
  // API Design Tasks
  {
    category: 'API Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const entity = getRandomItem(entities);
      const feature = getRandomItem(features);
      return {
        title: `Design REST API Endpoints for ${entity.name.charAt(0).toUpperCase() + entity.name.slice(1)} Management`,
        scenario: `You are building a ${domain}. The frontend team needs to know what API endpoints will be available for ${feature}.`,
        description: `As a web developer, you are assigned to design the REST API endpoints for managing ${entity.name} in a ${domain}. The frontend needs to perform CRUD operations and ${feature}. Design the endpoints with proper HTTP methods and URL structure.`,
        constraints: [
          'Follow REST naming conventions',
          'Use proper HTTP methods (GET, POST, PUT, DELETE)',
          'Keep URLs simple and intuitive',
          'Maximum 8 endpoints'
        ],
        deliverables: [
          'List of endpoints with HTTP methods',
          'URL structure for each endpoint',
          'Request body structure (for POST/PUT)',
          'Response structure for each endpoint'
        ]
      };
    }
  },
  
  // User Flow Tasks
  {
    category: 'User Flow Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      return {
        title: `Design User Flow for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your UX team needs a detailed user flow for the ${feature} in your ${domain}. They need to understand every step a user takes.`,
        description: `As a web developer, you are assigned to design the complete user flow for ${feature} in a ${domain}. Map out every screen, action, decision point, and outcome from start to finish.`,
        constraints: [
          'Include all possible user paths (success, error, cancel)',
          'Maximum 10 steps in the main flow',
          'Consider edge cases',
          'Keep the flow intuitive for users'
        ],
        deliverables: [
          'Step-by-step user flow diagram',
          'Decision points identified',
          'Error handling paths',
          'Success confirmation steps'
        ]
      };
    }
  },
  
  // Problem Solving Tasks
  {
    category: 'Problem Solving',
    generate: () => {
      const domain = getRandomItem(domains);
      const component = getRandomItem(uiComponents);
      const problem = getRandomItem(problems);
      return {
        title: `Fix UX Issues in ${component.charAt(0).toUpperCase() + component.slice(1)}`,
        scenario: `Users have reported that the ${component} in your ${domain} ${problem}. Your task is to identify and plan fixes.`,
        description: `As a web developer, you are assigned to analyze and fix the ${component} that ${problem}. Review the component's purpose, identify specific issues, and plan solutions without breaking existing functionality.`,
        constraints: [
          'Do not change core functionality',
          'Maintain backward compatibility',
          'Changes must be implementable in under 2 hours',
          'Consider all user types (new and returning)'
        ],
        deliverables: [
          'List of identified issues (minimum 3)',
          'Proposed solution for each issue',
          'Priority ranking of fixes',
          'Potential risks of each change'
        ]
      };
    }
  },
  
  // Feature Design Tasks
  {
    category: 'Feature Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      const components = getRandomItems(uiComponents, 3);
      return {
        title: `Design ${feature.charAt(0).toUpperCase() + feature.slice(1)} Feature`,
        scenario: `The product manager wants to add ${feature} to your ${domain}. You need to plan the complete implementation.`,
        description: `As a web developer, you are assigned to design the ${feature} feature for a ${domain}. The feature will use these UI elements: ${components.join(', ')}. Plan the complete feature including UI, data, and logic.`,
        constraints: [
          'Feature must be implemented within 1 week',
          'Must work on desktop and mobile',
          'Should integrate with existing authentication',
          'Use existing design system components'
        ],
        deliverables: [
          'Feature specification document',
          'UI component breakdown',
          'Data requirements',
          'Integration points with existing system'
        ]
      };
    }
  },
  
  // State Management Tasks
  {
    category: 'State Management',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      const entity = getRandomItem(entities);
      return {
        title: `Design State Management for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your ${domain} has complex ${feature} that involves managing ${entity.name} data across multiple components.`,
        description: `As a web developer, you are assigned to design the state management strategy for ${feature} in a ${domain}. The state involves ${entity.name} with fields: ${entity.fields.slice(0, 5).join(', ')}. Plan what state is local vs global, and how components will access and update it.`,
        constraints: [
          'Keep global state minimal',
          'Avoid prop drilling more than 2 levels',
          'State updates must be predictable',
          'Consider performance implications'
        ],
        deliverables: [
          'State structure diagram',
          'Local vs global state decisions',
          'State update flow',
          'Component-to-state mapping'
        ]
      };
    }
  },
  
  // Folder Structure Tasks
  {
    category: 'Project Organization',
    generate: () => {
      const domain = getRandomItem(domains);
      const featureList = getRandomItems(features, 4);
      return {
        title: `Organize Project Structure for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your team is starting a new ${domain} project. Before coding begins, you need to establish a clear folder structure.`,
        description: `As a web developer, you are assigned to create the project folder structure for a ${domain}. The project will include these features: ${featureList.join(', ')}. Design a scalable, maintainable folder organization.`,
        constraints: [
          'Maximum 4 levels of folder nesting',
          'Follow industry best practices',
          'Must be intuitive for new team members',
          'Group by feature, not by file type'
        ],
        deliverables: [
          'Complete folder tree structure',
          'Naming conventions document',
          'Explanation of each main folder purpose',
          'Example file placements'
        ]
      };
    }
  },
  
  // Error Handling Tasks
  {
    category: 'Error Handling Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      return {
        title: `Design Error Handling Strategy for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your ${domain} needs robust error handling for the ${feature} feature. Users are currently confused when errors occur.`,
        description: `As a web developer, you are assigned to design a comprehensive error handling strategy for ${feature} in a ${domain}. Plan for network errors, validation errors, server errors, and unexpected errors.`,
        constraints: [
          'Error messages must be user-friendly',
          'Include recovery options where possible',
          'Log errors for debugging',
          'Do not expose sensitive information'
        ],
        deliverables: [
          'Error type categorization',
          'User-facing message for each error type',
          'Recovery action for each error',
          'Error logging strategy'
        ]
      };
    }
  },
  
  // Responsive Design Tasks
  {
    category: 'Responsive Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const components = getRandomItems(uiComponents, 4);
      return {
        title: `Plan Responsive Layout for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your ${domain} needs to work perfectly on mobile, tablet, and desktop. The current design is desktop-only.`,
        description: `As a web developer, you are assigned to plan the responsive layout strategy. The page includes: ${components.join(', ')}. Define how each element adapts across breakpoints.`,
        constraints: [
          'Use mobile-first approach',
          'Maximum 3 breakpoints',
          'Maintain usability at all sizes',
          'Do not hide critical functionality on mobile'
        ],
        deliverables: [
          'Breakpoint definitions',
          'Layout changes per breakpoint',
          'Component behavior changes',
          'Navigation strategy for mobile'
        ]
      };
    }
  },
  
  // Form Design Tasks
  {
    category: 'Form Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const entity = getRandomItem(entities);
      return {
        title: `Design Form Structure for ${entity.name.charAt(0).toUpperCase() + entity.name.slice(1)} Creation`,
        scenario: `Your ${domain} needs a form for creating new ${entity.name}. The form must be user-friendly and validate properly.`,
        description: `As a web developer, you are assigned to design a form for creating ${entity.name} in a ${domain}. The form fields include: ${entity.fields.filter(f => f !== 'id' && f !== 'created_at').join(', ')}. Plan the layout, validation, and submission flow.`,
        constraints: [
          'Form must be completable in under 2 minutes',
          'Group related fields logically',
          'Provide inline validation',
          'Support keyboard navigation'
        ],
        deliverables: [
          'Form field layout and grouping',
          'Validation rules for each field',
          'Error message strategy',
          'Submit button states and feedback'
        ]
      };
    }
  },
  
  // Navigation Design Tasks
  {
    category: 'Navigation Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const featureList = getRandomItems(features, 5);
      return {
        title: `Design Navigation Architecture for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your ${domain} is growing and needs a clear navigation structure. Users are getting lost finding features.`,
        description: `As a web developer, you are assigned to redesign the navigation for a ${domain}. Features include: ${featureList.join(', ')}. Create a navigation hierarchy that is intuitive and scalable.`,
        constraints: [
          'Maximum 7 top-level navigation items',
          'Dropdowns maximum 2 levels deep',
          'Must work on mobile (hamburger menu)',
          'Include breadcrumbs for deep pages'
        ],
        deliverables: [
          'Navigation hierarchy diagram',
          'URL structure for all pages',
          'Mobile navigation strategy',
          'Active state indicators'
        ]
      };
    }
  },
  
  // Authentication Flow Tasks
  {
    category: 'Authentication Design',
    generate: () => {
      const domain = getRandomItem(domains);
      return {
        title: `Design Authentication Flow for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your ${domain} needs a secure but user-friendly authentication system. Currently there is no login system.`,
        description: `As a web developer, you are assigned to design the authentication flow for a ${domain}. Include login, registration, password reset, and session management.`,
        constraints: [
          'Must support email/password login',
          'Optional: social login (design as extension)',
          'Remember me functionality',
          'Secure password requirements'
        ],
        deliverables: [
          'Authentication flow diagram',
          'Screen list with purposes',
          'Security considerations',
          'Session management strategy'
        ]
      };
    }
  },
  
  // Performance Planning Tasks
  {
    category: 'Performance Planning',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      return {
        title: `Plan Performance Optimization for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your ${domain}'s ${feature} is loading slowly. Users are complaining about performance.`,
        description: `As a web developer, you are assigned to plan performance optimizations for ${feature} in a ${domain}. Identify bottlenecks and plan solutions without over-engineering.`,
        constraints: [
          'Solutions must be implementable in 1 day',
          'Do not change core functionality',
          'Prioritize user-perceived performance',
          'Consider mobile users with slow connections'
        ],
        deliverables: [
          'Potential bottleneck identification',
          'Optimization strategies (minimum 3)',
          'Implementation priority',
          'Expected improvement estimates'
        ]
      };
    }
  },
  
  // Testing Strategy Tasks
  {
    category: 'Testing Strategy',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      return {
        title: `Design Testing Strategy for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your ${domain}'s ${feature} has no tests. The team needs a testing plan before adding new features.`,
        description: `As a web developer, you are assigned to design a testing strategy for ${feature} in a ${domain}. Plan what to test, how to test, and test case priorities.`,
        constraints: [
          'Focus on critical paths first',
          'Include unit and integration test ideas',
          'Tests must be maintainable',
          'Do not aim for 100% coverage'
        ],
        deliverables: [
          'List of critical test cases',
          'Test type for each case (unit/integration/e2e)',
          'Priority ranking',
          'Test data requirements'
        ]
      };
    }
  },
  
  // Documentation Tasks
  {
    category: 'Documentation Design',
    generate: () => {
      const domain = getRandomItem(domains);
      const entity = getRandomItem(entities);
      return {
        title: `Create API Documentation Structure for ${entity.name.charAt(0).toUpperCase() + entity.name.slice(1)} Endpoints`,
        scenario: `Your ${domain}'s API for ${entity.name} has no documentation. New developers cannot understand how to use it.`,
        description: `As a web developer, you are assigned to create the documentation structure for the ${entity.name} API. The API handles data with fields: ${entity.fields.join(', ')}. Plan what information to document and how.`,
        constraints: [
          'Documentation must be beginner-friendly',
          'Include request and response examples',
          'Cover error responses',
          'Keep it concise but complete'
        ],
        deliverables: [
          'Documentation outline/structure',
          'Example documentation for one endpoint',
          'Error code reference',
          'Quick start guide outline'
        ]
      };
    }
  },
  
  // Integration Tasks
  {
    category: 'Integration Planning',
    generate: () => {
      const domain = getRandomItem(domains);
      const feature = getRandomItem(features);
      return {
        title: `Plan Third-Party Integration for ${feature.charAt(0).toUpperCase() + feature.slice(1)}`,
        scenario: `Your ${domain} needs to integrate a third-party service for ${feature}. You must plan how this integration will work.`,
        description: `As a web developer, you are assigned to plan the integration of a third-party service for ${feature} in a ${domain}. Consider data flow, error handling, and fallback strategies.`,
        constraints: [
          'Minimize dependency on third-party',
          'Plan for service unavailability',
          'Keep integration loosely coupled',
          'Consider rate limits'
        ],
        deliverables: [
          'Integration architecture diagram',
          'Data mapping between systems',
          'Error handling strategy',
          'Fallback/offline behavior'
        ]
      };
    }
  },
  
  // Code Review Tasks
  {
    category: 'Code Review Planning',
    generate: () => {
      const domain = getRandomItem(domains);
      const component = getRandomItem(uiComponents);
      return {
        title: `Create Code Review Checklist for ${component.charAt(0).toUpperCase() + component.slice(1)} Component`,
        scenario: `Your team building a ${domain} needs a code review checklist for ${component} components. Reviews are currently inconsistent.`,
        description: `As a web developer, you are assigned to create a code review checklist for ${component} components in a ${domain}. The checklist should ensure quality, consistency, and maintainability.`,
        constraints: [
          'Checklist must be usable in 10 minutes',
          'Focus on common issues',
          'Include accessibility checks',
          'Balance thoroughness with practicality'
        ],
        deliverables: [
          'Code review checklist (15-20 items)',
          'Priority levels for each item',
          'Common mistakes to look for',
          'Quality threshold definition'
        ]
      };
    }
  },
  
  // Deployment Planning Tasks
  {
    category: 'Deployment Planning',
    generate: () => {
      const domain = getRandomItem(domains);
      return {
        title: `Plan Deployment Strategy for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your ${domain} is ready for production. You need to plan a safe deployment process.`,
        description: `As a web developer, you are assigned to plan the deployment strategy for a ${domain}. Consider environments, rollback plans, and monitoring.`,
        constraints: [
          'Minimize downtime',
          'Include rollback procedure',
          'Plan for database migrations',
          'Consider staging environment'
        ],
        deliverables: [
          'Deployment step checklist',
          'Environment configuration plan',
          'Rollback procedure',
          'Post-deployment verification'
        ]
      };
    }
  },
  
  // Accessibility Tasks
  {
    category: 'Accessibility Planning',
    generate: () => {
      const domain = getRandomItem(domains);
      const components = getRandomItems(uiComponents, 4);
      return {
        title: `Design Accessibility Improvements for ${domain.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
        scenario: `Your ${domain} has accessibility issues. Users with disabilities cannot use certain features.`,
        description: `As a web developer, you are assigned to plan accessibility improvements. Focus on these components: ${components.join(', ')}. Ensure WCAG 2.1 AA compliance.`,
        constraints: [
          'Changes must not alter visual design significantly',
          'Focus on keyboard navigation and screen readers',
          'Include color contrast fixes',
          'Must work with existing codebase'
        ],
        deliverables: [
          'Accessibility audit checklist results',
          'Required fixes per component',
          'ARIA attribute additions',
          'Testing strategy for accessibility'
        ]
      };
    }
  }
];

// Main Generator Function
export function generateTask(): GeneratedTask {
  const template = getRandomItem(taskTemplates);
  const generated = template.generate();
  
  return {
    id: generateTaskId(),
    category: template.category,
    title: generated.title,
    scenario: generated.scenario,
    description: generated.description,
    constraints: generated.constraints,
    deliverables: generated.deliverables,
    timeEstimate: '~30 minutes'
  };
}

// Generate multiple unique tasks
export function generateTasks(count: number): GeneratedTask[] {
  const tasks: GeneratedTask[] = [];
  const usedTitles = new Set<string>();
  
  while (tasks.length < count) {
    const task = generateTask();
    if (!usedTitles.has(task.title)) {
      usedTitles.add(task.title);
      tasks.push(task);
    }
  }
  
  return tasks;
}
