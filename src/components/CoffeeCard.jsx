import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, category, quantity, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleted");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side gap-4 items-center bg-[#f5f4f1] text-black p-6">
      <figure>
        <img className="h-72 w-48" src={photo} alt="Coffee" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-rancho text-2xl">{name}</h2>
        <p>{supplier}</p>
        <p>{category}</p>
        <p>${quantity}</p>
      </div>
      <div className="p-2">
        <div className="space-y-2 flex flex-col">
          <Link
            to={`/coffeeDetails/${_id}`}
            className="btn bg-amber-400 text-white"
          >
            <button>View</button>
          </Link>
          <Link className="btn bg-black text-white" to={`/updateCoffee/${_id}`}>
            <button>Edit</button>
          </Link>
          <Link className="btn btn-error text-white">
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
