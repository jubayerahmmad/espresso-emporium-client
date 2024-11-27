import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// 1. https://i.ibb.co.com/5s1tWm2/1.png
// 2. https://i.ibb.co.com/3F0yZwJ/2.png
// 3. https://i.ibb.co.com/smYQ49c/3.png
// 4. https://i.ibb.co.com/tP50vvc/4.png
// 5. https://i.ibb.co.com/DfrYhHg/5.png
// 6. https://i.ibb.co.com/84c3tkN/6.png
// 7. https://i.ibb.co.com/QDHKBBf/16.png

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      supplier,
      taste,
      category,
      details,
      quantity,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
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
            Add New Coffee
          </h1>
          <p className="font-poppins lg:px-4">
            Add your new coffee to our collection!
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
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
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#E3B577] my-6 rounded-none font-rancho text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
