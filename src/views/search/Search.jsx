import React, { useState } from "react";
import { Puff } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchGists } from "../../api/slices/gistSlice";
import GistCards from "../../components/GistCard/Gist";

export default function Search() {
  const [username, setUserName] = useState(null);
  const { gists, loading } = useSelector((state) => state.gistSlice);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length === 0) {
      return;
    }
    dispatch(fetchGists(username));
  };
  return (
    <>
      <div className="container-fluid  p-3 mt-3" style={{ backgroundColor: "#af5689",borderRadius:'20px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit} className="searchform">
                <label />
                <input
                  className="form-control "
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter Github User Name"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Puff color="#FDCA40" height={100} width={100} />
          </div>
        ) :gists?.length > 0 ? (
          <div className="row">
            {gists?.map((item, idx) => {
              return <GistCards data={item} />;
            })}
          </div>
        ):
        <div className="row text-center">
            <div className="col-12">No gist found, please try another one</div>
        </div>
        }
      </div>
    </>
  );
}
