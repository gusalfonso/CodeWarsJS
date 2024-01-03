/*DESCRIPTION:
Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59"
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Every input has a valid answer.*/
function latestClock(a, b, c, d) {
  let time1 = [a,b,c,d]

  function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;

    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    let aux = []
    for (let i = 0; i < result.length; i++){
      if (result[i][0]*10 + result[i][1] < 24 && result[i][2]*10 + result[i][3] < 60){
        aux.push(result[i])
      }
    }

    return aux;
  }

  function maxsec(arr) {
    let m = [];
    for (let i = 0; i < arr.length; i++){
      let a = arr[i][0]*10*60*60 + arr[i][1]*60*60 + arr[i][2]*10*60 + arr[i][3]*60;
      m.push(a)
    }
    ind = m.indexOf(Math.max(...m))
    return ind
  }

  time2 = permute(time1)
  ind = maxsec(time2)

  let hour = '' + time2[ind][0] + time2[ind][1] + ':' + time2[ind][2] + time2[ind][3]

  return hour
}

console.log(latestClock(9,2,3,4))