import axios, { AxiosPromise } from "axios";
import { AddComment, CommentsResponse } from "./comments.interfaces";

export const sendNewComment = (trainerId: string, addComment: AddComment) => {
  return axios.post(`http://localhost:5000/trainer/${trainerId}/comments`, addComment);
};

export const fetchTrainerComments = (trainerId: string): AxiosPromise<CommentsResponse[]> => {
  return axios.get<CommentsResponse[]>(`http://localhost:5000/trainer/${trainerId}/comments`);
};
