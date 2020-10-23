module.exports = function check(str, bracketsConfig) {
   let arayas = new Array();
  let karta = {};

  for(const inner of bracketsConfig) {
    karta[inner[1]] = inner[0];
  }

  let otkr = Object.values(karta);
  let tead = Object.keys(karta);

  for (let i = 0; i < str.length; i++) {
    if(tead.includes(str[i]) && otkr.includes(str[i])) {
      if(arayas.includes(str[i])) {
        if(arayas[arayas.length-1] !== str[i]) return false;
        else arayas.pop();
      } else {
        arayas.push(str[i]);
      }
    } else if(otkr.includes(str[i])) { 
      arayas.push(str[i]);
    } else if(tead.includes(str[i])) {
        if(arayas.length === 0) return false;
        if(arayas.pop() !== karta[str[i]]) {
          return false;
        }
    }
  }

  if(arayas.length === 0) return true;
  return false;
}
