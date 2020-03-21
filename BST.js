class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
           var current = this.root;
           while(true){
               if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if( value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
              }

          }
      }

      find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value === current.value) {
        found = true;
      } else if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }

    if (!found) return;

    return current;
  }
 }

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(8);
tree.insert(20);
tree.insert(1);
tree.insert(3);
tree.insert(32);
tree.insert(2);
tree.insert(11);
tree.insert(9);
