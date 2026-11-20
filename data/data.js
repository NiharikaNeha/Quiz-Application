
export const quizQuestion = [
    {
        question: "What will be the output of typeof null?",
        options: ["null", "undefined", "object", "number"],
        answer: "object"
    },
    {
        question: "What is the output of [] + [] in JavaScript?",
        options: ["[]", "0", "Empty String", "undefined"],
        answer: "Empty String"
    },
    {
        question: "What will be the output of 1 + '2' + 3?",
        options: ["6", "123", "33", "NaN"],
        answer: "123"
    },
    {
        question: "Which method creates a new array without modifying the original?",
        options: ["push()", "splice()", "map()", "sort()"],
        answer: "map()"
    },
    {
        question: "What is the output of Boolean('false')?",
        options: ["false", "true", "undefined", "Error"],
        answer: "true"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function with no parameters",
            "A function bundled with its lexical environment",
            "A function that executes immediately",
            "A function inside an object"
        ],
        answer: "A function bundled with its lexical environment"
    },
    {
        question: "What will be the output of 0.1 + 0.2 === 0.3?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false"
    },
    {
        question: "Which keyword creates a block-scoped variable?",
        options: ["var", "let", "function", "static"],
        answer: "let"
    },
    {
        question: "What is the output of NaN === NaN?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false"
    },
    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "What does the spread operator (...) do?",
        options: [
            "Deletes array elements",
            "Expands iterable values",
            "Creates a loop",
            "Converts objects to strings"
        ],
        answer: "Expands iterable values"
    },
    {
        question: "What is the output of typeof NaN?",
        options: ["NaN", "undefined", "number", "object"],
        answer: "number"
    },
    {
        question: "What is the main difference between == and ===?",
        options: [
            "No difference",
            "=== checks type and value without coercion",
            "== checks only types",
            "=== converts values automatically"
        ],
        answer: "=== checks type and value without coercion"
    },
    {
        question: "Which array method returns the first matching element?",
        options: ["filter()", "map()", "find()", "reduce()"],
        answer: "find()"
    },
    {
        question: "What will be the output of [1, 2, 3].map(x => x * 2)?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "12"],
        answer: "[2, 4, 6]"
    },
    {
        question: "What is the Temporal Dead Zone (TDZ)?",
        options: [
            "A memory allocation phase",
            "The period before let/const initialization",
            "A JavaScript loop",
            "A callback execution phase"
        ],
        answer: "The period before let/const initialization"
    },
    {
        question: "What will be the output of typeof undefined?",
        options: ["null", "object", "undefined", "boolean"],
        answer: "undefined"
    },
    {
        question: "Which statement about const is correct?",
        options: [
            "It makes objects completely immutable",
            "It prevents reassignment of the binding",
            "It cannot store arrays",
            "It is function-scoped"
        ],
        answer: "It prevents reassignment of the binding"
    },
    {
        question: "What is the output of [1, 2, 3].filter(x => x > 1)?",
        options: ["[1]", "[2, 3]", "[1, 2]", "[3]"],
        answer: "[2, 3]"
    },
    {
        question: "What does Array.reduce() return?",
        options: [
            "Always an array",
            "Always a number",
            "A single accumulated result",
            "Only the last array element"
        ],
        answer: "A single accumulated result"
    },
    {
        question: "What is a Promise?",
        options: [
            "A synchronous function",
            "An object representing eventual completion or failure",
            "A loop mechanism",
            "A variable declaration"
        ],
        answer: "An object representing eventual completion or failure"
    },
    {
        question: "Which Promise method waits until all promises fulfill, or rejects when one rejects?",
        options: [
            "Promise.race()",
            "Promise.all()",
            "Promise.any()",
            "Promise.resolve()"
        ],
        answer: "Promise.all()"
    },
    {
        question: "Which Promise method fulfills as soon as one input fulfills?",
        options: [
            "Promise.all()",
            "Promise.allSettled()",
            "Promise.any()",
            "Promise.reject()"
        ],
        answer: "Promise.any()"
    },
    {
        question: "What does async function always return?",
        options: ["String", "Array", "Promise", "Boolean"],
        answer: "Promise"
    },
    {
        question: "What does await do?",
        options: [
            "Stops the entire JavaScript engine",
            "Pauses the async function until the awaited result settles",
            "Creates a new Promise",
            "Executes code synchronously"
        ],
        answer: "Pauses the async function until the awaited result settles"
    },
    {
        question: "Which queue handles Promise callbacks in the event loop?",
        options: [
            "Task queue",
            "Microtask queue",
            "Call stack",
            "Render queue"
        ],
        answer: "Microtask queue"
    },
    {
        question: "What is the event loop responsible for?",
        options: [
            "Creating variables",
            "Managing execution of queued callbacks",
            "Compiling CSS",
            "Creating HTML elements"
        ],
        answer: "Managing execution of queued callbacks"
    },
    {
        question: "What is callback hell?",
        options: [
            "Infinite loops",
            "Deeply nested callbacks that are difficult to maintain",
            "A syntax error",
            "A memory leak"
        ],
        answer: "Deeply nested callbacks that are difficult to maintain"
    },
    {
        question: "Which method schedules a callback after a delay?",
        options: [
            "setInterval()",
            "setTimeout()",
            "queueMicrotask()",
            "Promise.resolve()"
        ],
        answer: "setTimeout()"
    },
    {
        question: "What is the output of Promise.resolve(10).then(x => x * 2)?",
        options: ["10", "20", "undefined", "Promise rejection"],
        answer: "20"
    },
    {
        question: "What does the this keyword refer to in a regular function?",
        options: [
            "Always the global object",
            "Always the parent function",
            "Depends on how the function is called",
            "Always undefined"
        ],
        answer: "Depends on how the function is called"
    },
    {
        question: "How does an arrow function handle this?",
        options: [
            "Creates its own this",
            "Uses this from its surrounding lexical scope",
            "Always refers to window",
            "Always refers to the function object"
        ],
        answer: "Uses this from its surrounding lexical scope"
    },
    {
        question: "What does call() do?",
        options: [
            "Invokes a function with a specified this value and arguments",
            "Creates a Promise",
            "Copies an object",
            "Delays function execution"
        ],
        answer: "Invokes a function with a specified this value and arguments"
    },
    {
        question: "What is prototypal inheritance?",
        options: [
            "Inheritance through classes only",
            "Objects inheriting properties through prototype links",
            "Copying all object properties",
            "Inheritance through closures"
        ],
        answer: "Objects inheriting properties through prototype links"
    },
    {
        question: "Which keyword is used to inherit from a class?",
        options: ["implements", "extends", "inherits", "super"],
        answer: "extends"
    },
    {
        question: "What does Object.create() do?",
        options: [
            "Creates an object with a specified prototype",
            "Clones an array",
            "Freezes an object",
            "Deletes an object"
        ],
        answer: "Creates an object with a specified prototype"
    },
    {
        question: "What does Object.freeze() do?",
        options: [
            "Deletes the object",
            "Prevents extensions and changes to existing own properties",
            "Makes nested objects deeply immutable",
            "Converts an object into an array"
        ],
        answer: "Prevents extensions and changes to existing own properties"
    },
    {
        question: "What is the output of [1, 2] === [1, 2]?",
        options: ["true", "false", "undefined", "Error"],
        answer: "false"
    },
    {
        question: "What is destructuring in JavaScript?",
        options: [
            "Deleting variables",
            "Extracting values from arrays or properties from objects",
            "Combining strings",
            "Creating functions"
        ],
        answer: "Extracting values from arrays or properties from objects"
    },
    {
        question: "What does the nullish coalescing operator (??) check?",
        options: [
            "Any falsy value",
            "Only null or undefined",
            "Only false",
            "Only zero"
        ],
        answer: "Only null or undefined"
    },
    {
        question: "What does optional chaining (?.) help prevent?",
        options: [
            "Syntax errors",
            "Errors when accessing properties on null or undefined",
            "Infinite loops",
            "Promise rejections"
        ],
        answer: "Errors when accessing properties on null or undefined"
    },
    {
        question: "What is the output of '5' - 2?",
        options: ["52", "3", "NaN", "Error"],
        answer: "3"
    },
    {
        question: "Which method checks whether an array includes a value?",
        options: ["has()", "contains()", "includes()", "findIndex()"],
        answer: "includes()"
    },
    {
        question: "What is event delegation?",
        options: [
            "Adding an event listener to every child",
            "Handling child events through a common ancestor",
            "Removing all event listeners",
            "Creating custom events only"
        ],
        answer: "Handling child events through a common ancestor"
    },
    {
        question: "What does event.preventDefault() do?",
        options: [
            "Stops event propagation",
            "Prevents the browser's default action",
            "Removes an event listener",
            "Stops JavaScript execution"
        ],
        answer: "Prevents the browser's default action"
    },
    {
        question: "What is the purpose of localStorage?",
        options: [
            "Temporary storage for one function",
            "Persistent key-value storage in the browser",
            "Server-side database storage",
            "Storing only JavaScript functions"
        ],
        answer: "Persistent key-value storage in the browser"
    },
    {
        question: "What does the defer attribute do on an external script?",
        options: [
            "Executes the script immediately",
            "Downloads the script in parallel and executes it after HTML parsing",
            "Blocks HTML parsing while downloading",
            "Runs the script only after a button click"
        ],
        answer: "Downloads the script in parallel and executes it after HTML parsing"
    },
    {
        question: "What is a generator function?",
        options: [
            "A function declared with async only",
            "A function that can pause and resume using yield",
            "A function that runs forever",
            "A function that returns only arrays"
        ],
        answer: "A function that can pause and resume using yield"
    },
    {
        question: "What is the purpose of Symbol in JavaScript?",
        options: [
            "Create unique primitive values",
            "Create arrays",
            "Convert objects into strings",
            "Declare private classes"
        ],
        answer: "Create unique primitive values"
    },
    {
        question: "What is the output of Object.is(NaN, NaN)?",
        options: ["true", "false", "undefined", "Error"],
        answer: "true"
    },
    {
        question: "Which statement about JavaScript modules is correct?",
        options: [
            "Every module shares one global scope",
            "Modules have their own scope",
            "Modules cannot export functions",
            "Modules cannot import variables"
        ],
        answer: "Modules have their own scope"
    }
];