const { assert } = require('chai');
const { describe, it, beforeEach } = require('mocha');

const { User, createUser, createUsers, findUsersByAge, createUsersSortFn, celebrate } = require('../src/user');
const { TestUtils } = require('./testUtils');

const genRandStr = (len = 7) => (Math.random() + 1).toString(36).substring(len);
const genRandNum = (min = 1, max = 100) => Math.floor(Math.random() * max + min);

describe('User class', () => {
  const TEST_USER_DATA = Object.freeze({
    firstName: genRandStr(),
    secondName: genRandStr(),
    age: genRandNum(),
  });

  beforeEach(() => {
    assert.isDefined(User);
    assert.isObject(User.prototype);
  });

  it('should create User instance', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = new User(firstName, secondName, age);

    assert.instanceOf(user, User);
  });

  it('should not create User instance with any empty data', () => {
    assert.throws(() => {
      const user = new User();
    });
  });

  it('should not allow to create User instance with wrong data types', () => {
    assert.throws(() => {
      const user = new User('sa', 'as', 'gdfgd');
    });
  });

  it('should use setter for setting firstName', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = new User(firstName, secondName, age);

    assert.isUndefined(user.firstName);
    assert.equal(user.name, `${firstName} ${secondName}`);

    const newName = genRandStr();
    user.firstName = newName;

    assert.equal(user.name, `${newName} ${secondName}`);
  });

  it('should have getter for name (firstName + lastName with a space between)', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = new User(firstName, secondName, age);

    assert.equal(user.name, `${firstName} ${secondName}`);

    const newName = genRandStr();
    user.secondName = newName;

    assert.equal(user.name, `${firstName} ${newName}`);
  });

  it('should introduce User', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = new User(firstName, secondName, age);

    const correctMessage = `My name is ${firstName} ${secondName}, I'm ${age}`;
    assert.equal(user.introduce(), correctMessage);
  });

  it('should celebrate birthday', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = new User(firstName, secondName, age);

    assert.equal(user.age, age);

    user.celebrateBirthday();
    user.celebrateBirthday();
    user.celebrateBirthday();

    assert.equal(user.age, age + 3);
  });
});

describe('User usage', () => {
  const TEST_USER_DATA = Object.freeze({
    firstName: genRandStr(),
    secondName: genRandStr(),
    age: genRandNum(),
  });
  const TEST_USERS_DATA = new Array(5).fill({
    firstName: genRandStr(),
    secondName: genRandStr(),
    age: genRandNum(),
  });

  beforeEach(() => {
    assert.isDefined(User);
  });

  it('should create User', () => {
    const { firstName, secondName, age } = TEST_USER_DATA;
    const user = createUser(firstName, secondName, age);

    assert.instanceOf(user, User);
    assert.equal(user.name, `${firstName} ${secondName}`);
    assert.equal(user.age, age);
  });

  it('should create Users', () => {
    const users = createUsers([...TEST_USERS_DATA]);

    assert.instanceOf(users, Array);

    users.forEach((user, index) => {
      const { firstName, secondName, age } = TEST_USERS_DATA[index];

      assert.instanceOf(user, User);
      assert.equal(user.name, `${firstName} ${secondName}`);
      assert.equal(user.age, age);
    });
  });

  it('should users where age equals to the particular age', () => {
    const targetAge = genRandNum(1, 20);
    const usersWithTargetAge = new Array(3).fill({
      firstName: genRandStr(),
      secondName: genRandStr(),
      age: targetAge,
    });
    const users = [
      ...usersWithTargetAge,
      ...new Array(10).fill({
        firstName: genRandStr(),
        secondName: genRandStr(),
        age: genRandNum(targetAge + 2, 99),
      }),
    ]
      // shuffle array https://stackoverflow.com/a/46545530
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const filteredUsers = findUsersByAge(users, targetAge);

    assert.deepEqual(usersWithTargetAge, filteredUsers);
  });

  it('should create sort users function with age comparator from TestUtils', () => {
    const users = [
      new User('John', 'Silver', 18),
      new User('Mary', 'Jane', 23),
      new User('Vasil', 'Lykov', 54),
      new User('Mark', 'Kondratov', 7),
      new User('Gennifer', 'Roland', 34),
      new User('Adam', 'Solvey', 20),
      new User('Aaron', 'Jene', 40),
    ]
      // shuffle array https://stackoverflow.com/a/46545530
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const sort = createUsersSortFn({ comparator: TestUtils.sortComparatorByAge });
    assert.isFunction(sort);

    const sortedByAge = sort(users);

    assert.deepEqual(sortedByAge, [
      new User('Vasil', 'Lykov', 54),
      new User('Aaron', 'Jene', 40),
      new User('Gennifer', 'Roland', 34),
      new User('Mary', 'Jane', 23),
      new User('Adam', 'Solvey', 20),
      new User('John', 'Silver', 18),
      new User('Mark', 'Kondratov', 7),
    ]);
  });

  it('should celebrate birthday for every even user', () => {
    const users = [
      new User('John', 'Silver', 18),
      new User('Mary', 'Jane', 23),
      new User('Vasil', 'Lykov', 54),
      new User('Mark', 'Kondratov', 7),
      new User('Gennifer', 'Roland', 34),
      new User('Adam', 'Solvey', 20),
      new User('Aaron', 'Jene', 40),
    ];

    const usersAfterBirthday = celebrate(users);

    assert.deepEqual(
        usersAfterBirthday.map((user) => user.introduce()),
        [
          new User('John', 'Silver', 19),
          new User('Mary', 'Jane', 23),
          new User('Vasil', 'Lykov', 55),
          new User('Mark', 'Kondratov', 7),
          new User('Gennifer', 'Roland', 35),
          new User('Adam', 'Solvey', 20),
          new User('Aaron', 'Jene', 41),
        ].map((user) => user.introduce()),
    );
  });
});
