class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(num){
        // Step1: create a new Node with the value set to the passed in number 
        var newNode = new Node(num);
        //take newNode's .next pointer and point it into the list.
        newNode.next = this.head;
        // if(!this.head)
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //change head pointer to point at our newNode.
            this.head = newNode;
        }
    }

    addToBack(num){
        // create a newNode with the given value
        var newNode = new Node(num);
        // take tail pointer and point it at the new node

        // if there is nothing in the list 
        if(this.head == null){
            this.head = newNode;
            // this.tail = newNode;
        } else{
            // take tail.next and point it to newNode
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // contains(num){

    // }

    // run through this list and print all the values
    printValues(num){
        // start at head pointer 
        var runner = this.head;
        var str = "this.head = ";
        // run through entire list and print each value
        while(runner.next != null){
            // print the value
            // console.log(`${runner.value} --> `);
            str += `${runner.value} --> `
            // iterate your runner
            runner = runner.next;
        }
        str += `this.tail = ${runner.value} --> null`
        console.log(str)
    }
}
var sll = new SLList();
sll.addToFront(9);
sll.addToFront(-3);
sll.addToFront(22);
sll.addToFront(16);
sll.addToFront(4);
sll.addToFront(53);
sll.addToBack(12);
sll.printValues();