import React from "react";
import "./users.css";
import ali from "../../img/avatar-ali.png";
import anisha from "../../img/avatar-anisha.png";
import richard from "../../img/avatar-richard.png";

const Users = () => {
  return (
    <div className="userDiv">
      <h2>What's Different About Manage?</h2>

      <div className="allUser">
        <div className="user">
          <img src={ali} alt="Ali" />
          <h5>Anisha Li</h5>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>

        <div className="user">
          <img src={anisha} alt="Anisha" />
          <h5>Ali Bravo</h5>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>

        <div className="user">
          <img src={richard} alt="Richard" />
          <h5>Richard Watts</h5>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>

      <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <button className="userButton">Get Started</button>
      </div>
    </div>
  );
};

export default Users;
