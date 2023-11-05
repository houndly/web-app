import { Button, Box, Typography, TextField, FormControl, Select, MenuItem, } from "@mui/material"
import FormErrorMessage from "./main/FormErrorMessage"
import { SchemaForm, InitialValue } from "./main/schema/SchemaForm"
import { Formik, Form } from "formik"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type Props = {
	onSubmit: (values: any) => void
}

const options = [
	{ value: '1', label: '9:00 AM - 10:00 AM' },
	{ value: '2', label: '10:00 AM - 11:00 AM' },
	{ value: '3', label: '11:00 AM - 12:00 AM' },
	{ value: '4', label: '12:00 PM - 1:00 PM' },
	{ value: '5', label: '1:00 PM - 2:00 PM' },
	{ value: '6', label: '2:00 PM - 3:00 PM' },
	{ value: '7', label: '3:00 PM - 4:00 PM' },
	{ value: '8', label: '4:00 PM - 5:00 PM' },
	{ value: '9', label: '5:00 PM - 6:00 PM' },
];

const optionCita = [
	{ value: '1', label: 'Vacunación' },
	{ value: '2', label: 'Desparasitación' },
	{ value: '3', label: 'Consulta médica' },
	{ value: '4', label: 'Exámenes de laboratorio' },
	{ value: '5', label: 'Otros' },
];

export const AddAppointment = ({ onSubmit }: Props) => {
	const today = dayjs();

	return (
		<Box >

			<Formik
				enableReinitialize={false}
				initialValues={{
					...InitialValue,
					date: dayjs(today), // Parse today as a Dayjs object
				}}
				validationSchema={SchemaForm}
				onSubmit={(values) => { onSubmit(values) }}
			>
				{({ values, errors, handleChange, touched }) => (
					<Form
						onSubmit={(e) => {
							e.preventDefault()
							onSubmit({
								...values,
								date: dayjs(values.date).format("DD/MM/YYYY"),
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
							<FormControl style={{ width: '100%' }}>
								<Select
									sx={{ width: '100%', height: '40px' }}
									labelId="select-label"
									id="select"
									value={values.type}
									onChange={handleChange}
									name="type"
								>
									{optionCita.map((option) => (
										<MenuItem key={option.label} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
		
							<FormErrorMessage nameField={"type"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
							>
								Fecha
							</Typography>

							<LocalizationProvider   dateAdapter={AdapterDayjs}>
								<DatePicker sx={{ width: '100%', height: '40px' }} defaultValue={today} disablePast value={values.date} />
							</LocalizationProvider>

							<FormErrorMessage nameField={"date"} error={errors} touched={touched} />

							<Typography
								variant="body2"
								sx={{ fontWeight: 500, color: "#555555", m: "2rem 0  5px" }}
							>
								Hora
							</Typography>

							<FormControl style={{ width: '100%' }}>
								<Select
									sx={{ width: '100%', height: '40px' }}

									labelId="select-label"
									id="select"
									value={values.time}
									onChange={handleChange}
									name="time"
								>
									{options.map((option) => (
										<MenuItem key={option.label} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
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



