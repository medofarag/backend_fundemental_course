console.log("---Exercise1---");

const promise = new Promise(() => {

});

console.log(promise);

/*
1. pending
2. Because neither function was called (resolve or reject)
*/

console.log("---Exercise2---");

const promise1 = new Promise((resolve) => {
  resolve("Data Loaded Successfully");
})

promise1.then((result) => {
  console.log(result);
})

console.log(promise1);

console.log("---Exercise3---");

const promise2 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("success");
  } else {
    reject("Server Error");
  };
})

promise2.catch((error) => {
  console.log(error);
})

console.log(promise2);

console.log("---Exercise4---");

const age = 20;

const promise3 = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("Access Granted");
  } else {
    reject("Access Denied");
  };
})

promise3
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  })

console.log(promise3);

console.log("---Exercise5---");

const logindata = false;

const promise4 = new Promise((resolve, reject) => {
  if (logindata) {
    resolve("Welcome Ahmed");
  } else {
    reject("Invalid Username or Password");
  }
});

promise4
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

console.log(promise4);

