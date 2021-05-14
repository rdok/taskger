const { ObjectId } = require("bson");
const { User, Task } = require("./db/mongoose");

const main = async () => {
  // new User({ name: "Riz", age: 31, email: "bla" }).save().then((response) => {
  //   console.log(response);
  // });

  const user = await new User({ name: "Riz", age: 31, email: "riz@mail.com" });
  const task = await new Task({
    name: "AlphaTask",
    createdBy: new ObjectId(user._id),
  });

  console.log(user);
  console.log(task);
  // new Task({name: 'taskAlpha'})
};

main();
