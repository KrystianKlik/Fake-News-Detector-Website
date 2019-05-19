import React, { Component } from "react";
import { RoundBorderWithText } from "./roundBorderWithText";

export class Price extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <RoundBorderWithText
            title={"Basic"}
            text={
              "This is basic product with API. Queries are limited to 50 per day (GMT+2)"
            }
            monthly={"€0 unlimited time"}
            button={"Check"}
          />
          <RoundBorderWithText
            title={"Academic"}
            text={
              "This is Academic product with API. Queries are limited to 300 per day (GMT+2)"
            }
            monthly={
              "€0 for academic year, after that student/professor must show that they are still eligible"
            }
            button={"Check"}
          />
          <RoundBorderWithText
            title={"Advanced"}
            text={
              "This is advanced product with API. Queries are limited to 500 per day (GMT+2)"
            }
            monthly={"€5 / monthly"}
            yearly={"€50 / yearly"}
            button={"Buy Now"}
          />
          <RoundBorderWithText
            title={"Enterprise"}
            text={
              "This is Enterprise product with API. Number of queries depends on how much enterprise need, as well they are limited by day (GMT+2)"
            }
            monthly={"From 50 queries per day to unlimited"}
            yearly={"Negotiable"}
            button={"More info"}
          />
          <RoundBorderWithText
            title={"Enterprise"}
            text={
              "This is Unlimited product with API. Queries are unlimited :)"
            }
            button={"Buy Now"}
            monthly={"€100 / monthly"}
            yearly={"€1000 / yearly"}
          />
        </div>
      </React.Fragment>
    );
  }
}
