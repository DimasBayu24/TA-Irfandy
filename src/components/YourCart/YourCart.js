import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksCardContent,
  WorksCard,
  WorksIconContainer,
  WorksIcon1,
  WorksIcon2,
  WorksIcon3,
  WorksCardTitle,
  WorksCardText,
} from "./yourCart.styles";
import { useHistory } from "react-router-dom";

import UserService from "../../services/user.service";
import { useEffect, useState } from "react";
const YourCarts = () => {
  const history = useHistory();

  const [cart, setCart] = useState(undefined);
  useEffect(() => {
    dateParsing();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      history.push("/");
    } else {
      UserService.getAllOrderById(user.ID).then(
        (response) => {
          setCart(response.data);
          console.log(response.data);
        },
        (error) => {
          if (error.response.data.code === 401) {
            localStorage.removeItem("user");
            history.push("/");
          }

          console.log(error.response.data.code);
        }
      );
    }
  }, []);
  const dateParsing = (d) => {
    var d = new Date();
    console.log(d);
    console.log(d.getDate());
    console.log(d.getMonth());
    console.log(d.getFullYear());
  };
  return (
    <div>
      <WorksContent>
        <WorksContainer>
          <WorksTitle> Your Cart</WorksTitle>
          <WorksCardContent>
            {cart
              ? cart.map((item, index) => {
                  return (
                    <WorksCard onClick={() => console.log("tes")}>
                      {/* <WorksIconContainer>
                        <WorksIcon1 className="Icon" />
                      </WorksIconContainer> */}
                      <WorksCardTitle>Harga: {item.TotalPrice}</WorksCardTitle>
                      <WorksCardText>
                        Tanggal Order: {item.OrderDate.slice(0, 10)}
                      </WorksCardText>
                      <WorksCardText>
                        {item.OrderItem.length} item
                        {item.OrderItem.length == 1 ? "" : "s"}
                      </WorksCardText>
                      <WorksCardText>
                        {item.Status == "Not Done"
                          ? "Belum Membayar"
                          : "Selesai"}
                      </WorksCardText>
                    </WorksCard>
                  );
                })
              : "No data"}
          </WorksCardContent>
        </WorksContainer>
      </WorksContent>
    </div>
  );
};

export default YourCarts;
