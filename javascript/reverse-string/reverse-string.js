export const reverseString=str=>{
   
   var result = '';

   for(var i=str.length; i>0; i--){
      
      result = result + str.charAt(i-1); 
      
   }

   return result;
};
