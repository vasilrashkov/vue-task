import axios from "axios";

const baseApiUrl =
  "https://ee.econt.com/services/Nomenclatures/NomenclaturesService";

export default {
  getCities: async () => {
    const url = `${baseApiUrl}.getCities.json`;
    const result = await axios.post(url, {
      countryCode: "BGR",
    });

    return result;
  },

  getOfficess: async () => {
    const url = `${baseApiUrl}.getOffices.json`;

    const result = await axios.post(url, {
      countryCode: "BGR",
      //   cityID: "2",
    });

    return result;
  },
};
