import axios from "axios";

/*
// Rodar com IPV4, comando para utilizar em um terminal secundário:
    json-server --watch -d {Dellay de resposta} 180 --host {IPV4} 192.168.0.10 db.json
*/

const api = axios.create({
  baseURL: "http://192.168.0.17:3000/",
});

export default api;
