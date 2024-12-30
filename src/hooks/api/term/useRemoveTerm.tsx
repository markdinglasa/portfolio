import { useState, useCallback } from "react";
import { useAxiosPrivate } from "../../useAxiosPrivate";
import { ToastType } from "../../../types";
import { BASE_URL, Success } from "../../../shared";
import { displayToast } from "../../../utils";

export const useRemoveTerm = (Id: number = 0) => {
    const axios = useAxiosPrivate();
    const [records, setRecords] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const remove = useCallback(async () => {
        if (Id === 0) return;
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/term/remove/${Id}`);
            setRecords(response.data.data || true);
            displayToast(Success.m00008, ToastType.success);
        } catch (error: any) {
            setRecords(false);
            displayToast(error?.response?.data?.message || error.message, ToastType.error);
        } finally {
            setLoading(false);
        }
    }, [Id, axios]);
    
    return {
        records,
        loading,
        remove,
    };
};