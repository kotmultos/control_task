import {axiosService} from "./axios.service";

export const imageService = {
    getAll: () => axiosService.get('/images'),
    addNew: (elem) => axiosService.post('/images', elem)
}