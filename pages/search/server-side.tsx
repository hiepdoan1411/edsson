import { GetStaticProps, NextPage } from "next";
import { performSearch } from "../../services/search";

interface ServiceSideSearchProps {
  data: any[];
}

const ServiceSideSearch: NextPage<ServiceSideSearchProps> = ({ data }) => {
  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">
        Search for:
      </label>
      <input id="searchQuery" type="text" className="border" />
      <ul>
        {data.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      å
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await performSearch();
  return { props: data };
};

export default ServiceSideSearch;
