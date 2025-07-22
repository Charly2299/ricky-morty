function Location({ dataLocation }) {
  return (
    <div
      className="location__box
     max-w-6xl mx-auto w-11/12 p-8 rounded-2xl
flex flex-col 
    bg-prnd text-pr-morty
    dark:bg-prnd dark:text-pr-rick

    "
    >
      <div
        className="location__container
flex justify-center px-1
"
      >
        <h2
          className="location__tittle
          font-bold
          text-3xl
         sm:text-3xl
         md:text-4xl  
         lg:text-5xl
      text-center
      "
        >
          {dataLocation?.name}
        </h2>
      </div>

      <div
        className="location__items 
     flex  flex-row sm:flex-col justify-center align-items mt-10 
      "
      >
        <ul
          className="location__list
       flex flex-col lg:flex-row gap-5 
       justify-center lg:justify-between
       sm:text-2xl
      md:text-3xl 
      lg:text-4xl
       text-2xl"
        >
          <li
            className="flex flex-col  align-items justify-center
         
          "
          >
            <p className="flex justify-center">Type</p>
            <p className="flex justify-center font-bold">
              {dataLocation?.type}
            </p>
          </li>

          <li
            className="flex flex-col gap-4 align-items justify-center
        
          "
          >
            <p className="flex justify-center">Dimension</p>
            <p className="flex justify-center font-bold text-center">
              {dataLocation?.dimension}
            </p>
          </li>

          <li
            className="flex flex-col gap-2 align-items justify-center
          
          "
          >
            {" "}
            <p className="flex justify-center">Population</p>
            <p className="flex justify-center font-bold">
              {dataLocation?.residents?.length}
            </p>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Location;
