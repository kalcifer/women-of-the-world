const colors = {
  first: "#d53369",
  middle: "#aec6cf",
  last: "#77dd77",
  default: "#ECEFF1"
};

export const calcs = {
  "GII Rank": val => {
    return val && !isNaN(val)
      ? val > 75
        ? colors.first
        : val > 25
          ? colors.middle
          : colors.last
      : colors.default;
  }
};
