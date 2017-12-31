echo on

start cmd /k "echo "***grunt watch window***" & grunt"
::grunt - minifies, checks if bowercopy has been done, watch (blocking)

start cmd /k "echo "***npm window***" & start http://127.0.0.1:8081 & npm start"
::npm start -> runs the node.js server (blocking)

start cmd /k "echo "***git/other window***" & git status"
::git status -> shows current changes (non-blocking) 
::here you can run git or other commands needed
