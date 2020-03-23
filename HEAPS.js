class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1 ;
        const element = this.values[idx];
        while(idx > 0){
            let parentIndex = Math.floor((idx-1)/2);
            let parent = this.values[parentIndex];
            if(element > parent){
                this.values[parentIndex] = element;
                this.values[idx] = parent;
                idx = parentIndex;
            }
        }
    }
}

 let heap = new MaxBinaryHeap();
 heap.insert(55);
