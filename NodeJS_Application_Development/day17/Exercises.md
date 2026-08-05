## Exercise 1

``` javascript
console.log("A");
console.log("B");
console.log("C");
```

A
B
C

يعمل ال event loop عند انتهاس ال c
## Exercise 2

``` javascript
console.log("Start");
setTimeout(() => {
console.log("Timeout");
},2000);
console.log("End");
```

Start
End
Timeout

يعمل ال event loop عند انتهاس ال callstack فيبدأ بالسماح لأول callback بالانتقال الى callstack
## Exercise 3

``` javascript
console.log("1");
setTimeout(() => {
console.log("2");
},0);
console.log("3");
```

1
3
2

لأنه ينتظر حتى تنتهي ال callstack

## Exercise 4

``` javascript
console.log("A");
setTimeout(() => {
console.log("B");
},1000);
console.log("C");
setTimeout(() => {
console.log("D");
},500);
console.log("E");
```

A
C
E
D
B



| الوقت (ms) | الأحداث                                                                    |
| ---------- | -------------------------------------------------------------------------- |
| 0ms        | console.log("A") --> result: A                                             |
| 0ms        | setTimeout(() => {console.log("B")}, 1000) send timer (1000ms) to web APIs |
| 0ms        | console.log("C") --> result: C                                             |
| 0ms        | setTimeout(() => {console.log("D")}, 500) send timer (500ms) to web APIs   |
| 0ms        | console.log("E") --> result: E --> and callstack end                       |
| 500ms      | ينتهي مؤقت D ثم تبدأ العملية console.log("D") --> result: D                |
| 1000ms     | ينتهي مؤقت B ثم تبدأ العملية console.log("B") --> result: B                |

# Exercise 5

``` javascript
console.log("Start");
setTimeout(() => {
console.log("First");
},0);
setTimeout(() => {
console.log("Second");
},0);
console.log("End")
```

يظهر ال first قبل ال second لأنه بعد انتهاء ال callstack يبدأ في ال callback queue وبما أن مؤقت العمليتان ينتهيان في نفس الوقت يقوم البرنامج بتنفيذهما بالترتيب

# Exercise 6

``` javascript
function sayHello(callback) {
  const username = "Ahmed";
  callback(username);
};

function hello(name) {
  console.log("Hello", name);
};

sayHello(hello);
```




