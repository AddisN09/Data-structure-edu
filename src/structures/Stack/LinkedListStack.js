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
       pop(){
        if(this.isEmpty()){
            console.log(`The stack is empty`);
            return;
        }
        let temp=this.head;
        this.head=this.head.next;
        temp.next=null;
        let value=temp.data;
        temp=null;
        this.size--;
        return value;
       }
       peek(){
        if(this.isEmpty()){
            console.log(`The stack is  empty`);
            return;
        }
        let value=this.head.data;
        return value;
       }
}