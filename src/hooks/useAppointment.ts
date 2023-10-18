import { useQuery } from '@tanstack/react-query';
import { Appointment } from '../types/appointments';

export const useAppointment = (endpoint: string) => {
    const getAppointmentsApi = async () => {
        try {
            let url = 'http://10.25.0.5:8080/api/appointments';
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
