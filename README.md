# Tasks: 07 Typescript Basics

## Task description

Here are several small tasks. Each of them is located in their own js files.

### converter.ts

Write a function converting temperature, weight and distance. Precision is 2 number after digits

### getDaysToNewYear.ts

Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)

### groupUsers.ts

Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups

A function should return an object consists of two arrays of grouped users:
{
    employees: [...]
    contractors: [...]
}

### pangram.ts

Write a function determining if the provided string/number is a pangram

A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once

A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once

## How to run tasks locally

The following commands are useful to run your code locally

## Once - install npm packages 

To run typescript code locally run first `npm ci` or `npm install`

### Run all tasks at once

`npm run test:local` - iterates throught all `src/*.js` files and test your solutions

### Run a certain task

You could specify a name of each individual task to run that locally

`npm run test:local:backToFront` - run test cases only for `backToFront` task
`npm run test:local:sum` - run test cases only for `sum` task

A list of available commands is specified in `package.json` file in `scripts` section

## Commit message rules

Please follow `Commit message rules` instructions provided on `main` branch.
