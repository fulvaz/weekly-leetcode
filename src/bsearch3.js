function bsearch(a, n, value) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid =  low + ((high - low) >> 1);
      if (a[mid] >= value) {
          // a[mid - 1] < value 
        if ((mid == 0) || !(a[mid - 1] > value)) return mid;
        else high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }


  a = [ 10, 20, 30, 40, 50];
  r = bsearch(a, a.length, 21);
  console.log(r);