import axios from "axios";

const API_URL = "http://127.0.0.1:8000/contest/";

class ContestService {
// "getallcontest"
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

    //get all problem 

    getproblems() {
        return axios
            .get("http://127.0.0.1:8000/problems/getproblems")
            .then(response => {
                //console.log(response);
                localStorage.setItem("Problems", JSON.stringify(response.data));
                return response.data;
            });
        }


    // TO-DO
    registeruser() {

    }

    addcontest(duration,title,timestamp) {
        return axios
        .post(API_URL + "addcontest", {
            duration,title,timestamp
        })
        .then(response => {
            console.log(response);
            return response.data;
        });

    }

    addproblem(problem_name,problem_statement,problem_tags ,problem_io, problem_con,problem_test) {
        return axios
        .post("http://127.0.0.1:8000/problems/addproblem", {
           problem_name,problem_statement,problem_tags ,problem_io, problem_con,problem_test
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