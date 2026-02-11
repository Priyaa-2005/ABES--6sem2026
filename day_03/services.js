import fs from "fs";
const filestatus = (path) =>{
    try{
    const stats = fs.stat(path);
    console.log(stats);
    }catch(error){
console.log("some error");
    }
    
}
filestatus("./day-02/");