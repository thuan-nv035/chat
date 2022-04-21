import { Axios } from "./Axios";

function Login(payload) {
    return Axios.post('user/login',payload);
}

export const loginService = {
    Login,
};