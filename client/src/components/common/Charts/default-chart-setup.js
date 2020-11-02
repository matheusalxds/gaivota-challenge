const colors = {
  primary: "#4372c3"
};

const defaultValues = {
  borderWidth: 1,
  borderColor: colors.primary,
  backgroundColor: colors.primary
};

export const barDefault = {
  ...defaultValues
};

export const lineDefault = {
  ...defaultValues,
  type: "line",
  pointBackgroundColor: colors.primary,
  cornerRadius: 0,
  fill: false,
  lineTension: 0.1
};
