class Mobile {
    private brand : string;
    private color : string;
    private price : number;

    constructor(brand : string, color : string, price : number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    // getter - setter
    public getBrand():string{
        return this.brand;
    }
    public setBrand(brand : string):void{
        this.brand = brand;
    }
    public getColor():string{
        return this.color;
    }
    public setColor(color : string):void{
        this.color = color;
    }
    public getPrice():number{
        return this.price;
    }
    public setPrice(price : number):void{
        this.price = price;
    }

}
let mobile = new Mobile('Apple', 'Silver', 35000);
console.log(mobile);
console.log(mobile.getBrand());
mobile.setBrand('Lenovo');
console.log(mobile.getBrand());
console.log(mobile);
console.log(mobile.getColor());
mobile.setColor('black');
console.log(mobile);
mobile.setPrice(45000);
console.log(mobile);
