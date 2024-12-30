import axios from 'axios';
import { useAuth } from './useAuth';

export const useRefreshToken = () => {
    const { setAuth }: any = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.get('/refresh', {
                withCredentials: true
            });

            setAuth((prev:any) => {
                return {
                    ...prev,
                    roles: response.data.roles, 
                    accessToken: response.data.accessToken
                };
            });

            return response.data.accessToken;
        } catch (error) {
            console.error("Error refreshing token:", error);
            throw error;
        }
    };

    return refresh;
};
