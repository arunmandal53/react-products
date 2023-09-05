import localforage from "localforage";

export async function getAllProducts(){
    try {
        const value = await localforage.getItem('products');
        if(!value){
            return []
        }
        return value;
    } catch (err) {
        console.log(err);
    }
}

export async function setAllProducts(data){
    try {
        const value = await localforage.setItem('products', data);
        return value;
    } catch (err) {
        console.log(err);
    }
}