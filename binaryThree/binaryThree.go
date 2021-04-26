package main
import "fmt"

type Node struct {
  value int
  parent *Node
  next *Node
  previous *Node
}

type BinaryThree struct {
  head Node
}

func newBinaryThree(value int) *BinaryThree {
  n := &Node{value: value}
  return &BinaryThree{*n}
}

func (bt *BinaryThree) add(value int) *Node {
  temp := &bt.head
  for true {
    if temp.value == value {
      break
    }

    if temp.value < value {
      if temp.next == nil {
        temp.next = &Node{value: value, parent: temp} 
        temp = temp.next
        break
      }
      temp = temp.next
    }

    if temp.value > value {
      if temp.previous == nil {
        temp.previous = &Node{value: value, parent: temp} 
        temp = temp.previous
        break
      }
      temp = temp.previous
    }
  }

  return temp
}

func main() {
  bt := BinaryThree{}
  bt.add(10)
  fmt.Println(bt.head.next.value)
}
