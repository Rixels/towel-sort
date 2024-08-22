
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let unpack = [];
   matrix.forEach ((value, index) => {
 unpack = unpack.concat(...matrix[index])
})
function ret(a, b){ return a - b};
unpack.sort(ret)
  return unpack;
}
