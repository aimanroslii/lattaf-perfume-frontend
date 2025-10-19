"use server"
import { apiClient } from "./apiClient"

interface iProduct {
    id : string;
    name : string;
    description : string;
    images : string[];
    price : number;
}

const BASE_URL = "http://localhost:8080/api/product";


export async function getAllProducts(token: string) : Promise<iProduct[]> {
  return apiClient(`${BASE_URL}`, { method: "GET" }, token);
}

export async function getFeaturedProducts(token: string) : Promise<iProduct[]> {
  return apiClient(`${BASE_URL}/featured`, { method: "GET" }, token);
}

export async function getProductsByCategory(category: string, token: string) : Promise<iProduct[]> {
  return apiClient(`${BASE_URL}/category/${category}`, { method: "GET" }, token);
}

export async function getProductsById(id: string, token: string) : Promise<iProduct> {
  return apiClient(`${BASE_URL}/${id}`, { method: "GET" }, token);
}