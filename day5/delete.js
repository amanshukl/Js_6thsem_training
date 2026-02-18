import{readFile,writeFile} from "../ day4/day4/readAndwriteFile.js";
const FILE = "../day4/day4/students.json";
const updateFileData =  async(id) => {
    const students = await readFile(FILE);
    console.log( typeof students);
    if(!students){
        console.log("user is not existing");
        return ;
    }
    const user = students.filter((student) => student.id = id);
    if(user.length === 0){
        console.log("user is not existing");
        return ;
    }else{
        console.log("user is existing");
    
    const filteredData = students.filter((student) => student.id !== id);
        await writeFile(FILE, JSON.stringify(filteredData,null,2));

}
console.log(filteredData);
}
deleteFileData(1);