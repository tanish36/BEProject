import axios from "axios";

import { MY_URL } from '../constants'

const API_URL = MY_URL + "auth/"


class AuthService {

    async login(email, password) {
        const response = await axios
            .post(API_URL + "login", {
                email,
                password
            });
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
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

    async getrank(email) {
        //getrank

        const response = await axios.get(API_URL + "getrank", {
            params: {
                email: email
            }
        });
        return response.data;
    }

    async update_rank(email, rank) {
        const response = await axios.post(API_URL + "update_rank", {
            email, rank
        });
        return response.data;
    }

    async getHistory(email) {
        const response = await axios.get(API_URL + "getHistory", {
            params: {
                user_id: email
            }
        });

        localStorage.setItem("History", JSON.stringify(response.data));

        return response.data;
    }

    async saveHistory(user_id, rank, timestamp) {
        const response = await axios.post(API_URL + " saveHistory", {
            user_id, rank, timestamp
        });
        return response.data;
    }

    async getGraph(email) {
        const response = await axios.get(API_URL + "getGraph", {
            params: {
                user_id: email
            }
        });
        return response.data;
    }

    //ac , wa , tle
    async saveGraph(email, status) {
        const response = await axios.post(API_URL + "saveGraph", {
            email, status
        });
        return response.data;
    }
}

export default new AuthService();