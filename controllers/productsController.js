import { log } from "console";
import * as BL from "../BL/productsBL.js"
 
export function getProducts(req, res){
    res.send(BL.getProducts());
} 
export function getProductsByID (req, res) {
    const id = req.params.id
    const foo = BL.getProductsByID(id)
    res.send(foo)
}
// // export function newProduct (req, res) {
// //     const product = req.body;
// //     db.push(product)

//     res.send({
//         message: 'Product added successfully'
//       });
// }