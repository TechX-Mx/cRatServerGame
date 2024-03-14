const userModel = require("./services/users/model.js");
const { createRandomUsername } = require("./services/users/utils.js");

//test find user by email
(async () => {
  let findUser = await userModel.findUserByEmail("hola@email.com");
  console.log(findUser);
})();

//test create user
(async () => {
  let user = {
    email: "yeffrey4008@gmail.com",
    username: createRandomUsername(),
  };
  let newUser = await userModel.createUser(user);
  console.log({ newUser });
})();
