import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

const Header = (props) => {
  const authtoken = localStorage.getItem(AUTH_TOKEN);
  const history = useHistory();
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        {authtoken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
        <div className="flex flex-fixed">
          {authtoken ? (
            <div
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                history.push("/");
              }}
              className="ml1 pointer black"
            ></div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
