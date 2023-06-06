import axios from "axios";
import { showToast } from "@common/toasts/index";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        switch (error.message) {
            case "Network Error":
                showToast(
                    "error",
                    "Network Error",
                    "Something went wrong with our servers. Please try again soon."
                );
        }
        return Promise.reject(error);
    }
);

api.interceptors.request.use(async function (config) {
    if (config.data) {
        config.data = formatToSnakeCase(config.data);
    }
    return config;
});

function formatToSnakeCase(obj) {
    if (typeof obj !== "object") return obj;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const snake_key = key.replace(/([A-Z])/g, (g) => `_${g[0].toLowerCase()}`);
            if (snake_key !== key) {
                obj[snake_key] = obj[key];
                delete obj[key];
            }
            if (typeof obj[snake_key] === "object") {
                formatToSnakeCase(obj[snake_key]);
            }
        }
    }
    return obj;
}
