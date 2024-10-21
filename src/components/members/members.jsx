import { memberList } from "../../data/data";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "./members.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const socialIcons = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  github: <FaGithub />,
};

function MembersCard({ name, pfp, post, socials }) {
  return (
    <div className="detailContainer w-auto rounded-xl p-2 pb-4 flex flex-col justify-center items-center border-2 border-gray-300 shadow-lg bg-gray-100 bg-clip-padding bg-opacity-10  backdrop-filter backdrop-blur-sm">
      <img
        src={pfp}
        alt=""
        className="w-40 rounded-full border-4 border-secondary m-4"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <h3 className="font-bold text-secondary">{post}</h3>
      <div>
        {socials.map((item) => {
          return (
            <a href={item.link} target="_blank">
              {socialIcons[item.name]}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <div className="my-24">
      <h1 className="heading text-center my-8">
        Meet the team behind the club
      </h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
      >
        {memberList.map((memberInfo) => {
          const { name, icon, post, socials } = memberInfo;
          return (
            <SwiperSlide>
              <MembersCard
                name={name}
                pfp={icon}
                post={post}
                socials={socials}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
