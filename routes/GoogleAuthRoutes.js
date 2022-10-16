const router = require('express').Router();
const passport = require('passport');

router.route('/login/success').get((req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ error: false, message: 'Login Successfully', user: req.user });
  } else {
    res.status(403).json({ error: true, message: 'Not Authorized' });
  }
});

router.route('/login/failed').get((req, res) => {
  res.status(401).json({
    error: true,
    message: 'Login Failure',
  });
});

router.route('/google/callback').get(
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URI,
    failureRedirect: '/login/failed',
  })
);

router
  .route('/google')
  .get(passport.authenticate('google', ['profile', 'email']));

router.route('/logout').get((req, res) => {
  req.logOut();
  res.redirect(process.env.CLIENT_URI);
});

module.exports = router;
