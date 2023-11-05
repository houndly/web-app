import { Container } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { Table } from '../../../components/table/index';
import { type MRT_ColumnDef } from 'material-react-table';
import { Appointment } from '../../../types/appointments';
import { useAppointments } from '../../../hooks/useAppointment';

//example data type
type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below


export const Appointment_History = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const result = useAppointments();
    
    useEffect(() => {
        if (result.data) {
            setAppointments(result.data)
        }
    }, [result.data])

    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'owner_name', //access nested data with dot notation
                header: 'Dueño',
                size: 150,
            },
            {
                accessorKey: 'pet_name',
                header: 'Mascota',
                size: 150,
            },
            {
                accessorKey: 'phone', //normal accessorKey
                header: 'Teléfono',
                size: 200,
            },
            {
                accessorKey: 'document_id',
                header: 'Documento',
                size: 150,
            },
            {
                accessorKey: 'date',
                header: 'Fecha',
                size: 150,
            },
            {
                accessorKey: 'type',
                header: 'Tipo',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'Estado',
                size: 150,
            },
        ],
        [],
    );

    return (
        <>
            <Container maxWidth="lg" sx={{ marginY: '5rem', textAlign: 'center' }}>
                <Table data={appointments} columns={columns} />
            </Container>
        </>
    )
}
