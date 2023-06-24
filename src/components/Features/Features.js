import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="manage">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="list">
        <div className="listItem">
          <div className="listItemDiv">
            <div className="listItemDivSecond">
              <div className="cirkle">01</div>
              <h3 className="hiddenHeading">Track company-wide progress</h3>
            </div>
          </div>

          <div>
            <p className="paragraph">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        <div className="listItem">
          <div className="listItemDiv">
            <div className="listItemDivSecond">
              <div className="cirkle">02</div>
              <h3 className="hiddenHeading">Advanced built-in reports</h3>
            </div>
          </div>

          <div>
            <p className="paragraph">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        <div className="listItem">
          <div className="listItemDiv">
            <div className="listItemDivSecond">
              <div className="cirkle">03</div>
              <h3 className="hiddenHeading">
                Everything you need in one place
              </h3>
            </div>
          </div>

          <div>
            <p className="paragraph">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
