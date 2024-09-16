export default function CardDetail({ title, text, image }) {
  return (
    <div className="relative group rounded-lg shadow-sm bg-gray-200 cursor-pointer p-4 sm:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-br from-additional to-transparent group-hover:opacity-50 opacity-50 transition-all duration-300"></div>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={image}
            alt="Insert Image"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-britrSec">{text}</p>
        </div>
      </div>
    </div>
  );
}
