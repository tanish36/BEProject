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

    getrank(email) {
        //getrank

        return axios.get(API_URL + "getrank", {
            params: {
                email: email
            }
        })
    }

    update_rank(email, rank) {
        return axios.post(API_URL + "update_rank", {
            email, rank
        }).then(response => {
            return response.data;
        })
    }

    getHistory(email) {
        return axios.get(API_URL + "getHistory", {
            params: {
                user_id: email
            }
        }).then(response => {
            localStorage("History", JSON.stringify(response));
            return response.data;
        });
    }

    saveHistory(user_id, rank, timestamp) {
        return axios.post(API_URL + " saveHistory", {
            user_id, rank, timestamp
        }).then(response => {
            return response.data;
        })
    }

    getGraph(email) {
        return axios.get(API_URL + "getGraph", {
            params: {
                user_id: email
            }
        })
    }

    //ac , wa , tle
    saveGraph(user_id, status) {
        return axios.post(API_URL + "saveGraph", {
            user_id, status
        }).then(response => {
            return response.data;
        })
    }
}

export default new AuthService();