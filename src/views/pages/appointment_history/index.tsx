import { Container } from "@mui/material"
import { useEffect, useMemo } from "react"
import dataMocks from "../../../mocks/appointments.json"
import { Table } from '../../../components/table/index';
import { type MRT_ColumnDef } from 'material-react-table';
import { Appointment } from '../../../types/appointments';
import { useSelector } from "react-redux";

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
const data: Appointment[] = dataMocks


export const Appointment_History = () => {

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
                accessorKey: 'document_number',
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
                <Table data={data} columns={columns} />
            </Container>
        </>
    )
}