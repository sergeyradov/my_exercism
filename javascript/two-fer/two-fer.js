export const twoFer = (name) => {

   var str = "One for X, one for me.";

   return (name=='' ? str.replace('X','you') : str.replace('X',name));     
    
};
