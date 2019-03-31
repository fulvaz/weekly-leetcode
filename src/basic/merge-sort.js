// function sort(list, start, end) {
//     if (start >= end) return;
//     const mid = Math.floor((start + end) / 2);
//     sort(list, start, mid);
//     sort(list, mid + 1, end);
//     merge(list, start, mid, mid + 1, end);
//     // return [...sort(list.slice(start, mid + 1), start, mid), ...sort(list.slice(mid + 1, end + 1), mid + 1, end)];
// }

// function merge(list, s1, e1, s2, e2) {
//     const tmp = [];
//     let i = s1;
//     let j = s2;

//     while(i <= e1 && j <= e2) {
//         if (list[i] < list[j]) {
//             tmp.push(list[i]);
//             i++;
//         } else {
//             tmp.push(list[j]);
//             j++;
//         }
//     }

//     let s = i <= e1 ? i : j;
//     let e = i <= e1 ? e1 : e2;

//     while(s <= e) {
//         tmp.push(list[s++]);
//     }

//     let m = 0;
//     while (s1 + m <= e2) {
//         list[s1 + m] = tmp[m];
//         m++;
//     }
// }


// 保证两边都有序
function sort(arr, p, q) {
    if (p >= q) return;

    const mid = p + Math.floor((q - p) / 2);
    sort(arr, p, mid);
    sort(arr, mid + 1, q);

    // reduce
    merge(arr, p, mid, mid + 1, q);
}

// ps1: 不能只排一次, 无序数组merge毫无意义, 传入的两个数组需要都有序
// 分支思想的代表
function merge(arr, s1, e1, s2, e2) {
    const p = s1;
    const q = e2;
    const tmp = [];
    while (s1 <= e1 && s2 <= e2) {
        if (arr[s1] < arr[s2]) {
            tmp.push(arr[s1]);
            s1++;
        } else {
            tmp.push(arr[s2]);
            s2++;
        }
    }

    while (s1 <= e1) {
        tmp.push(arr[s1]);
        s1++;
    }

    while (s2 <= e2) {
        tmp.push(arr[s2]);
        s2++;
    }

    
    tmp.forEach((e, idx) => {
        arr[p + idx] = tmp[idx];
    });
}

const a = [9, 2, 3, 4, 1];
const result = sort(a, 0, a.length - 1)
console.log(a);
