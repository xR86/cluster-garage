echo on

start cmd /k "echo "***mongoAdmin window***" & cd /d E:\Portables\MongoAdmin\adminMongo & start http://127.0.0.1:1234 & npm start "
::start mongoAdmin server -> check mongodb data (blocking)
