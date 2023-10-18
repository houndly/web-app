import dayjs from "dayjs";
import * as Yup from "yup";

export const SchemaListado = {
  ownerName: Yup.string().required("Campo requerido"),
  petName: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
  typeAppointment: Yup.string().required("Campo requerido"),
  date: Yup.string().required("Campo requerido"),
  time: Yup.string().required("Campo requerido"),
  symptoms: Yup.string().required("Campo requerido"),
};

export const SchemaForm = Yup.object().shape(SchemaListado);

type Appointment = {
  owner_name: string;
  pet_name: string;
  phone: string;
  type: string;
  date: string; // Cambiado a tipo string
  time: string; // Cambiado a tipo string
  symptoms: string;
  state: string;
};

export const InitialValue: Appointment = {
  owner_name: "",
  pet_name: "",
  phone: "",
  type: "",
  date: dayjs().format("YYYY-MM-DD"), // Convertido a cadena con formato deseado
  time: dayjs().format("HH:mm"), // Convertido a cadena con formato deseado
  symptoms: "",
  state: "Pendiente",
};
