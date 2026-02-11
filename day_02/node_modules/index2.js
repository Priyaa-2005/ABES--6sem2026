import fs from 'fs/promises';


const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("File has been written successfully");
    } catch (error) {
        console.log("Some error occurred...");
    }
};


const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        console.log("File content:");
        console.log(data);
    } catch (error) {
        console.log("Some error occurred...");
    }
};


const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Some error occurred...");
    }
};

// example usage
await writeFile("test.txt", "Hello async world\n");
await appendFile("test.txt", "This line is appended\n");
await readFile("test.txt");