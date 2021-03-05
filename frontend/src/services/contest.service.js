import axios from "axios";

const API_URL = "http://127.0.0.1:8000/contest/";

class ContestService {


    async isRegistered(cid, email) {
        const response = await axios.get(API_URL + "isregister", {
            params: {
                contestid: cid,
                email: email
            }
        });
        return response.data;
    }

    async getcproblem(cp_id) {
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

    //get all contest
    async getcontest() {
        return axios
            .get(API_URL + "getallcontest")
            .then(response => {
                console.log(response);
                localStorage.setItem("Contests", JSON.stringify(response.data));
                return response.data;
            });
    }


    //get all problem 

    async getproblems() {
        return axios
            .get("http://127.0.0.1:8000/problems/getproblems")
            .then(response => {
                //console.log(response);
                localStorage.setItem("Problems", JSON.stringify(response.data));
                return response.data;
            });
    }


    // TO-DO
    async registeruser(email, contestid) {
        return axios.post(API_URL + "registerusercontest", {
            email, contestid
        })
            .then(response => {
                console.log(response);
                return response.data;
            });

    }

    async addcontest(duration, title, timestamp) {
        return axios
            .post(API_URL + "addcontest", {
                duration, title, timestamp
            })
            .then(response => {
                // localStorage.setItem("AddedContest", JSON.stringify(response.data));
                console.log(response);
                return response.data;
            });

    }

    async addproblem(problem_name, problem_statement, problem_tags, problem_io, problem_con, problem_test) {
        return axios
            .post("http://127.0.0.1:8000/problems/addproblem", {
                problem_name, problem_statement, problem_tags, problem_io, problem_con, problem_test
            })
            .then(response => {
                //console.log(response);
                return response.data;
            });

    }

    async addprobleminContest(contestid, problemid) {
        return axios.post(API_URL + "contestproblem", {
            contestid, problemid
        }).then(response => {
            // localStorage.setItem("AddedContest", JSON.stringify(response.data));
            console.log(response);
            return response.data;
        });
    }

}

export default new ContestService();