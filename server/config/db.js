var dbName = 'clusterGarage';
var dbPort = '27017';
var dbHost = 'localhost';
var connectionString = 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName;

module.exports = {
  url: connectionString
}
