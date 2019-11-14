import axios, { AxiosPromise } from "axios";
import { AddComment } from "./comments.interfaces";

export const sendNewComment = (trainerId: string, addComment: AddComment) => {
  return axios.post(`http://localhost:5000/trainer/${trainerId}/comments`, {
    author: addComment.author,
    content: addComment.content,
    rating: addComment.rating
  });
};
