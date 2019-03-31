function swapPairs(pHead) {
    if (!pHead || !pHead.next) {
        return pHead;
    }

    const count


    let [head, prev] = [pHead, null];


    while (head && head.next) {
        if (prev) {
            prev.next = head.next;
        }
        [head.next.next, head.next] = [head, head.next.next];
        [prev, head] = [head, head.next];
    }

    return pHead;

}

const p3 = {
    val: 4,
    next: null,
};

const p2 = {
    val: 3,
    next: p3,
};

const p1 = {
    val: 2,
    next: p2,
};


const head = {
    val: 1,
    next: p1,
};

const head2 = {
    val: 1,
    next: null,
};

console.dir(swapPairs(null));
console.dir(swapPairs(head2));
