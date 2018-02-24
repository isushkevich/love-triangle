/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount( arr ) {
  let one, two, three, count = 0;
  for ( let i = 0; i < arr.length; ++i ) {
    one = arr[ i ];
    two = arr[ one - 1 ];
    three = arr[ two - 1 ];
    if ( three - 1 == i ) {
      count++;
    }
  }
  count = Math.floor( count / 3 ); //because every triangle is counted approx 3 times
  return count;
};