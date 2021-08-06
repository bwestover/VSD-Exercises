class Node:
    def __init__(self, value, next_node=None, prev_node=None):
      self.value = value
      self.next_node = next_node
      self.prev_node = prev_node


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length  = 0

    def push(self, value):
      # add value to the end of the list
      newNode = Node(value)
      if self.tail == None:
        self.tail = newNode
        self.head = newNode
      else:
        newNode.prev_node = self.tail
        self.tail.next_node = newNode
        self.tail = newNode
      self.length += 1

    def pop(self):
      # remove value from the end of the list (and return it)
      node = self.tail
      if node.prev_node is None:
        self.head = None
        self.tail = None
      else:
        self.tail = node.prev_node
        self.tail.next_node = None
      self.length -= 1

      return node.value

    def shift(self):
      # remove value from the beginning of the list (and return it)
      node = self.head
      if node.next_node is None:
        self.head = None
        self.tail = None
      else:
        self.head = node.next_node
        self.head.prev_node = None
      self.length -= 1

      return node.value

    def unshift(self, value):
      # add value to the beginning of the list
      newNode = Node(value)
      if self.head == None:
        self.head = newNode
        self.tail = newNode
      else:
        newNode.next_node = self.head
        self.head.prev_node = newNode
        self.head = newNode
      self.length += 1

    def __len__(self):
      # __len__ will enable the len() function for this object
      return self.length
