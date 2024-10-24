class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    // Perform Breadth-First Search (BFS)
    bfs(startingNode) {
        let visited = new Set();
        let queue = [startingNode];
        visited.add(startingNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let neighbors = this.adjacencyList.get(currentNode);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log("BFS traversal starting from vertex A:");
graph.bfs('A'); // Output: A, B, C, D, E
