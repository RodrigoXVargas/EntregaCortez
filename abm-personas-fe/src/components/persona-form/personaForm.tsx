import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import DataLayerGeneric from '../../lib/data-layerGeneric';
import Persona from '../../types/persona';

interface PersonaFormProps {
  persona: Persona;
}

const PersonaForm: React.FC<PersonaFormProps> = ({ persona }) => {
  // State
  const [formData, setFormData] = useState<Persona>({
    email: persona?.email ?? '',
    firstName: persona?.firstName ?? '',
    lastName: persona?.lastName ?? ''
  });
  const [validated, setValidated] = useState<boolean>(false);

  // Utils
  const navigate = useNavigate();

  // Handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData : Persona) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // Check if action is create or edit
    const payload: Persona = new Persona(persona.id, formData.email, formData.firstName, formData.lastName);

    if (!persona?.id) {
      await DataLayerGeneric.create.entidad(payload);
    } else {
      await DataLayerGeneric.update.entidad(persona.id, payload);
    }

    navigate('/personas');
  };

  // Render
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={handleChange} name="firstName" placeholder="Ingrese nombre" required type="text" value={formData.firstName} />
        <Form.Control.Feedback type="invalid">
          Campo Nombre es obligatorio.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control onChange={handleChange} name="lastName" placeholder="Ingrese apellido" required type="text" value={formData.lastName} />
        <Form.Control.Feedback type="invalid">
          Campo Apellido es obligatorio.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleChange} name="email" placeholder="Enter email" required type="email" value={formData.email} />
        <Form.Control.Feedback type="invalid">
          Campo Email es obligatorio y debe ser un email válido.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Nunca compartiremos su email con nadie.
        </Form.Text>
      </Form.Group>
      <Button type="submit" variant="primary">
        Guardar
      </Button>
    </Form>
  );
};

export default PersonaForm;