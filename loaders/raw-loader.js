const loader = function(content) {
  console.log(content);
  return '';
}
loader.raw = true;
loader.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('1', remainingRequest);
  console.log('2', precedingRequest);
  console.log('3', data);
};

module.exports = loader;
