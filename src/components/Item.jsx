import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

import Portal from "../assets/portalchico.png";

function Item({ url, setOpen, setModalData }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const { data, fetchData, loading } = useFetch();
  useEffect(() => {
    fetchData(url);
    setImgLoaded(false);
  }, [url]);

  const addOpenModal = () => {
    setOpen(true);
    setModalData(data);
  };
  const showSpinner = loading || (!imgLoaded && !!data);

  return (
    <div
      className="
    
     bg-pr-morty
     dark:bg-pr-rick"
    >
      {/*   {errors && <p>{errors}</p>} */}

      {showSpinner && (
        <div className="flex justify-center ">
          <img
            src={Portal}
            alt="portal"
            className="spinner
           "
          />
        </div>
      )}

      {!loading && data && (
        <div className="relative">
          {/* Contenedor del items__info */}
          <div
            className="items__info
            flex flex-col justify-center items-center
            w-full 
            h-[380px] mt-32
            border-amber-100 border-5 rounded-2xl
            bg-nd-morty-hov
            dark:bg-rd-rick-hov 
            gap-4 pt-24
            text-xl sm:text-2xl md:text-3xl lg:text-3xl
          "
          >
            {/* Título */}
            <div className="flex justify-center">
              <h2
                className="flex justify-center focus-in
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                text-center border-b-4 pb-2 px-2 font-bold text-th-morty
              "
              >
                {data?.name}
              </h2>
            </div>

            {/* Información */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
              <div
                className="flex flex-col gap-1 bg-nd-morty-slt dark:bg-rd-rick-slt 
                p-2 rounded-2xl items-center justify-center w-[60%] sm:w-[45%]"
              >
                <p className="text-th-morty text-center">Specie</p>
                <p className="text-th-morty focus-in font-semibold text-center">
                  {data?.species}
                </p>
              </div>

              <div
                className="flex flex-col gap-1 bg-nd-morty-slt dark:bg-rd-rick-slt 
                p-2 rounded-2xl items-center justify-center w-[60%] sm:w-[45%]"
              >
                <p className="text-th-morty text-center">Gender</p>
                <p className="text-th-morty focus-in font-semibold text-center">
                  {data?.gender}
                </p>
              </div>
            </div>
          </div>

          {/* Imagen posicionada encima y centrada */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={addOpenModal}
              className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-110 relative"
            >
              <img
                className={`focus-in rounded-full object-cover w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] border-8
                  ${
                    data?.status === "Alive"
                      ? "border-alive"
                      : data?.status === "Dead"
                      ? "border-dead"
                      : "border-unknow"
                  }`}
                onLoad={() => setImgLoaded(true)}
                style={{ display: imgLoaded ? "block" : "none" }}
                src={data?.image}
                alt={data?.name}
              />

              {/* Badge de status */}
              <div className="absolute bottom-[-5] right-[50%]">
                <div
                  className={`status ${data?.status?.toLowerCase()} px-3 py-1 rounded-full text-xs font-semibold text-white`}
                >
                  <p className="focus-in m-0">{data?.status}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Item;
