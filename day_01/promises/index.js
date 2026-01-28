const myPromise = new Promise((resolve,reject)=>{
    let age=5;
    if(age>18){
        resolve("eligible for vote");
    }else{
        reject("not eligible for vote");
    }
})