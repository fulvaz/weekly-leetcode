function VerifySquenceOfBST(sequence)
{
    // write code here
    const root = sequence[sequence.length - 1];
    if (!root) return false;
    let i = 0;
    for (; i < sequence.length; i++) {
        if (sequence[i] >= root) {
            break;
        }
    }
    
    // 这后面每个都应该比root大
    for (let j = i; j < sequence.length; j++) {
        if (sequence[j] < root) {
            return false;
        }
    }
    
    
    // 二分!
    const sub1 = sequence.slice(0, i);
    const sub2 = sequence.slice(i, -1);
    
    let sub1Valid = true;
    if (sub1.length > 0) {
        sub1Valid = VerifySquenceOfBST(sub1) 
    } else {
        sub1Valid = true;
    }
    
    let sub2Valid = true;
    if (sub2.length > 0) {
        sub2Valid = VerifySquenceOfBST(sub2);
    } else {
        sub2Valid = true;
    }
    
    return sub1Valid && sub2Valid;
}

VerifySquenceOfBST([4,8,6,12,16,14,10]);