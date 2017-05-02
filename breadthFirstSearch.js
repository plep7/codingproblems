var BST = function(val){
  this.left   = null;
  this.right  = null;
  this.value = val;
};

BST.prototype.insert = function(val, notRoot){
  notRoot = notRoot || false;
  if(val < this.value){
    if(this.left){
      this.left.insert(val);
    } else{
      this.left = new BST(val, true);
    }
  } else if (val > this.value){
    if(this.right){
      this.right.insert(val, true);
    } else {
      this.right = new BST(val);
    }
  }
  if(!notRoot){
    if(!_balanceCheck(this)){
      _rebalance(this);
    }
  }
};

BST.prototype.contains = function(val){
  if(val === this.value){
    return true;
  } else if (val < this.value){
    if(!this.left){
      return false;
    } else{
      return this.left.contains(val);
    }
  } else if (val > this.value){
    if(!this.right){
      return false;
    } else{
      return this.right.contains(val);
    }
  }
};

BST.prototype.depthFirstLog = function(callback){
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
  callback(this.value);
};

// BST.prototype.breadthFirstLog = function(callback){
//   callback(this);
//   var treecursion = function(level){
//     var node;
//     var nextLevel = [];
//     for(var i = 0; i < level.length; i++){
//       node = level[i];
//       if(node.left){
//         callback(node.left);
//         nextLevel.push(node.left);
//       }
//       if(node.right){
//         callback(node.right);
//         nextLevel.push(node.right);
//       }
//     }
//     if(nextLevel.length > 0){
//       treecursion(nextLevel);
//     }
//   };
//   treecursion([this]);
// };

_balanceCheck = function(node, notRoot){
  // left and right subtree differ in height by 1
  // left tree is balanced
  // right tree is balanced
  notRoot = notRoot || false;
  var left;
  var right;
  if(node.left){
    left = _balanceCheck(node.left, true);
    if(left === false){
      return false;
    }
    left += 1;
  } else{
    left = 0;
  }
  if(node.right){
    right = _balanceCheck(node.right, true);
    if(right === false){
      return false;
    }
    right += 1;
  } else{
    right = 0;
  }
  if (Math.abs(right-left) > 1){
    return false;
  }

  if(notRoot){
    if(left > right){
      return left;
    } else{
      return right;
    }
  } else{
    return true;
  }
};

var _rebalance = function(node){
  var orderedList = [];
  _orderList(node, orderedList);
  var insertPlan  = _binaryOut(orderedList);
  node.value = insertPlan[0];
  for(var i = 1; i < insertPlan.length; i++){
    node.insert(insertPlan[i]);
  }
};

var _orderList = function(node, list){
  if(node.left){
    _orderList(node.left, list);
    node.left = null;
  }
  list.push(node.value);
  if(node.right){
    _orderList(node.right, list);
    node.right = null;
  }
};

var _binaryOut = function(list){
  var binaryList = [];
  // be the node, not the tree
  if(list.length === 0){
    return [];
  }
  var mid = Math.floor(list.length/2);
  var lowArr  = _binaryOut(list.slice(0,mid));
  var highArr = _binaryOut(list.slice(mid+1));
  binaryList.push(list[mid]);
  while(lowArr.length > 0 || highArr.length > 0){
    if(lowArr.length>0){
      binaryList.push(lowArr.shift());
    }
    if(highArr.length>0){
      binaryList.push(highArr.shift());
    }
  }
  return binaryList;
};

BST.prototype.breadthFirstLog = function(callback) {
  // Set the current node
  var node;
  // Initiate an array for child nodes
  var queue = [];
  queue.push(this)
  while (queue.length > 0) {
    // Dequeue the first node in the queue
    node = queue.shift()
    // Perform callback on current node
    callback(node)
    // Check if left node exists
    if (node.left) {
      // If so perform callback and push into child array
      queue.push(node.left)
    }
    // Check if right node exists
    if (node.right) {
      // If so perform callback and push into child array
      queue.push(node.right)
    }
  }
};

tree = new BST(6);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(8);
tree.insert(4);
tree.insert(1);
tree.insert(0);
console.log(tree);
console.log('==================================================')
tree.breadthFirstLog((node) => console.log(node.value))