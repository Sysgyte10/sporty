import { useState } from "react";

export const useApiStatus = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return {
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    isSuccess,
    setIsSuccess,
  };
};
