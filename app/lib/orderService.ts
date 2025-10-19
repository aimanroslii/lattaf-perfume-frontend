"use server"
import { apiClient } from "./apiClient"

const BASE_URL = "http://localhost:8081/api/order";


export async function submitOrder(order : any, token: string) {
  return apiClient(`${BASE_URL}`, { method: "POST" , body:order}, token);
}