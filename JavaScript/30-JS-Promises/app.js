/**
 * promises using callback concept
 */

// const doTask = (success, failure) => {
//     // doing the task
//     let isFinished = true;
//     if(isFinished){
//         success("Task is done");
//     }
//     else{
//         failure("Task is not done");
//     }
// };

// const success = (message) => {
//     console.log(message);
// };

// const failure = (erroe) => {
//     console.log(erroe);
// };

// doTask(success, failure);



/**
 * javascript promises
 */
const getDataFromServer = new Promise( (resolve, reject) => {
    // fetching data from server through network
    let theData = {name : "Rajan"};
    if(theData){
        resolve(theData);
    }
    else{
        reject("Data not found");
    }
});
getDataFromServer.then( (result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
});


const getDataFromServerFn = () => {
    return new Promise( (resolve, reject) => {
        // fetching data from server through network
        let theData = {name : "John"};
        if(theData){
            resolve(theData);
        }
        else{
            reject("Data not found");
        }
    });
};
getDataFromServerFn().then( (result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
});



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

const makeCoffee = () => {
    getMilkFromShop.then( (result) => {
        console.log(result);
        boilMilk.then( (result) => {
            console.log(result);
            addSugerCoffee.then( (result) => {
                console.log(result);
            }).catch( (error) => {
                console.error(error);
            })
        }).catch( (error) => {
            console.error(error);                
        })
    }).catch( (error) => {
        console.error(error);                
    })
};
makeCoffee();