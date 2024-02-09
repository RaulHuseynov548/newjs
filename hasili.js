var numbers = [2, 3, 5, 7];

 
function hasili (numbers){
   var newarr = 1;
   for (var i=0;i < numbers.length; i++){
       newarr = newarr * numbers[i]
       

       
   }
   return newarr
   
}
console.log(hasili(numbers))