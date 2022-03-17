import instance from './instance';

export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const newList = () => {
    const url = 'products?_sort=id&_order=DESC&_limit=4';
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}