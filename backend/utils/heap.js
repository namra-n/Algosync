export class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(item) {
      this.heap.push(item);
      this._heapifyUp();
    }
  
    _heapifyUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.heap[idx].priority <= this.heap[parent].priority) break;
        [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
        idx = parent;
      }
    }
  
    extractMax() {
      if (this.heap.length === 1) return this.heap.pop();
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown();
      return max;
    }
  
    _heapifyDown() {
      let idx = 0;
      const length = this.heap.length;
  
      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let largest = idx;
  
        if (left < length && this.heap[left].priority > this.heap[largest].priority) largest = left;
        if (right < length && this.heap[right].priority > this.heap[largest].priority) largest = right;
  
        if (largest === idx) break;
        [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
        idx = largest;
      }
    }
  }
  