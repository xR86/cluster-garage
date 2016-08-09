# cluster-garage [![Build Status](https://travis-ci.org/xR86/cluster-garage.svg?branch=master)](https://travis-ci.org/xR86/cluster-garage) [![Coverage Status](https://coveralls.io/repos/github/xR86/cluster-garage/badge.svg?branch=master&no-cache)](https://coveralls.io/github/xR86/cluster-garage?branch=master) [![license](https://img.shields.io/badge/license-MIT-blue.svg?maxAge=2592000)](https://github.com/xR86/cluster-garage/blob/master/LICENSE)


[![bitHound Overall Score](https://www.bithound.io/github/xR86/cluster-garage/badges/score.svg)](https://www.bithound.io/github/xR86/cluster-garage) [![bitHound Dependencies](https://www.bithound.io/github/xR86/cluster-garage/badges/dependencies.svg)](https://www.bithound.io/github/xR86/cluster-garage/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/xR86/cluster-garage/badges/devDependencies.svg)](https://www.bithound.io/github/xR86/cluster-garage/master/dependencies/npm)

SPA/dashboard for team management

Sprint board here: [https://zube.io/boards/61643778/sprintboard](https://zube.io/boards/61643778/sprintboard)

Documentation can be found [here](https://github.com/xR86/cluster-garage/tree/master/_documentation) (ERD, architecture, json mocks).

Screens can be found here: [Google Drive link](https://drive.google.com/open?id=0B27WyFpuLj6eeGRQZWlSRG5rcmM)

Further documentation to be added.

##master branch
The application would include the following features:
- users widget (team administration)
- webinar widget (event organization)
- book widget (book/materials)
- settings modal


##hello-world branch

Simple MEAN stack application.
This example is meant to set up the cluster-garage project.



###Installation guide
1. Change mongoDB dbPath to desired DB location (preferably, in a .cfg file)
2. `npm install` - installs all server-side dependencies
3. `bower install` - installs all client-side dependencies
4. Run `dev-script-win.bat` (on Windows; Linux bash script will be added in a future update)
	* Alternative - open 2 terminals - run `grunt` and run `npm start` in separate terminals, and then open `http://127.0.0.1:8081` in the browser


##Credits
- used for ribbon - https://css-tricks.com/snippets/css/corner-ribbon/
