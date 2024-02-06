import { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setdata } from "./state/dataslice";

const Usefetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await Axios.get("https://dummyjson.com/products");
        // console.log("api call");
        dispatch(setdata(res.data));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return { loading, error };
};

export default Usefetch;
