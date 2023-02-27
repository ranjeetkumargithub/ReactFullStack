// callback functions

/**
 * make coffee
 * 1. Get milk from shop
 * 2. boil the milk
 * 3. add suger & coffee
 */

const getMilkFromShop = (boilMilk, addSugerCoffee) => {
    setTimeout( () => {
        console.log("1. Get milk from shop");
        boilMilk(addSugerCoffee);
    }, 2000);
};

const boilMilk = (addSugerCoffee) => {
    setTimeout( () => {
        console.log("2. boil the milk");
        addSugerCoffee();
    }, 1000);
};

const addSugerCoffee = () => {
    setTimeout( () => {
        console.log("3. add suger & coffee");
    }, 3000);
};

const makeCoffee = () => {
    getMilkFromShop(boilMilk, addSugerCoffee);
};
makeCoffee();