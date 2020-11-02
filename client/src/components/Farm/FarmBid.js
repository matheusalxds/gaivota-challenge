import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// hooks
import { useGET } from "../../hooks/useGET";

// components
import { Align } from "../common/Align/Align";
import { Bar } from "../common/Charts/Bar";
import { Box } from "../common/Box/Box";
import { Button } from "../common/Button/Button";
import { DetailsContent } from "./Details/DetailsContent";
import { FarmWrapper } from "./Details/FarmWrapper";
import { Spacer } from "../common/Spacer/Spacer";

// chart default setup
import { barDefault, lineDefault } from "../common/Charts/default-chart-setup";

export const Bid = () => {
  const { handleGET, data, loading } = useGET();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      handleGET({ path: "farm", byId: id });
    }
  }, [id]);

  const createData = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "#4372c3");
    gradient.addColorStop(0, "#FFF");

    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          ...lineDefault,
          label: "NVDI",
          data: [15, 29, 30, 41, 16, 75, 20]
        },
        {
          ...barDefault,
          label: "Precipitação",
          backgroundColor: gradient, // Put the gradient here as a fill color
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  };

  return (
    <FarmWrapper>
      <Bar data={createData} />
      <Spacer mtLg={2}>
        <Box>
          <DetailsContent data={data} loading={loading} />
        </Box>
      </Spacer>
      <Spacer mtLg={2}>
        <Align end>
          <Spacer mrLg={2} inline>
            <Button>Buy it</Button>
          </Spacer>
          <Button primary>Bid</Button>
        </Align>
      </Spacer>
    </FarmWrapper>
  );
};

Bid.propTypes = {};
Bid.defaultProps = {};
Bid.displayName = "Bid";
