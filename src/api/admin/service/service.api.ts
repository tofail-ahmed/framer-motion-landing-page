export const getServices = async () => {
     const res= await fetch("http://localhost:5000/api/v1/services").then((res) =>
        res.json()
      );

      if(!res.success){
        throw new Error("Something went wrong");
      }
      return res;
    }