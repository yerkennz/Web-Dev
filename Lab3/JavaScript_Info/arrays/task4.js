function getMaxSubSum(arr) {
    let suma = 0;
    let cnt = 0;
    for (let j of arr) { 
      cnt += j;
      suma = Math.max(suma, cnt);
      if (cnt < 0) cnt = 0; 
    }
    return suma;
}