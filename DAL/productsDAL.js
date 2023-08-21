import jsonfile from 'jsonfile'
const filePath = 'data.json'; 

async function readJsonFile() {
  
    try {
      const data = await jsonfile.readFile(filePath);
        return data
    } catch (err) {
      console.error('Error reading JSON file:', err);
    }
  }

export function getProducts(){
    return readJsonFile();
}
export  function getProductByID(id){
    const usuId = dat.filter((value) => id === value.id)[0];
    return usuId;
}
export function newProduct(body) {
    dat.push(body);
    return dat;
}