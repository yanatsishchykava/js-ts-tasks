class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string') {
      throw new TypeError('FirstName must be a string');
    }

    if (typeof secondName !== 'string') {
      throw new TypeError('SecondName must be a string');
    }

    if (typeof age !== 'number') {
      throw new TypeError('Age must be a number');
    }

    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  get name() {
    return this.#firstName + ' ' + this.#secondName;
  }

  get fullName() {
    return this.name;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    this.#age = value;
  }

  set firstName(value) {
    this.#firstName = value;
  }

  set secondName(value) {
    this.#secondName = value;
  }

  introduce() {
    return `My name is ${this.fullName}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
