let calculator = {
    read() {
        this.a = +prompt("Enter any number",'');
        this.b = +prompt("Enter any number",'');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );