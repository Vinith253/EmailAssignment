import axios from "axios";

export default function request(httpOptions) {
  httpOptions.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...httpOptions.headers,
  };

  return axios(httpOptions)
    .then((response) => response)
    .catch((error) => {
      throw error.response;
    });
}
