import axios from "axios";

const baseApiUrl =
  "https://ee.econt.com/services/Nomenclatures/NomenclaturesService";

export default {
  getOfficess: async () => {
    const url = `${baseApiUrl}.getOffices.json`;

    const result = await axios.post(url, {
      countryCode: "BGR",
      cityID: "47",
    });

    return result;
  },
};
