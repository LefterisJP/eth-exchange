var env = process.env.NODE_ENV || 'develop';
var mongoHost = process.env.MONGO_HOST || 'localhost';

var config = {
    develop: {
        port: process.env.PORT || 2000,
        db: 'mongodb://' + mongoHost + '/eth-exchage-develop'
    },
    production: {
        port: process.env.PORT || 3000,
        db: 'mongodb://' + mongoHost + '/eth-exchage-production'
    }
};

module.exports = config[env];
