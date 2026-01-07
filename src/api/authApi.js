import api from "./axios";

export const registerUser = (data) =>
  api.post("/api/users/register", data).then((r) => r.data);

export const loginUser = (email, password) =>
  api.post("/api/users/login", { email, password }).then((r) => r.data);
