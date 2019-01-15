const nodemon = require('nodemon');
nodemon({
	script:'app.js',
	watch:['*.js','./src/routes/*.js','./src/models/*.js','./src/controllers/*.js','./src/middlewares/*.js','./src/config/*.js','./public/*.js']
});
