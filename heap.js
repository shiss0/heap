class Heap {
  constructor(type= 'min'){

    this.type = type;
    this.heap = []

  }

  parent(index){
    return Math.floor((index-1)/2)
  }

  leftChild(index){
    return 2*index+1
  }

  rightChild(index){
    return 2*index+2
  }

  swap(index,parentIndex){
    [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
  }
  compare(a,b){
    return this.type === 'min' ? a<b : a>b;
  }

  insert(value){
    this.heap.push(value);
    this.heapifyUp(this.heap.length-1)
  }

  heapifyUp(index){
    const parentIndex = this.parent(index)
    if(index > 0 && this.compare(this.heap[index],this.heap[parentIndex])){
      this.swap(index,parentIndex)
      this.heapifyUp(parentIndex)
    }
  }


  heapifydown(index){
    const left = this.leftChild(index)
    const right = this.rightChild(index)
    let currentindex = index

    if(left<this.heap.length && this.compare(this.heap[left],this.heap[currentindex])){
      currentindex = left
    }
    if(right<this.heap.length && this.compare(this.heap[right],this.heap[currentindex])){
      currentindex=right
    }

    if(currentindex !== index ){
      this.swap(index,currentindex)
      this.heapifydown(currentindex)
    }
  }

  removeRoot(){
    if (this.heap.length === 0 ){
      return ('insert number')
    }

    if (this.heap.length === 1 ){
      return this.heap.pop()
    }
    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifydown(0);
    return root
  }

  root(){
      return this.heap.length>0 ? this.heap[0] : null ;
  }

  
}


