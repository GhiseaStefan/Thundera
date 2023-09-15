import SERVER from '../config';
import axios from 'axios';

class Product {
    static async fetchProducts(sortMethod = null, parent_subcategory = null, page = null, pageSize = null) {
        try {
            let url = `${SERVER}/product`;

            const queryParams = [];

            if (sortMethod) {
                queryParams.push(`sortMethod=${sortMethod}`);
            }

            if (parent_subcategory) {
                queryParams.push(`parent_subcategory=${parent_subcategory}`);
            }

            if (page) {
                queryParams.push(`page=${page}`);
            }

            if (pageSize) {
                queryParams.push(`pageSize=${pageSize}`);
            }

            if (queryParams.length > 0) {
                url += `?${queryParams.join('&')}`;
            }

            const response = await axios.get(url);

            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            throw err;
        }
    }

    static async getNumberOfImages(productId) {
        try {
            const response = await axios.get(`${SERVER}/product/image?productId=${productId}`);

            return response;
        } catch (err) {
            throw err;
        }
    }
}

export default Product;