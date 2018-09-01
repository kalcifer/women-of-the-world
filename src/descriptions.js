import { connect } from "react-redux";
const mapofdesc = {
  "GII Rank":
    "Gender Inequality Index Ranking - Higher rank = Higher inequality",
  "GII Value": "Value of Gender Inequality",
  "Maternal mortality ratio": "(deaths per 100,000 live births)",
  "Adolescent birth rate": "(births per 1,000 women ages 15–19)",
  "Share of seats in parliament": "(% held by women)",
  "Population with at least some secondary education": "(% ages 25 and older)",
  "Labour force participation rate": "(% ages 15 and older)"
};

const Desc = ({ contentType }) => `${contentType} - ${mapofdesc[contentType]}`;

export default connect(
  state => {
    return { contentType: state.app.contentType };
  },
  null
)(Desc);
