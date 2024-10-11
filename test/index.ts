const assert = require('assert');
const path = require('path');
const fs = require('fs');

const solutionsPath = path.join(__dirname, '../src');
const testPath = __dirname;

const solutions: string[] = fs.readdirSync(solutionsPath);

type TTestCaseFnAgrValue = Date | number | boolean | string | Array<unknown> | Record<string, unknown>;
type TTestCaseFnAgrJsonValue = 'Date' | 'number' | 'boolean' | 'string' | 'Array' | 'Object';
type TTestCaseFnAgrJsonValueDate = {
  year: number;
  month: number;
  day: number;
};
type TTestCaseFnArg = {
  value: number | string | boolean | TTestCaseFnAgrJsonValueDate | Array<unknown> | Record<string, unknown>;
  type: TTestCaseFnAgrJsonValue;
};
type TTestCaseFnResult = TTestCaseFnArg & {};
type TTestCase = {
  fnArguments: Array<TTestCaseFnArg>;
  expected: TTestCaseFnResult;
};

function mapFnAgrFromJsonToJs(arg: TTestCaseFnArg): TTestCaseFnAgrValue {
  const { type } = arg;

  switch (type) {
    case 'Date': {
      const { value } = arg;
      const { year, month, day } = value as TTestCaseFnAgrJsonValueDate;
      return new Date(year, month, day);
    }
    case 'Array': {
      const { value } = arg;
      return value as Array<unknown>;
    }
    case 'Object': {
      const { value } = arg;
      return value as Record<string, unknown>;
    }
    case 'number': {
      const { value } = arg;
      return Number(value);
    }
    case 'boolean': {
      const { value } = arg;
      return Boolean(value);
    }
    default: {
      const { value } = arg;
      return String(value);
    }
  }
}

solutions.forEach(solution => {
  const testName = solution.replace(/\.ts/, '');
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const importedModule = require(`${solutionsPath}/${solution}`);
  const method = importedModule[testName];
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const testCases = require(`${testPath}/${testName}`);

  if (method) {
    describe(solution, () => {
      testCases.forEach((testCase: TTestCase) => {
        it(`should return "${JSON.stringify(
          testCase.expected.type === 'Array' ? new Array(testCase.expected.value) : testCase.expected.value
        )}"`, () => {
          const message = method(...testCase.fnArguments.map((arg: TTestCaseFnArg) => mapFnAgrFromJsonToJs(arg)));

          assert.deepEqual(message, mapFnAgrFromJsonToJs(testCase.expected));
        });
      });
    });
  }
});
