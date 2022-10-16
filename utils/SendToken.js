module.exports = (res, user, status) => {
  const token = user.generateToken();

  const options = {
    httpOnly: true,
    expireDate: new Date(Date.now() * 1000 * 24 * 60 * 60),
  };

  return res
    .status(status)
    .cookie('token', token, options)
    .json({ success: true, user, token });
};
