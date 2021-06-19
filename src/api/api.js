import axios from "axios"

export default {

    async getRooms() {
        try {
            return await axios.get("api/rooms/get");
        }
        catch (error) { }
    },

    async getGamesById(id) {
        try {
            return await axios.get("api/rooms/get/" + id);
        }
        catch (error) { }
    },

    async createRoom(roomObj) {
        try {
            return await axios.post("api/rooms/add", roomObj);
        }
        catch (error) {
            if (error.response) {
                console.log("error response")
                console.log(error.response.data)
            } else {
                console.log("error")
                console.log(error)
            }
        }
    }
}
