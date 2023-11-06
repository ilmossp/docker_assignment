package com.ilmossp.cars.cars;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    private CarRepo carRepo;

    public List<Car> getAllCars(){
        return carRepo.findAll();
    }

    public Car getCarById(Integer id){
        return carRepo.findById(id).orElse(null);
    }

    public Car addCar(Car car){
        return carRepo.save(car);
    }

    public Car updateCar(Car car){
        Car existingCar = carRepo.findById(car.getId()).orElse(null);
        existingCar.setAnnee(car.getAnnee());
        existingCar.setCouleur(car.getCouleur());
        existingCar.setModele(car.getModele());
        existingCar.setPrix(car.getPrix());
        existingCar.setMarque(car.getMarque());
        return carRepo.save(existingCar);
    }

    public void deleCarByID(Integer id){
            carRepo.deleteById(id);
    }

}
