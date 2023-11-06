import { useSubmit } from "react-router-dom";
import { Car } from "../utils/types";
import { Pencil, Trash } from "@phosphor-icons/react";
import { deleteCar, getCars } from "../utils/api";
import { useQueryClient, useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";

const CarList = () => {
  const { data, isSuccess } = useQuery("getCars", getCars);
  const submit = useSubmit();
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCar, {
    onSuccess: () => {
      queryClient.invalidateQueries("getCars");
      toast.success("car deleted successfully");
    },
    onError: () => {
      toast.error("an error has occured");
    },
  });
  const handleEdit = (elem: Car) => {
    submit(null, {
      method: "patch",
      action: `/edit/${elem.id}`,
    });
  };
  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };
  return (
    <div className="flex flex-col justify-center items-center card rounded-md shadow-sm mt-20 w-1/2 mx-auto p-4 bg-base-100">
      <h1 className="card-title">List of Cars</h1>
      <div className="m-auto text-center card-body overflow-scroll">
        {isSuccess && data?.length != 0 ? (
          <table className="table table-zebra ">
            <thead>
              <tr>
                <th>Marque</th>
                <th>Modele</th>
                <th>Couleur</th>
                <th>Annee</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.marque}</td>
                    <td>{elem.modele}</td>
                    <td>{elem.couleur}</td>
                    <td>{elem.annee}</td>
                    <td>{elem.prix}</td>
                    <th>
                      <button
                        className="btn btn-ghost"
                        onClick={(e) => {
                          e.preventDefault;
                          handleEdit(elem);
                        }}
                      >
                        <Pencil size={32} className="fill-primary" />
                      </button>
                      <button
                        className="btn btn-ghost btn-secondary"
                        onClick={(e) => {
                          e.preventDefault;
                          handleDelete(elem.id as number);
                        }}
                      >
                        <Trash size={32} className="fill-red-400" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="text-3xl">There are no cars at the moment</h1>
        )}
      </div>
    </div>
  );
};

export default CarList;
