var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var addTwoNumbers = function (l1, l2) {
    var resNode = new ListNode();
    var l1Arr = [];
    var l2Arr = [];
    var resArr;
    while (l1 != null && l2 != null) {
        l1Arr.push(l1.val);
        l2Arr.push(l2.val);
        l1 = l1.next;
        l2 = l2.next;
    }
    console.log(l1Arr);
    console.log(l2Arr);
    var resNum = String(Number(l1Arr.reverse().join("")) + Number(l2Arr.reverse().join("")));
    console.log(resNum);
    resArr = resNum.split("").reverse();
    resNode.val = Number(resArr[0]);
    for (var i = 0; i < resArr.length; i++) {
        resNode.next = new ListNode(Number(resArr[i]));
    }
    return resNode;
};
var firstNode = new ListNode(3);
var secNode = new ListNode(4);
var firstNodeN = new ListNode(3);
var secNodeN = new ListNode(4);
secNode.next = new ListNode(5);
firstNode.next = secNode;
firstNodeN.next = secNodeN;
console.log(addTwoNumbers(firstNode, firstNodeN));

let arr = [0, 1, 2];
arr[-1] = 1;
console.log(arr);