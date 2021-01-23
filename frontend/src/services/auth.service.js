import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/";

class AuthService {

    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data));
                return response.data;
            });
    }

    logout() {
        localStorage.clear();
    }

    register(firstname, lastname, email, password, isadmin = "False", rank = 500) {
        return axios.post(API_URL + "newuser", {
            firstname,
            lastname,
            email,
            password,
            isadmin,
            rank
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();