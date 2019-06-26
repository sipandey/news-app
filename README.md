# News App

News App is a simple app created with the React Framework. It utilizes the NY Times Most Popular API and shows a list of items. The items when tapped display the details for that item. The application uses the most viewed section API for a period of 7 days (default). The period is currently hard-coded and can be configured later to make it dynamic.

To leverage the Declarative and Component-Based programming paradigm of React, the application is divided into following components. These components manage their own state and these individual components are then composed to make complex UIs. Component details:

- HeaderComponent
- MainComponent
- NewsListComponent
- NewsDetailComponent

### HeaderComponent

Header Component holds the header of the application.

### MainComponent

This is the component which takes care of the routing and facilitates the passing of props between components. This component fetches the data from the API and then shares it to the NewsListComponent so that it can be rendered as a list, it also passes the selectedNewsItem to the NewsDetailComponent based on the selection.

### NewsListComponent

This component renders the news list items as a list with each item being displayed as a Media (using Reactstrap). Individual items can be selected by tapping/clicking on them.

### NewsDetailComponent

This component renders the detail for the item that is selected from the NewsListComponent. The details are displayed in the form of a Card (using Reactstrap).

### Installation

News App requires [Node.js](https://nodejs.org/) v11+ or [Yarn](https://yarnpkg.com/) v1.16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd news-app
$ npm install
$ yarn start or npm start
```

### Testing

News App has been setup with testing environment as well which eanbles us to test the application against the test-scripts and test-cases. The application uses jest alsong with enzyme, react-test-renderer and enzyme-adapter-react-16 for running the tests. There are two test-scripts that are currently added to the project.

- NewsListComponent.test.js
- NewsDetailComponent.test.js

Running the tests.

```sh
npm run test
```

### Todos

- Write MORE Tests
