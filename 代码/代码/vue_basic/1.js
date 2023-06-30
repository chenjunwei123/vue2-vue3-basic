//单链表
// function LinkedList() {
//   // let arr = []
//   this.head = null
//   this.length = 0
//   function Node(element) {
//     this.element = element
//     this.next = null
//   }
//   LinkedList.prototype.append = (element) => {
//     let node = this.head
//     let newNode = new Node(element)
//     if(this.head === null) {
//       this.head = newNode
//     }else {
//       while(node.next) {
//         node = node.next
//       }
//       node.next = newNode
//     }
//     this.length++
//   }
//   LinkedList.prototype.remove = (position) => {
//     if(position < 0 || position > this.length) return false
//     let current = this.head
//     let index = 0
//     let prev = null
//     if(position === 0) {
//       this.head = current.next
//     }else {
//       while(index++ < position) {
//         prev = current
//         current = current.next
//       }
//       prev.next = current.next
//     }
//     this.length--
//   }
// }
// let lint = new LinkedList()
// lint.append(8)
// lint.append(7)
// lint.append(6)
// lint.remove(1)
// console.log(lint);

//双链表
// function BinaryLinkedList() {
//   this.head = null
//   this.tail = null
//   this.length = 0
//   function Node(element) {
//     this.element = element
//     this.prev = null
//     this.next = null
//   }
//   BinaryLinkedList.prototype.append = (element) => {
//     let newNode = new Node(element)
//     if(this.head === null) {
//       this.head = newNode
//       this.tail = newNode
//     }else {
//         let current = this.head
//         while(current.next) {
//           current = current.next
//         }
//         current.next = newNode
//         newNode.prev = current
//         this.tail = newNode
//     }
//     this.length++
//   }
//   BinaryLinkedList.prototype.remove = (psoition) => {
//     if(psoition < 0 || psoition >= this.length) return false
//     let current = this.head
//     let previous = null
//     let index = 0
//     if(psoition === 0) {
//       this.head.next.prev = null
//       this.head = this.head.next
//     }else if(psoition <  this.length -1){
//       while(index++ < psoition) {
//         previous = current
//         current = current.next
//       }
//       previous.next = current.next
//       current.next.prev = previous
//     }else {
//       this.tail.prev.next = null
//       this.tail = this.tail.prev
//     }
//     this.length--
//   }
// }
// let binartList = new BinaryLinkedList()
// binartList.append(8)
// binartList.append(7)
// binartList.append(6)
// binartList.remove(2)
// console.log(binartList);

//二叉搜索树
function BinarySearchTree() {
  this.root = null
  function Node(element) {
    this.element = element
    this.left = null
    this.right = null
  }
  BinarySearchTree.prototype.insert = (element) => {
    // let node = this.root
    let newNode = new Node(element)
    if(this.root === null) {
      this.root = newNode
    }else {
      this.insertNode(this.root,newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = (node,newNode) => {
      if(newNode.element < node.element) {
        if(node.left === null) {
          node.left = newNode
        }else {
          node = node.left
          this.insertNode(node,newNode)
        }
      }else {
        if(node.right === null) {
          node.right = newNode
        }else {
          node = node.right
          this.insertNode(node,newNode)
        }
      }
  }
}
let tree = new BinarySearchTree()
tree.insert(8)
tree.insert(9)
tree.insert(7)
tree.insert(4)
// console.log(tree.root);
console.log(tree.root.left.left);
// console.log(tree.root);