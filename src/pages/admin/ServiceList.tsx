import { getServices } from "@/api/admin/service/service.api";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash, Trash2 } from "lucide-react";

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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  const services=data.data.map((item)=>({
    id:item._id,
    name:item.name,
    description:item.description,
    price:item.price

  }))
  const totalPrice = services.reduce((total:number, service:number) => total + service.price, 0);

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
          <TableCell className="text-right" ><Button className="p-2" variant={"destructive"}><Trash2/></Button></TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell >Total Services</TableCell>
        <TableCell  >{services.length}</TableCell>
        <TableCell colSpan={2}  ><p>Total Price:</p>{totalPrice}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  </Container>
  );
};

export default ServiceList;


  // <div>
    //   {data?.data?.map((item) => (
    //     <h1 key={item?.id}>{item?.name}</h1>
    //   ))}
    // </div>