class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
export class LinkedListStack{
       constructor(){
        this.head=null;
        this._size=0;
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
        return this._size++;
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
        this._size--;
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
       size(){
        return this._size;
       }
       clear(){
        this.head=null;
        this._size=0;
        return this;
       }
       print(){
        if(this.isEmpty()){
            console.log(`The llist is empty`);
            return;
        }
        let temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
       }
       toArray(){
        if(this.isEmpty()){
            return [];
        }
        let store=[];
        let temp=this.head;
        while(temp){
            store.push(temp.data);
            temp=temp.next;
        }
        return store;
       }
}