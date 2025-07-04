import heartIcon from "../assets/heart.svg";
import redHeartIcon from "../assets/red-heart.svg";

export const ProductCard = ({ product, onToggleLike, isAuthenticated }) => {
  return (
    <div className="bg-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-85 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.isNew && (
          <span className="font-simplon absolute top-2 left-2 bg-white text-black text-xs sm:text-sm font-bold px-2 py-1 rounded transform transition-all duration-300 hover:scale-105 shadow-sm">
            NEW PRODUCT
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
            <div className="font-simplon bg-white w-full text-center text-sm sm:text-lg font-bold py-3 uppercase tracking-wider transform transition-all duration-500 animate-pulse">
              OUT OF STOCK
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10"></div>
      </div>

      <div className="relative space-y-2 bg-white rounded-md transition-all duration-300 mb-2 px-1 sm:px-2">
        <div className="pr-8 sm:pr-10">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-snug tracking-tight transition-colors duration-300 group-hover:text-gray-700 line-clamp-2">
            {product.name}
          </h3>
          <div className="pt-1">
            {isAuthenticated ? (
              <span className="font-simplon text-sm sm:text-base font-semibold text-[#252020] transition-colors duration-300 group-hover:text-black">
                ${product.price}
              </span>
            ) : (
              <span className="font-simplon text-[#888792] text-xs sm:text-sm">
                <span className="underline cursor-pointer transition-all duration-300 hover:text-gray-700 hover:decoration-2">
                  Sign in
                </span>{" "}
                or create an account to see pricing
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onToggleLike(product.id)}
          className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-white transition-all duration-300 hover:bg-gray-50 rounded-full p-1.5 sm:p-2 hover:shadow-md transform hover:scale-110 active:scale-95"
        >
          <img
            src={product.isLiked ? redHeartIcon : heartIcon}
            alt="heart-icon"
            className={`w-4 h-4 sm:w-5 sm:h-5 cursor-pointer transition-all duration-300 ${
              product.isLiked 
                ? "transform scale-110 animate-pulse" 
                : "hover:scale-110"
            }`}
          />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
};