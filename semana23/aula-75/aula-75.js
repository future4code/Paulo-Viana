/*   ---  ECERCÍCIO 01  ---   */

export class LinkedList {
  constructor(public start?: LinkedListNode) { }

  public appendToTail(value: number) {
    if (!this.start) {
      this.start = new LinkedListNode(value);
    } else {
      let node: LinkedListNode = this.start;
      while (node && node.getNext() !== undefined) {
        node = node.getNext()!;
      }
      node.setNext(new LinkedListNode(value));
    }
  }

  public print(): void {
    let node: LinkedListNode | undefined = this.start;
    let i = 1;
    while (node !== undefined) {
      console.log(`Elemento ${i}: `, node!.getData());
      node = node!.getNext();
      i++;
    }
  }
}

/*   ---  ECERCÍCIO 02  ---   */

export class Stack {
  public nodes: (number | undefined)[] = [];

  isEmpty(): boolean {
    return this.nodes.length > 0;
  }

  push(value: number): void {
    this.nodes.push(value);
  }

  pop(): void {
    const nodeToPop = this.nodes[this.nodes.length - 1];
    this.nodes[this.nodes.length - 1] = undefined;
    this.nodes.length -= 1;
    return nodeToPop;
  }

  print(): void {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(`Elemento ${i + 1}: `, this.nodes[i]);
    }
  }
}

/*   ---  ECERCÍCIO 03  ---   */

export class Queue {
  public nodes: LinkedList = new LinkedList();
  // considera-se o gabarito do item A para essa Lista Ligada!

  isEmpty(): boolean {
    return this.nodes.start === undefined;
  }

  enqueue(value: number): void {
    this.nodes.appendToTail(value);
  }

  dequeue(): void {
    if (this.nodes.start) {
      const nodeToDequeue = this.nodes.start;
      this.nodes.start = this.nodes.start.getNext();
      return nodeToDequeue
    }
  }

  print(): void {
    this.nodes.print();
  }
}