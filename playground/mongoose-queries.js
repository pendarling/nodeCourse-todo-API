const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ac1641626b2d40c2d03651';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

var id = '5abad4b063493c7b24d64d88';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
};

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user));
}, (e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo)
// }).catch((e) => console.log(e));
