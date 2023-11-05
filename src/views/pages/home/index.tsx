import { Button, Chip, Container } from "@mui/material"
import { Appointment } from '../../../types/appointments';
import { BasicModal, AddAppointment } from "../../../components/";
import { useState, useEffect } from "react";
import { AppointmentList } from '../../../components/appointments/list/index';
import { createAppointment, useAppointmentsDay, useAppointmentsWeek } from "../../../hooks/useAppointment";
import { SnackBar } from '../../../components/snackBar/index';


export const Home = () => {
    const { data: dataDay, error: errorDay, isInitialLoading: isInitialLoadingDay, isError: isErrorDay, isFetching: isFetchingDay, refetch: refetchDay } = useAppointmentsDay();
    const { data: dataWeek, error: errorWeek, isInitialLoading: isInitialLoadingWeek, isError: isErrorWeek, isFetching: isFetchingWeek, refetch: refetchWeek } = useAppointmentsWeek();

    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [data, setData] = useState<Appointment[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedFilterState, setSelectedFilterState] = useState("");
    let result: boolean = true;
    const handleCreate = async (newAppointment: Appointment) => {
        try {
            result = await createAppointment(newAppointment);
            setOpenSnack(result ? true : false);
            setOpen(false);
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    }
    useEffect(() => {
        if (dataDay?.length > 0) {
            setAppointments(dataDay)
            setData(dataDay)
        }

    }, [dataDay])

    useEffect(() => {
        if (dataWeek?.length > 0) {
            setAppointments(dataWeek)
            setData(dataWeek)
        }
    }, [dataWeek])



    const handleFilterChange = (filter: string) => {
        if (selectedFilter === filter) {
            setSelectedFilter("");
            setAppointments([])
        } else {
            setSelectedFilter(filter);
            if (filter === "day") {
                refetchDay()
            } else if (filter === "week") {
                refetchWeek()
            }

        }
    };
    const handleFilterStateChange = (filter: string) => {
        if (selectedFilterState === filter) {
            setSelectedFilterState("");
        } else {
            setSelectedFilterState(filter);
        }
    };

    useEffect(() => {

        if (selectedFilter === "day" && dataDay?.length > 0) {
            setAppointments(dataDay)
            setData(dataDay)
        } else if (selectedFilter === "week" && dataWeek?.length > 0) {
            setAppointments(dataWeek)
            setData(dataWeek)
        }


        if (selectedFilterState !== "") {

            let filteredAppointments: Appointment[] = data;
            if (selectedFilterState === "Realizada" || selectedFilterState === "Cancelada" || selectedFilterState === "Pendiente" || selectedFilterState === "Incumplimiento") {
                filteredAppointments = filteredAppointments.filter((appointment: Appointment) => appointment.state === selectedFilterState);
                setAppointments(filteredAppointments);
            }
        }
        if (selectedFilterState === "" && selectedFilter === "") {
            setAppointments([])
        }

    }, [selectedFilterState, selectedFilter]);

    return (
        <>
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
                            onClick={() => { handleFilterChange("day") }}
                            color={selectedFilter === "day" ? "primary" : "default"}
                        />
                        <Chip label="Citas esta semana" variant="outlined"
                            onClick={() => { handleFilterChange("week") }}
                            color={selectedFilter === "week" ? "primary" : "default"}
                        />
                    </div>
                    <div>
                        <Chip
                            label="Realizadas"
                            variant="outlined"
                            onClick={() => handleFilterStateChange("Realizada")}
                            color={selectedFilterState === "Realizada" ? "primary" : "default"}
                            disabled={appointments?.length === 0}
                        />

                        <Chip label="Pendientes" variant="outlined"
                            onClick={() => handleFilterStateChange("Pendiente")}
                            color={selectedFilterState === "Pendiente" ? "primary" : "default"}
                            disabled={appointments?.length === 0}
                        />
                        <Chip label="Canceladas" variant="outlined"
                            onClick={() => handleFilterStateChange("Cancelada")}
                            color={selectedFilterState === "Cancelada" ? "primary" : "default"}
                            disabled={appointments?.length === 0}
                        />
                        <Chip label="Incumplidas" variant="outlined"
                            onClick={() => handleFilterStateChange("Incumplimiento")}
                            color={selectedFilterState === "Incumplimiento" ? "primary" : "default"}
                            disabled={appointments?.length === 0}
                        />
                    </div>
                </div>
                <div className="row d-flex flex-row aling-content-center mx-auto my-4 w-75 d-flex justify-content-between " style={{ margin: '0 auto' }} >
                    {appointments && appointments.length > 0 &&
                        <AppointmentList data={appointments} title={selectedFilter === 'day' ? '📅 Citas para hoy' : '📅 Citas de esta semana'} ></AppointmentList>
                    }
                    {appointments && appointments.length === 0 && <h3 className="mx-auto my-4 d-flex justify-content-between ">No hay citas para mostrar</h3>}

                </div>
                <BasicModal open={open} onClose={() => setOpen(false)}>
                    <Container>
                        <AddAppointment onSubmit={(newAppointment) => {
                            handleCreate(newAppointment);
                        }} />
                    </Container>
                </BasicModal>
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack} message={result ? "Creado Exitosamente":"Ocurrio un error inesperado "} severity={result ? "success" : "error"} />
        </>
    );
};
