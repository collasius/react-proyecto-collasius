import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./BuyComponent.css"

const collectionOrders = "orders";

const BuyComponent = () => {
  const { car,cleanCar } = useContext(GeneralContext);
  const navigate = useNavigate();

  const _totalCompra = useMemo(() => {
    return car.reduce((partialSum, item) => partialSum + item.price, 0);
  }, [car]);

  const _order = useMemo(() => {
    const items = car.map((item) => ({ item, amount: 1 }));
    const date = new Date().toLocaleDateString("es-AR");
    return { items, date };
  }, [car]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`Compra realizada, su numero de orden es: ${id}`);
      cleanCar();
      navigate("/");
    });
  };

  return (
    <Fragment>
        <div className="contenido-Resumen">
            <div className="resumen-titulo">
              <h3>Resumen de compra</h3>
            </div>
                <p><b>Cantidad: </b>{" "+car.length+" "} Unidades</p>
                <p className="resumenTotal"><b>Total: </b>${_totalCompra}</p>
                <button className="boton-comprar" disabled={car.length === 0} onClick={actionBuy}>
                  Comprar
                </button>
        </div>
    </Fragment>
  );
};

export default BuyComponent;