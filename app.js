const { exec } = require('child_process');
const fs = require('fs');


// <== CPP FILES TO OBJECT ==> 
async function cppToObject () {
    return new Promise((resolve, reject) => {
        exec('g++ -o build/example.o -c build/example.cpp', (err, stdout, stderr) => {
        if (err) {
            reject(err);
  }
  resolve('OBJECT BUILDING: [OK]'); 
        });    
    })
}; 


// <== OBJECT FILES TO EXECUTABLE ==> 
async function objectToExecutable () {
    return new Promise((resolve, reject) => {
       exec('g++ -o build/foo build/example.o', (err, stdout, stderr) => {
        if (err) {
            reject('[DEUX ERROR]: ERROR WITH OBJECT TO EXE MODULE.');
  }
  resolve('EXECUTABLE BUILDING: [OK]');
       });
    });   
}; 


// <== DELETE OBJECT FILES FROM SYSTEM ==> 
async function deleteObjectFiles () {
    return new Promise((resolve, reject) => {
        fs.unlink('build/example.o', (err) => {
  if (err) {
      reject('[DEUX ERROR]: ERROR DELETING OBJECT FILES.'); 
  }
  resolve('CLEANUP: [OK]');
        });
    });  
}; 


// <== DELETE EXECUTABLE FILES FROM SYSTEM ==> 
async function deleteExeFiles () {
    return new Promise((resolve, reject) => {
        fs.unlink('build/foo', (err) => {
  if (err) {
      reject('[DEUX ERROR]: ERROR DELETING EXECUTABLE FILES.'); 
  }
  resolve('CLEANUP: [OK]');
        });
    });  
}; 


// <== EXECUTE COMPILED EXECUTABLE ==> 
async function finalBuildExecution () {
    return new Promise((resolve, reject) => {
        exec('./build/foo', (err, stdout, stderr) => {
        if (err) {
            reject('[DEUX ERROR]: ERROR WITH FINAL BUILD EXECUTION.');
  }
  resolve(stdout); 
        });     
    })
}; 


(async () => {
   try {
//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});
       
       let cppStatus = await cppToObject(); 
        console.log(cppStatus);
       
       
       let objectToExeStatus = await objectToExecutable();
        console.log(objectToExeStatus);

       console.log('<=== COMPILED C++ EXECUTABLE START ===>');
       
       let finalData = await finalBuildExecution();
        console.log(finalData);
       
       let cleanObjectStatus = await deleteObjectFiles();
        
       
       let cleanExeStatus = await deleteExeFiles();
       
       
       if (cleanObjectStatus !== 'CLEANUP: [OK]' && cleanExeStatus !== 'CLEANUP: [OK]'){
           throw 'COULD NOT DELETE GARBAGE FILES.';
       };
       
       console.log('<=== COMPILED C++ EXECUTABLE END ===>');
   } catch (error){
       console.error(error);
   }
})(); 