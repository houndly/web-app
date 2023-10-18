import { Alert } from "@mui/material";
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";

interface Props {
  nameField: string;
  error: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const FormErrorMessage = ({error,nameField,touched,
}: Props): JSX.Element => {
  return (
    <>
      {error[nameField] && touched[nameField] ? (
        <Alert severity="error" style={{ borderLeft: "4px solid #C00" }}>
          <ErrorMessage name={nameField} component="span" />
        </Alert>
      ) : null}
    </>
  );
};

export default FormErrorMessage;
