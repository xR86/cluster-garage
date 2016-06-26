# cluster-garage
SPA/dashboard for team management

##hello-world branch

Simple MEAN stack application.
This example is meant to set up the cluster-garage project.


Documentation can be found [here](https://github.com/xR86/cluster-garage/tree/hello-world/_documentation) (ERD, architecture, json mocks).

###Installation guide
1. Change mongoDB dbPath to desired DB location (preferably, in a .cfg file)
2. `npm install` - installs all server-side dependencies
3. `bower install` - installs all client-side dependencies
4. Run `dev-script-win.bat` (on Windows; Linux bash script will be added in a future update)
	* Alternative - open 2 terminals - run `grunt` and run `npm start` in separate terminals, and then open `http://127.0.0.1:8081` in the browser
