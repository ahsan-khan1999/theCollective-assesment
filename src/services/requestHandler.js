import { get, patch, post, put } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  getGists: "users/",
  getGistDetail:'gists/'
};

const readGists = (data) => get(SERVICE_URLS.getGists + `${data}/gists`, {});
const readGistDetail = (data) => get(SERVICE_URLS.getGistDetail + `${data}`, {});

const apiServices = {
  readGists,
  readGistDetail
};
export default apiServices;
