import { useEffect, useState } from "react";
import type { Servicio } from "../dominio";
import {
  FUENTE_ACTIVA,
  obtenerFuenteDatos,
} from "../datos";

export function CatalogoServicios() {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    obtenerFuenteDatos()
      .listarServicios()
      .then(setServicios)
      .catch(console.error);
  }, []);

  return (
    <main>
      <header>
        <strong>Lavandería Burbujas</strong>

        <span>
          Sistema de órdenes · Fuente: {FUENTE_ACTIVA}
        </span>
      </header>

      <section>
        <h1>Catálogo de servicios</h1>

        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Precio</th>
              <th>Disponibles</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.nombre}</td>

                <td>
                  ${servicio.precio.toFixed(2)}
                </td>

                <td>{servicio.disponibles}</td>

                <td>
                  <span
                    className={
                      servicio.activo
                        ? "badge badge-activo"
                        : "badge badge-inactivo"
                    }
                  >
                    {servicio.activo
                      ? "Activo"
                      : "Inactivo"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}