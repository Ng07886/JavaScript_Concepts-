

async function getData() {
    let taco= new Promise((steak,chicken) => {
    setTimeout(() => steak('done'),4000);
    });
    
    let finished = await taco;
    console.log(finished);
    }
    
    getData();
    
    /* The first thing you notice is that the fuction has a async in front of it. 
       this lets the compiler know that it will havve a promise it will have to return to.
       Instead of writing .then to wait you write 'await' to let the compiler know it needs
       to wait for whatever the await is attached to finish and then it will continue.
       If you ran this you will have to wait 4 sec beacue the compiler is waiting due to the await 
       in front of taco. */
