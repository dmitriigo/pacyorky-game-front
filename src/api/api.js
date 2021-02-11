import axios from "axios"

export default {

    async getGamesById(id) {
        try {
            let response = await axios.get("api/rooms/get/" + id);
            return response;
        } catch (error) {
        }
    }
}
