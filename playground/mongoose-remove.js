const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemve

Todo.findOneAndRemove({_id: '5ac27c7382271e31568b4be2'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5ac27c7382271e31568b4be2').then((todo) => {
  console.log(todo);
});
