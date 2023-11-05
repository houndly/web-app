import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Appointment } from '../types/appointments';

const baseApiUrl = `${import.meta.env.VITE_APP_API_HOST}`;

const instance = axios.create({
    baseURL: baseApiUrl, // Asegúrate de que baseApiUrl esté definido correctamente
    headers: {
        'Content-Type': 'application/json'
    }
});


const getAppointments = async (): Promise<any> => {
    const { data } = await instance.get(`${baseApiUrl}/appointments`);
    return data;
};

const getAppointmentsWeek = async (): Promise<any> => {
    const { data } = await instance.get(`${baseApiUrl}/appointments/week`);
    return data;
};

export const createAppointment = async (body: Appointment): Promise<boolean> => {

    try {
        const response = await instance.post(`${baseApiUrl}/appointment`, body);
        return response.data;
    } catch (error) {
        console.error('Error creating appointment:', error);
        return false; // Devuelve false si ocurre un error durante la solicitud
    }
};


const getAppointmentsDay = async (): Promise<any> => {
    const { data } = await instance.get(`${baseApiUrl}/appointments/day`);
    return data;
};

export const useAppointmentsDay = () => {
    const { isInitialLoading, isError, data, error, refetch, isFetching } =
        useQuery({
            queryKey: ['getAppointmentsDay'],
            queryFn: getAppointmentsDay,
            enabled: false,
        });
    return { isInitialLoading, isError, data, error, refetch, isFetching };
};


export const useAppointmentsWeek = () => {
    const { isInitialLoading, isError, data, error, refetch, isFetching } =
        useQuery({
            queryKey: ['getAppointmentsWeek'],
            queryFn: getAppointmentsWeek,
            enabled: false,
        });
    return { isInitialLoading, isError, data, error, refetch, isFetching };
};

export const useAppointments = () => {
    const query = useQuery({
        queryKey: ['getAppointments'],
        queryFn: getAppointments,
        enabled: true,
    });
    return query;
};

export const useCreaAppointment = (body: Appointment) => {
    const { isInitialLoading, isError, data, error, refetch, isFetching } =
        useQuery({
            queryKey: ['createAppointment'],
            queryFn: () => createAppointment(body),
            enabled: false,
        });
    return { isInitialLoading, isError, data, error, refetch, isFetching };
};

