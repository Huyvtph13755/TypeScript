import { ProductType } from '../types/product';
import instance from './instance';
const a = JSON.parse(localStorage.getItem('user') as string);
export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const add = (product: ProductType) => {
    const url = `/products/${a.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${a.token}`
        }
    });
}
export const newList = () => {
    const url = '/newproduct';
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}
export const read = (id: string) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const remove = (_id: string) => {
    const url = `/products/${_id}`;
    return instance.delete(url);
}