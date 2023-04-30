import axios from "axios";

/*
// Rodar com IPV4, comando para utilizar em um terminal secundário:
    json-server --watch -d {Dellay de resposta} 180 --host {IPV4} 192.168.0.13 db.json
*/

const api = axios.create({
  baseURL: "http://192.168.0.106:3000/",
});

export default api;
