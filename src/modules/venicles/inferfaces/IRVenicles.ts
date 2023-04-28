export default interface ICreateVeniclesRequest {
  model: string;
  year: number;
  price: number;
}

export interface IUpdateVeniclesRequest {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: Date;
}
