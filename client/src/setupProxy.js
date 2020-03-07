const proxy = require('http-proxy-middleware');

    module.exports = function(app) {
        app.use("/users/*", proxy({ 
            target: 'http://localhost:8080/' ,
            changeOrigin: true
        }));
        app.use("/api/*", proxy({ 
            target: 'http://localhost:8080/',
            changeOrigin: true,
            
        }));
    };


    // module.exports = function(app) {
    //     app.use('/api/*', proxy({
    //       target: 'https://safe-crag-59591.herokuapp.com',
    //       changeOrigin: true,
    //       logLevel: 'debug',
    //       router: {
    //         'localhost:3000': 'http://localhost:3001'
    //       }
    //     }));
    //   };

