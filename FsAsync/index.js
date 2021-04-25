const fs = require('fs');

module.exports = class FsAsync {
  static async readFile(file){
    return new Promise( (resolve, reject) => {
      fs.readFile(file, (error, data) => {
        if(error) reject(error);
        resolve(data);
      });
    });
  }

  static async writeFile(file, data){
    return new Promise( (resolve, reject) => {
      fs.writeFile(file, data, (error) => {
        if(error) reject(error);
        resolve(data);
      });
    });
  }
}
