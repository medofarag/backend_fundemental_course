let sayHello = () => {
  console.log("Hello");
};

// case1 work
exports.sayHello = sayHello;

// case2 work
// module.exports = { sayHello };

// case3 does not work
// exports = { sayHello };
