function call(func) {
  func();
}

function callTwice(func) {
  for(let i = 0; i < 2; i++) {
    func();
  };
}

function callXTimes(func, times) {
  for(let i = 0; i < times; i++) {
    func();
  }
}

function returnFromFunc(func) {
  return func()
}

function modifyString(str, func) {
  return func((str))
}

function modifyNumber(num, func) {
  return func(num)
}

function modifyAnything(value, func) {
  return func(value)
}

function twoFuncs(func1, func2) {
  return func2(func1())
}

function twoValues(val1, val2, func) {
  return func(val1, val2)
}

function twoValuesRTL(fn, ln, func) {
  return func(ln, fn)
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}