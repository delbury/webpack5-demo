console.log('msg-loader: init');

module.exports = function(source, map, meta) {
  console.log('msg-loader: run');
  console.log(map, meta);
  console.log('data', this.data);
  console.log(this.context);

  // this.emitError(new Error('cccccccccccccccc'));
  // this.emitWarning(new Error('wwwwwwwwwwww'));
  // this.emitFile('fffffff.log', 'hello file');
  console.log('='.repeat(40));
  // console.log(this.fs);
  // console.log(this.getOptions());
  // console.log(this.getResolve());
  // console.log(this.hot);
  // console.log(this.loaderIndex);
  // console.log(this.loaders);
  // console.log(this.mode);
  // console.log(this.query);
  // console.log(this.request);
  // this.resolve(__dirname, this.request, res => console.log(res));
  // console.log(this.resource);
  // console.log(this.resourcePath);
  // console.log(this.resourceQuery);
  // console.log(this.rootContext);
  // console.log(this.sourceMap);
  // console.log(this.target);
  // console.log(this.version);
  // console.log(this.webpack);
  console.log('='.repeat(40));

  source += `\nconsole.log(typeof _msg === 'string')`;
  return source;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('msg-loader: pitch');
  console.log('*'.repeat(40));
  console.log('-'.repeat(40));
  console.log(remainingRequest);
  console.log(precedingRequest);
  console.log(data);
  console.log('-'.repeat(40));
  console.log('*'.repeat(40));

  data.info = 'this is from msg-loader';

  // return `console.log('hhh !!!');`
};