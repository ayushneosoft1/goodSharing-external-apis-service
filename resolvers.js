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

        // 🔑 Manual error handling
        if (response.data.status !== "success") {
          throw new Error(response.data.reason);
        }

        return {
          statusCode: response.status,
          statusMessage: "Success",
          data: response.data.data,
        };
      } catch (error) {
        return {
          statusCode: "400",
          statusMessage: error.message,
          data: [],
        };
      }
    },
  },
};

export default resolvers;
