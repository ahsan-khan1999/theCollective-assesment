import React, { useEffect } from "react";
import { Puff } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchGistDetails } from "../../api/slices/gistSlice";
import Fork from "../../components/Fork/Fork";

export default function UserGistDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { gistDetails, loading } = useSelector((state) => state.gistSlice);
  const { description, files } = location.state;
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchGistDetails(id));
  }, [dispatch]);
  const renderForks = () => {
    if (loading) {
      return <div className="d-flex justify-content-center"><Puff color="#FDCA40" height={30} width={30} /></div>;
    }
    if (gistDetails?.forks?.length > 0) {
      return <Fork forks={gistDetails?.forks?.slice(0, 3)} />;
    }
  };
  return (
    <div className="container mt-5 py-5">
      <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-4 st_iconbox st_style1">
          <div className="forks-box">{renderForks()}</div>
          <div className="mt-3">
            <p className="st_iconbox_text">{description || "No Description"}</p>
            <div className="">
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                Files:
              </p>
              <ul className="indent-left">
                {Object.values(files).map((file, index) => {
                  return (
                    <li
                      key={index}
                      className=""
                      style={{ listStyleType: "none" }}
                    >
                      <a
                        href={file?.raw_url}
                        target="_blank"
                        className="st_iconbox_text"
                      >
                        {file?.filename}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
