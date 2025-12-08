export class ArrayStack{
    constructor(){
        this.stack=[];
    }
    isEmpty(){
        let length=this.stack.length;
        if(!length){
             return true;
        }
        return false;
    }
    push(data){
      this.stack.push(data);
      return this.stack.length;
    }
}