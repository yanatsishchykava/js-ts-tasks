const chai = require('chai');
const spies = require('chai-spies');
const sinon = require('sinon');

const { debounce } = require('../src/debounce');

chai.use(spies);

const { expect, assert } = chai;

let callBackSpy;
const DELAY = 100;
const ATTEMPTS = ['a', 'b', 'c', 'd'];

describe('debounce', function () {
  let clock;
  beforeEach(function () {
    callBackSpy = chai.spy(() => {});
    clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    clock.restore();
  });

  it('should expect return type is a function', function () {
    const debounced = debounce(callBackSpy, DELAY);
    assert.isFunction(debounced);
  });

  it('should invoke debounce once', function () {
    const debounced = debounce(callBackSpy, DELAY);
    debounced(ATTEMPTS[0]);

    expect(callBackSpy).to.have.been.called.exactly(1);
    expect(callBackSpy).to.have.been.first.called.with(ATTEMPTS[0]);
  });

  it('should invoke debounce twice', function (done) {
    const debounced = debounce(callBackSpy, DELAY);
    debounced(ATTEMPTS[0]);
    debounced(ATTEMPTS[1]);
    debounced(ATTEMPTS[2]);
    setTimeout(() => {
      debounced(ATTEMPTS[3]);
      done();
    }, DELAY);
    debounced(ATTEMPTS[2]);

    clock.tick(DELAY - 1);
    expect(callBackSpy).to.have.been.called.exactly(1);
    expect(callBackSpy).to.have.been.first.called.with(ATTEMPTS[0]);
    clock.tick(2);
    expect(callBackSpy).to.have.been.called.exactly(2);
    expect(callBackSpy).to.have.been.second.called.with(ATTEMPTS[3]);
  });
});
