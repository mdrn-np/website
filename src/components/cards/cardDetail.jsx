import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import "../../App.css";

export default function CardDetail({ title, text, image }) {
  return (
    <Tilt glareBorderRadius='8px' glareEnable glareColor='#3C1874' tiltMaxAngleX={"12"} tiltMaxAngleY={"12"}>
      <div className="about card relative group rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm  p-4 sm:p-8 overflow-hidden">
        <div className="custom flex flex-col items-center space-y-4">
          <div className="w-20 h-20 shadow-md rounded-md overflow-hidden">
            <img src={image} alt="logos here" className='p-3'/>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-400">{text}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

CardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};