
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

import usePersona from '../../hooks/usePersona';

const ErrorAlert = React.lazy(() => import('../../components/error-alert/errorAlert'));
const PersonaForm = React.lazy(() => import('../../components/persona-form/personaForm'));

const Persona: React.FC = () => {
  // Utils
  const { id } = useParams();
  const { loading, error, persona } = usePersona(id!);

  // Render
  if (error) {
    return <ErrorAlert errorMessage={error?.message || 'Something went wrong'} />
  }

  return loading
    ? <Spinner animation="border" />
    : <PersonaForm persona={persona} />;
};

export default Persona;