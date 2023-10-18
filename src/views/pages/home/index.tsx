import { Button, Chip, Container } from "@mui/material"
import { Appointment } from '../../../types/appointments';
import { BasicModal, AddAppointment } from "../../../components/";
import { useState, useEffect } from "react";
import { AppointmentList } from '../../../components/appointments/list/index';
import { useAppointment } from "../../../hooks/useAppointment";


export const Home = () => {
    const [open, setOpen] = useState(false);
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [selectedFilter, setSelectedFilter] = useState(""); // Estado para mantener el filtro seleccionado
    const [selectedFilterState, setSelectedFilterState] = useState(""); // Estado para mantener el filtro seleccionado

    const queryDay = useAppointment('day');
    const queryWeek = useAppointment('week');


    const handleFilterChange = (filter: string) => {
        if (selectedFilter === filter) {
            // Deselecciona el filtro si ya estaba seleccionado
            setSelectedFilter("");
        } else {
            // Selecciona el nuevo filtro
            setSelectedFilter(filter);
        }        // Aquí puedes implementar la lógica para filtrar la data de las citas dependiendo del filtro seleccionado
    };


    const handleFilterStateChange = (filter: string) => {
        if (selectedFilterState === filter) {
            // Deselecciona el filtro si ya estaba seleccionado
            setSelectedFilterState("");
        } else {
            // Selecciona el nuevo filtro
            setSelectedFilterState(filter);
        }        // Aquí puedes implementar la lógica para filtrar la data de las citas dependiendo del filtro seleccionado
    };

    useEffect(() => {
        if (selectedFilter !== "") {
            if (selectedFilter === "day") {
                setAppointments(queryDay.data);

            } else if (selectedFilter === "week") {
                setAppointments(queryWeek.data);
            }
        }
        if (selectedFilterState !== "") {

            let filteredAppointments: Appointment[] = [];
            if (selectedFilterState === "Realizada" || selectedFilterState === "Cancelada" || selectedFilterState === "Pendiente" || selectedFilterState === "Incumplimiento") {
                // Filtra las citas según el estado seleccionado (listo, cancelado, incompleto)
                if (selectedFilter === "day") {
                    filteredAppointments = queryDay.data.filter((appointment: Appointment) => appointment.state === selectedFilterState);
                } else {
                    filteredAppointments = queryWeek.data.filter((appointment: Appointment) => appointment.state === selectedFilterState);
                }
            }

            setAppointments(filteredAppointments);
        }
    }, [selectedFilter, selectedFilterState]);

    return (
        <div className="mt-5 pt-4 d-flex flex-column ">
            <div className="row d-flex flex-row justify-content-end p-4 w-75 my-auto mx-auto" >
                <Button sx={{
                    background: "darkgray",
                    '&:hover': {
                        backgroundColor: '#ACD4F7', // Color al hacer hover
                    },
                }} className="btn tnb-secondary h-25 w-auto m-2 text-white"
                    onClick={() => setOpen(true)}
                >Agregar Cita</Button>
            </div>
            <div className="mx-auto my-4 w-75 d-flex justify-content-between ">
                <div>
                    <Chip label="Citas para hoy" variant="outlined"
                        onClick={() => handleFilterChange("day")}
                        color={selectedFilter === "day" ? "primary" : "default"}
                    />
                    <Chip label="Citas esta semana" variant="outlined"
                        onClick={() => handleFilterChange("week")}
                        color={selectedFilter === "week" ? "primary" : "default"}

                    />
                </div>
                <div>
                    <Chip label="Realizadas" variant="outlined"
                        onClick={() => handleFilterStateChange("Realizada")}
                        color={selectedFilterState === "Realizada" ? "primary" : "default"}

                    />

                    <Chip label="Pendientes" variant="outlined"
                        onClick={() => handleFilterStateChange("Pendiente")}
                        color={selectedFilterState === "Pendiente" ? "primary" : "default"}

                    />
                    <Chip label="Canceladas" variant="outlined"
                        onClick={() => handleFilterStateChange("Cancelada")}
                        color={selectedFilterState === "Cancelada" ? "primary" : "default"}

                    />
                    <Chip label="Incumplidas" variant="outlined"
                        onClick={() => handleFilterStateChange("Incumplimiento")}
                        color={selectedFilterState === "Incumplimiento" ? "primary" : "default"}

                    />
                </div>
            </div>
            <div className="row d-flex flex-row justify-content-center aling-content-center" style={{ margin: '0 auto' }} >
                {appointments.length > 0 &&
                    <AppointmentList data={appointments} title={selectedFilter === 'day' ? '📅 Citas para hoy' : '📅 Citas de esta semana'} ></AppointmentList>
                }
                {appointments.length === 0 && <h3 className="mx-auto my-4 d-flex justify-content-between ">No hay citas para mostrar</h3>}

            </div>
            <BasicModal open={open} onClose={() => setOpen(false)}>
                <Container>
                    <AddAppointment onSubmit={(newAppointment) => {
                        console.log(newAppointment);
                        setOpen(false);
                    }} />
                </Container>
            </BasicModal>
        </div>
    );
};