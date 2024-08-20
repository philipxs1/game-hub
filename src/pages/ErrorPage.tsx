import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading> OOPS</Heading>
        <Text>{isRouteErrorResponse(error) ? "This page does not exist" : "Unexpected error"}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
