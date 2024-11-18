let taskList  = [
    {
        "sprint": "Sprint 1: ES6 Foundations",
        "topics": [
            {"topic":"Recap of HTML & CSS","checked" : false},
            {"topic":"Overview of the HTML DOM","checked" : false},
            {"topic":"JavaScript Basics: Variables, functions, conditionals, loops, arrays, and objects","checked" : false},
            {"topic":"ES6+ features: Arrow functions, destructuring, spread/rest operators, template literals, modules","checked" : false},
            {"topic":"Introduction to Functional Programming","checked" : false},
            {"topic":"Version Control (Git): Basics of Git for version control","checked" : false}
        ],
    
    },
    {
        "sprint": "Sprint 2: Core React Concepts - JSX & Components",
        "topics": [
            {"topic":"Node & NPM Basics", "checked" :false},
            {"topic":"Using NPM Libraries: Installing and using React as an external library", "checked" :false},
            {"topic":"React Basics: Introduction to the library", "checked" :false},
            {"topic":"JSX: Syntax and how it translates to JavaScript", "checked" :false},
            {"topic":"Components: Functional and class components, props, and component composition", "checked" :false}
        ]
    },
    {
        "sprint": "Sprint 3: Core Concepts II - State and Lifecycle",
        "topics": [
            {"topic":"State and Lifecycle: Managing component data over time", "checked":false},
            {"topic":"useState and useEffect Hooks: Basics of React Hooks", "checked":false},
            {"topic":"Lifecycle Methods: Understanding lifecycle methods in class components", "checked":false}
        ]
    },
    {
        "sprint": "Sprint 4: Core Concepts III - Event Handling, Conditional Rendering, and Lists",
        "topics": [
            { "topic":"Event Handling: Managing events, binding event handlers, and passing data with events", "checked" :false},
            { "topic":"Conditional Rendering: Rendering elements conditionally using JavaScript techniques (&&, ternary operators)", "checked" :false},
            { "topic":"Lists and Keys: Rendering lists, using unique keys, and understanding the importance of keys", "checked" :false}
        ]
    },
    {
        "sprint": "Sprint 5: Styling in React",
        "topics": [
            {"topic":"CSS Modules: Isolating styles using CSS Modules for modular CSS", "checked" :false},
            {"topic":"Styled Components / Emotion: Using CSS-in-JS solutions", "checked" :false},
            {"topic":"CSS Frameworks: Learning frameworks like Bootstrap or Tailwind CSS to speed up UI development", "checked" :false},
            {"topic":"Integration of Styling Tools & Libraries", "checked" :false}
        ]
    },
    {
        "sprint": "Sprint 6: Advanced React Concepts",
        "topics": [
            {"topic":"Context API: Sharing data across components without prop drilling", "checked":false},
            {"topic":"React Router: Implementing routing with React Router for navigating between pages", "checked":false},
            {"topic":"Learning about Link, NavLink, dynamic routing, and nested routes", "checked":false},
            {"topic":"Custom Hooks: Creating reusable hooks for shared logic", "checked":false},
            {"topic":"Error Boundaries: Handling component errors gracefully", "checked":false},
            {"topic":"Code Splitting and Lazy Loading: Using React.lazy() and Suspense for better performance and loading states", "checked":false}
        ]
    },
    {
        "sprint": "Sprint 7: State Management",
        "topics": [
            {"topic":"React Context for State Management: Managing global state for small applications", "checked":false},
            {"topic":"Redux Toolkit: Basics of Redux (actions, reducers, and the store)", "checked":false},
            {"topic":"Simplifying state management with Redux Toolkit and async actions with Redux Thunk", "checked":false},
            {"topic":"Alternative State Libraries (optional): Recoil, MobX, Zustand, or Jotai" ,"checked":false}
        ]
    },
    {
        "sprint": "Sprint 8: Forms and Validations",
        "topics": [
            {"topic":"Controlled Components: Differences between controlled and uncontrolled components", "checked":false},
            {"topic":"Form Libraries: React Hook Form for validation and minimal re-renders", "checked":false},
            {"topic":"Formik and Yup for validation", "checked":false},
            {"topic":"Custom Validation: Creating custom validation functions for complex logic", "checked":false},
            {"topic":"TypeScript Basics: Types, interfaces, and generics, and applying TypeScript in React for type-safe props, state, and context" ,"checked":false}
        ]
    },
    {
        "sprint": "Sprint 9: Testing in React",
        "topics": [
            {"topic":"Unit Testing: Jest for testing JavaScript code", "checked":false},
            {"topic":"React Testing Library for component testing", "checked":false},
            {"topic":"End-to-End Testing: Cypress or Playwright for testing user flows", "checked":false},
            {"topic":"Testing Best Practices: Focusing on important functionalities, edge cases, and critical paths","checked":false}
        ]
    },
    {
        "sprint": "Sprint 10: Backend Integration and Data Fetching",
        "topics": [
            {"topic":"REST APIs: Fetching data with fetch() or Axios and handling async data loading", "checked" :false},
            {"topic":"Practice with CRUD operations and error handling", "checked" :false},
            {"topic":"GraphQL: Basics of GraphQL and integration with Apollo Client", "checked" :false},
            {"topic":"Handling queries, mutations, and caching", "checked" :false},
            {"topic":"React Query: Efficiently handling server state for caching, data synchronization, and background updates", "checked" :false}
        ]
    },
    {
        "sprint": "Sprint 11: Performance Optimization",
        "topics": [
            {"topic":"React.memo and useMemo: Optimizing rendering with memoization", "checked" :false},
            {"topic":"useCallback: Preventing unnecessary re-renders by memoizing functions", "checked" :false},
            {"topic":"React Profiler: Analyzing performance with the React Profiler tool", "checked" :false},
            {"topic":"Lazy Loading and Code Splitting: Loading components as needed to reduce initial load time", "checked" :false},
            {"topic":"Virtualization: Using libraries like React Virtual or react-window for efficient rendering of large lists", "checked" :false}
        ]
    },
    {
        "sprint": "Sprint 12: Server-Side Rendering (SSR) and Static Site Generation (SSG)",
        "topics": [
            {"topic":"Next.js Basics: Introduction to SSR, SSG, and client-side rendering", "checked":false},
            {"topic":"API Routes and Static Export: Using Next.js for API routes and static exports", "checked":false},
            {"topic":"SEO Optimization: Implementing SEO best practices with dynamic meta tags and sitemaps" ,"checked":false}
        ]
    },
    {
        "sprint": "Sprint 13: Building and Deployment",
        "topics": [
            {"topic":"Build Tools: Basics of Webpack and Babel (Next.js manages this for you)", "checked":false},
            {"topic":"Deployment Platforms: Deploying applications to platforms like Vercel (for Next.js), Netlify, or GitHub Pages", "checked":false},
            {"topic":"Using Docker for containerizing React applications", "checked":false},
            {"topic":"Environment Variables: Configuring and using environment variables securely", "checked":false}
        ]
    },
    {
        "sprint": "Sprint 14: DevOps and Monitoring",
        "topics": [
            {"topic":"CI/CD: Setting up CI/CD pipelines using GitHub Actions or GitLab CI/CD", "checked": false},
            {"topic":"Automating testing and deployment processes", "checked": false},
            {"topic":"Error Tracking: Integrating tools like Sentry or LogRocket for monitoring and error tracking", "checked": false},
            {"topic":"Analytics: Using analytics services like Google Analytics or Amplitude for usage insights", "checked": false}
        ]
    },
    {
        "sprint": "Sprint 15: Advanced Topics",
        "topics": [
            {"topic":"Server Components: Understanding the upcoming server components in React", "checked":false},
            {"topic":"Progressive Web Apps (PWA): Making React apps installable and offline-friendly", "checked":false},
            {"topic":"WebSockets and Real-Time Data: Using Socket.io or WebSocket API for handling real-time data", "checked":false},
            {"topic":"Internationalization (i18n): Using libraries like react-intl or i18next for multi-language support" ,"checked":false}
        ]
    }
]
const table = document.getElementById("table")
const tableBody = document.createElement("tbody")
const progressBar = document.getElementById("progressBar") 
const progressText = document.getElementById("progressText")    
 

const  mainTable = JSON.parse(localStorage.getItem("objTable")) 

if(mainTable !== null){
  taskList = mainTable.taskList 
  progressBar.style.width = mainTable.progressBar
  progressText.textContent = mainTable.progressText

  console.log(progressText.textContent)

 
}



function fillTable (taskList){
    taskList.forEach(task=>{
   
        task.topics.forEach(topicObj=>{
            const row = document.createElement("tr")
            const level = document.createElement("td")
            const topicGroup  = document.createElement("td") 
            const checkBox = document.createElement("input")
            
            const topicName = document.createElement("td")
            topicName.textContent = `${topicObj.topic}`
    
            level.textContent = "Intial"
    
            topicGroup.textContent = `${task.sprint}`
            checkBox.type = "checkbox"
            checkBox.checked = topicObj.checked
    
    
            checkBox.addEventListener('click',(e)=>{
                const clicked = e.target.checked
                
                topicObj.checked = clicked
                updateProgress()

               const savedDetails = {
                "progressBar": progressBar.style.width,
                "progrssText":  progressText.textContent,
                taskList
               }
                
                localStorage.setItem("objTable",JSON.stringify(savedDetails))
                
                
            })
    
    
            checkBox.className = "checkbox"
        
            row.appendChild(topicName)
            row.appendChild(level)
            row.appendChild(topicGroup)
            row.appendChild(checkBox)
        
            tableBody.appendChild(row)
            table.appendChild(tableBody)
    
           
    
        })
       
       
    })
  
}

fillTable(taskList)





function updateProgress() {
    const checkBox = document.querySelectorAll(".checkbox")
    const ArrCheckBox = [...checkBox]
    const checked = ArrCheckBox.filter(ticked =>ticked.checked === true).length
    console.log(checked)
    const taskLength = 64
    const progressPercentage = taskLength > 0 ? (checked / taskLength) * 100 : 0
    console.log(progressPercentage)
    

    progressBar.style.width = `${progressPercentage}%`
    progressText.textContent = `${Math.round(progressPercentage)}% Complete`

     console.log(progressText)

}
