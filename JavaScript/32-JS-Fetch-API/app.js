/**
 * Fetch Api
 * JSON placeholder
 * https://jsonplaceholder.typicode.com/
 */

// const serverUrl = "https://jsonplaceholder.typicode.com";
// const getAllUsersFromServer = () => {
//     const dataUrl = `${serverUrl}/users`;
//     fetch(dataUrl).then(response => response.json()).then(json => console.log(json));
// };
// getAllUsersFromServer();


const serverUrl = "https://jsonplaceholder.typicode.com";
const getAllUsersFromServer = () => {
    return new Promise( (resolve, reject) => {
        const dataUrl = `${serverUrl}/users`;
        fetch(dataUrl).then(response => response.json()).then((json) => {
            if(json){
                resolve(json);
            }
            else{
                reject("error from server");
            }
        });
    })
};

getAllUsersFromServer().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});