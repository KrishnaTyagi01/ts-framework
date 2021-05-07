import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      //When the user is already there and we need to update it
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //When the user is not saved
      return axios.post(this.rootUrl, data);
    }
  }
}
