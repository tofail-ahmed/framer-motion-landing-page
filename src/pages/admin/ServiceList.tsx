import { getServices } from "@/api/admin/service/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  

  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log(data,isLoading,isError)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading services.</p>;
  }
  return (
    <div>
      {data?.data?.map((item) => (
        <h1 key={item?.id}>{item?.name}</h1>
      ))}
    </div>
  );
};

export default ServiceList;
