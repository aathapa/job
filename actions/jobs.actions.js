import { FETCH_JOBS } from '../constant';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

const JOBS_QUERY_PARAMS = {
  publisher: '4201738803816157',
  v: '2',
  format: 'json',
  latlong: 1,
  radius: 10,
  q: 'javascript'
}

export const fetchJobs = (region) => {
  return async (dispatch) => {
    try {
      let zipcode = await reverseGeocode(region)
    }
    catch(e) {

    }
  }
}