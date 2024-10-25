import { memberList } from "../../data/data";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "../../App.css";

const socialIcons = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  github: <FaGithub />,
};

function MembersCard({ name, pfp, post, socials }) {
  return (
    <div className="card relative group rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 sm:p-8 overflow-hidden flex flex-col justify-center items-center border-2 border-gray-300 cursor-none">
      <img
        src={pfp}
        alt=""
        className="w-40 h-40 object-cover rounded-full border-4 border-secondary m-4"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <h3 className="font-bold text-secondary">{post}</h3>
      <div>
        {socials.map((item) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
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
      <div>
        <h1 className="heading text-center my-8 block sm:hidden">Our Team !</h1>
        <h1 className="heading text-center my-8 hidden sm:block">
          Meet the team behind the club!
        </h1>
      </div>
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
        className="members"
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
