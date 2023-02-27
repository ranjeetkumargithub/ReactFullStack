class BasicCalc {
    public result : number;

    constructor() {
        this.result = 0;
    }

    public add(a:number, b:number):void{
        this.result = a + b;
        console.log(this.result);
    }

    public sub(a:number, b:number):void{
        this.result = a - b;
        console.log(this.result);
    }
}

class AdvCalc extends BasicCalc{
    constructor(){
        super();
    }

    // method overriding
    public add(a:number, b:number):void{
        this.result = a + b + b + a;
        console.log(this.result);
    }

    public mul(a:number, b:number):void{
        this.result = a * b;
        console.log(this.result);
    }

    public div(a:number, b:number):void{
        this.result = a / b;
        console.log(this.result);
    }
}
let advCalc = new AdvCalc();
advCalc.add(10, 20);
advCalc.sub(10, 20);
advCalc.mul(10, 20);
advCalc.div(10, 20);