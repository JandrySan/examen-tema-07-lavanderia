import type { FuenteDatos } from "./contrato";

const pendiente = () =>
  Promise.reject(new Error("no implementado"));

export const fuenteApi: FuenteDatos = {
  listarServicios: pendiente,
  listarClientes: pendiente,
  crearCliente: pendiente,
  listarOrdenes: pendiente,
  crearOrden: pendiente,
  cancelarOrden: pendiente,
};