import * as React from 'react';

import Persona from '../types/persona';
import DataLayerGeneric from '../lib/data-layerGeneric';

interface PersonasState {
  loading: boolean;
  error: any;
  personas: Persona[];
}

export default function usePersonas() {
  // State
  const [personasState, setPersonasState] = React.useState<PersonasState>({ loading: false, error: null, personas: [] });

  // Effects
  React.useEffect(() => {
    async function fetchPersonas() {
      try {
        // Show spinner before fetching
        setPersonasState({ loading: true, error: null, personas: [] });
        // Fetch personas from our bff endpoint
        const personas = await DataLayerGeneric.fetch.entidades();
        setPersonasState({ loading: false, error: null, personas });
      } catch (error: any) {
        setPersonasState({ loading: false, error, personas: [] });
      }
    }

    fetchPersonas();
  }, []);

  return personasState;
}