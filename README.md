# Awesome authentication project

The project has some setup but still requires some efforts to make it awesome. Therefore, we need someone to help us to make it production ready.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Returning your solution

- Make a copy of this repository in your github/bitbucket/gitlab account.
- Make changes, commit them, and push them into your repository.
- Share us the url of your source code and deployed url link after completion.

## Prerequisite

- To help you, all the necessary packages are already specified in the package.json
- Run app locally in development mode using `yarn && yarn start`.
- Launch the test runner in the interactive watch mode using `yarn test`.
- Build the app for production to the build folder using `yarn build`.

## Exercises

## Attempting all the questions is not a must however, your efforts will be rewarded. Note:- Exercise 1, 2 and 3 are mandatory.

Hints: Use material design for the [ui](https://material-ui.com/) and feel free to use your own ideas for the design.

### [1] Create register form for user account creation

- The form should include Email, password and confirm password fields.
- Include validations for the fields, for example email (must be a valid email) and, password (must be at least 8 characters long and include at least a number and an alphabet) and also match with confirm password field.
- Show success message on registration success and navigate user to login page
- You can use browser local storage to persist the users account information.

### [2] Build login form so that user can login using the credentials from exercise [1].

- Add email and password field in the login form with field validations.
- On successful login the user will be greeted with welcome message and navigated to the authenticated page.
- Keep in mind, the authenticated page is not accessible if the user is not logged in.

### [3] Deploy to netlify

- Deploy your app to netlify/heroku

### [4] Testing

- Write unit test for the app. (tips: [testing-library](https://testing-library.com/))

### [5] Documentation

- Remember to update the README

### [6] Docker

- Make the app run in the docker
