import pistola_prev from "../assets/pistola_prev.png";
import pistola_next from "../assets/pistola_next.png";

function Pagination({ page, totalPages, setPage }) {
  return (
    <div
      className="flex justify-center gap-2 mt-4 
   
    "
    >
      <div className="">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="  cursor-pointer
          transition-transform duration-200 hover:scale-120 
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          <img
            src={pistola_prev}
            className="w-20 h-auto sm:w-25  md:w-28  lg:w-30"
          />
        </button>
      </div>

      <div
        className="
      flex items-center flex-col px-4 pt-3
      "
      >
        <p className="text-rd-gn font-semibold  text-center focus-in ">Page</p>
        <p className="text-rd-gn font-semibold  text-center focus-in">
          {page} of {totalPages}
        </p>
      </div>

      <div className="">
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className=" cursor-pointer
          
          transition-transform duration-200 hover:scale-120 
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          <img
            src={pistola_next}
            className="w-20 h-auto sm:w-25  md:w-28  lg:w-30 
          
            "
          />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
