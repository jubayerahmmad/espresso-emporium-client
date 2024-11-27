import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, taste, category, details, quantity, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      supplier,
      taste,
      category,
      details,
      quantity,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="my-6 lg:w-10/12 mx-auto space-y-4">
      <Link to="/" className="text-2xl font-rancho flex items-center gap-2">
        <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home
      </Link>
      <div className="bg-[#F4F3F0] p-8 lg:p-16">
        <div className="text-center space-y-4 my-6">
          <h1 className="font-rancho text-4xl font-bold text-orange-950">
            Update Existing Coffee Details
          </h1>
          <p className="font-poppins lg:px-4">
            Update your existing coffee details to keep your collection fresh
            and up-to-date.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Coffee Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                defaultValue={name}
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Available Quantity
                </span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                defaultValue={quantity}
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                defaultValue={supplier}
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Taste
                </span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Category
                </span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Details
                </span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered rounded-none"
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text font-semibold font-poppins">
                  Photo
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                defaultValue={photo}
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block bg-[#E3B577] my-6 rounded-none font-rancho text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
