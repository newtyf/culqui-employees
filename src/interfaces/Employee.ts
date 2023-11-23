export interface Employee {
  id:           number;
  nombre:       string;
  correo:       string;
  cargo:        string;
  departamento: string;
  oficina:      Office;
  estadoCuenta: AccountStatus;
}

export enum AccountStatus {
  Activada = "Activada",
  Desactivada = "Desactivada",
}

export enum Office {
  CulqiOffice = "Culqi Office",
}
