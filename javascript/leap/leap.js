class Year {

  constructor(year){
	this.year=year;	
  }

  modulo(x){
     return this.year % x == 0;
  }

  isLeap() {
     return (this.modulo(4)  && (!this.modulo(100) || this.modulo (400) ) );    
  }

}

export default Year;
