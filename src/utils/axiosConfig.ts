// src/utils/axiosConfig.ts
import axios from "axios";
import { DOMAIN } from "./constants";

const axiosInstance = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
  withCredentials: true, // إذا كنت تستخدم ملفات تعريف الارتباط
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
