import axios from "axios";

const API_URL = "http://127.0.0.1:8000/recommend/login";

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

}

export default new RecommendService();