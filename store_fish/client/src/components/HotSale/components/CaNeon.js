import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../untils/index";
import { useDispatch } from "react-redux";

function CaNeon(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("Cá Neon");
  const [hotcn, setHotcn] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/${name}`
        );
        setHotcn(data);
      } catch (error) {}
    }
    FetchApi();
  }, []);

  return (
    <section id="hotsale">
      <div className="hotsale">
        <h2>{name}</h2>
        {hotcn ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotcn)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default CaNeon;
