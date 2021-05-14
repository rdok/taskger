const { ObjectId } = require("bson");
const { User, Task, mongoose } = require("./db/mongoose");

const main = async () => {
  // new User({ name: "Riz", age: 31, email: "bla" }).save().then((response) => {
  //   console.log(response);
  // });

  const user = await new User({
    name: "Riz",
    age: 31,
    email: "riz@mail.com",
  }).save();

  const task = await new Task({
    name: "AlphaTask",
    status: "todo",
    createdBy: new ObjectId(user._id),
  }).save();

  // mongoose.save();
  // console.log(user);
  console.log(task);
  // new Task({name: 'taskAlpha'})

  mongoose.connection.close();
};

main();
