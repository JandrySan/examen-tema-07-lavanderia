export interface Servicio {
  id: number;
  nombre: string;
  precio: number;
  disponibles: number;
  activo: boolean;
}

export interface Cliente {
  id: number;
  nombre: string;
  cedula: string;
  telefono: string;
}

export type NuevoCliente = Omit<Cliente, "id">;

export type EstadoOrden =
  | "PENDIENTE"
  | "LISTA"
  | "CANCELADA";

export interface Orden {
  id: number;
  servicioId: number;
  clienteId: number;
  cantidad: number;
  total: number;
  descuentoAplicado: boolean;
  estado: EstadoOrden;
}

export interface NuevaOrden {
  servicioId: number;
  clienteId: number;
  cantidad: number;
}