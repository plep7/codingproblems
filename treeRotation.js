var Node = function(value) {
  this.parent = null;
  this.left = null;
  this.right = null;
  this.value = value;
}


function treeRotation(node) {
  // Log value of the node
  var stack = [];
  // Check the node for a left leaf
  if (node.left) {
    // If so recursively call the left node
    stack.push(node.left);
    treeRotation(node.left);
    stack.pop();
    if (stack.length === 0) node.left = null;
  } 
  // Check if the node has a right leaf
  if (node.right) {
    // Assign right node as the left node of the left node
    node.left.left = node.right;
  }
  // Set right node pointer to the parent node
  node.right = node.parent;
  // Change parent pointer to what used to be the left node
  node.parent = node.left;


}
