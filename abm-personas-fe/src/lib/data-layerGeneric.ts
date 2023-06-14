
import Base from "../types/base";

async function fnCreateEntidad<T extends Base>(entidad: T) {
  try {
    let newEntidad;
    // Create new persona
    if(entidad.url){
    newEntidad = await fetch(
      entidad.url,
      {
        body: JSON.stringify(entidad),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
    
    }
    // Return created persona
    return newEntidad;
  } catch (error: any) {
    throw error;
  }
};

async function fnDeleteEntidad<T extends Base>(entidad: T ) {
  try {
    // Delete persona by given id
    if(entidad.url){
        await fetch(`${entidad.url}/${entidad.id}`, { method: 'DELETE' });
    }

  } catch (error: any) {
    throw error;
  }
};

async function fnFetchEntidad<T extends Base>(id: string, entidad: T ) {
  try {
    // Fetch given persona
    const response = await fetch(`${entidad.url}/${id}`);
    const persona = await response.json();
    // Return persona
    return persona;
  } catch (error: any) {
    throw error;
  }
};

async function fnFetchEntidades<T extends Base>(entidad: T ) {
  try {
    // Fetch personas
    if(entidad.url){
        const response = await fetch(entidad.url);
        const personas = await response.json();
        // Return personas
        return personas;
    }
  } catch (error: any) {
    throw error;
  }
};

async function fnUpdateEntidad<T extends Base>(id: string, entidad: T ) {
  try {
    // Update given persona
    let editedPersona;
    if(entidad.url){
        editedPersona = await fetch(
            `${entidad.url}/${id}`,
        {
            body: JSON.stringify(entidad),
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'PUT',
        }
    );
        return editedPersona;
    }
    // Return edited persona
    
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
