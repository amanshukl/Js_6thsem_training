// import fs from "fs/promises";
// // console.log(fs);

//     const writeFile = (path,data) => {
//         fs.writeFile(path,data);
//         console.log("Data has been written succesfully...");
//     }
//     writeFile("./example.txt","This data has been written through Asynchronous function")


// import fs from "fs/promises";

// const writeFile = async (path, data) => {
//     try {
//         await fs.writeFile(path, data);
//         console.log("Data written successfully...");
//     } catch (err) {
//         console.error("Error writing file:", err.message);
//     }
// };

// const readFile = async (path) => {
//     try {
//         const data = await fs.readFile(path, "utf-8");
//         console.log("File content:", data);
//     } catch (err) {
//         console.error("Error reading file:", err.message);
//     }
// };

// const appendFile = async (path, data) => {
//     try {
//         await fs.appendFile(path, data);
//         console.log("Data appended successfully...");
//     } catch (err) {
//         console.error("Error appending file:", err.message);
//     }
// };

// // Example usage
// (async () => {
//     await writeFile("./example.txt", "This is the initial content.\n");
//     await readFile("./example.txt");
//     await appendFile("./example.txt", "This line was appended asynchronously.\n");
//     await readFile("./example.txt");
// })();


readAndWriteAsync.js

import fs from "fs/promises";
const writeFile = async(path,data) => {
    try {
        await fs.writeFile(path,data);
        console.log("Data has been written successfully");
    } catch (error) {
        console.log("Some error occured during write operation"); 
    }
}

const readFile = async(path) => {
    try {
        await fs.readFile(path);
        const data = await fs.readFile(path,"utf-8");
        console.log(data);
        
    } catch (error) {
        console.log("Some error occured ");
        
    }
}

const appendFile = async(path , data) => {
    try {
        await fs.appendFile(path,data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Some error occured while appending the data");
        
    }
}

writeFile("./example.txt","Hello everyone, ");
appendFile("./example.txt","I am studying Node.js right now");
readFile("./example.txt");