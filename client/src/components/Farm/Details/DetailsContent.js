import React from "react";
import PropTypes from "prop-types";

// style
import css from "./DetailsContent.module.scss";

// components
import { Loading } from "../../common/Loading/Loading";

export const DetailsContent = ({ loading, data }) => {
  const renderField = (title, label) => (
    <div className={css.detailsContent}>
      <span>{title}</span>
      <span>{label || "-"}</span>
    </div>
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {renderField("Farm", data && data.name)}
          {renderField("Culture", data && data.culture)}
          {renderField("Variety", data && data.variety)}
          {renderField("Area", data && data.total_area)}
          {renderField("Yield", data && data.yield_estimation)}
          {renderField(
            "Total",
            data && data.total_area * data.yield_estimation
          )}
          {renderField(
            "Price",
            `${data && data.price ? ` R$ ${data.price}` : ""}`
          )}
        </>
      )}
    </>
  );
};

DetailsContent.propTypes = {
  data: PropTypes.instanceOf(Object),
  loading: PropTypes.bool
};
DetailsContent.defaultProps = {
  data: null,
  loading: false
};
DetailsContent.displayName = "DetailsContent";
