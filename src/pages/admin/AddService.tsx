import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";

interface ServiceData {
  name: string;
  description: string;
  devices: string[];
  price: number;
}

const AddService = () => {
  const [serviceData, setServiceData] = useState<ServiceData>({
    name: "",
    description: "",
    devices: ["", "", ""], // Initialize with empty strings for three devices
    price: 0,
  });
  const { mutateAsync, isError, isSuccess, error } = useMutation({
    mutationFn: async (data: ServiceData) => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/services", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }
  
        return response.json();
      } catch (error) {
        throw new Error(`Error during mutation: ${error.message}`);
      }
    },
  });
  console.log(isError,isSuccess)
  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();

    // Remove empty strings from the devices array
    // const filteredDevices = serviceData.devices.filter(device => device.trim() !== '');

    const updatedServiceData: ServiceData = {
      ...serviceData,
      price: parseFloat(serviceData.price)
      // devices: filteredDevices,
    };

    // TODO: Add logic to handle the submission of updatedServiceData
    console.log(updatedServiceData);
    await mutateAsync(updatedServiceData)
    console.log("done")
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="serviceName">Service Name:</label>
        <input
          type="text"
          id="serviceName"
          name="name"
          value={serviceData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="serviceDescription">Service Description:</label>
        <textarea
          id="serviceDescription"
          name="description"
          value={serviceData.description}
          onChange={handleInputChange}
        />

        {/* Individual input fields for three devices */}
        <label htmlFor="device1">Device 1:</label>
        <input
          type="text"
          id="device1"
          name="devices"
          value={serviceData.devices[0]}
          onChange={(e) => setServiceData((prevData) => ({ ...prevData, devices: [e.target.value, prevData.devices[1], prevData.devices[2]] }))}
        />

        <label htmlFor="device2">Device 2:</label>
        <input
          type="text"
          id="device2"
          name="devices"
          value={serviceData.devices[1]}
          onChange={(e) => setServiceData((prevData) => ({ ...prevData, devices: [prevData.devices[0], e.target.value, prevData.devices[2]] }))}
        />

        <label htmlFor="device3">Device 3:</label>
        <input
          type="text"
          id="device3"
          name="devices"
          value={serviceData.devices[2]}
          onChange={(e) => setServiceData((prevData) => ({ ...prevData, devices: [prevData.devices[0], prevData.devices[1], e.target.value] }))}
        />

        <label htmlFor="servicePrice">Service Price:</label>
        <input
          type="number"
          id="servicePrice"
          name="price"
          value={serviceData.price}
          onChange={handleInputChange}
        />

        <Button type="submit" variant={"secondary"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddService;
