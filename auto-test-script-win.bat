echo on

start cmd /k "echo "***selenium webdriver window***" & start http://localhost:4444/wd/hub/static/resource/hub.html & webdriver-manager start"
::start selenium instance

start cmd /k "echo "***protractor window***" & npm run-script protractor"
::start protractor tests

