class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
export class LinkedListStack{
       constructor(){
        this.head=null;
        this.size=0;
       }
       isEmpty(){
        if(!this.head){
            return true;
        }
        return false;
       }
       push(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        return this.size++;
       }
}