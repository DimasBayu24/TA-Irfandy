import { useEffect } from "react";
import { Works, Welcome, Recipes, Meals } from "../../components";
import {
  HeroContainer,
  HeroContainerHome,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "../../components/Hero/Hero.styles";
import Navbar from "../../components/Navbar/Navbar";
import { Button } from "../../Globalstyles";
function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log("apa hayo nilainya hihih", user);
  }, []);
  return (
    <div>
      <HeroContainerHome>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Healthy</HeroTitleText>
              <HeroTitleText>Meals All Day</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>For a longer Life</HeroSubTitle>
            <HeroText>
              Get a fresh and tasty recepies that are well balanced and will
              improve your wellness, plus add nutrients to your body.
            </HeroText>
            <HeroBtn to="/order-now">
              <Button primary big bigFont bigRadius>
                Pick your meals
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainerHome>
      <Works />
      <Welcome />
      <Recipes />
      <Meals />
    </div>
  );
}

export default Home;
