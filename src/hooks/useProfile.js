import useSwr from "swr";

const fetcher = () => Promise.resolve({ name: "John Doe", id: Math.random() });

export const useProfile = (userId, options = {}) => {
  const { data } = useSwr(`/api/user/${userId}`, fetcher, options);
  return {
    data,
  };
};

export default useProfile;
