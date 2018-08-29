class Transcriptor {
  
  constructor(){
    this.transcription = {'G':'C','C':'G','T':'A','A':'U'};
  }
    
  transform(element){
    return this.transcription[element];
  }

  toRna(dnaStr){

    return dnaStr.split('').map(element => {

     if(this.transform(element)==null) 
       throw new Error('Invalid input DNA.');
     else
       return this.transform(element);  
    }).join('');
    
   }
};

export default Transcriptor;
