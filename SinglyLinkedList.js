class Node{
constructor(val){
          this.val =  val;
          this.next = null;
    }
}

class SinglyLinkedList{
constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
     push(val){
       var newNode = new Node(val);
       if( !this.head){
           this.head = newNode;
           this.tail = this.head;
       } 
       else {
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
     }

    pop(){
     if(!this.head) return undefined;
     var current = this.head;
     var newTail = current;
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current;
    }

    shift(){
      if(!this.head) return undefined;
      var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
         if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
        return currentHead;
    }

    unshift(val){
      var newlyNode = new Node(val);
      if(!this.head){
        this.head = newlyNode;
        this.tail = newlyNode;
      }
        else{
      newlyNode.next = this.head;
      this.head = newlyNode;
        }
          this.length++;
          return list;
      }

      get(index){
        if(index < 0 || index >= this.length)   return null;
        var counter = 0;
        var current = this.head;
        while(counter != index){
          current = current.next;
          counter++;
        }
        return current;
    }

    set(index,val){
      var  specific = this.get(index);
      if(!specific) return false;
      else{
        this.val = val;
        return true;
      }
    }

    insert(index, value){
         if(index < 0 || index > this.length)   return false;
         if(index === this.length) this.push(value);
         if(index === 0) this.unshift(value);
         var newNode = new Node(value);
         var prev = this.get(index -1);
         var temp = prev.next;
         prev.next = newNode;
         newNode.next = temp;
         this.length++;
         return true;
    }

    remove(index){
         if(index < 0 || index > this.length)   return undefined;
         if(index === this.length -1) this.pop();
          if(index === 0) this.shift(index);
          var prev = this.get(index -1);
          var removed = prev.next;
          prev.next = removed.next;
          this.length--;

          return removed;
    }
       
    }


var list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.push("fifth");
