import { useRef } from "react";

function Search({ setError, setQuery }) {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setError(null);
    if (!value) {
      setError("Please enter a valid location ID");
      inputRef.current.value = "";
      return;
    }
    if (value < 1 || value > 126) {
      setError("Location ID must be between 1 and 126");
      inputRef.current.value = "";
      return;
    }

    setQuery(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    /*  flex w-[50%] */
    <div
      className="search__container 
    
    "
    >
      {/* w-[100%] */}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex w-full lg:ml-8 md:ml-5"
      >
        {/* w-[70%] flex-1 */}
        <input
          name="inputref"
          placeholder="Enter location ID (1-126)"
          type="text"
          ref={inputRef}
          title="Enter location ID (1-126)"
          className="rounded-[6px_0_0_6px] p-1.5 border-2 border-r-0 flex-1 min-w-0
          text-sm
            transition-colors ease-in-out delay-75
          sm:py-2 sm:px-4 sm:text-2xl
          md:py-3 md:px-6 md:text-3xl 
          lg:py-4 lg:px-8 lg:text-4xl
          
           
        focus:outline-none             
        bg-nd-morty  focus:bg-rd-morty text-prnd  border-th-morty
        dark:bg-prnd-rick dark:focus:bg-prndd-rick dark:text-th-rick dark:border-th-rick

       
        "
        />
        {/* w-[30%] flex-1 */}
        <button
          type="submit"
          className="rounded-[0_6px_6px_0] p-1 border-2 transition-colors ease-in-out delay-75 cursor-pointer
          flex-shrink-0
     text-sm
        sm:py-2 sm:px-4 sm:text-2xl
        md:py-3 md:px-6 md:text-3xl  
        lg:py-4 lg:px-8 lg:text-
         

        bg-pr-morty text-th-morty  border-th-morty hover:bg-nd-morty-hov 
        active:bg-nd-morty-slt

        dark:bg-rd-rick dark:text-th-rick dark:border-th-rick
        dark:hover:bg-rd-rick-hov 
        dark:active:bg-rd-rick-slt
        
        "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
