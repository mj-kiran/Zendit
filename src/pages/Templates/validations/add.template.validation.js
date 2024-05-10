import * as yup from "yup";

export const schema = yup.object().shape({
  template_type: yup.string().required("Template type is required"),
  template_name: yup.string().required("Template name is required"),
});
