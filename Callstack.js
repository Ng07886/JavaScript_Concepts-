// This will show how functions are called on the stack. Something to remember for this is the Last in first out.

function sayHi(){

console.log("hi");
sayHow();
}

function sayBye(){
console.log("bye!");

}


function sayHow(){
console.log("How is it going");
sayGood();
}

function sayGood(){
console.log("good");
}

sayHi();
sayBye();



/*
The stack would look like this:

main()/sayHi()
main()/sayHi()/sayHow()
main()/sayHi()/sayHow()/sayGood()
main()/sayHi()/sayHow()
main()/sayHi()
main()/sayBye()

you will notice that the last fuction called is always the first to leave the stack.

*/
