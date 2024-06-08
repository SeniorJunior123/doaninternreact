import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
import { useDispatch } from "react-redux";

function CaChuot(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("Cá Chuột");
  const [hotcc, setHotcc] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/${name}`
        );
        setHotcc(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale">
      <div className="hotsale">
        <h2>{name}</h2>
        {hotcc ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotcc)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default CaChuot;
