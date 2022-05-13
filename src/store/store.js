import {
  CITIES_RECEIVED,
  FETCHING_CITIES,
  FETCHING_OFFICESS,
  FETCH_CITIES,
  FETCH_OFFICESS,
  OFFCIESS_RECEIVED,
  SELECT_CITY,
} from "./actions";

const initialState = {
  offices: {
    data: [],
    loading: false,
  },
  cities: {
    data: [],
    loading: false,
  },
  rootData: {
    selectedCity: null,
  },
};

export const store = {
  state() {
    return {
      ...initialState,
    };
  },
  mutations: {
    [FETCHING_CITIES]: (state) => {
      state.cities.loading = true;
    },
    [CITIES_RECEIVED]: (state, cities) => {
      state.cities = {
        ...state.cities,
        loading: false,
        data: cities,
      };
    },
    [FETCHING_OFFICESS]: (state) => {
      state.offices.loading = true;
    },
    [OFFCIESS_RECEIVED]: (state, offices) => {
      const newOfficesData = offices.reduce((prev, curr) => {
        const office = {
          id: curr.id,
          name: curr.name,
          address: curr.address.fullAddress,
        };

        prev.push(office);
        return prev;
      }, []);
      state.offices = {
        ...state.offices,
        data: newOfficesData,
        loading: false,
      };
    },
    [SELECT_CITY]: (state, selectedCity) => {
      state.rootData = {
        ...state.rootData,
        selectedCity,
      };
    },
  },
  actions: {
    [SELECT_CITY]: ({ commit, dispatch }, data) => {
      commit(SELECT_CITY, data.selectedCity);

      dispatch(FETCH_OFFICESS, data.api);
    },
    [FETCH_CITIES]: async ({ commit }, api) => {
      commit(FETCHING_CITIES);

      const {
        data: { cities },
      } = await api.getCities();

      commit(CITIES_RECEIVED, cities);
    },
    [FETCH_OFFICESS]: async ({ commit, state }, api) => {
      commit(FETCHING_OFFICESS);

      const selectedCity = state.rootData.selectedCity;

      const {
        data: { offices },
      } = await api.getOfficess(selectedCity);

      commit(OFFCIESS_RECEIVED, offices);
    },
  },
};
