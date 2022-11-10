const User = require('../models/User/User');

module.exports = async (res, user, status) => {
  const token = user.generateToken();

  const options = {
    httpOnly: true,
    expireDate: new Date(Date.now() * 1000 * 24 * 60 * 60),
  };
  let getUser = await User.findById(user._id).select(
    '-_id avatar name isAdmin'
  );
  return res
    .status(status)
    .cookie('token', token, options)
    .json({ success: true, user: getUser, token });
};
