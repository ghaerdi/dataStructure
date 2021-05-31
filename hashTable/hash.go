package main

import "fmt"

type element = map[int]string
type hashTable struct {
	items element
}

func NewHashTable() (ht hashTable) {
	ht.items = make(element)
	return
}

func (ht *hashTable) Add(key, value string) {
	i := hash(key)
	ht.items[i] = value
}

func (ht *hashTable) Remove(key string) {
	delete(ht.items, hash(key))
}

func (ht *hashTable) Get(key string) string {
	index := hash(key)
	return ht.items[index]
}

func hash(value string) (result int) {
	for index, char := range value {
		result = result + ascii(char)*index
	}
	return
}

func ascii(value rune) int {
	return int(byte(value))
}

func main() {
	example := NewHashTable()
	example.Add("foo", "bar")
	fmt.Println(example.Get("foo"))
}
