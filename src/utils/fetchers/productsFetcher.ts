import axios, { AxiosError, AxiosResponse } from "axios";
import { Product } from "../../types/product";

export const productsFetcher = (url: string): Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    axios
      .get(url)
      .then((res: AxiosResponse) => {
        resolve(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        reject(error);
      });
  });
};