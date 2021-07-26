document.onclick = () => {
  import(
    'lodash'
  ).then(({ default: _ }) => {
    function fn() {
      console.log(_.join(['This', 'is', 'entry!'], ' '));
      // let c = 1000000000;
      // while(c--);
    }
    fn();
  });
};