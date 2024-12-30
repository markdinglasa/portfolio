import { useState, useCallback } from "react";
import { useAxiosPrivate } from "../../useAxiosPrivate";
import { CategoryTable, RouteChannel, ToastType } from "../../../types";
import { BASE_URL, Success } from "../../../shared";
import { displayToast } from "../../../utils";
import { useNavigate } from "react-router-dom";

export const useUpdateCategory = () => {
    const axios = useAxiosPrivate();
    const [records, setRecords] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const update = useCallback(async (Id:string ,data: CategoryTable) => {
        if (!data || !Id) return;
        setLoading(true);
        try {
            const response = await axios.patch(`${BASE_URL}/category/update/${Id}`, data);
            setRecords(response.data.data || true);
            displayToast(Success.m00013, ToastType.success); 
            navigate(RouteChannel.CATEGORY)
        } catch (error: any) {
            setRecords(false);
            displayToast(error?.response?.data?.message || error.message, ToastType.error);
        } finally {
            setLoading(false);
        }
    }, [axios]);

    return {
        records,
        loading,
        update,
    };
};
