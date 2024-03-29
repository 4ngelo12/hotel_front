export interface IUsuario {
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: Date;
  tipoDocumento: string;
  documento: string;
  telefono: string;
  idRole: number;
  password: string;
}

export interface IUsuarioEdit {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  tipoDocumento: string;
  documento: string;
  telefono: string;
  role: string;
}
