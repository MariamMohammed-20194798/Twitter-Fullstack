import { useEffect, useState } from "react";
import axios from "axios";
/* const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Can not get data");
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        return err;
      }
    })();
  }, [url]); */

const useFetch = ({ url, method }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          headers: myHeaders,
          redirect: "follow",
        };
        const response =
          method === "get" ? await axios.get(url, requestOptions) : null;
        setData(response.data.data);
      } catch (err) {
        return err;
      }
      setLoading(false);
    };
    fetchData();
  }, []);
};
export default useFetch;
