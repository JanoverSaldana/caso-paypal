import axios from "axios";

const http = axios.create({ baseURL: 'http://localhost:3000' });


export class TransactionService {

    constructor(_baseResource) {
        this.baseResource = _baseResource;
    }

    getAllResources() {
      return http.get(this.baseResource)
    }
}