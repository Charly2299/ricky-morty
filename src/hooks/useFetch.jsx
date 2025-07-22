import {useState } from "react";

import axios from "axios";

export function useFetch() {
 
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);


  async function fetchData(url) {
    setLoading(true);
    setErrors(null);
    try {
      await axios.get(url)
      .then((res=> setData(res.data)  ))
     ;
    } catch (errors) {
      setErrors(errors.response?.data?.error)
        console.log("error", errors);

    }
    finally{
        setLoading(false);
    }
  }

  return { data, fetchData, errors, loading };
}
