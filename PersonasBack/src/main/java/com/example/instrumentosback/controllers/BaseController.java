package com.example.instrumentosback.controllers;

import com.example.instrumentosback.entities.Base;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.Serializable;

public interface BaseController <E extends Base, ID extends Serializable> {

    public ResponseEntity<?> getAll();

    public ResponseEntity<?> getOne(@PathVariable ID id);

    public ResponseEntity<?> saveOne(@RequestBody E entity) throws Exception;

    public ResponseEntity<?> updateOne(@PathVariable ID id, @RequestBody E entity);

    public ResponseEntity<?> deleteById(@PathVariable ID id);
}
