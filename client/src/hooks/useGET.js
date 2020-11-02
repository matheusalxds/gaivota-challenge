import { useState, useCallback } from "react";
import queryString from "querystring";
import axios from "axios";

const prepareParams = (options = null, byId = null) => {
  if (byId) {
    return `/${byId}`;
  } else if (options) {
    return options ? `&${queryString.stringify(options)}` : "";
  }

  return "";
};

export const useGET = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const onLoading = isLoading => setLoading(isLoading);

  const handleGET = useCallback(({ path, options, byId }) => {
    onLoading(true);
    let preparedParams = prepareParams(options, byId);
    axios
      .get(`${process.env.REACT_APP_API_URL}${path}${preparedParams}`)
      .then(httpResponse => {
        const currentData =
          httpResponse.data.results || httpResponse.data || [];
        setData(currentData);
      })
      .finally(() => onLoading(false));
  }, []);

  return { data, loading, handleGET };
};
