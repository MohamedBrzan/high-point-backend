const app = require('./app');
const DataBase = require('./database/DataBase');

DataBase();

app.listen(process.env.PORT, function () {
  console.log('listening on port ' + process.env.PORT);
});
