import Persona from "../models/persona";
import personas from "../data/personas";

const create = async (persona: Persona): Promise<Persona> => {
  personas.push({ ...persona, id: (+new Date()).toString() });

  return persona;
};

const list = async (): Promise<Persona[]> => {
  return personas;
};

const fetch = async (id: string): Promise<Persona> => {
  return personas.find((p: Persona) => p.id === id);
};

const update = async (id: string, persona: Persona): Promise<Persona> => {
  const index = personas.findIndex((p: Persona) => p.id === id);

  personas[index] = persona;

  return persona;
};

const remove = async (id: string) => {
  const index = personas.findIndex((p: Persona) => p.id === id);

  personas.splice(index, 1);
};

export default {
  create,
  list,
  fetch,
  update,
  remove,
};
