import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";
import './home2.css';
const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home2bg">
    <div>
      <div className="containerss mt-3">
        <div className="rowss">
          <div className="colss-md-12">
            <div className="cardss">
              
                <h1>ADD STUDENT RESULT</h1>

              <div className="cardss-body">
                <table class="tabless">
                  <thead>
                    <tr>
                      <th scope="colss">ID</th>
                      <th scope="colss">REG NO</th>
                      <th scope="colss">NAME</th>
                      <th scope="colss">SUB1</th>
                      <th scope="colss">SUB2</th>
                      <th scope="colss">SUB3</th>
                      <th scope="colss">SUB4</th>
                      <th scope="colss">SUB5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className="tabss">
                        <td>{num + 1}</td>
                        <td>{p.reg}</td>
                        <td>{p.name}</td>
                        <td>{p.sub1}</td>
                        <td>{p.sub2}</td>
                        <td>{p.sub3}</td>
                        <td>{p.sub4}</td>
                        <td>{p.sub5}</td>
                        <td>
                        <button  className="btnss btn-sm btn-danger ms-1">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btnss btn-dark">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Home;