import PropTypes from "prop-types";

// form validation library based on React Hooks
import { useFormContext, Controller } from "react-hook-form";

// @mui
import { TextField } from "@mui/material";

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
  // useFormContext is a React Hook that allows us to access the form state managed by react-hook-form in a component
  //    Here it retrieve the form's control object which can be used to control the form.
  const { control } = useFormContext();

  return (
    // Use Controllar to binds form elements and the form state managedby react-hook-form. Here we use Controllar to bind the TextField component and the form state.
    // Controller accepts a name property to bind the form's name property. Accepts a control property to bind the form and form State. Then use render property to render a TextField component, passing in the field and fieldState properties.
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          //   Transfer the error object to boolean type
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}
