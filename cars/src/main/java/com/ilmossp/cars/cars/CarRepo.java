package com.ilmossp.cars.cars;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CarRepo extends CrudRepository<Car,Integer>{
    List<Car> findAll();
} 
