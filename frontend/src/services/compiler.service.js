import axios from "axios";

const API_URL = "https://judge0-extra.p.rapidapi.com/submissions";

class CompilerService {

    async run_code(language_id, source_code, stdin = "", expected_output = "5\n") {
        return axios.post(API_URL, {
            source_code,
            stdin,
            language_id,
            expected_output
        }, {

            headers: {
                "content-type": "application/json",
                "x-rapidapi-key": "25b83d73fdmshd6e3b06f9a2a67bp1bde7fjsnf4d0e16aa761",
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com"
            }
        }).then(response => {
            return response.data
        });
    }

    getSolution(token) {

        return axios.get(API_URL + "/" + token,
            {
                params: {
                    base64_encoded: 'true',
                    fields: '*'
                },
                headers: {
                    "content-type": "application/json",
                    "x-rapidapi-key": "25b83d73fdmshd6e3b06f9a2a67bp1bde7fjsnf4d0e16aa761",
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com"
                }
            }
        ).then(response => {
            return response.data
        })
    }


}

export default new CompilerService();