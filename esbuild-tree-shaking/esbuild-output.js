(() => {
  // node_modules/test/index.js
  var a = function name(params) {
    return params;
  }(1);
  var b = function name2(params) {
    return params;
  }(2);

  // index.js
  console.log(a);
})();
