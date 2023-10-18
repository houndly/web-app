import { useQuery } from '@tanstack/react-query';

export const useAppointment = (endpoint: string) => {
    const getAppointmentsApi = async () => {
        try {
            let url = 'https://chatbot-deploy-dot-houndly-393501.uc.r.appspot.com/api/appointments';
            if (endpoint) {
                url += `/${endpoint}`;
            }
            const res = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        } catch (error) {
            console.error('Error fetching appointments:', error);
            throw error;
        }
    };

    return useQuery(['appointments', endpoint], getAppointmentsApi);
};
