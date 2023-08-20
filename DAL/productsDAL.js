const data = [
    {
    "id": 't',
    "title": "T-Shirt",
    "description": "A comfortable and stylish T-Shirt",
    "price": 20,
    "category": "Clothing",
    "image": "https://example.com/t-shirt.png",
    "quantity": 10,
    "rating": {
        "rate": 4.5,
        "count": 100
    }
    },
    {
    "id": 'j',
    "title": "Jeans",
    "description": "A pair of comfortable and stylish jeans",
    "price": 50,
    "category": "Clothing",
    "image": "https://example.com/jeans.png",
    "quantity": 5,
    "rating": {
        "rate": 4.0,
        "count": 50
    }
    },
    {
    "id": 'sh',
    "title": "Shoes",
    "description": "A pair of comfortable and stylish shoes",
    "price": 100,
    "category": "Clothing",
    "image": "https://example.com/shoes.png",
    "quantity": 2,
    "rating": {
        "rate": 5.0,
        "count": 20
    }
    }
]

export function getProducts(){
    return data;
}
export function getProductsByID(id){
    const usuId = data.filter((value) => id === value.id)[0];
    return usuId
}