const auth = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
        console.log('User is logged in');
        next();
    } else {
        console.log('User is not logged in - Acces denied');
        res.render('not-authorized');
    }
};

module.exports = auth;
