import fs from "fs";
// write file sync blocking 

const writeFileSync = () => {
    try {
        fs.writeFileSync(
            "./example.txt",
            "This data is written with the help of 'writeFileSync.'"
        );
        console.log("Successfully written");
    } catch (error) {
        console.log("Some error occurred");
        console.error(error);
    }
};

// writeFileSync(); 



const readFileSync = ()=>{
    try{
        fs.readFileSync("./example.txt","utf-8");
        console.log(data);

    }catch(error){
        console.log("unable to read file.");

    }
}
// readFileSync();

const appendFileSync = () =>{
    try{
        fs.appendFileSync("./exmaple.txt");
        console.log("data has been appended successfully...");
    }catch(error){
        console.log("some error occured while append the file");

    }
}
// appendFileSync("This is the append data through 'appendFileSync()");