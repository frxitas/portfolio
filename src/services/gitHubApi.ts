import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  },
});
