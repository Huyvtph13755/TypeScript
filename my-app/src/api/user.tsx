import { UserType } from '../types/user';
import instance from './instance';
export const registerUser = (user: UserType) => {
    const url = '/users';
    return instance.post(url, user);
}

export const signinUser = (user: UserType) => {
    const url = '/users';
    return instance.post(url, user);
}