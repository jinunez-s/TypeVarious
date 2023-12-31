class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next; // this assigns the first value = to the value in the next node.
        this.size--;
        return temp.value;
    }
}

const stact = new Stack;

stact.push("Value1");

console.log(stact.first);

stact.push("Value2")

console.log(stact.first);

console.log(stact.size);

console.log(stact.pop());