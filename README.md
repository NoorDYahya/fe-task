# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Overview
Fetch Pokémon Data + Components:
At the beginning, I started fetching data from the API using standard fetch requests and building the main components such as the Pokémon card and list card. I utilized React Router for mapping the web pages to enable navigation within the application.

State Management:
Initially, I managed state using localStorage and useState hooks. However, to facilitate real-time updates and avoid the need for refreshing the page to see changes, I transitioned to using Redux. This allowed for more efficient state management and improved user experience.

Styling:
For styling, I began with CSS and decided to continue using it without incorporating any other libraries like Bootstrap, even though I am familiar with them. This choice was made to maintain consistency and simplicity in the styling approach throughout the project.

features:
-Homepage
-favicon
-navbar
-Remove button
-search by name
