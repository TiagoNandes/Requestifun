const app = require('express')();
const port = process.env.PORT || 8080;

module.exports = {
    app: app,
}

require('./loader.js');

app.listen(port, function(err){
    if(!err){
        console.log('The application is listening on port ' + port);
    }
    else{
        console.log(err);
    }
});