import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { filterLanguage } from "../../utils/auth.util";
import LanguageBadge from "../Badge/Badge";
import "./main.css";
const GistCards = ({ data }) => {
  const fileCount = Object.keys(data?.files)?.length;
  const navigate = useNavigate();
  const [lang, setLang] = useState(null);
  const handleClick = () => {
    navigate(data?.id, {
      state: { description: data?.description, files: data?.files },
    });
  };

  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 mt-3 text-center"
        onClick={handleClick}
      >
        <div className="st_iconbox st_style1">
          <div className={`st_iconbox `}>
            <img
              src={data?.owner?.avatar_url}
              alt={data?.owner?.login}
              width={57}
              height="50px"
              objectFit="contain"
            />
          </div>
          <h1
            className="st_iconbox_title"
            style={{ minHeight: "60px", fontSize: "20px" }}
          >
            {data?.owner?.login}
          </h1>
          <div className={`st_iconbox_text`} >
            {data?.description || "No Description"}
          </div>
          <LanguageBadge files={data?.files} />
        </div>
        {/* <div className={`st_height_b0 st_height_lg_b30`}></div> */}
      </div>
    </>
  );
};

export default GistCards;
