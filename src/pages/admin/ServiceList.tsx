import { getServices } from "@/api/admin/service/service.api";
import { useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {  Trash2 } from "lucide-react";

const ServiceList = () => {
  const { data, isLoading, isError }=useGetServices()
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["services"],
  //   queryFn: getServices,
  //   select: (data) => {
  //     return data.data.map((item) => ({
  //       id: item._id,
  //       name: item.name,
  //       description: item.description,
  //       price: item.price,
  //     }));
  //   },
  // });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading services.</p>;
  }

  const services = data;

  const totalPrice = services.reduce((total, service) => total + service.price, 0);

  return (
    <Container className="border border-red-500  mt-20 p-0 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button className="p-2" variant={"destructive"}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total Services</TableCell>
            <TableCell colSpan={2} />
            <TableCell className="text-right">{totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default ServiceList;
