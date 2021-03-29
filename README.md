# Github repositories finder 👨‍✈️👩‍✈️

## Overview
This project allows the user to enter a Github username and search its public repositories using the Github public API

## How to run it
### Pre-requisites: 
1- node version 12 or higher
2- npm version 6.14.5 or higher
3- Cypress - This project uses version 6.8.0 so a newish version of their GUI should be ok
### To run the project:
1- Clone this project
2- In the project's directory run `npm install`
3- After `npm install` is done, in the same directory run `npm start`
### To run the tests:
1- Have the project running in another terminal session
2- Run `npm run cypress:open`
3- When the GUI opens, click on `search.spec.js` under `INTEGRATION TESTS`
- If you have any troubles running cypress, refer to the `npm run cypress:open` section inside Available Scripts of this README
## Tech stack
- React
- Redux toolkit
- Cypress
- CSS
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run cypress:open`

Launches the cypress test runner, opening the cypress GUI. Make sure the project’s local server is running beforehand

- Be careful when running the tests as the GitHub public API has limited request per hour. Refer to this page for more information https://docs.github.com/en/developers/apps/rate-limits-for-github-apps#user-to-server-requests.

To run cypress make sure you have it installed correctly following [this guide](https://docs.cypress.io/guides/getting-started/installing-cypress)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


