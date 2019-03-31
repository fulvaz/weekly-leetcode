function ReverseList(pHead)
{
    // if (!pHead) return null;
    // pHead为null
    // pHead.next为null
    // write code here
    // let reverseNode = Object.assign({}, pHead);
    // reverseNode.next = null;
    // while(pHead.next !== null) {
    //     let tmp = Object.assign({}, pHead.next);
    //     tmp.next = reverseNode;
    //     reverseNode = tmp;
    //     pHead = pHead.next;
    // }

    // let p1 = pHead;
    // let p2 = null;
    // let tmp;
    // while(p1) {
    //     tmp = p1.next;


    //     tmp = pHead.next;
    //     pHead = pHead.next;
    //     p1.next = p2;
    //     p2 = p1;
    //     p1 = tmp;
    // }
    // return prev;

    let [head, prev] = [pHead, null];

    while(head) {
        const tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;

        // const tmp = [head.next, prev, head];
        // [head, head.next, prev] = 
        
    }

    return prev;
}

const p2 = {
    val: 2,
    next: null,
};

const p1 = {
    val: 1,
    next: p2,
};


const head = {
    val: 0,
    next: p1,
};

console.dir(ReverseList(head));
