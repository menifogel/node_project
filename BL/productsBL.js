import * as DAL from "../DAL/productsDAL.js"

export function getProducts(){
    return DAL.getProducts();
}
export function getProductByID(id){
    return DAL.getProductByID(id);
}
export function newProduct(body){
    return DAL.newProduct(body)
}