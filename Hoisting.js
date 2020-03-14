y = 10; // Assign 10 to y

console.log(y); //This will print out before it is declared         

var y; // Declare y


//This is possible because the compiler moves all declerations to the top of the current scope.

/*
Once the compiler compiles the code it will look like this.

var y;

y=10;

console.log(y);

The compiler moved all the declerations to the top of the page 

*/
