import axios from 'axios'
import { Car } from './types'

axios.defaults.baseURL = "http://backend:8080"


export async function getCars(): Promise<Car[]>{
	const {data} = await axios.get("/Cars")
	return data

}

export async function addCar(body:Car){
	const {data} = await axios.post("/Cars",body)
	return data
}

export async function editCar(body:Car){
	console.log(body)
	const {data} = await axios.put("/Cars",body)
	return data
}

export async function deleteCar(id:number){
	const {data} = await axios.delete(`/cars/${id}`)
	return data
}
