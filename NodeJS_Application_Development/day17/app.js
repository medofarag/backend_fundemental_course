function sayHello(callback) {
  const username = "Ahmed";
  callback(username);
};

function hello(name) {
  console.log("Hello", name);
};

sayHello(hello);
