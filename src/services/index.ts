import axios from "axios";
import { UserData } from "../modules/auth/duck/auth.interfaces";
import { unwrapResponseData } from "../utils/unwrapResponseData";
import { ReservationResponse } from "../modules/reservations/duck/reservations.interfaces";

const fetchAllTrainers = async (setIsFetching: React.Dispatch<React.SetStateAction<boolean>>) => {
  setIsFetching(true);
  const response = await axios.get<UserData[]>("http://localhost:5000/user/trainers").then(unwrapResponseData);
  setIsFetching(false);
  return response;
};

const fetchSelectedTrainer = async (trainerId: string, setPromise: React.Dispatch<React.SetStateAction<boolean>>) => {
  setPromise(true);
  const res = await axios.get<UserData>(`http://localhost:5000/user/${trainerId}`).then(unwrapResponseData);
  setPromise(false);
  return res;
};

const fetchExcludeTimes = async (trainerId: string) => {
  const res = await axios
    .get<ReservationResponse[]>(`http://localhost:5000/api/reservations/${trainerId}`)
    .then(unwrapResponseData);
  return res;
};

const api = {
  fetchAllTrainers,
  fetchSelectedTrainer,
  fetchExcludeTimes
};

export default api;
