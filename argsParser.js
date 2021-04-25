module.exports = (specs) => {
  if (typeof specs !== 'object') throw new Error('Specs need to be of type object');
  const res = {};
  const args = process.argv.slice(2);

  for(command in specs){
    if(typeof specs[command] !== 'string' && typeof specs[command] !== 'object') throw new Error('Commands value should be either a string or an array object');
    if(typeof specs[command] === 'string') command = specs[command];
    const paramaters = specs[command]

    const commandObj = args.find(arg => arg === command);
    if(!commandObj) continue;

    const index = args.indexOf(commandObj);

    res[command] = [];

    paramaters.forEach((paramater, i) => {
      const value = args[index+i+1];
      if(typeof value === 'undefined' || value[0] == '-') return;
      if(typeof value !== paramater) throw new Error('Mismatching type');
      res[command].push(value);
    });
  }

  return res;
}
