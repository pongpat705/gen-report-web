export class ResponseModel<T> {
  timeStamp: string;
  message: string;
  code: number;
  data: T;
}
