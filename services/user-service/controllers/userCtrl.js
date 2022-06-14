var mongoose = require("mongoose");
var userSchema = require("../../../schema/User");
const bcrypt = require("bcrypt");

function createUser(req, res) {
  try {
    if (!req.body.username) {
      throw new Error("User name is required");
    }
    if (!req.body.email) {
      throw new Error("Email id is required");
    }
    if (!req.body.password) {
      throw new Error("Password is required");
    }

    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err, "err while hashing password");
        return res.status(500).json({
          success: false,
          error_message: err,
        });
      } else {
        console.log(hash, "hash");
        userSchema
          .create({
            username: req.body.username,
            email: req.body.email,
            password_hash: hash,
            is_deleted: false,
          })
          .then((new_user) => {
            console.log(new_user, "user created");
            return res.status(200).json({
              success: true,
              new_user,
              message: "User created successfully!",
            });
          })
          .catch((err) => {
            console.log(err, "err while creating user");
            return res.status(500).json({
              success: false,
              error_message: err,
            });
          });
      }
    });
  } catch (err) {
    console.log(err, "err caught");
    return res.status(500).json({
      success: false,
      error_message: err.message,
    });
  }
}

function deleteUser(req, res) {
  try {
    if (!req.query.user_id) {
      throw new Error("user_id is required");
    }

    console.log(req.query.user_id, "user_id");

    userSchema
      .updateOne(
        {
          _id: req.query.user_id,
        },
        {
          $set: { is_deleted: true },
        }
      )
      .then((deleted_user) => {
        console.log(deleted_user, "deleted user");
        return res.status(200).json({
          success: true,
          message: "User deleted successfully!",
        });
      })
      .catch((err) => {
        console.log(err, "err while deleting user");
        return res.status(500).json({
          success: false,
          error_message: err,
        });
      });
  } catch (err) {
    console.log(err, "err caught");
    return res.status(500).json({
      success: false,
      error_message: err.message,
    });
  }
}

function updateUser(req, res) {

    try {

        if (!req.body.user_id) {
            throw new Error ("user id is required");
        }

        var update_user = {};

        if (req.body.username) {
            update_user["username"] = req.body.username;
        }

        if (req.body.email) {
            update_user["email"] = req.body.email;
        }

        if (req.body.password) {
            const saltRounds = 10;
            update_user["password_hash"] = bcrypt.hashSync(req.body.password, saltRounds);
        }

        if (req.body.hasOwnProperty("is_deleted")) {
            update_user["is_deleted"] = req.body.is_deleted;
        }

        userSchema.findByIdAndUpdate(req.body.user_id, update_user).then((updated_user) => {
            return res.status(200).json({
                success: true,
                message: "User updated successfully!",
            })
        }).catch(err => {
            console.log(err, 'err while updating user');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

function getAllUsers(req, res) {

    try {

        userSchema.find().then(users => {
            console.log(users, 'users');
            return res.status(200).json({
                success: true,
                users
            })
        }).catch(err => {
            console.log(err, 'err while getting users');
            return res.status(500).json({
                success: false.valueOf,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }

}

function getUser(req, res) {

    try {

        if (!req.query.user_id) {
            throw new Error ("User id is required");
        }

        userSchema.findById(req.query.user_id).then((user) => {
            console.log(user, 'user');
            return res.status(200).json({
                success: true,
                user
            })
        }).catch(err => {
            console.log(err, 'err while fetching user');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser
};
