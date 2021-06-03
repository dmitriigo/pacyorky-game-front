import axios from "axios"

export default {

    async getRooms() {
        try {
            let response = await axios.get("api/rooms/get");
            return response;
        }
        catch (error) { }
    },

    async getGamesById(id) {
        try {
            let response = await axios.get("api/rooms/get/" + id);
            return response;
        }
        catch (error) { }
    },

    async createRoom(roomObj) {
        try {
            let response = await axios.post("api/rooms/add", roomObj)
            return response;
        }
        catch (error) {
            console.log(error)
        }
    }
}