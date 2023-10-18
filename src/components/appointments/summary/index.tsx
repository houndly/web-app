import { Appointment } from '../../../types/appointments';

type Card = {
    data: Appointment[]
    title: string

}

export const SummaryAppointments = ({ data, title }: Card) => {
    return (
        <div className=" col-md-6 mb-4 scroll rounded border mx-1" style={{ width: '90%', margin: '0 auto' }}>
            <div className="p-4">
                <h2 className="mb-4 text-center">{title}</h2>
                <div className="row">
                    <div className="col-md-3">
                        <strong>Mascota</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Fecha</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Franja</strong>
                    </div>
                    <div className="col-md-3">
                        <strong>Tipo Horaria</strong>
                    </div>
                </div>
                {data.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-3">
                            <p className="ellipsis">{item.pet_name}</p>
                        </div>
                        <div className="col-md-3">
                            <p className="ellipsis">{item.date}</p>
                        </div>
                        <div className="col-md-3">
                            <p className="ellipsis">{item.appointment_time}</p>
                        </div>
                        <div className="col-md-3">
                            <p className="ellipsis">{item.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
