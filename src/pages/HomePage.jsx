import React from "react";
import HabitCard from "../components/HabitCard";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Link as ChakraLink,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CreateHabitModal from "../components/CreateHabitModal";
import { useAppContext } from "../context/AppContextProvider";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    state: { habits },
  } = useAppContext();

  console.log(habits);

  return (
    <Box as="main" p={4}>
      <ChakraLink as={Link} to="/archive">
        Archives
      </ChakraLink>
      <Heading textAlign="center">Habits</Heading>
      <Box as="main" w="full">
        <Card maxW="sm" _hover={{ cursor: "pointer" }} onClick={onOpen}>
          <CardBody>
            <Text>Create Habit</Text>
          </CardBody>
        </Card>
        <CreateHabitModal isOpen={isOpen} onClose={onClose} />
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
