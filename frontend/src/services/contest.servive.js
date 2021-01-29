import axios from "axios";

const API_URL = "http://127.0.0.1:8000/contest/";

class ContestService {

    getcproblem(cp_id) {
        return axios
            .get(API_URL + "getcproblem", {
                params: {
                    id: cp_id
                }
            })
            .then(response => {
                console.log(response);
                localStorage.setItem(cp_id, JSON.stringify(response.data));
                return response.data;
            });
    }

    // TO-DO
    registeruser() {

    }

    addcontest(contest_duration,contest_title,contest_timestamp) {
        return axios
        .post(API_URL + "addcontest", {
            contest_duration,contest_title,contest_timestamp
        })
        .then(response => {
            console.log(response);
            return response.data;
        });

    }

    addprobleminContest() {

    }

}

export default new ContestService();