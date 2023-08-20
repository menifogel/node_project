import * as DAL from "../DAL/productsDAL.js"

export function getProducts(){
    return DAL.getProducts();
}
export function getProductsByID(id){
    return DAL.getProductsByID(id);
}