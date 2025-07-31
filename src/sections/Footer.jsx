import { socialImgs } from "../constants";

const Footer = () => {
  return (
   <footer className="footer">
  <div className="footer-container">
    
    <div className="flex flex-col justify-center">
      {/* Puedes agregar aquí texto o info adicional */}
    </div>
    
    <div className="socials flex gap-4 justify-center">
      {socialImgs.map((socialImg, index) => (
        <div key={index} className="icon">
          {socialImg.url ? (
            <a href={socialImg.url} target="_blank" rel="noopener noreferrer">
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-8 h-8"
              />
            </a>
          ) : (
            <img
              src={socialImg.imgPath}
              alt={`${socialImg.name} icon`}
              className="w-8 h-8 opacity-50"
              title="Sin enlace disponible"
            />
          )}
        </div>
      ))}
    </div>
    
    <div className="flex flex-col justify-center">
      <p className="text-center md:text-end">
        {/* Puedes agregar texto de copyright u otro */}
      </p>
    </div>
    
  </div>
</footer>

  );
};

export default Footer;
