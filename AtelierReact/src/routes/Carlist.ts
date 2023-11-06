import { Car } from "../utils/types"

export const loader = ():Car[] => {
	return [{
		"id":1,
		"marque":"Renault",
		"modele": "Clio",
		"annee": "2007",
		"couleur":"bleu",
		"prix":30000
	}]
}
