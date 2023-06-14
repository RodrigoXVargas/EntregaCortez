import Persona from "../models/persona";





const create = async (persona: Persona) => {
  fetch(`http://localhost:3000/personas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(persona),
  })
};

const list = async (): Promise<Persona[]> => {
  return fetch("http://localhost:3000/personas")
  .then(response => response.json())
};

const getOnePerson = async (id: string) => {
  return fetch(`http://localhost:3000/personas/${id}`);
};

const update = async (id: string, persona: Persona) => {
  fetch(`http://localhost:3000/personas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(persona),
  })
};

const remove = async (id: string) => {
  fetch(`http://localhost:3000/personas/${id}`, {
    method: 'DELETE',
  })
};

export default {
  create,
  list,
  getOnePerson,
  update,
  remove,
};
