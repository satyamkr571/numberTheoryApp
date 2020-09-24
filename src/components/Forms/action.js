export const setFormData = (data) => ({
  type: "SET_FORM_DATA",
  payload: data,
});

export const getFormData = (data) => ({
  type: "GET_FORM_DATA",
  payload: data,
});
