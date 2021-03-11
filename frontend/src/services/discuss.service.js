import axios from "axios";

import { MY_URL } from '../../constants'

const API_URL = MY_URL + "discuss/";

class DiscussService {

    getDiscussionTopics() {
        return axios
            .get(API_URL + "getDiscussionTopics")
            .then(response => {
                //console.log(response);
                localStorage.setItem("Discuss", JSON.stringify(response.data));
                return response.data;
            });
    }

    getDiscussion(discId) {
        return axios
            .get(API_URL + "getDiscussion", {
                params: {
                    id: discId
                }
            })
            .then(response => {
                console.log(response);
                localStorage.setItem(discId, JSON.stringify(response.data));
                return response.data;
            });
    }

    getDiscussionResponses(discId) {

        return axios
            .get(API_URL + "getDiscussionResponses", {
                params: {
                    id: discId
                }
            })
            .then(response => {
                console.log(response);
                return response.data;
            });
    }

    addDiscussion(email, title, content) {

        return axios
            .post(API_URL + "addDiscussion", {
                email,
                title,
                content
            })
            .then(response => {
                console.log(response);
                return response.data;
            });
    }

    addDiscussionResponse(discussionId, email, content) {
        return axios
            .post(API_URL + "addDiscussionResponse", {
                discussionId, email, content
            })
            .then(response => {
                console.log(response);
                return response.data;
            });
    }


}

export default new DiscussService();