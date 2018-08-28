export const reverseString=str=>{
   
   let result = '';

   for(let i=str.length; i>0; i--){
      
      result = result + str.charAt(i-1); 
      
   }

   return result;
};
