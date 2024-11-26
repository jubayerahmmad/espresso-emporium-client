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
    <div className="my-6">
      <h2 className="font-bold text-4xl text-center my-4">Add Coffee</h2>
      <form className="bg-cyan-900 p-16" onSubmit={handleAddCoffee}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-cyan-500 text-white my-6"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
