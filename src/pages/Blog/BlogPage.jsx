import React from "react";
import "./BlogPage.css";
import BlogItem from "../BlogItem/BlogItem";
import { PDFDownloadButton } from "../../components/PDF/PdfComponent";
import useTitle from "../../Custom/UseTitle/useTitle";

const BlogPage = () => {
  useTitle("Blog");

  const blogs = [
    {
      title:
        "Tell us the differences between uncontrolled and controlled components?",
      body: "Uncontrolled Components: Form input values and state are managed by the DOM, not React component state.Values are accessed using DOM queries or references.No explicit event handling for updates.Initial values are set using the defaultValue attribute.Typically used for simpler forms where precise control is not required. Controlled components: State is managed by React component state.Values are accessed and controlled through the component state.Event handlers are used to update the component state when values change.Initial values are set using the value attribute.Offers precise control and validation options.Suitable for complex forms where you need granular control over input values.",
    },
    {
      title: "How to validate React props using PropTypes?",
      body: "Import the PropTypes module: Import PropTypes from the 'prop-types' package.Define prop types: Inside your component, define the prop types using the propTypes static property.Specify the prop types: Use PropTypes validators to specify the type and requirements for each prop.Perform prop validation: During development, React automatically validates the provided props based on the defined prop types and displays warnings in the browser's console if a prop doesn't match the specified type or requirements.Optional: Set default prop values: If desired, you can use the defaultProps static property to provide default values for certain props.",
    },
    {
      title: " Tell us the difference between nodejs and express js?",
      body: "Node.js is a JavaScript runtime environment that allows running JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model for efficient handling of concurrent requests. Node.js enables building server-side applications using JavaScript and has a large ecosystem of modules and libraries available through npm.Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a minimalist architecture for creating APIs, web services, and server-side web applications. Express.js simplifies tasks like routing, middleware support, and request/response handling, making it easier to build web applications. It leverages the capabilities of Node.js and provides a streamlined approach for handling HTTP requests and building web servers.",
    },
    {
      title: "What is a custom hook, and why will you create a custom hook?",
      body: "A custom hook in React is a reusable function that allows you to encapsulate and share logic between components. It is created by prefixing the function name with 'use' and follows a specific naming convention. Custom hooks are useful for promoting code reusability, abstracting complex logic, separating concerns, facilitating testing and debugging, and leveraging React's features. They help improve code organization, maintainability, and modularity in React applications.",
    },
  ];

  return (
    <div className="overflow-hidden bg-black py-[100px]">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="text-right">
          <PDFDownloadButton />
        </div>
        <div className=" grid relative z-10 grid-cols-1 md:grid-cols-2 gap-10 my-8">
          {blogs.map((blog, idx) => (
            <BlogItem blog={blog} key={idx}></BlogItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
