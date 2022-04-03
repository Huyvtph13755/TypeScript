
import { CategoryType } from '../types/category';
import instance from './instance';

export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const addCate = (product:CategoryType) => {
    const url = `/category`;
    return instance.post(url, product);
}
export const removeCate = (_id: string) => {
    const url = `/category/${_id}`;
    return instance.delete(url);
}