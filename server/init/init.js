import { connect } from "mongoose";
import { Blog } from "../models/blog.model.js";

async function main() {
  await connect(`mongodb://127.0.0.1:27017/mernblog`);
}

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

const sampleBlogs = [
  {
    title: "Sample Blog 1",
    imgUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    post: ` 
# Exploring the Power of React: A Comprehensive Guide

## Introduction
In the vast landscape of web development frameworks, React stands out as a formidable force, revolutionizing the way developers build dynamic user interfaces. Born out of Facebook's necessity for a more efficient way to manage complex UI components, React has quickly become the go-to choice for many developers and organizations worldwide. In this blog post, we'll delve into the core concepts of React, explore its features, and understand why it has garnered such widespread adoption.

## Understanding React
At its core, React is a JavaScript library for building user interfaces, particularly single-page applications. What sets React apart is its component-based architecture, which promotes modularity, reusability, and maintainability of code. React employs a declarative approach, allowing developers to describe how their UI should look at any given point in time, and React takes care of efficiently updating and rendering the components when the underlying data changes.

## Key Concepts
1. **Components**: React applications are built using components, which are self-contained units of UI that can be composed together to create complex interfaces. Components can be either functional or class-based, and they encapsulate both the structure and behavior of a particular part of the UI.
2. **JSX (JavaScript XML)**: JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. This enables a more intuitive and concise way of defining UI components in React.
3. **Virtual DOM**: React utilizes a virtual DOM to efficiently update the actual DOM. When the state of a component changes, React compares the new virtual DOM with the previous one and computes the minimal set of DOM operations needed to update the browser's DOM, resulting in better performance.
4. **State and Props**: State represents the internal data of a component, while props (short for properties) are inputs passed to a component from its parent. By managing state and props effectively, React components can maintain their own data and respond to changes in their environment.
5. **Lifecycle Methods**: React components have lifecycle methods that allow developers to hook into various stages of a component's lifecycle, such as initialization, mounting, updating, and unmounting. This provides opportunities for performing actions like fetching data, updating the UI, or cleaning up resources.

## Features and Ecosystem
Aside from its core concepts, React comes with a rich ecosystem of tools and libraries that enhance its capabilities and productivity. Some notable features and tools include:
1. **React Router**: A popular library for handling routing in React applications, enabling developers to create dynamic, single-page applications with multiple views.
2. **Redux**: A predictable state container for JavaScript apps, often used in conjunction with React to manage application state in a more organized and scalable way.
3. **React Native**: An open-source framework for building cross-platform mobile applications using React and native UI components, allowing developers to write code once and deploy it on multiple platforms.
4. **Next.js**: A framework built on top of React that simplifies server-side rendering, routing, and other aspects of building production-ready React applications.

## Conclusion
React has undoubtedly revolutionized the way developers approach building user interfaces, offering a powerful combination of performance, flexibility, and developer experience. With its component-based architecture, declarative syntax, and rich ecosystem, React continues to be a dominant force in the world of web development, empowering developers to create engaging and interactive applications with ease. Whether you're a seasoned developer or just starting your journey with web development, mastering React is undoubtedly a valuable skill that can open up a world of possibilities in building modern web applications.
    `,
    postFormat: "markdown",
  },
  {
    title: "Sample Blog 2",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    post: ` 
# Exploring the Power of React: A Comprehensive Guide

## Introduction
In the vast landscape of web development frameworks, React stands out as a formidable force, revolutionizing the way developers build dynamic user interfaces. Born out of Facebook's necessity for a more efficient way to manage complex UI components, React has quickly become the go-to choice for many developers and organizations worldwide. In this blog post, we'll delve into the core concepts of React, explore its features, and understand why it has garnered such widespread adoption.

## Understanding React
At its core, React is a JavaScript library for building user interfaces, particularly single-page applications. What sets React apart is its component-based architecture, which promotes modularity, reusability, and maintainability of code. React employs a declarative approach, allowing developers to describe how their UI should look at any given point in time, and React takes care of efficiently updating and rendering the components when the underlying data changes.

## Key Concepts
1. **Components**: React applications are built using components, which are self-contained units of UI that can be composed together to create complex interfaces. Components can be either functional or class-based, and they encapsulate both the structure and behavior of a particular part of the UI.
2. **JSX (JavaScript XML)**: JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. This enables a more intuitive and concise way of defining UI components in React.
3. **Virtual DOM**: React utilizes a virtual DOM to efficiently update the actual DOM. When the state of a component changes, React compares the new virtual DOM with the previous one and computes the minimal set of DOM operations needed to update the browser's DOM, resulting in better performance.
4. **State and Props**: State represents the internal data of a component, while props (short for properties) are inputs passed to a component from its parent. By managing state and props effectively, React components can maintain their own data and respond to changes in their environment.
5. **Lifecycle Methods**: React components have lifecycle methods that allow developers to hook into various stages of a component's lifecycle, such as initialization, mounting, updating, and unmounting. This provides opportunities for performing actions like fetching data, updating the UI, or cleaning up resources.

## Features and Ecosystem
Aside from its core concepts, React comes with a rich ecosystem of tools and libraries that enhance its capabilities and productivity. Some notable features and tools include:
1. **React Router**: A popular library for handling routing in React applications, enabling developers to create dynamic, single-page applications with multiple views.
2. **Redux**: A predictable state container for JavaScript apps, often used in conjunction with React to manage application state in a more organized and scalable way.
3. **React Native**: An open-source framework for building cross-platform mobile applications using React and native UI components, allowing developers to write code once and deploy it on multiple platforms.
4. **Next.js**: A framework built on top of React that simplifies server-side rendering, routing, and other aspects of building production-ready React applications.

## Conclusion
React has undoubtedly revolutionized the way developers approach building user interfaces, offering a powerful combination of performance, flexibility, and developer experience. With its component-based architecture, declarative syntax, and rich ecosystem, React continues to be a dominant force in the world of web development, empowering developers to create engaging and interactive applications with ease. Whether you're a seasoned developer or just starting your journey with web development, mastering React is undoubtedly a valuable skill that can open up a world of possibilities in building modern web applications.
    `,
    postFormat: "markdown",
  },
  {
    title: "Sample Blog 3",
    imgUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    post: ` 
# Exploring the Power of React: A Comprehensive Guide

## Introduction
In the vast landscape of web development frameworks, React stands out as a formidable force, revolutionizing the way developers build dynamic user interfaces. Born out of Facebook's necessity for a more efficient way to manage complex UI components, React has quickly become the go-to choice for many developers and organizations worldwide. In this blog post, we'll delve into the core concepts of React, explore its features, and understand why it has garnered such widespread adoption.

## Understanding React
At its core, React is a JavaScript library for building user interfaces, particularly single-page applications. What sets React apart is its component-based architecture, which promotes modularity, reusability, and maintainability of code. React employs a declarative approach, allowing developers to describe how their UI should look at any given point in time, and React takes care of efficiently updating and rendering the components when the underlying data changes.

## Key Concepts
1. **Components**: React applications are built using components, which are self-contained units of UI that can be composed together to create complex interfaces. Components can be either functional or class-based, and they encapsulate both the structure and behavior of a particular part of the UI.
2. **JSX (JavaScript XML)**: JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. This enables a more intuitive and concise way of defining UI components in React.
3. **Virtual DOM**: React utilizes a virtual DOM to efficiently update the actual DOM. When the state of a component changes, React compares the new virtual DOM with the previous one and computes the minimal set of DOM operations needed to update the browser's DOM, resulting in better performance.
4. **State and Props**: State represents the internal data of a component, while props (short for properties) are inputs passed to a component from its parent. By managing state and props effectively, React components can maintain their own data and respond to changes in their environment.
5. **Lifecycle Methods**: React components have lifecycle methods that allow developers to hook into various stages of a component's lifecycle, such as initialization, mounting, updating, and unmounting. This provides opportunities for performing actions like fetching data, updating the UI, or cleaning up resources.

## Features and Ecosystem
Aside from its core concepts, React comes with a rich ecosystem of tools and libraries that enhance its capabilities and productivity. Some notable features and tools include:
1. **React Router**: A popular library for handling routing in React applications, enabling developers to create dynamic, single-page applications with multiple views.
2. **Redux**: A predictable state container for JavaScript apps, often used in conjunction with React to manage application state in a more organized and scalable way.
3. **React Native**: An open-source framework for building cross-platform mobile applications using React and native UI components, allowing developers to write code once and deploy it on multiple platforms.
4. **Next.js**: A framework built on top of React that simplifies server-side rendering, routing, and other aspects of building production-ready React applications.

## Conclusion
React has undoubtedly revolutionized the way developers approach building user interfaces, offering a powerful combination of performance, flexibility, and developer experience. With its component-based architecture, declarative syntax, and rich ecosystem, React continues to be a dominant force in the world of web development, empowering developers to create engaging and interactive applications with ease. Whether you're a seasoned developer or just starting your journey with web development, mastering React is undoubtedly a valuable skill that can open up a world of possibilities in building modern web applications.
    `,
    postFormat: "markdown",
  },
];

const insertSampleData = async () => {
  try {
    await Blog.deleteMany({});
    await Blog.insertMany(sampleBlogs);
    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

insertSampleData();
