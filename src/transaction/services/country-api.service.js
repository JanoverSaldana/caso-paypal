import axios from "axios";

const http = axios.create({ baseURL: 'http://localhost:3000' });


export class TransactionService {

    constructor(_baseResource) {
        this.baseResource = _baseResource;
    }

    getAllResources() {
      return http.get(this.baseResource)
    }

    getResourceById(id){
        return http.get(`${this.baseResource}/${id}`);
    }

    updatedResource(id, resource) {
        return http.put(`${this.baseResource}/${id}`, resource);
    }

}