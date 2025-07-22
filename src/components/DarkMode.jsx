import iconmorty from "../assets/iconmorty.png";
import iconrick from "../assets/iconrick.png";

function DarkMode({ setTheme, theme }) {
  const handleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const imgSrc = theme === "dark" ? iconmorty : iconrick;
  const tooltipText = theme === "dark" ? "Mode Morty" : "Mode Rick";
  return (
    /*   flex items-center w-[10%] */
    <div className="flex items-center justify-center">
      {/*  */}
      {/* <p>Elije a</p> */}
      <button
        onClick={handleDarkMode}
        className="
       group relative
       transition-transform duration-200 hover:scale-110 cursor-pointer 

      sm:py-10 sm::text-2xl
        md:py-3  md:text-3xl  
        lg:py-4  lg:text-4xl 
         lg:ml-8 md:ml-5
       "
      >
        <img
          src={imgSrc}
          /* alt={theme === 'dark' ? "Rick Mode" : "Morty Mode"} */
          /* style={{ width: "30px", height: "30px" }} */
          className="w-10 h-auto sm:w-10  md:w-17 "
        />
        {/* Tooltip */}
        <span
          className="absolute bottom-[80%] left-1/2 transform -translate-x-1/2 mb-2
          bg-gray-900 text-white text-sm rounded-lg py-2 px-3 opacity-0 
          group-hover:opacity-100 transition-opacity duration-300
          whitespace-nowrap z-50 pointer-events-none"
        >
          {tooltipText}
          {/* Flecha del tooltip */}
          <span
            className="absolute top-full left-1/2 transform -translate-x-1/2
           border-4 border-transparent border-t-gray-900"
          ></span>
        </span>
      </button>
    </div>
  );
}

export default DarkMode;
