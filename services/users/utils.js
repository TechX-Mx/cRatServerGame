exports.createRandomUsername = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
};

exports.validateEmail = function (email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};
