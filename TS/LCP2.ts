class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let resNode = new ListNode();

    const l1Arr: number[] = [];
    const l2Arr: number[] = [];
    let resArr: string[];

    while (l1 != null && l2 != null) {
        l1Arr.push(l1.val);
        l2Arr.push(l2.val);
        l1 = l1.next;
        l2 = l2.next;
    }

    let resNum: string = String(Number(l1Arr.join("")) + Number(l2Arr.join("")));

    console.log(resNum);
    resArr = resNum.split("");
    // resNode.val = Number(resArr[0]);

    for (let i = 0; i < resArr.length; i++) {
        resNode.next = new ListNode(Number(resArr[i]));
        resNode = resNode.next;
        resNode.val = Number(resArr[i]);
        // resNode.next = resNode;
    }

    return resNode;
};

// let addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
//     let resNode = new ListNode(0);
//     let curr = resNode;
//     let carry = 0;
//     while (l1 !== null && l2 !== null && carry !== 0) {
//         let x = l1 == null ? 0 : l1.val;
//         let y = l2 == null ? 0 : l2.val;
//         let sum: number = carry + x + y;
//         carry = Math.floor(sum / 10);
//         curr.next = new ListNode(sum % 10);
//         l1 = l1.next;
//         l2 = l2.next;
//     }
//     return resNode.next;
// };

// let firstNode = new ListNode(3);
// let secNode = new ListNode(4);
// let firstNodeN = new ListNode(3);
// let secNodeN = new ListNode(4);
// secNode.next = new ListNode(5);
// firstNode.next = secNode;
// firstNodeN.next = secNodeN;
// console.log(addTwoNumbers(firstNode, firstNodeN));
