import fs from 'fs';



const writeFile = (path, data) => {
    fs.writeFileSync(path, data);
    console.log("File written successfully");
};


const readFile = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    console.log("File content:");
    console.log(data);
};

// APPEND (add data at end)
const appendFile = (path, data) => {
    fs.appendFileSync(path, data);
    console.log("Data appended successfully");
};

// example usage
writeFile("test.txt", "Hello World\n");
appendFile("test.txt", "This is appended text\n");
readFile("test.txt");

