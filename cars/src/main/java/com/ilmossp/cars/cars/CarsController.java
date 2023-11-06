package com.ilmossp.cars.cars;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/Cars")
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT,
RequestMethod.OPTIONS})
public class CarsController {
    @Autowired
    CarService carService;

    @GetMapping(path = "")
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping(path="/{id}")
    public Car getCarById(Integer id){
        return carService.getCarById(id);
    }

    @PostMapping(path = "")
    public Car addCar(@RequestBody Car car){
        return carService.addCar(car);
    }

    @PutMapping(path = "")
    public Car updateCar(@RequestBody Car car){
        return carService.updateCar(car);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteCar(Integer id){
         carService.deleCarByID(id);
    }

}
