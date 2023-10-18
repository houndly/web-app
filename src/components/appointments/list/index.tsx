import { Appointment } from "../../../types/appointments"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PetsIcon from '@mui/icons-material/Pets';
import { Chip } from "@mui/material";

type Card = {
    data: Appointment[]
    title: string

}


export const AppointmentList = ({ data, title }: Card) => {

    const getColor = (state: string) => {
        switch (state) {
            case 'Realizada':
                return 'bg-success'
            case 'Cancelada':
                return 'bg-danger'
            case 'Incumplimiento':
                return 'bg-warning'
            case 'Pendiente':
                return 'bg-primary-subtle'
            default:
                return 'bg-secondary'
        }
    }

    return (
        <>

            <h3 className="w-75 mb-4">{title}</h3>
            {data.map((item, index) => (
                <div className="w-75 shadow-none p-3 mb-3 bg-body-tertiary rounded d-flex align-items-center" key={index}>
                    <div className="col-md-1">{index}</div>
                    <div className="col-md-3">
                        <p className="text">{item.type}</p>
                    </div>
                    <div className="col-md-2 d-flex">
                        <PetsIcon className="me-1" />
                        <p className="text">{item.pet_name}</p>
                    </div>
                    <div className="col-md-2  d-flex">
                        <a
                            href={`https://wa.me/${item.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon className="me-1" />
                        </a>
                        <p className="text">{item.phone}</p>
                    </div>
                    <div className="col-md-2 ">
                        <p className="text badge text-wrap text-black w-75">{item.appointment_time}</p>
                    </div>
                    <div className="col-md-2">
                        <p className={`text badge  text-wrap bg-opacity-75 ${getColor(item.state)}`}>{item.state}</p>
                    </div>
                </div>
            ))}
        </>
    )
}