import getValueByPaths from './utils/getValueByPaths.js';
console.log(getValueByPaths);

const obj = {
  selector: { to: { val: 'val to select' } },
  target: [1, 2, { a: 'test' }],
};

console.log(
  getValueByPaths(obj, 'selector.to.val', 'target[0]', 'target[2].a')
);
