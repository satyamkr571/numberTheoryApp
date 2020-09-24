export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const getData = (data) => ({
  type: "GET_DATA",
  payload: data,
});
