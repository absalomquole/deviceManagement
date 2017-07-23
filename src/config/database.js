module.exports = {
    development: {
        db: 'mongodb://adminuser:admin321@ds147842.mlab.com:47842/devicelab',
        app: {
            name: 'Device Lab - Development'
        }
    },
    local: {
        db: 'mongodb://localhost:27017/devicelab',
        app: {
            name: 'Device Lab - Local'
        }

    }
};