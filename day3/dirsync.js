import fs from "fs";
const makeDirSync = (path) =>{
    try{
        fs.mkdlrSync(path);
        console.log("DIrectory has been created successfully.");
    }
    catch{
        console.log("Unable to create dir");
    }
}
makeDirSync("../day3");