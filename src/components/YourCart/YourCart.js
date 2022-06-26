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
import "../../App.css";
import { UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Button, Modal, UploadProps, Upload, message } from "antd";

import UserService from "../../services/user.service";
import { useEffect, useState } from "react";

const YourCarts = () => {
  const props = {
    name: "file",
    action: "http://localhost:8080/upload",
    headers: {
      authorization: "authorization-text",
    },
    withCredentials: true,

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        console.log("tes dulu brodi ", info.file.response.data.data);
        setUrl(info.file.response.data.data);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [cart, setCart] = useState(undefined);
  const [currentOrder, setCurrentOrder] = useState(undefined);
  const [url, setUrl] = useState(undefined);
  const [orderItem, setOrderItem] = useState(undefined);
  const [todayDate, setTodayDate] = useState(new Date());
  const showModal = (id) => {
    UserService.getOrderItemByOrderId(id).then(
      (response) => {
        console.log(response.data);
        setOrderItem(response.data);
        setCurrentOrder(id);
      },
      (error) => {
        console.log(error);
      }
    );

    setIsModalVisible(true);
  };

  const handleOk = () => {
    UserService.paymentUrl(currentOrder, url).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
    const a = new Date();
    let text = a.toISOString().split("T")[0];
    console.log(text);
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
                    <WorksCard onClick={() => showModal(item.ID)}>
                      {/* <WorksIconContainer>
                        <WorksIcon1 className="Icon" />
                      </WorksIconContainer> */}
                      <WorksCardTitle>Harga: {item.TotalPrice}</WorksCardTitle>
                      <WorksCardText>
                        Tanggal Order: {item.OrderDate.slice(0, 10)}
                      </WorksCardText>
                      <WorksCardText>
                        {/* {item.OrderItem.length} item
                        {item.OrderItem.length == 1 ? "" : "s"} */}
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
      <Modal
        title="Pesanan anda"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {orderItem
          ? orderItem.map((item) => {
              return (
                <p>
                  {item.ProductName} {item.Quantity}
                </p>
              );
            })
          : "loading..."}

        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Unggah Bukti Pembayaran</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default YourCarts;
