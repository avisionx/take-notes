<p align="center">
  <img src="https://avisionx.github.io/take-notes/icons/android-icon-192x192-dunplab-manifest-16621.png" alt="" width="160" height="160">
  <h3 align="center">Take Notes</h3>
  <p align="center"><img src="https://img.shields.io/github/workflow/status/avisionx/take-notes/Build%20and%20Deploy/master?style=flat-square"> <img src="https://img.shields.io/github/issues-raw/avisionx/take-notes?style=flat-square"> <img src="https://img.shields.io/website?url=http://userly.studio/&style=flat-square"> <img src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Favisionx%2Ftake-notes" alt="Hits"> <img src="https://img.shields.io/github/languages/count/avisionx/take-notes?style=flat-square"> <img src="https://img.shields.io/github/languages/code-size/avisionx/take-notes?style=flat-square"> <img src="https://img.shields.io/github/stars/avisionx/take-notes?style=flat-square"> <img src="https://img.shields.io/github/contributors/avisionx/take-notes?style=flat-square"> <img src="https://img.shields.io/github/license/avisionx/take-notes?style=flat-square"></p>

  <p align="center">
    The realtime notes keeping pwa for all platforms ✨
    </br>
    <a href="https://github.com/avisionx/take-notes/#table-of-contents"><strong>Explore the docs »</strong></a><br/>
    <a href="https://avisionx.github.io/take-notes">Website</a>
    .
    <a href="https://github.com/avisionx/take-notes/issues">Report Bug</a>
    .
    <a href="https://github.com/avisionx/take-notes/issues">Request Feature</a>
  </p>
</p>  

<!-- TABLE OF CONTENTS -->
## Table of Contents
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
![Take Notes App](https://user-images.githubusercontent.com/32339251/94259263-d175a680-ff4b-11ea-9499-ac5860c900ba.gif)

There are a lot of ToDO/Notes tracker available online, however, I didn't find one that is realtime and cross-platform at the same time for all devices and would suit my needs so I created this one. 

Here's why:
* Multi-platform support accross all possible devices
* Realtime changes reflected accross all platforms
* Your time should be focused on completing your tasks and working on something amazing 
* Rather than you managing what to do next, this app helps you keep track of notes etc.
* Fully secure with Google authentication and firebase database no need to worry about security as well :smile:

### Built With
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and some npm packages listed below:
* [firebase](https://www.npmjs.com/package/firebase)
* [reactstrap](https://www.npmjs.com/package/reactstrap)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

<!-- GETTING STARTED -->
## Getting Started
To get up and running with this project on your local machine follow these simple steps.

### Prerequisites
Here's a list of things you'll need to use have prior to installing the software.
* npm
```sh
npm install npm@latest -g
```

### Installation
1. Clone the repo
```sh
git clone https://github.com/avisionx/take-notes.git
```
2. Install NPM packages
```sh
npm install
```
3. Setup a firebase project in your [firebase console](https://console.firebase.google.com/) and click on "Add Firebase to your web app" to get prefilled config of this sorts
```js
var firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>'
};
```
4. Replace the above config varibale in `index.js` inside src folder

<!-- USAGE EXAMPLES -->
## Usage
Once installed here are some basic commands that you may run for working on the project.

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Learn More**
_For more examples, please refer to the [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)_

<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/avisionx/take-notes/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact
Avi Garg - [https://avisionx.net/](https://avisionx.net/) - hello@avisionx.net

Project Link: [https://github.com/avisionx/take-notes](https://github.com/avisionx/take-notes)
