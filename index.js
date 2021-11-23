//first task



function someFn(str){
 const myStr =  str.split()
for(var i = 0; i < myStr.length; i++) {
 const input = myStr[i];
 const lower = input.toLowerCase();
 const firstLetter = lower.slice(0,1);
 const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
 const result = capitalized;
 return console.log(result)
}
}
someFn('лоНдОН')
someFn('мИнСк')


// second task

const sayHello = (name) => name === 'Марк' ? console.log(`Hi, ${name}`) : console.log(`Hello, ${name}`) ;

sayHello('Дима')
sayHello('Марк')
sayHello('Алина')


//third task


const arr = ['l love js', 'some very long string','hell','log','ponasdj','asdasd','ss','a']
const result = []
 //const newarr = arr.splice(',').map(e => e.trim());
//console.log(newarr)
function filterString (arr,maxLenght) {
for( i = 0; i < arr.length; i++) {
 const newArr = arr[i]
 if(newArr.length <= maxLenght) {
     result.push(newArr)
      {
         newArr.split(0,maxLenght)
     }
 }

}
console.log(result)
}
filterString(arr,3)






