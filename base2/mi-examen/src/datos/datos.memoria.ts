import type { FuenteDatos } from "./contrato";
import type { Servicio } from "../dominio";

const servicios: Servicio[] = [
  {
    id: 1,
    nombre: "Lavado básico",
    precio: 8.5,
    disponibles: 10,
    activo: true,
  },
  {
    id: 2,
    nombre: "Lavado en seco",
    precio: 6,
    disponibles: 4,
    activo: true,
  },
  {
    id: 3,
    nombre: "Planchado express",
    precio: 5,
    disponibles: 2,
    activo: true,
  },
  {
    id: 4,
    nombre: "Lavado de alfombras",
    precio: 15,
    disponibles: 3,
    activo: false,
  },
];

const pendiente = () =>
  Promise.reject(new Error("no implementado"));

async function listarServicios(): Promise<Servicio[]> {
  return [...servicios];
}

export const fuenteMemoria: FuenteDatos = {
  listarServicios,
  listarClientes: pendiente,
  crearCliente: pendiente,
  listarOrdenes: pendiente,
  crearOrden: pendiente,
  cancelarOrden: pendiente,
};