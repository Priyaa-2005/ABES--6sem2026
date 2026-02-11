import {readFile} from "readWriteFile.js";
console.log(readFile("./readFile"));
const fileData = async(path)=>{
    try{
        const data= await readFile(path);
        console.log(data);

    }catch(error){
        console.log("service is not working...");

    }
}
fileData("./students.json");