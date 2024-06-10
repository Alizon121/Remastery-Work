// I added an adjacency list so that the DFT made sense

// Put the starting node on a stack.
// While the stack is not empty, repeat steps 3-4.
// Pop a node and print it.
// Put all of the node's children on the top of the stack.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

const start = 3

function depthFirstTraversal(start) {
let stack = [start]
let visited = new Set()
visited.add(start)
while (stack.length > 0) {
    let currentNode = stack.pop()
    console.log(currentNode)


for (let neighbor of adjList[currentNode]) {
    if (!visited.has(neighbor)) {
        visited.add(neighbor)
        stack.push(neighbor)
}
}
}
}