//  Definition for singly-linked list.
function ListNode(val, next) { 
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const toLinked_L1 = (l1) => {
    let curr= new ListNode(0);
    let p = curr;
    for(const i of l1){
        curr.next = new ListNode(i);
        curr = curr.next;
    }
    // addTwoNumbers(p1.next, p2.next);
    return p.next;
}
const toLinked_L2 = (l2) => {
    let curr = new ListNode(0);
    let p = curr;
    for(const i of l2){
        curr.next = new ListNode(i);
        curr = curr.next;
    }
    // addTwoNumbers(p1.next, p2.next);
    return p.next;
}

const addTwoNumbers = (l1, l2) => {
    let carry = 0,
        result = new ListNode(0),
        current = result,
        arr = [];

    //step 1: I want to traverse the link list using a while loop
    while(l1 || l2 || carry){ 

        // terary operator, if l1 is not null set val1 to be val1.val else set it to be 0
        let val1 = l1 ? l1.val : 0, 
            val2 = l2 ? l2.val : 0;

        if(val1 + val2 + carry > 9){
            current.next = new ListNode(val1 + val2 + carry - 10);
            current = current.next;
            // console.log(val1 + val2 + carry - 10);
            carry = 1;
        }else{
            current.next = new ListNode(val1 + val2 + carry);
            current = current.next;
            // console.log(val1 + val2 + carry);
            carry = 0;
        }
        //if l1, l2 is not equal to null set them to be the next node.
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(carry) current.next = new ListNode(carry);
    while(result){
        arr.push(result.val);
        result = result.next;
    }
    let reversedArr = [];
    for(var i = arr.length - 1; i > -1; i--){
        reversedArr.push(arr[i]);
    }
    arr.splice(0, 1);
    reversedArr.splice(0,1);
    return [arr, reversedArr];
};

console.log(addTwoNumbers(toLinked_L1([2,4,3]), toLinked_L2([5,6,4])));
console.log(addTwoNumbers(toLinked_L1([1,5,6,9]), toLinked_L2([3,5,3,2])));
console.log(addTwoNumbers(toLinked_L1([9,4,1,5,1]), toLinked_L2([2,7,4,5])));