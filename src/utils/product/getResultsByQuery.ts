import axios from 'axios'
import { AutocompleteItem } from 'types/product';

export const getResultsByQuery = async (query: string): Promise<AutocompleteItem[] | []> => {

    const cleanedQuery = query
        .trim()
        .split(" ")
        .filter((el) => el !== "");
    let reg = "";
    if (cleanedQuery.length > 1) {
        reg = cleanedQuery.join("|");
        reg = "(" + reg + ")";
    } else {
        reg = cleanedQuery.join("");
    }

    if(!cleanedQuery.length) return []

    const searchReg = new RegExp(reg, "i");

    return axios.get('https://fakestoreapi.com/products').then(
        ({ data }) => {
            const filteredData = data.filter((product: AutocompleteItem) => product.title.match(searchReg))
            return filteredData
        }
    ).catch(error => console.log(error))

}