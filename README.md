# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






```

VectorShift Assessment Walkthrough
I have successfully completed all four parts of the VectorShift frontend technical assessment. Here is a summary of the implementation details.

Part 1: Node Abstraction
TIP

A robust abstraction dramatically reduces code duplication and ensures visual consistency across the entire node ecosystem.

BaseNode Component: Created a highly reusable BaseNode.js component using Tailwind CSS. It encapsulates the container styling (rounded corners, shadows, hover effects), the header (gradients, icons, titles), the content area, and dynamic Handle rendering.
Refactoring: I updated the original 4 nodes (inputNode.js, llmNode.js, outputNode.js, textNode.js) to use the new BaseNode component, reducing their boilerplate code.
5 New Nodes: I implemented 5 new custom nodes to demonstrate the flexibility of the abstraction:
APINode: Accepts URL and HTTP Method.
DatabaseNode: Accepts DB Name and a SQL Query.
EmailNode: Accepts Recipient Email and Subject.
FilterNode: Accepts a conditional logic string.
DelayNode: Accepts wait time in seconds.
Part 2: Styling
NOTE

The UI has been completely revamped to look like a modern SaaS platform.

Tailwind CSS: Installed and configured Tailwind CSS.
Design System:
Nodes use bg-white, rounded-xl, and shadow-lg for a clean card look.
Headers use a sleek bg-gradient-to-r from-blue-600 to-indigo-600.
Added lucide-react icons to the headers of each node to make them visually distinct and professional.
Replaced the basic "Submit" button with a highly attractive gradient button.
Part 3: Text Node Logic
IMPORTANT

The dynamic resizing and variable extraction features are critical for UX in pipeline builders.

Dynamic Resizing: The TextNode was upgraded from a static <input> to a <textarea>. Using a useEffect hook, the height automatically adjusts using the scrollHeight property as the user types more content.
Variable Extraction:
Used the Regex /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g to detect valid JavaScript variable names wrapped in double curly braces (e.g., {{input}}).
Added logic to filter out duplicates using [...new Set(matches)].
Dynamically generated reactflow target handles on the left side, evenly spaced out based on the number of detected variables.
Part 4: Backend Integration & DAG Checking
TIP

Directed Acyclic Graph (DAG) validation ensures that infinite loops do not occur during pipeline execution.

Frontend (submit.js): Connected the UI to the backend using axios. When the user clicks the "Submit Pipeline" button, it sends the nodes and edges arrays. We also integrated react-hot-toast to provide a beautiful, non-intrusive loading state and success notification.
Backend (main.py):
Added CORSMiddleware to allow requests from the React frontend running on port 3000.
Modified the /pipelines/parse endpoint to accept a JSON payload.
Implemented a robust Depth-First Search (DFS) Cycle Detection Algorithm. It builds an adjacency list from the edges, then runs a DFS keeping track of visited states (0: unvisited, 1: visiting, 2: fully visited) to detect back-edges.
Returns num_nodes, num_edges, and the is_dag boolean back to the frontend.
Next Steps
The frontend React development server might need a quick restart (npm run start or Ctrl+C and restart) to pick up the newly installed Tailwind CSS and Axios packages.
Ensure you have Python installed and run python -m uvicorn main:app --reload from the backend directory.
Record your screen walkthrough for the recruiter and you're good to go! Best of luck!

```