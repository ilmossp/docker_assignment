import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addCar, editCar } from "../utils/api";
import { toast } from "react-hot-toast";
import { useActionData } from "react-router-dom";
import { Car } from "../utils/types";

type FormValues = {
  modele: string;
  marque: string;
  couleur: string;
  prix: number;
  annee: string;
};

const CarForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const actionData = useActionData();
  const editMutation = useMutation(editCar, {
    onSuccess: () => {
      toast.success("edited successfully");
    },
    onError: () => {
      toast.error("an error has occured");
    },
  });
  const addmutation = useMutation(addCar, {
    onSuccess: () => {
      toast.success("car added successfully");
    },
    onError: () => {
      toast.error("an error has occured");
    },
  });
  const onSubmit = handleSubmit((data: Car) => {
    if (actionData) {
      editMutation.mutate({
        id: actionData as number,
        modele: data.modele,
        prix: data.prix,
        couleur: data.couleur,
        annee: data.annee,
        marque: data.marque,
      });
    } else {
      addmutation.mutate(data);
    }
  });
  return (
    <form
      className="bg-base-100 p-5 rounded-md flex justify-around w-1/2 mx-auto mt-10"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <div className="form-control">
          <label htmlFor="">Modele</label>
          <input
            {...register("modele")}
            type="text"
            name="modele"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Marque</label>
          <input
            {...register("marque")}
            type="text"
            name="marque"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Annee</label>
          <input
            {...register("annee")}
            type="text"
            name="annee"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="form-control">
          <label htmlFor="">Couleur</label>
          <input
            {...register("couleur")}
            type="text"
            name="couleur"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Prix</label>
          <input
            {...register("prix")}
            type="number"
            name="prix"
            className="input input-bordered"
          />
        </div>
        <button className="btn btn-primary">
          {actionData ? "Edit" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CarForm;
