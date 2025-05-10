
  
const CardComponent = ({ image, name, offer, destinations, className }) => {
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        
        <img src={image} alt={name} className="w-full h-full object-cover" />
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none z-10"></div>
  
        
        <div className="absolute bottom-2 left-2 text-white text-xs z-20">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <h2 className="text-white text-3xl font-bold">{offer}</h2>
          <p className="text-white mt-1 text-sm">{destinations} Destinations</p>
        </div>
      </div>
    );
  };
  
  export default CardComponent;
  