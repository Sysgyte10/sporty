import { useEffect, useState } from "react";

export const useSearchFilter = <T extends Record<string, any>>(
  dataArr: T[],
  arrKey: keyof T
) => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T[]>(dataArr);

  useEffect(() => {
    if (searchVal.trim() === "") {
      setFilteredData(dataArr);
      return;
    }

    const lookedUpData = dataArr.filter((item) =>
      String(item[arrKey] ?? "")
        .toLowerCase()
        .includes(searchVal.toLowerCase())
    );
    setFilteredData(lookedUpData);
  }, [searchVal, dataArr, arrKey]);

  return {
    filteredData,
    searchVal,
    setSearchVal,
  };
};
