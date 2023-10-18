export interface Appointment {
    id: number;
    owner_name: string;
    pet_name: string;
    phone: string;
    document_number: string;
    date: string;
    appointment_time: string;
    type: string;
    state: string;
}

export enum State {
    Cancelada = "Cancelada",
    Incumplimiento = "Incumplimiento",
    Pendiente = "Pendiente",
    Realizada = "Realizada",
}