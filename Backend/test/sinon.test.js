const sinon = require("sinon");
var spy = sinon.spy();
var stub = sinon.stub();
const assert = require("assert");

var clock;

before(function() {
  clock = sinon.useFakeTimers();
});
after(function() {
  clock.restore();
});

function once(fn) {
  var returnValue,
    called = false;
  return function() {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
}

it("appelle la fonction d'origine", function() {
  var callback = sinon.fake();
  var proxy = once(callback);

  proxy();

  assert(callback.called);
});

it("appelle la fonction d'origine une seule fois", function() {
  var callback = sinon.fake();
  var proxy = once(callback);

  proxy();
  proxy();

  assert(callback.calledOnce);
});

it("appelle la fonction d'origine avec le droit et args", function() {
  var callback = sinon.fake();
  var proxy = once(callback);
  var obj = {};

  proxy.call(obj, 1, 2, 3);

  assert(callback.calledOn(obj));
  assert(callback.calledWith(1, 2, 3));
});

it("renvoie la valeur de retour de la fonction d'origine", function() {
  var callback = sinon.fake.returns(42);
  var proxy = once(callback);

  assert.equal(proxy(), 42);
});
