class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
     var newNode = new Node(val);
     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
        
     } else {
         this.tail.next = newNode;
         this.tail = newNode;

     }
     this.length++;
    }

    
// prints the list items 
printList() 
{ 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.val + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 

}


var list = new SLL();
list.push("1");
list.push("2");
list.push("3");
