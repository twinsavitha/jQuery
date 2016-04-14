 /* 
  basic idea for creating RESTful service with javascript: 
  http://blog.modulus.io/nodejs-and-express-create-rest-api 
  */



var blogRepository = new BlogRepository();
blogRepository.createBlogs();
var path = require('path');
var express = require('express');

var app = express();
app.use(express.bodyParser());

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');

  next();
}

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));



var MY_PORT = 8085; 


/* REST API =========================================== */
var baseUrl = '/ngdemo/web';

/* GET ALL -------------------------------------------- */
app.get(baseUrl + '/blogs', function(req, res) {
	res.json(blogRepository.getAll());
});

/* GET Dummy ------------------------------------------ */
app.get(baseUrl + '/dummy', function(req, res) {
  res.json({id: 0, heading: 'Kunal', bodyText: 'Mathur'});
});

/* GET By Id ------------------------------------------ */
app.get(baseUrl + '/blogs/:id', function(req, res) {
  console.log('trying to retrieve blog with id: ' + req.params.id);
  var blog = blogRepository.getById(req.params.id);
  res.json(blog);
});


/* POST Create ---------------------------------------- */
app.post(baseUrl + '/blogs', function(req, res) {
  if(!req.body.hasOwnProperty('heading') || !req.body.hasOwnProperty('bodyText')) {
    res.statusCode = 400;
    return res.send('Error 400: POST syntax incorrect.');
  }

  var newBlog = blogRepository.addNewBlog(req.body.heading, req.body.bodyText);
  res.json(newBlog);
});

/* PUT (Update) --------------------------------------- */
app.put(baseUrl + '/blogs/:id', function (req, res) {
  if(!req.body.hasOwnProperty('id') || !req.body.hasOwnProperty('heading') || !req.body.hasOwnProperty('bodyText')) {
    res.statusCode = 400;
    return res.send('Error 400: PUT syntax incorrect.');
  }
  var changedBlog = blogRepository.changeBlog(req.params.id, req.body.heading, req.body.bodyText);
  res.json(changedBlog);
});

/* DELETE --------------------------------------------- */
app.delete(baseUrl + '/blogs/:id', function(req, res) {
  console.log('trying to delete blog with id: ' + req.params.id);
  blogRepository.deleteBlog(req.params.id);
  res.json(true);
});


app.listen(process.env.PORT || MY_PORT);


function Blog(id, heading, bodyText) {
  this.id = id;
  this.heading = heading;
  this.bodyText = bodyText;
};


function BlogRepository() {

  this.blogs = [];

  this.createBlogs = function() {
    var numberOfBlogs = 0;
    for (var i = 0; i < numberOfBlogs; i++) {
      var id = i + 1;
      this.blogs.push(new Blog(id, 'Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'));
    };
    return this.blogs;
  };

  this.getMaxBlogId = function() {
    return Math.max.apply(Math, this.blogs.map(function(blog) { 
      return blog.id; 
    }));
  };

  this.getNumberOfBlogs = function() {
    return this.blogs.length;
  };

  this.getAll = function() {
    return this.blogs;
  };

  this.getById = function(id) {
    var foundBlog = false;
    for (var i = 0; i < this.blogs.length; i++) {
      var blog = this.blogs[i];
      console.log('...checking blog.id ' + blog.id);
      if (blog.id == id) {
        foundBlog = true;
        return blog;
      };
    };
    if (!foundBlog) {
      console.log('Could not find blog with id: ' + id);
      return 'blog with id ' + id + ' not found.';
    };
  };

  this.addNewBlog = function(heading, bodyText) {
    var newBlog = new Blog(this.getMaxBlogId() + 1, heading, bodyText);
    this.blogs.push(newBlog);
    return this.getById(newBlog.id);
  };

  this.changeBlog = function(id, heading, bodyText) {
    var blog = this.getById(id);
    blog.heading = heading;
    blog.bodyText = bodyText;
    return blog;
  };

  this.deleteBlog = function(id) {
    var indexToDelete = -1;
    for (var i = 0; i < this.blogs.length; i++) {
      var blog = this.blogs[i];
      if (blog.id == id) {
        indexToDelete = i;
        break;
      };
    };

    if (indexToDelete >= 0) {
      this.blogs.splice(indexToDelete, 1);
    };
  };
};
