// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg1 from "../../assets/bg1.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import NavBar from "../NavBar/NavBar";

export default function Swiper1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {" "}
        <SwiperSlide>
          <img src={bg4} style={{ width: "100%", height: "700px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg3} style={{ width: "100%", height: "700px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg2} style={{ width: "100%", height: "700px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg5} style={{ width: "100%", height: "700px" }} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={bg1} style={{ width: "100%", height: "700px" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
