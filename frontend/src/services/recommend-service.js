import axios from "axios";

import { MY_URL } from '../constants'

const API_URL = MY_URL + "recommend/";

class RecommendService {

    getData(username = "tanish36") {
        return axios
            .get(API_URL, {
                params: {
                    username: username
                }
            })
            .then(response => {
                console.log(response);
                localStorage.setItem("Recommendation", JSON.stringify(response.data));
                return response.data;
            });
    }

    async noOfTries(problem_id, email) {
        const response = await axios.post(API_URL + "no_of_try", {
            email, problem_id
        });
        return response.data;
    }

    async loginStart(email, loginstarttime) {
        const response = await axios.post(API_URL + "login_start", {
            email, loginstarttime
        });
        return response.data;
    }

    async loginEnd(email, loginendtime) {
        const response = await axios.post(API_URL + "login_end", {
            email, loginendtime
        });
        return response.data;
    }

    async endProblem(problem_id, email, ftime) {
        const response = await axios.post(API_URL + "end_problem", {
            problem_id, email, ftime
        });
        return response.data;
    }

}

export default new RecommendService();