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
  },
  "GII Value": val => {
    return val && !isNaN(val)
      ? val > 0.3
        ? colors.first
        : val > 0.1
          ? colors.middle
          : colors.last
      : colors.default;
  },
  // No of women who die giving birth for every 100,000 live births
  "Maternal mortality ratio": val => {
    return val && !isNaN(val)
      ? val > 20
        ? colors.first
        : val > 11
          ? colors.middle
          : colors.last
      : colors.default;
  },
  // births per 1,000 women ages 15–19
  "Adolescent birth rate": val => {
    return val && !isNaN(val)
      ? val > 35
        ? colors.first
        : val > 10
          ? colors.middle
          : colors.last
      : colors.default;
  },
  //% held by women
  "Share of seats in parliament": val => {
    return val && !isNaN(val)
      ? val < 10
        ? colors.first
        : val < 25
          ? colors.middle
          : colors.last
      : colors.default;
  },
  //% ages 25 and older
  "Population with at least some secondary education": val => {
    return val && !isNaN(val)
      ? val < 30
        ? colors.first
        : val < 60
          ? colors.middle
          : colors.last
      : colors.default;
  },

  default: () => colors.default
};
