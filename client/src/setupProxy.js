const proxy = require('http-proxy-middleware');

    module.exports = function(app) {
        app.use(proxy('/users/*', { target: 'https://poclibrary.herokuapp.com' ,
        changeOrigin: true,
              logLevel: 'debug',
              router: {
                'localhost:3000': 'http://localhost:8080'
              }}));
        app.use(proxy('/api/*', { target: 'https://poclibrary.herokuapp.com',
        changeOrigin: true,
              logLevel: 'debug',
              router: {
                'localhost:3000': 'http://localhost:8080'
              }}));
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

