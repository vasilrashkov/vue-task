import {
  FETCHING_OFFICESS,
  FETCH_OFFICESS,
  OFFCIESS_RECEIVED,
} from "./actions";

const initialState = {
  offices: {
    data: [],
    loading: false,
  },
};

export const store = {
  state() {
    return {
      ...initialState,
    };
  },
  mutations: {
    [FETCHING_OFFICESS]: (state) => {
      state.offices.loading = true;
      //TODO: loading state
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
  },
  actions: {
    [FETCH_OFFICESS]: async ({ commit }, api) => {
      commit(FETCHING_OFFICESS);

      const {
        data: { offices },
      } = await api.getOfficess();

      commit(OFFCIESS_RECEIVED, offices);
    },
  },
};
