import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";

// style

// components
import { Button } from "../../common/Button/Button";
import { Box } from "../../common/Box/Box";
import { DetailsContent } from "./DetailsContent";
import { Spacer } from "../../common/Spacer/Spacer";

const prepareNewUrl = url => {
  const splitUrl = url.split("/");
  return splitUrl.slice(0, splitUrl.length - 2).join("/");
};

const _Details = ({ loading, data }) => {
  const { url } = useRouteMatch();
  return (
    <Box darker>
      <Box>
        <DetailsContent data={data} loading={loading} />
        {data ? (
          <Spacer mtLg={2}>
            <Spacer inline mrLg={2}>
              <Button>Buy now</Button>
            </Spacer>
            <Link to={`${prepareNewUrl(url)}/${data._id}/bid`}>
              <Button>Bid</Button>
            </Link>
          </Spacer>
        ) : null}
      </Box>
    </Box>
  );
};
_Details.propTypes = {
  data: PropTypes.instanceOf(Object),
  loading: PropTypes.bool
};
_Details.defaultProps = {
  data: {},
  loading: false
};
_Details.displayName = "FarmDetails";

export const Details = memo(_Details);
