var file = require("fs");

    console.log("Write data into file");
    //Contents of 4 Files
    const writeDataFile = [
        'Hi Content of File 1',
        'Hello Content of File 2',
        'Hi Content of File 3',
        'Hello Content of File 4'];

    const callBack = function(err){
        if(err)
            return console.error(err);
        console.log("Successfully Written into file");
    };
    var fileName = "File";
    //Writing Data into 4 Files
    for(var i=0;i<4;i++){
        file.writeFile(fileName+i+".txt",writeDataFile[i],callBack);    
    }

    var finalString = [];   //Array of File Contents
    var j = 0;
    let callBackRead = function(err,data){
        if(err)
            return console.error(err);
            finalString.push(data.toString());    //Inserting Data
            console.log("Index: " + j +" : "+ finalString[j++]);
    };
    for(var i=0;i<4;i++)
        file.readFile(fileName+i+".txt",callBackRead);
    console.log("ready");