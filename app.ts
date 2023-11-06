let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Max';

userName = 'Haytt';

//userInput = userName;

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never{
   throw{ message: message, errorCode: code}
    //throw new Error("Ups! something went wrong.");
    
}
//generateError('An error ocurred!', 500)
console.log(generateError("Ups", 400));
console.log(userName);