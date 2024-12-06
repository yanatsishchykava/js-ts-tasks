const chai = require('chai');
const sinon = require('sinon');

const { mockApi } = require('../src/mockApi');

const { expect, assert } = chai;
const RESPONSE = {
  test: 'test',
};
const DELAY = 500;

describe('mockApi', function () {
  let clock;
  let mock;

  before(() => {
    mock = mockApi(RESPONSE, DELAY);
  });

  beforeEach(function () {
    clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    clock.restore();
  });

  it('should resolve promise after 500ms with expected result', async function () {
    let fulfilled = false;
    let rejected = false;
    let result = null;

    mock('resolve')
      .then(resp => {
        result = resp;
        fulfilled = true;
      })
      .catch(() => {
        rejected = true;
      });

    clock.tick(DELAY - 1);
    await Promise.resolve();
    expect(fulfilled).to.be.false;
    expect(rejected).to.be.false;
    clock.tick(2);
    await Promise.resolve();
    expect(fulfilled).to.be.true;
    expect(rejected).to.be.false;
    expect(result).to.be.equal(RESPONSE);
  });

  it('should handle promise rejection after 500ms', async function () {
    let fulfilled = false;
    let rejected = false;
    let result = null;

    try {
      mock('reject')
        .then(resp => {
          result = resp;
          fulfilled = true;
        })
        .catch(() => {
          rejected = true;
        });
    } catch (e) {
      expect(result).to.be.null;
      expect(fulfilled).to.be.false;
      expect(rejected).to.be.true;
    }
  });
});
