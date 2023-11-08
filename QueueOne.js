class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //The enqueue method receives a value and adds it to the end of the queue
  enqueue(val) {
    var newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    }else{
        this.last.next = newNode;
        this.last = newNode; 
    }
    return ++this.size;
  }
  //The dequeue method delete the first queue in the list
  dequeue(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first == this.last){
        this.last = null;
    }    
    this.first = this.first.next;
    this.size--
    return temp.value;
  }

}

const test = new Queue;

test.enqueue("Valor 1");
// test.enqueue("Valor 2");
// test.enqueue("Valor 3");
// test.enqueue("Valor 4");

// console.log(test);
// console.log(test.size);
console.log(test.dequeue());
console.log(test);
