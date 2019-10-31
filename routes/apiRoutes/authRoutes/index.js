const router = require('express').Router();


// api/auth prepended to every route declared in here

router.route('/signup')
    .post(authController.signUp);


router.route('/signin')
    .post(authController.signIn);

router.route('/logout')
    .get(authController.logout);

module.exports = router;