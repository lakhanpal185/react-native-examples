What is React?
React is a JavaScript library used for building user interfaces. It was developed by Facebook and released to the public in 2013. React is based on a component-based architecture where each component has its own state and can be reused throughout the application.
What is JSX?
JSX is an extension of JavaScript syntax that allows developers to write HTML-like code in their JavaScript files. JSX makes it easier to create and manipulate UI elements in React.
What is the Virtual DOM?
The Virtual DOM is a JavaScript representation of the actual DOM. It is used in React to improve performance by reducing the number of DOM manipulations. When a component’s state changes, React updates the Virtual DOM, calculates the difference between the new and old Virtual DOM, and only updates the actual DOM where necessary.
What is a prop?
Props (short for properties) are a way to pass data from a parent component to a child component in React. Props are immutable and can only be changed by the parent component. They are used to configure and customize child components.
What is a state?
State is an internal data store of a component in React. It determines the behavior and rendering of the component. State can be changed by the component itself using setState() method and is used to store data that can change over time.
What is the difference between props and state?
Props are used to pass data from a parent component to a child component and are immutable, while state is used to manage the internal data of a component and can be changed by the component itself using setState() method.
What is a Higher-Order Component (HOC)?
A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new component with enhanced functionality. HOCs are used to share functionality between components.
What are React Hooks?
React Hooks are functions that allow functional components to use state and other React features without the need for class components. Hooks were introduced in React 16.8 and include useState(), useEffect(), useContext(), and more.
What is the difference between a class component and a functional component?
Class components are ES6 classes that extend React.Component and have their own state and lifecycle methods, while functional components are functions that return a React element and do not have their own state or lifecycle methods. With the introduction of React Hooks, functional components can now also have state and lifecycle methods.
What is Redux?
Redux is a predictable state container for JavaScript applications. It is commonly used with React to manage application state in a single store. Redux provides a centralized location to manage and access state, making it easier to maintain and debug complex applications.
What is the difference between controlled and uncontrolled components?
Controlled components are React components that have their value and are state-controlled by React. They have an onChange event that is used to update the state of the component. Uncontrolled components, on the other hand, have their value managed by the DOM, and their state is not managed by React.
What is the React Router?
React Router is a routing library for React that allows developers to build single-page applications with dynamic, client-side routing. It provides declarative routing, allowing developers to describe the navigation structure of their application using a declarative syntax.
What is the purpose of React’s essential prop?
The key prop is used in React to help identify which elements have changed, been added, or been removed from a list.