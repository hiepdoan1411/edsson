import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { performSearch } from "../../services/search";

const ClientSideSearch: NextPage = () => {
  const [searchResults, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    async function fetch() {
      const data = await performSearch();
      setSearchResult(data?.data || []);
      setLoading(false);
    }
    fetch();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">
        Search for:
      </label>
      <input id="searchQuery" type="text" className="border" />
      {loading ? (
        <Loading type="spin" color="black" />
      ) : (
        <ul>
          {searchResults.map(({ id, product: { title } }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientSideSearch;
