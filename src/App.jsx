import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List";
import Location from "./components/Location";
import { getRandomId } from "./lib/utils.js";
import Search from "./components/Search";
import DarkMode from "./components/DarkMode";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner.jsx";
import Portal from "./assets/portalchico.png";
import ModalCard from "./components/ModalCard";

function App() {
  const BASE_URL = "https://rickandmortyapi.com/api/location/";
  /* Trayendo el el Hook "useFetch, junto con sus props par apoderlos manejar" */
  const { data, fetchData, errors, loading } = useFetch();
  /* Trayendo el el Hook "usePagination, junto con sus props par apoderlos manejar" */
  const { page, pageResidents, totalPages, setPage } = usePagination(
    data?.residents
  );

  const [query, setQuery] = useState(getRandomId());

  const [error, setError] = useState(null);

  const [theme, setTheme] = useState("light");

  const [isLoading, setIsLoading] = useState(true);

  const [modalData, setModalData] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    fetchData(`${BASE_URL}${query}`);
  }, [query]);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Simula una carga de 2 segundos (reemplaza por tu fetch real)
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Resetea la página cuando cambie la query
  useEffect(() => {
    setPage(1); // Resetea a la página 1 cuando cambie la búsqueda
  }, [query]);

  return (
    /* className="h-screen flex justify-center items-center" */

    <div
      className="rm__container
      transition-all duration-300 ease-in-out
     bg-pr-morty text-th-morty 
     dark:bg-pr-rick dark:text-th-rick
      md:text-3xl   lg:text-4xl  sm::text-2xl text-2xl
     "
    >
      {isLoading && <Spinner />}

      {/*  /* flex flex-col items-center
     min-w-[300px] min-h-[150px] w-[80vw] h-[90vh]
  p-5 m-1 */}
      {/*  w-[99vw] */}
      <div
        className="rm__content       
      p-10 gap-1
      flex flex-col items-center
      min-w-[300px] w-full

  

       "
      >
        {/* flex flex-row   items-center justify-center
  border p-1 w-[100%] */}
        <div className="header__container flex items-center w-full    relative">
          {/* Search centrado */}
          <div className="mx-auto flex-1 flex justify-center">
            <Search setError={setError} setQuery={setQuery} />
          </div>
          {/* DarkMode a la derecha, pero se acerca en pantallas pequeñas */}
          <div className="ml-auto sm:ml-0">
            <DarkMode setTheme={setTheme} theme={theme} />
          </div>
        </div>

        {error && (
          <p
            className="rounded border text-center p-3 m-2 text-2xl border-red-600 bg-red-500/80 text-red-900
          sm:text-2xl
      md:text-3xl 
      lg:text-4xl
     
      
          "
          >
            {error}
          </p>
        )}
        {errors && (
          /*  mt-4 p-3 */
          <p
            className="rounded border text-center p-3 text-2xl  border-red-600 bg-red-500/80 text-red-900
          sm:text-2xl
      md:text-3xl 
      lg:text-4xl
   
          "
          >
            {errors}
          </p>
        )}

        <div
          className="location__container
        
         m-2 p-1 w-full flex items-center
         "
        >
          {data && <Location dataLocation={data} />}
        </div>

        {/*  {loading && <p>loading....</p>} */}
        <div
          className="residents__container
        
       flex flex-col items-center justify-center
         w-full  p-2 mx-auto 
        "
        >
          {/* <p className=" rounded border text-center p-3 text-2xl  border-red-600 bg-red-500/80 text-red-900">Residents not Found</p> */}
          {pageResidents?.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <p
                className=" rounded border text-center p-3 text-2xl  border-red-600 bg-red-500/80 text-red-900
              sm:text-2xl
      md:text-3xl 
      lg:text-4xl
      
      
              "
              >
                Residents not Found
              </p>

              <img
                src={Portal}
                alt="portal"
                className="spinner_slow 
              min-w-[200px] max-w-[300px] h-auto
              "
              />
            </div>
          )}

          {data && (
            <List
              residents={pageResidents}
              loading={loading}
              setOpen={setOpen}
              setModalData={setModalData}
            ></List>
          )}
        </div>

        {pageResidents &&
          Array.isArray(pageResidents) &&
          data?.residents?.length > 10 && (
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
          )}

        <ModalCard
          isOpen={open}
          setOpen={setOpen}
          tittle={"MODAL"}
          residents={modalData}
          url={modalData?.episode}
        ></ModalCard>
      </div>
    </div>
  );
}
//////////
export default App;
