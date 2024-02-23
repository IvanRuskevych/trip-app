# Trip App

- This application, built using React.js, allows users to plan their trips while checking the weather forecast for their destinations. Users can perform the following actions:
- `View Trips`: Upon starting the application, users are provided with a list of trips, with each trip displaying a forecast for each day of the journey. The list is scrollable, ensuring ease of navigation.
- `Search for Trips`: Users can search for specific trips using the search functionality located at the top of the page.
- `Add New Trip`: Users can add a new trip by clicking on the "Add trip" button, which opens a modal window. Within the modal, users can choose a city from a list, enter the start and end dates of the trip, and upon clicking "Save," the trip is added to the list.
- `Weather Display`: When a trip is selected, the app displays the weather forecast for each day of the trip. Additionally, the current day's weather forecast for the selected city is shown on the right side of the page.
- `Countdown Timer`: A countdown timer from the current date to the start date of the selected trip is displayed on the right side of the page, helping users in planning and preparation.

# Running the React Application

- Before getting started, make sure you have Node.js installed on your computer.
- In the terminal, navigate to your project directory and run the following command to install dependencies:
`npm install`
- Start the Development Server: After installing dependencies, start the development server by running the command:
`npm dev`
- This will launch the application on a local development server. Open your web browser and navigate to http://localhost:3000 to see your application in action.
- Build for Production: To build your application for production, run the command:
`npm run build`. This process will create an optimized version of your application ready for deployment on a server.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
