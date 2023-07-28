import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";
import './EditProduct.css';
const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    reg:"",
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
    sub4:"",
    sub5:""
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/return");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="editbg">
      <div className="containerEdit mt-3">
        <div className="rowEdit">
          <div className="colEdit-md-6 offset-md-3">
            <div className="cardEdit">
              <div className="cardEdit-header fs-3 text-center">UPDATE</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="cardEdit-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Id</label>
                    <input
                      type="numbers"
                      name="id"
                      className="formEdit-control"
                      onChange={(e) => handleChange(e)}
                      value={product.id}
                    />
                  </div>
                  <div className="mb-3">
                  <label>REG NO</label>
                  <input
                    type="number"
                    name="reg"
                    className="formEdit-control"
                    onChange={(e) => handleChange(e)}
                    value={product.reg}
                  />
                </div>
                  <div className="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="formEdit-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                <label>SUBJECT 1</label>
                <input
                  type="number"
                  name="sub1"
                  className="formEdit-control"
                  onChange={(e) => handleChange(e)}
                  value={product.sub1}
                />
              </div>

              <div className="mb-3">
              <label>SUBJECT 2</label>
              <input
                type="number"
                name="sub2"
                className="formEdit-control"
                onChange={(e) => handleChange(e)}
                value={product.sub2}
              />
            </div>

            <div className="mb-3">
            <label>SUBJECT 3</label>
            <input
              type="number"
              name="sub3"
              className="formEdit-control"
              onChange={(e) => handleChange(e)}
              value={product.sub3}
            />
          </div>
          <div className="mb-3">
                <label>SUBJECT 4</label>
                <input
                  type="number"
                  name="sub4"
                  className="formEdit-control"
                  onChange={(e) => handleChange(e)}
                  value={product.sub4}
                />
              </div>
              <div className="mb-3">
                <label>SUBJECT 5</label>
                <input
                  type="number"
                  name="sub5"
                  className="formEdit-control"
                  onChange={(e) => handleChange(e)}
                  value={product.sub5}
                />
              </div>
                  <button className="glowEdit-hover5">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default EditProduct;