//removes spaces from all leaves in a directory, not modifying subdirectory names
const fs = require('fs');
const path = require('path');

const spritesDirectory = path.join(__dirname, '../public/sprites');

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
          if(file.includes(' ')){
            const fileNoSpaces = directory + '/' + file.replace(' ', '_');
            fs.renameSync(fullFilePath, fileNoSpaces);
          }
        }
      });
    })
  })
}
readFolder(spritesDirectory);