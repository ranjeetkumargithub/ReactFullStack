/**
 * make coffee
 * 1. Get milk from shop
 * 2. boil the milk
 * 3. add sugar & coffee
 */
const getMilkFromShop = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let isDone = true;
        if(isDone){
            resolve("1. Get milk from shop");
        }
        else{
            reject("FAILED-1");
        }
    }, 1000);
});
const boilMilk = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let isDone = true;
        if(isDone){
            resolve("2. boil the milk");
        }
        else{
            reject("FAILED-2");
        }
    }, 2000);
});
const addSugerCoffee = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let isDone = true;
        if(isDone){
            resolve("3. add sugar & coffee");
        }
        else{
            reject("FAILED-2");
        }
    }, 3000);
});

const makeCoffee = async () => {
    try {
        let result = await getMilkFromShop;
        console.log(result);
        result = await boilMilk;
        console.log(result);
        result = await addSugerCoffee;
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
};
makeCoffee();
