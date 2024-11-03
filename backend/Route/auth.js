// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const router = express.Router();

// // Register
// router.post('/register', async (req, res) => {
//   const { username, password, isAdmin } = req.body;
//   console.log("nnnnnnnnnnnnnnnn", username, password, isAdmin)
//   const user = new User({ username, password, isAdmin: isAdmin || false, });

//   console.log("llllllllllllllllllllll ", username)
//   await user.save();
//   res.status(201).send('User registered');
// });
 
// // Login 
// // router.post('/login', async (req, res) => {
// //   const { username, password } = req.body;
// //   const user = await User.findOne({ username });
// //   if (!user || !(await user.comparePassword(password))) {
// //     return res.status(401).send('Invalid credentials');
// //   }
  
// //   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //   res.json({ token });
// // });

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user || !(await user.comparePassword(password))) {
//     return res.status(401).send('Invalid credentials');
//   }
  
//   // Include isAdmin in the token payload
//   const token = jwt.sign(
//     { 
//       id: user._id, 
//       isAdmin: user.isAdmin // Add isAdmin here
//     }, 
//     process.env.JWT_SECRET, 
//     { expiresIn: '1h' }
//   );
  
//   res.json({ token });
// });

// // Middleware to authenticate JWT
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];
//   if (!token) return res.sendStatus(403);

//   console.log("llllllllllllllllllllll ", token)
  
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next(); 
//   });
// };

// // Protected route example
// router.get('/profile', authenticateJWT, (req, res) => {
//   res.json({ message: 'Protected data', user: req.user });
// });

// module.exports = router;


//////////////////////////////////////////////////////////


const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, password, isAdmin } = req.body;

  try {
    const user = await User.create({ username, password, isAdmin: isAdmin || false });
    res.status(201).send('User registered');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
});

// Login 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }

    // Include isAdmin in the token payload
    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Protected route example
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});

module.exports = router; 