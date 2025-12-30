import axios from "axios";

const resolvers = {
  Query: {
    getSeries: async (_, args) => {
      const offset = args.offset || 0;

      try {
        const response = await axios.get("https://api.cricapi.com/v1/series", {
          params: {
            apikey: process.env.CRICKET_API_KEY,
            offset: offset,
          },
        });
        console.log("🚀 ~ response: ====>", response);

        return {
          status: response.data.status,
          data: response.data.data,
        };
      } catch (error) {
        return {
          status: "failure",
          data: [],
        };
      }
    },
  },
};

export default resolvers;
