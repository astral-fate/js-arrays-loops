'strict mode'


//pass this number to out calcs to multple it by 10
const num = 3;

//define a function, the par will be an identfier named input, okay?

function multplyby2(input) {
 

    //now we will do the math hhheereeee
    const calcs = 2*input;
    //for returing this value to our displayer
    return calcs;
}

//now, if we called the function just as we used to do after defying it, as follows multply(), it won't show anything, since there's no args passed to it 
//multply() will show error dear
// now, if we this time passes the function some argums, which is the number 3, that will actuclly be mangful, and show us something

const output = multplyby2(num);
console.log(output);


//works just great, now that you have started to get it
const newoutput = multplyby2(10);
console.log(newoutput);