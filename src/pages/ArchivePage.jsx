import { Box, Link as ChakraLink, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import HabitCard from "../components/HabitCard";

const ArchivePage = () => {
  const {
    state: { archives },
  } = useAppContext();

  return (
    <Box as="main" p={4}>
      <ChakraLink as={Link} to="/">
        Home
      </ChakraLink>
      <Heading textAlign="center">Archives</Heading>
      <Box as="main" w="full">
        {archives.map((habit) => (
          <HabitCard key={habit.id} habit={habit} isArchived />
        ))}
      </Box>
    </Box>
  );
};
export default ArchivePage;
