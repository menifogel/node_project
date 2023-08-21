import * as BL from "../BL/productsBL.js"
 
export async function getProducts(req, res){
    const data = await BL.getProducts()
    res.send(data);
} 
export function getProductByID (req, res) {
    const id = req.params.id
    const foo = BL.getProductByID(id)
    res.send(foo)
}
export function addnewProduct (req, res) {
    const body = req.body;
    BL.newProduct(body)
    res.send({
        message: 'Product added successfully'
      });
}