import axios from "axios";

export const api = axios.create({
	baseURL: "https://backend-rocket-notes.onrender.com"
});