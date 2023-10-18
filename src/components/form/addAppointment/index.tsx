import { Button, Box, Typography, TextField, } from "@mui/material"
import FormErrorMessage from "./main/FormErrorMessage"
import { SchemaForm, InitialValue } from "./main/schema/SchemaForm"
import { Formik, Form } from "formik"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type Props = {
	onSubmit: (values: any) => void
}

export const AddAppointment = ({ onSubmit }: Props) => {
	const today = dayjs();
	const todayStartOfTheDay = today.startOf('day');

	return (
		<Box >

			<Formik
				enableReinitialize={false}
				initialValues={{
					...InitialValue,
					date: dayjs(today), // Parse today as a Dayjs object
					time: dayjs(todayStartOfTheDay), // Parse todayStartOfTheDay as a Dayjs object
				}}
				validationSchema={SchemaForm}
				onSubmit={(values) => { onSubmit(values) }}
			>
				{({ values, errors, handleChange,  touched }) => (
					<Form
						onSubmit={(e) => {
							e.preventDefault()
							onSubmit({
								...values,
								date: dayjs(values.date).format("YYYY-MM-DD"),
								time: dayjs(values.time).format("HH:mm"),
							})
						}}
					>
						<>
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "0 0 5px" }}
							>
								Nombre del dueño
							</Typography>
							<TextField
								fullWidth
								name="owner_name"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.owner_name}
								size="small"
								helperText=""
								sx={{ borderRadius: "8px" }}
							/>
							<FormErrorMessage nameField={"owner_name"} error={errors} touched={touched} />
							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Nombre mascota
							</Typography>
							<TextField
								fullWidth
								name="pet_name"
								autoComplete="off"
								type="text"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.pet_name}
								size="small"
								helperText=""
								sx={{ borderRadius: "8px" }}

							/>
							<FormErrorMessage nameField={"pet_name"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Número telefónico
							</Typography>
							<TextField
								fullWidth
								name="phone"
								type="text"
								autoComplete="off"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.phone}
								size="small"
								style={{ borderRadius: "16px" }}
							/>
							<FormErrorMessage nameField={"phone"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Tipo de cita
							</Typography>
							<TextField
								fullWidth
								name="type"
								type="text"
								autoComplete="off"
								inputProps={{ maxLength: 155 }}
								onChange={handleChange}
								value={values.type}
								size="small"
								style={{ borderRadius: "16px" }}
							/>
							<FormErrorMessage nameField={"type"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Fecha
							</Typography>

							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker sx={{width:'100%'}} defaultValue={today} disablePast value={values.date} />
							</LocalizationProvider>

							<FormErrorMessage nameField={"date"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Hora
							</Typography>

							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<TimePicker sx={{ width: '100%' }}  defaultValue={todayStartOfTheDay} value={values.time} />
							</LocalizationProvider>
							<FormErrorMessage nameField={"time"} error={errors} touched={touched} />
							<Box
								component="div"
								sx={{
									display: "flex",
									alignItems: "center",
									marginTop: "20px",
									justifyContent: "center",
								}}
							>
								<Button
									type="submit"
									variant="contained"
									sx={{
										background: "darkgray",
										'&:hover': {
											backgroundColor: '#ACD4F7', // Color al hacer hover
										},
									}}
								>
									Guardar
								</Button>


							</Box>

						</>
					</Form>
				)}
			</Formik>
		</Box >

	)
}



