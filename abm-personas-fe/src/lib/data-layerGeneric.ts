import Base from "../types/base";
import Settings from "./settings";

async function fnCreateEntidad<T extends Base>(entidad: T) {
  try {
    await fetch(
      Settings.api.personas.save,
      {
        body: JSON.stringify(entidad),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
  } catch (error: any) {
    throw error;
  }
};

async function fnDeleteEntidad(id: number) {
  try {
    await fetch(`${Settings.api.personas.delete}/${id}`, { method: 'DELETE' });
  } catch (error: any) {
    throw error;
  }
};

async function fnFetchEntidad(id: number) {
  try {
    const response = await fetch(`${Settings.api.personas.getOne}/${id}`);
    const persona = await response.json();
    return persona;
  } catch (error: any) {
    throw error;
  }
};

async function fnFetchEntidades() {
  try {
    const response = await fetch(Settings.api.personas.getAll);
    const personas = await response.json();
    console.log(personas);
    return personas;

  } catch (error: any) {
    throw error;
  }
};

async function fnUpdateEntidad<T extends Base>(id: number, entidad: T) {
  try {
    await fetch(
      `${Settings.api.personas.update}/${id}`,
      {
        body: JSON.stringify(entidad),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      })

  } catch (error: any) {
    throw error;
  }
};

const DataLayerGeneric = {
  create: {
    entidad: fnCreateEntidad,
  },
  delete: {
    entidad: fnDeleteEntidad,
  },
  fetch: {
    entidad: fnFetchEntidad,
    entidades: fnFetchEntidades,
  },
  update: {
    entidad: fnUpdateEntidad,
  },
};

export default DataLayerGeneric;
