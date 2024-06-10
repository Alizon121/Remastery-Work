// I added an adjacency list so that the BFT made sense

/*
1. Put the starting node in a queue.
2. While the queue is not empty, repeat steps 3-4.
3. Dequeue a node and print it.
4. Put all of the node's children in the back of the queue. 
*/



const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

const start = 3

function breadthFirstTraversal(start) {

    let queue = [start]
    let visited = new Set()
    visited.add(start)

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode)

        for (let neighbor of adjList[currentNode]){
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
}