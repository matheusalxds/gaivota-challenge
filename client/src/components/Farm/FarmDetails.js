import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";

// hooks
import { useGET } from "../../hooks/useGET";

// components
import { FarmWrapper } from "./Details/FarmWrapper";
import { Details as FarmDetailsContent } from "./Details/Details";
import { FarmDetailsSearchBar } from "./Details/FarmDetailsSearchBar";

export const _FarmDetails = () => {
  const { id } = useParams();
  const { handleGET, data, loading } = useGET();

  useEffect(() => {
    if (id) {
      handleGET({ path: "farm", byId: id });
    }
  }, [id]);

  return (
    <FarmWrapper>
      <FarmDetailsSearchBar />
      <FarmDetailsContent loading={loading} data={data} />
    </FarmWrapper>
  );
};

_FarmDetails.propTypes = {};
_FarmDetails.defaultProps = {};
_FarmDetails.displayName = "FarmDetails";

export const FarmDetails = memo(_FarmDetails);
