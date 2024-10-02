class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // View the front element
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(5);
  queue.enqueue(15);
  console.log(queue.dequeue()); // 5
  console.log(queue.front()); // 15
  