import { OutlineButton } from "../../Globalstyles";
import SalmonImg from "../../images/salmon.png";
import ChickenImg from "../../images/Chicken.svg";
import PizzaImg from "../../images/Italian-pizza.svg";
import PastaImg from "../../images/Pasta.svg";
import SaladImg from "../../images/salad.png";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../services/user.service";

import {
  RecipeContainer,
  RecipeWrapper,
  RecipeTitle,
  RecipeContentContainer,
  RecipeTabContainer,
  RecipeBtn,
  RecipeCardWrapper,
  RecipeFeature,
  RecipeFeatureContent,
  RecipeFeatureTitle,
  RecipeFeatureText,
  RecipeFeatureDetails,
  RecipeFeatureItem,
  RecipeItemTitle,
  RecipeItemContent,
  RecipeItemIcon,
  RecipeItemText,
  RecipeCardSection,
  RecipeSmallCards,
  RecipeCard,
  RecipeCardContent,
  RecipeCardHeading,
  RecipeCardDetails,
  RecipeCardItems,
  RecipeCardTitle,
  RecipeCardItem,
  RecipeCardIcon,
  RecipeCardText,
  RecipeImg,
  Img,
  TestAja,
} from "./Recipes.styles";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");
const Recipes = () => {
  //   let subtitle;
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   const openModal = (id) => {
  //     UserService.getAvailableById(id).then((res) => {
  //       console.log(res.data);
  //     });
  //     setIsOpen(true);
  //   };

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }
  // const [currentUser, setCurrentUser] = useState(undefined);
  const [seninShow, setSeninShow] = useState(false);
  const [selasaShow, setSelasaShow] = useState(false);
  const [rabuShow, setRabuShow] = useState(false);
  const [kamisShow, setKamisShow] = useState(false);
  const [jumatShow, setJumatShow] = useState(false);
  const [sabtuShow, setSabtuShow] = useState(false);
  const [mingguShow, setMingguShow] = useState(false);
  const [senin, setSenin] = useState(undefined);
  const [selasa, setSelasa] = useState(undefined);
  const [rabu, setRabu] = useState(undefined);
  const [kamis, setKamis] = useState(undefined);
  const [jumat, setJumat] = useState(undefined);
  const [sabtu, setSabtu] = useState(undefined);
  const [minggu, setMinggu] = useState(undefined);
  const [product, setProduct] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    var date = new Date();
    var hari = date.getDay();
    switch (hari) {
      case 0:
        hari = "Minggu";
        break;
      case 1:
        hari = "Senin";
        break;
      case 2:
        hari = "Selasa";
        break;
      case 3:
        hari = "Rabu";
        break;
      case 4:
        hari = "Kamis";
        break;
      case 5:
        hari = "Jumat";
        break;
      case 6:
        hari = "Sabtu";
        break;
    }
    if (hari == "Minggu") {
      setSeninShow(true);
      setSelasaShow(true);
      setRabuShow(true);
      setKamisShow(true);
      setJumatShow(true);
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Senin") {
      setSelasaShow(true);
      setRabuShow(true);
      setKamisShow(true);
      setJumatShow(true);
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Selasa") {
      setRabuShow(true);
      setKamisShow(true);
      setJumatShow(true);
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Rabu") {
      setKamisShow(true);
      setJumatShow(true);
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Kamis") {
      setJumatShow(true);
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Jumat") {
      setSabtuShow(true);
      setMingguShow(true);
    } else if (hari == "Sabtu") {
      setMingguShow(true);
    }
    // const user = AuthService.getCurrentUser();
    UserService.getProducts().then(
      (response) => {
        console.log(response.data[0].PictureUrl);
        setProduct(response.data);
        console.log("coba lagi", product);
      },
      (error) => {
        if (error.response.data.code === 401) {
          localStorage.removeItem("user");
          history.push("/");
        }

        console.log(error.response.data.code);
      }
    );
    // if (user) {
    //   setCurrentUser(user);
    //   // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //   // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    // }

    // const data = async () => {
    //   const response = await UserService.getProducts();
    // };
    UserService.getProductByDay("Senin").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setSenin(response.data);
    });
    UserService.getProductByDay("Selasa").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setSelasa(response.data);
    });
    UserService.getProductByDay("Rabu").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setRabu(response.data);
    });
    UserService.getProductByDay("Kamis").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setKamis(response.data);
    });
    UserService.getProductByDay("Jumat").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setJumat(response.data);
    });
    UserService.getProductByDay("Sabtu").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setSabtu(response.data);
    });
    UserService.getProductByDay("Minggu").then((response) => {
      console.log("apa hayo hasilnya: ", response);
      console.log(response.data ? "benar" : "tidak");
      setMinggu(response.data);
    });

    // if (data) {
    //   data().then((res) => console.log("kalau ini?", res));
    //   setProduct(data);
    //   console.log("ada ga sih", data);
    // }
  }, []);
  function addStr(str) {
    const stringToAdd = "w_500,h_500,c_thumb,r_max/";
    const index = 54;
    return (
      str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
  }
  const orderFood = (id, price) => {
    UserService.orderFood(id, price, 1).then((response) => {
      console.log("coba", response);
    });
  };
  return (
    <div>
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
      <RecipeWrapper>
        <RecipeContainer>
          <RecipeTitle>Menu</RecipeTitle>
          <RecipeContentContainer>
            {/* <RecipeTabContainer>
              <RecipeBtn to="/sea-food">
                <OutlineButton big bigFont bigRadius>
                  Sea Food
                </OutlineButton>
              </RecipeBtn>
              <RecipeBtn to="/Vegetarian">
                <OutlineButton big bigFont bigRadius>
                  Vegetarian
                </OutlineButton>
              </RecipeBtn>
              <RecipeBtn to="/meat">
                <OutlineButton big bigFont bigRadius>
                  Meat and Poultry
                </OutlineButton>
              </RecipeBtn>
              <RecipeBtn to="/easy-preps">
                <OutlineButton big bigFont bigRadius>
                  Easy meal preps
                </OutlineButton>
              </RecipeBtn>
            </RecipeTabContainer> */}
            <RecipeCardWrapper>
              {/* <RecipeFeature>
                <RecipeImg src={SalmonImg} alt="Salmon Recipe" />
                <RecipeFeatureContent>
                  <RecipeFeatureTitle>
                    Salmon and Hot Honey Butter
                  </RecipeFeatureTitle>
                  <RecipeFeatureText>
                    The hot honey kinda sounds like a hype name used before the
                    20s, (I used it back then). It’s a pefect coating for the
                    salmon to enrinch it with sweetness and heat.
                  </RecipeFeatureText>
                  <RecipeFeatureDetails>
                    <RecipeFeatureItem>
                      <RecipeItemTitle>Serving</RecipeItemTitle>
                      <RecipeItemContent>
                        <RecipeItemIcon />
                        <RecipeItemText>2</RecipeItemText>
                      </RecipeItemContent>
                    </RecipeFeatureItem>
                    <RecipeFeatureItem>
                      <RecipeItemTitle>Cook time</RecipeItemTitle>
                      <RecipeItemText>35-45 min</RecipeItemText>
                    </RecipeFeatureItem>
                    <RecipeFeatureItem>
                      <RecipeItemTitle>Difficulty level</RecipeItemTitle>
                      <RecipeItemText>20%</RecipeItemText>
                    </RecipeFeatureItem>
                  </RecipeFeatureDetails>
                </RecipeFeatureContent>
              </RecipeFeature> */}
              <RecipeCardSection>
                <TestAja>
                  {seninShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Senin</RecipeTitle>

                      {senin
                        ? senin.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                     <Img src={SaladImg} alt="Salad Recipe" />
                     <RecipeCardContent>
                       <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                       <RecipeCardDetails>
                         <RecipeCardItems>
                           <RecipeCardTitle>Serving</RecipeCardTitle>
                           <RecipeCardItem>
                             <RecipeCardIcon />
                             <RecipeCardText>2</RecipeCardText>
                           </RecipeCardItem>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Cook time</RecipeCardTitle>
                           <RecipeCardText>10-15 min</RecipeCardText>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                           <RecipeCardText>10%</RecipeCardText>
                         </RecipeCardItems>
                       </RecipeCardDetails>
                     </RecipeCardContent>
                   </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {selasaShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Selasa</RecipeTitle>

                      {selasa
                        ? selasa.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                    <Img src={SaladImg} alt="Salad Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>10-15 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>10%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {rabuShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Rabu</RecipeTitle>

                      {rabu
                        ? rabu.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                    <Img src={SaladImg} alt="Salad Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>10-15 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>10%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {kamisShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Kamis</RecipeTitle>

                      {kamis
                        ? kamis.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                    <Img src={SaladImg} alt="Salad Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>10-15 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>10%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {jumatShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Jumat</RecipeTitle>

                      {jumat
                        ? jumat.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                     <Img src={SaladImg} alt="Salad Recipe" />
                     <RecipeCardContent>
                       <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                       <RecipeCardDetails>
                         <RecipeCardItems>
                           <RecipeCardTitle>Serving</RecipeCardTitle>
                           <RecipeCardItem>
                             <RecipeCardIcon />
                             <RecipeCardText>2</RecipeCardText>
                           </RecipeCardItem>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Cook time</RecipeCardTitle>
                           <RecipeCardText>10-15 min</RecipeCardText>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                           <RecipeCardText>10%</RecipeCardText>
                         </RecipeCardItems>
                       </RecipeCardDetails>
                     </RecipeCardContent>
                   </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {sabtuShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Sabtu</RecipeTitle>

                      {sabtu
                        ? sabtu.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                    <Img src={SaladImg} alt="Salad Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>10-15 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>10%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {mingguShow == true ? (
                    <RecipeSmallCards>
                      <RecipeTitle>Minggu</RecipeTitle>

                      {minggu
                        ? minggu.map((item, index) => {
                            return (
                              <RecipeCard>
                                <Img
                                  src={addStr(item.PictureUrl)}
                                  alt="Chicken Recipe"
                                />
                                <RecipeCardContent>
                                  <RecipeCardHeading>
                                    {item.ProductName}
                                  </RecipeCardHeading>
                                  <RecipeCardDetails>
                                    {/* <RecipeCardItems>
                                      <RecipeCardTitle>Stock</RecipeCardTitle>
                                      <RecipeCardItem>
                                        <RecipeCardIcon />
                                        <RecipeCardText>
                                          {item.Stock}
                                        </RecipeCardText>
                                      </RecipeCardItem>
                                    </RecipeCardItems> */}
                                    <RecipeCardItems>
                                      <RecipeCardTitle>Price</RecipeCardTitle>
                                      <RecipeCardText>
                                        {item.Price}
                                      </RecipeCardText>
                                    </RecipeCardItems>
                                    <RecipeCardItems>
                                      <RecipeBtn>
                                        <OutlineButton
                                          onClick={() =>
                                            orderFood(item.ID, item.Price)
                                          }
                                          big
                                          bigFont
                                          bigRadius
                                        >
                                          Order
                                        </OutlineButton>
                                      </RecipeBtn>
                                    </RecipeCardItems>
                                  </RecipeCardDetails>
                                </RecipeCardContent>
                              </RecipeCard>
                            );
                          })
                        : "loading"}
                      {/* <RecipeCard>
                     <Img src={SaladImg} alt="Salad Recipe" />
                     <RecipeCardContent>
                       <RecipeCardHeading>Sesame Asian Salad</RecipeCardHeading>
                       <RecipeCardDetails>
                         <RecipeCardItems>
                           <RecipeCardTitle>Serving</RecipeCardTitle>
                           <RecipeCardItem>
                             <RecipeCardIcon />
                             <RecipeCardText>2</RecipeCardText>
                           </RecipeCardItem>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Cook time</RecipeCardTitle>
                           <RecipeCardText>10-15 min</RecipeCardText>
                         </RecipeCardItems>
                         <RecipeCardItems>
                           <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                           <RecipeCardText>10%</RecipeCardText>
                         </RecipeCardItems>
                       </RecipeCardDetails>
                     </RecipeCardContent>
                   </RecipeCard> */}
                    </RecipeSmallCards>
                  ) : (
                    <div />
                  )}

                  {/* <RecipeSmallCards>
                  <RecipeCard>
                    <Img src={PizzaImg} alt="Pizza Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>
                        Italian Pizza with Cheese
                      </RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>30-45 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>20%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard>
                  <RecipeCard>
                    <Img src={PastaImg} alt="Pasta Recipe" />
                    <RecipeCardContent>
                      <RecipeCardHeading>
                        Pasta with creamy sause
                      </RecipeCardHeading>
                      <RecipeCardDetails>
                        <RecipeCardItems>
                          <RecipeCardTitle>Serving</RecipeCardTitle>
                          <RecipeCardItem>
                            <RecipeCardIcon />
                            <RecipeCardText>2</RecipeCardText>
                          </RecipeCardItem>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Cook time</RecipeCardTitle>
                          <RecipeCardText>10-15 min</RecipeCardText>
                        </RecipeCardItems>
                        <RecipeCardItems>
                          <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                          <RecipeCardText>10%</RecipeCardText>
                        </RecipeCardItems>
                      </RecipeCardDetails>
                    </RecipeCardContent>
                  </RecipeCard>
                </RecipeSmallCards> */}
                </TestAja>
              </RecipeCardSection>
            </RecipeCardWrapper>
          </RecipeContentContainer>
        </RecipeContainer>
      </RecipeWrapper>
    </div>
  );
};

export default Recipes;
