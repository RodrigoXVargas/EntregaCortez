package com.example.instrumentosback.services;

import com.example.instrumentosback.entities.Persona;
import com.example.instrumentosback.repositories.RepositoryBase;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ServicePersonaImpl extends ServiceBaseImpl<Persona, Long> implements ServicePersona {

    public ServicePersonaImpl(RepositoryBase<Persona, Long > repositoryBase ) {
        super( repositoryBase );
    }



}
