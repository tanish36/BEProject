import axios from "axios";

const API_URL = "http://127.0.0.1:8000/topic/";

class ContentService {

    getcontent() {
        return axios
            .get(API_URL + "getcontent")
            .then(response => {
                //console.log(response);
                localStorage.setItem("Content", JSON.stringify(response.data));
                return response.data;
            });
    }

    getcontentid(topic_id) {
        return axios
            .get(API_URL + "getcontentid", {
                params: {
                    topic_id: topic_id
                }
            })
            .then(response => {
                console.log(response);
                localStorage.setItem(topic_id, JSON.stringify(response.data));
                return response.data;
            });
    }


    addcontent(topic_module, topic_name, topic_vlink, topic_content) {
        return axios
            .post(API_URL + "addcontent", {
                topic_module, topic_name, topic_vlink, topic_content
            })
            .then(response => {
                //console.log(response);
                return response.data;
            });
    }


}

export default new ContentService();