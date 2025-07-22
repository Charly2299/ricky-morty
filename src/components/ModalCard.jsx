import { useEffect } from "react";
/* import { useFetch } from "../hooks/useFetch"; */
import { Minimize2 } from "lucide-react";

const App = () => {
  return <Minimize2 />;
};

function ModalCard({ setOpen, residents, isOpen, url }) {
  /*   const { data, fetchData, errors, loading } = useFetch(); */

  /*   useEffect(() => {
    fetchData(url);
  }, [isOpen]); */

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "show-modal" : ""}`} onClick={closeModal}>
      <div
        className=" modal__content
      bg-bd-gn border-10 border-pr-gn

      
      "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="cursor-pointer absolute top-2 right-2 mb-0 pb-0
          transition-transform duration-200 hover:scale-120 
          active:scale-130
          "
        >
          <Minimize2 />
        </button>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="flex justify-center text-center text-rd-gn font-bold w-[100%] mt-0 pt-0">
            {residents?.name}
          </h2>
          <img
            src={residents?.image}
            alt={residents?.name}
            className={`focus-in rounded-full object-cover w-[280px] h-auto border-10
    ${
      residents?.status === "Alive"
        ? "border-alive"
        : residents?.status === "Dead"
        ? "border-dead"
        : "border-unknow"
    }`}
          />

          <p
            className="text-center text-rd-gn 
          bg-pr-gn w-[100%] rounded-2xl p-1"
          >
            Status: <span className="font-semibold">{residents?.status}</span>
          </p>
          <p className="text-center text-rd-gn p-1">
            Gender: <span className="font-semibold">{residents?.gender}</span>
          </p>
          <p className="text-center text-rd-gn bg-pr-gn w-[100%] rounded-2xl p-1 ">
            Specie: <span className="font-semibold">{residents?.species}</span>
          </p>
          <p className="text-center text-rd-gn p-1">
            No.Episodes: <span className="font-semibold">{url?.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
