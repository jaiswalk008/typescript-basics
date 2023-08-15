//type alias
type strinOrNum = number | string;

//interface
interface result {
    val : number;
    timestamp : Date;
}

function add1(num1 :strinOrNum ,num2 : strinOrNum){
    //using if..else for different data type
    if(typeof num1==='number' && typeof num2==='number') return num1+num2;
    else if(typeof num1==='string' && typeof num2==='string') return num1+' ' + num2;
    else return +num1+ +num2;
    
}

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;

//generics
let numResults: Array<number> =[];
let textResults: Array<string> =[];
//TypeScript can "guess" the type of a value and it is called infering the value
const button = document.querySelector('button')!;
//In case of button TS can infer its type because we are using 'button'
//typescript does not know about the html file so it doesnot whether button element will be null
// or not so we use '!' for telling typescript to ignore null check and if its null use num2
button.addEventListener('click', () =>{
    const result = add1(num1.value,num2.value);
    const resultString = add1(num1.value,num2.value);
    numResults.push(result as number);
    textResults.push(resultString as string);
    displayResults({val:result as number , timestamp : new Date()});
    displayResults({val:resultString as string , timestamp : new Date()});
    console.log(numResults);
    console.log(textResults);
})

function displayResults(obj : {val:strinOrNum ; timestamp:Date}){
    console.log(obj.val);
}


//using promises
const promise = new Promise<string> ((resolve,reject) =>{

	setTimeout(() =>{

		resolve('hello World');

	},1000)

});
promise.then((res) => console.log(res.split(' '))).catch(err => console.log(err));