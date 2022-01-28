const Users = require('../users/users-model');

//invalid credentials
const checkUsernameExists = async (req, res, next) => {
  try {
    const [user] = await Users.findBy({ username: req.body.username });

    if (!user) {
      next({
        status: 401,
        message: 'invalid credentials'
      });
    } else {
      req.user = user;
      next();
    }
  }
  catch (err) {
    next(err);
  }
};

//username taken
const checkUsername = async (req, res, next) => {
  try {
    const [user] = await Users.findBy({ username: req.body.username });

    if (!user) {
      next();
    } else {
      next({
        status: 422,
        message: 'username taken',
      });
    }
  }
  catch (err) {
    next(err);
  }
};

//username and password required
const checkUser = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({
      status: 422,
      message: 'username and password required',
    });
  } else {
    next();
  }
};

module.exports = {
  checkUsernameExists, checkUsername, checkUser
};