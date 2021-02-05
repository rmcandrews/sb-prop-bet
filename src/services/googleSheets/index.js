import axios from "axios";

const getSuperBowl = async ({ year }) => {
  const response = await axios.get(
    "https://vokbvjr975.execute-api.us-east-1.amazonaws.com/prod/superBowls/" +
      year
  );
  return response.data;
};

export { getSuperBowl };
