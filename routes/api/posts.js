const express = require('express');
const router = express.Router();

//to create a route
//@route =actual request type which is GET
//endpoint=api/posts
//@route GET api/posts
//@desc Test route
//@access Public - no need of token (achieved by creating an auth middle layer)
router.get('/', (req, res) => {
  res.send('Posts Route');
});

//export the router
module.exports = router;
