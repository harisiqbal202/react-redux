import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { fetchProduct, postData } from "../api/data";

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
  });

  useEffect(() => {
    console.log(fetchProduct());
  }, []);

  const handleChange = (e) => {
    setProduct((product) => ({
      ...product,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    postData(product);
    setProduct({ name: "", price: "", qty: "" });
  };

  return (
    <>
      <Form className=" mx-5 my-1" onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleChange}
          />
          <Label>Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            name="qty"
            placeholder="Quantity"
            type="text"
            onChange={handleChange}
          />
          <Label for="exampleqty">Quantity</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            name="price"
            placeholder="Price"
            type="text"
            onChange={handleChange}
          />
          <Label for="exampleqty">Price</Label>
        </FormGroup>{" "}
        <Button>Submit</Button>
        <Button
          className="mx-1"
          onClick={() => {
            navigate("./list");
          }}
        >
          Show list
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
