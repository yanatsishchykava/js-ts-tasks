# Tasks: 06 Classes

## Task description

### user.js

#### Create class User

The first task is to create class User:

- Required **private** fields are: `firstName`, `secondName`, `age`
- Data types: `firstName` and `secondName` should be string AND it should be allowed to assign only string values to them (hint: throw an exception). `age` should be a number and should also not allow any data types except number.
- Constructor should get three params: `firstName`, `secondName`, `age`
- Create a getter and a setter functions for the field `age`
- Create **only** setter functions for the fields `firstName`, `secondName`
- Create a getter function `name` to return a full user name (`firstName` and `secondName` divided by one space)
- Create `introduce` function to return a string which will contain all user information in a following format (i.e our users is John Doe and his age is 24): `My name is John Doe, I'm 24`
- Create `celebrateBirthday` function increasing private field `age` by one

#### Create functions that will work with class User

##### createUser

A function that creates new User object with the provided user data and returns it

```js
createUser = function (firstName, secondName, age) {};
```

##### createUsers

A function that creates an Array of Users by provided Array of user data and returns that Array

```js
createUsers = function (data) {};
```

##### findUsersByAge

A function that in the provided Users Array will find only those users whose age equals target age and returns that Array of found users

```js
findUsersByAge = function (users, age) {};
```

##### createUsersSortFn

A function that returns a function that sort provided Array of Users using a comparator function from TestUtils

```js
createUsersSortFn = function (TestUtils) {};
```

##### celebrate

A function that in the provided Array of Users for every User under odd index in Array celebrates his birthday

```js
celebrate = function (users) {};
```

### Test cases

No test cases this time :) Please try to read test cases provided in test/user.test.js file. That exercise will enrich your programming skills in how to read and understand Unit tests.

Some useful links about how we create the code there:

- https://blog.logrocket.com/testing-node-js-mocha-chai/
- https://blog.logrocket.com/testing-node-js-mocha-chai/
- https://mochajs.org/
- https://devhints.io/chai

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution
