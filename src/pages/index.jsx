import { HomePageWrapper } from "@/components/home/Home.styled";
import HomeDescription from "@/components/home/HomeDescription/HomeDescriptrion";
import HomePhoto from "@/components/home/HomePhoto/HomePhoto";
import HomeTags from "@/components/home/HomeTags/HomeTags";
import Navbar from "@/components/NavBar/Navbar";

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Navbar />
            <HomePhoto />
            <HomeDescription />
            <HomeTags/>
        </HomePageWrapper>
    );
}

export default HomePage;