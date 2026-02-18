import{readFile,writeFile} from "../ day4/day4/readAndwriteFile.js";
const FILE = "../day4/day4/students.json";
const updateFileData =  async(id,data) => {
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
    
    const filteredData = students.map((student) => 
    student.id === id ? {...student, ...data }  : student);
        await writeFile(FILE, JSON.stringify(filteredData,null,2));

}
console.log(filteredData);
}
updateFileData(1,{first_name:"ABC", last_name:"XYZ"});