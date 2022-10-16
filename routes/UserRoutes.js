const router = require('express').Router();

const Register = require('../controllers/Authentication/Register');
const Login = require('../controllers/Authentication/Login');
const Logout = require('../controllers/Authentication/Logout');
const IsLogged = require('../controllers/Authentication/IsLogged');
const GetUserById = require('../controllers/User/GetUserById');
const GetMyProfile = require('../controllers/User/GetMyProfile');
const IsAuthenticated = require('../middleWare/IsAuthenticated');
const ForgotPassword = require('../controllers/Authentication/ForgotPassword');
const ResetPassword = require('../controllers/Authentication/ResetPassword');

// Get & Post User

router.route('/register').post(Register);
router.route('/is_logged').get(IsLogged);
router.route('/login').post(Login);
router.route('/logout').get(Logout);
router.route('/user').get(IsAuthenticated, GetUserById);
router.route('/me').get(IsAuthenticated, GetMyProfile);
router.route('/forgot_password').post(ForgotPassword);
router.route('/reset_password').post(ResetPassword);

module.exports = router;
