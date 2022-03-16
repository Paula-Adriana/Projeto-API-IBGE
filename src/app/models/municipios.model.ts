import { __assign } from "tslib";

export class MunicipiosModel {
  id?: string;
  nome?: string;

  constructor (obj: Partial<MunicipiosModel>){
    Object.assign(this, obj);
  }
}
