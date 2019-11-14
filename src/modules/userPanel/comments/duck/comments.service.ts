import axios, { AxiosPromise } from "axios";
import { AddComment } from "./comments.interfaces";


export const sendNewComment = (trainerId:string,addComment:AddComment): AxiosPromise<any> => {
  return axios.post<any>(`http://localhost:5000/trainer/${trainerId}`, {
    author:addComment.author,
    content:addComment.content,
    rating:addComment.rating
  });
};
