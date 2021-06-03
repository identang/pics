import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
        headers :{
            Authorization:
                "Client-ID yG-BHLr8h63yI2RRZXFoW4fVZ09KkBgZb7F_FuI50Rs"
        }
    });