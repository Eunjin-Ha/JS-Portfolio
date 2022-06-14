var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Software Developer, Web Developer' });
});

// connect - about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT ME' });
}); 

// connect - projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'PROJECTS' });
}); 

// connect - contactme
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'CONTACT ME' });
}); 

module.exports = router;
