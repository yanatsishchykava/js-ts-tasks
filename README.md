# Tasks: 04 Functions

## Task description

Here are several simple tasks. Each of them is located in their own js files.

### censorship.js

Write a function which returns a function to replace forbidden words in string by \* symbols.

Array 'forbidden' is specifying the words you have to detect and replace by _. Amount of _ symbols should be equal word length (words and spaces between them if there are many words)

If a forbidden word is a part of another word (i.e. 'ship' and 'battleship') then replace that as well (i.e 'battle\*\*\*\*')

**ATTENTION**: There might be one or several symbols '\n' or '\\n'. That's a special symbol declaring a new line and should stay in a final string.

Example:

`forbidden = ['ship', 'blow', 'blew up']`

`str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'`

`censoredStr = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'`

#### Test cases

| Input                                                                                  | Expected Output                                           | Explanation |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `censorship(['a', 'bc d'])('There is a sample function saying bc d and a little hey')` | `There is * s*mple function s*ying **** *nd * little hey` |

### formatAddress.js

Write a function which returns a formatter function to format address based on input address data

Format should be the following: 'street, house, apartment, city, postal-code, country'

#### Test cases

| Input                                                                                                                                       | Expected Output                              | Explanation |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `formatAddress()({ "street": "Main road", "house": "43", "apartment": "99", "city": "New-York", "postalCode": "NY3254", "country": "USA"})` | `"Main road, 43, 99, New-York, NY3254, USA"` |             |

### formatAddressWithOrder.js

Write a function which returns a formatter function to format address based on input address data

Array 'order' is specifying the format by string index in array.

In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)

Example:

`order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']`

`gives address string like: 'city, street, house, apartment, postalCode, country'`

#### Test cases

| Input                                                                                                                                                                                                                     | Expected Output                                   | Explanation |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `formatAddressWithOrder(["country", "city", "street", "house", "apartment", "postalCode"])({"street": "Savičiaus g", "house": "17", "apartment": "1", "city": "Vilnius", "postalCode": "01126", "country": "Lithuania"})` | `"Lithuania, Vilnius, Savičiaus g, 17, 1, 01126"` |             |

### primeNumbers.js

Write a function which returns a function that returns array of [prime numbers](https://en.wikipedia.org/wiki/Prime_number) between two specified numbers (included)

#### Test cases

| Input                      | Expected Output | Explanation                                          |
| -------------------------- | --------------- | ---------------------------------------------------- |
| `primeNumbers(20)(1, 10)`  | `[2, 3, 5, 7]`  | From 1 to 10 there are prime numbers like 2, 3, 5, 7 |
| `primeNumbers(15)(11, 14)` | `[11, 13]`      | From 11 to 14 there are prime numbers like 11, 13    |

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution
