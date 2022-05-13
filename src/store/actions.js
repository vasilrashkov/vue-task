export const FETCHING_OFFICESS = "FETCHING_OFFICESS";
export const FETCH_OFFICESS = "FETCH_OFFICESS";
export const OFFCIESS_RECEIVED = "OFFCIESS_RECEIVED";

export const FETCHING_CITIES = "FETCHING_CITIES";
export const FETCH_CITIES = "FETCH_CITIES";
export const CITIES_RECEIVED = "CITIES_RECEIVED";

export const SELECT_CITY = "SELECT_CITY";

export const fetchingOffices = () => {
  return {
    type: FETCHING_OFFICESS,
  };
};
