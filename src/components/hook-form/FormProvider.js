import React from "react";
// FormProvider is a higher order component, providing a method to bind the form state with component
// Usually, we need to use useFormContext hook to get form's state. Using FormProvider can get the state to a common parent component, and then manage state of form with useForm hook. After that we can use FormProvider to pass the state to children components.
import { FormProvider as Form } from "react-hook-form";

// Three props: children: the form elements, onSubmit: a callback function for when the form is submitted, method: an object that contains the form methods created by using the "useForm" hook.

// Here, we wrap the "children" props in Form tag. Within this tag, it passes in the "methods" prop using the spread operator so that the form methods can be accessed by child components.

//
const FormProvider = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
