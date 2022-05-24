import {axiosService} from "./axios.service";

export const imageService = {
    getAll: () => axiosService.get('/images')
}