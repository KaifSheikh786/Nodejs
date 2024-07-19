const fs = require("fs");

// fs.writeFile("./Hello.txt", " Hello Kaif", {flag: "a"}, (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done");
//     }
// })

// fs.writeFile("./writefile.txt", "Data is written", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("created");
//     }
// })

// fs.readFile("./Hello.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.unlink("./writefile.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Deleted");
//     }
// })

fs.rename("./Hello.txt", "./kaif.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done");
    }
})