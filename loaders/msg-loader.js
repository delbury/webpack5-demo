console.log('msg-loader: init');

module.exports = function(source, map, meta) {
  console.log('msg-loader: run');
  console.log(map, meta);

  source += `\nconsole.log(typeof _msg === 'string')`;
  return source;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('msg-loader: pitch');
};