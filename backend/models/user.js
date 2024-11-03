// // const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("cv", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// //  Define TestApplicantimg model
// const TestApplicantimg = sequelize.define("user", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   applicantimg: { type: DataTypes.STRING },
//   personalimage: { type: DataTypes.STRING },


//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   username: { type: DataTypes.STRING, unique: true },
//   password: { type: DataTypes.STRING, required: true },
//   isAdmin: { type: DataTypes.BOOLEAN, default: false },
  
// }, {
//   tableName: "user",
//   timestamps: true,
// });

// module.exports = { TestApplicantimg, sequelize };


// // const UserSchema = new mongoose.Schema({
// //   username: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   isAdmin: { type: Boolean, default: false },
// // });

// // Hash password before saving
// UserSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
  
//   next();
// });

// // Method to compare passwords
// UserSchema.methods.comparePassword = function(password) {
//   return bcrypt.compare(password, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);


///////////////////////////////////////////////////////


const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

// Initialize Sequelize with MySQL
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

const sequelize = new Sequelize("cv", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Hash password before saving
User.beforeSave(async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

// Method to compare passwords
User.prototype.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Sync the model with the database
sequelize.sync();

module.exports = User;