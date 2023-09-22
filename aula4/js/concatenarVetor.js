var num = [1,10,20,40,50];
var numeros;

numeros = num.join();
console.log(numeros);

var num2 = [100,200,300];
var num3 = num.concat(num2);

for (let i = 0; i < num3.length; i++) {
   console.log(num3[i]); 
}



