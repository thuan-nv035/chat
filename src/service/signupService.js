import { Axios } from "./Axios";

function signup(payload) {
    return Axios.post("/register", payload);
}
export const signupService = {
    signup
};