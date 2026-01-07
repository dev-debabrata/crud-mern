import { axiosInstance } from "../lib/axios";

export const getEmployees = async () => {
    const res = await axiosInstance.get("/employees");
    return res.data;
};

export const addEmployee = async (data) => {
    const res = await axiosInstance.post("/employees", data);
    return res.data;
};

export const updateEmployee = async ({ id, data }) => {
    const res = await axiosInstance.put(`/employees/${id}`, data);
    return res.data;
};

export const deleteEmployee = async (id) => {
    const res = await axiosInstance.delete(`/employees/${id}`);
    return res.data;
};
