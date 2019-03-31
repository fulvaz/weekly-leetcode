function Merge(pHead1, pHead2)
{
    // write code here
    if (!pHead1) return pHead2;
    if (!pHead2) return pHead1
    let pointer1 = pHead1;
    let pointer2 = pHead2;
   
    // pointer1为null?
    let result;
    let current;
    if (pointer1.val <= pointer2.val) {
        result = pointer1;
        current = pointer1;
        pointer1 = pointer1.next;
    } else {
        result = pointer2;
        current = pointer2;
        pointer2 = pointer2.next;
    }
    
    
    
    while(pointer1 && pointer2) {
        if (pointer1.val <= pointer2.val) {
            const tmp = pointer1
            pointer1 = pointer1.next;
            current.next = tmp;
            
        } else {
            const tmp = pointer2;
            pointer2 = pointer2.next;
            current.next = tmp;
        }
        current = current.next;
    }
    
    if (!pointer1) current.next = pointer2;
    if (!pointer2) current.next = pointer1;
    return result;
}

const p1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: null,
        }
    }
}

const p2 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: null,
        }
    }
}

let a = Merge(p1, p2);

while(a) {
    console.log(a.val);
    a = a.next;
}