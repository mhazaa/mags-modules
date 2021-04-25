const childProcess = require('child_process');
const exec = childProcess.exec;
const execFile = childProcess.execFile;

module.exports.runShellAsync = async (cmd, options = {}) => {
  return new Promise( (resolve, reject) => {
    exec(cmd, options, (error) => {
      if(error) reject(error);
      resolve();
    });
  });
}

module.exports.runShellFileAsync = async (file, options = {}) => {
  return new Promise( (resolve, reject) => {
    execFile(file, options, (error) => {
      if(error) reject(error);
      resolve();
    });
  });
}
