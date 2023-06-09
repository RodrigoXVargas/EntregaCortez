import Button from 'react-bootstrap/Button';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import usePersonas from '../../hooks/use-personas';

const ErrorAlert = React.lazy(() => import('../../components/error-alert'));
const PersonasTable = React.lazy(() => import('../../components/personas-table'));

const Personas: React.FC = () => {
  // Utils
  const { error, loading, personas } = usePersonas();

  // Render
  if (error) {
    return <ErrorAlert errorMessage={error?.message || 'Something went wrong'} />
  }

  return loading
    ? <Spinner animation="border" />
    : (
      <React.Suspense fallback={<Spinner animation="border" />}>
        <div style={{ float: 'right', paddingBottom: 10 }}>
          <Button href="/personas/crear">Crear Persona</Button>
        </div>
        <PersonasTable personas={personas} />
      </React.Suspense>
    );
};

export default Personas;
