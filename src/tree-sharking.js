import { drop, fade } from './leaf';
import './test-for-tree-shaking/com';

/*#__PURE__*/
drop();

// fade();


let prev, rates = [];
const tick = (curr) => {
  if(!prev && curr) {
    // 第一帧的开始时间
    prev = curr;
  } else if(prev && curr) {
    const rate = 1000 / (curr - prev);
    if(rate < 20) {
      rates.push(rate);
      console.log('frame rate: ', rates);
    } else {
      rates.length = 0;
    }
    prev = curr;
  }

  requestAnimationFrame(tick);
};

// tick();

console.log(process.env.NODE_ENV);