const fs = require('fs');
const path = require('path');

const spritesDirectory = path.join(__dirname, '../public/sprites');

const fileExtensions = ['png', 'gif'];


//walks along sprites directory to generate a class for every spritesheet
function readFolder(directory){
  fs.readdir(directory, (err, files) => {
    if(err){
      console.error(err);
      return;
    }
    files.forEach(file => {
      const fullFilePath = directory + '/' + file;
      fs.stat(fullFilePath, (err2, stats) => {
        if (err2) {
          console.error(err);
          return;
        }
      
        if(stats.isDirectory()){
          readFolder(fullFilePath)
        } else {
          const fileSplit = file.split('.');
          const fileRoot = fileSplit[0];
          const filePath = fullFilePath.split('/')
          while(filePath[0] !== 'public'){
            filePath.shift();
          }
          filePath.shift();
          
          if(fileExtensions.includes(fileSplit[1])){
            console.log(`.${fileRoot} {background: url(/${filePath.join('/')})}`)
          }
        }
      });
    })
  })
}
readFolder(spritesDirectory)