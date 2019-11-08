import { AxiosResponse } from "axios";

export function unwrapResponseData<T>(res: AxiosResponse<T>) {
  return res.data;
}
