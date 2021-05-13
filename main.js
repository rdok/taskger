const { User } = require("./db/mongoose");

const me = new User({ name: "Riz", age: 31 });

me.save().then((response) => {
  console.log(response);
});
