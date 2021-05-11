const app = require('../server/app');

var server = app.listen(3000, () => {
    console.log("start");
});