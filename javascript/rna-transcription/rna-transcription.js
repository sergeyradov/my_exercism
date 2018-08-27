class Transcriptor {
    
    constructor(){

       var matrix = [];
       matrix['G'] = 'C';
       matrix['C']='G';
       matrix['T']='A';
       matrix['A']='U';
       this.matrix = matrix;
    }

    toRna(dnaStr){

        var rnaStr='';
        
        for(var i=0; i < dnaStr.length; i++){

            if(dnaStr.charAt(i) !== null && this.matrix[dnaStr.charAt(i)]!==undefined){

                rnaStr=rnaStr + this.matrix[dnaStr.charAt(i)];
            }
            else{
                throw new Error('Invalid input DNA.');
            }
        }
        return rnaStr;
    }
};

export default Transcriptor;
