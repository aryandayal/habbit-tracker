import {
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { faInbox, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HabitDetailsModal from "./HabitDetailsModal";
import EditButton from "./EditButton";
import { useAppContext } from "../context/AppContextProvider";

const HabitCard = ({ habit, isArchived }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch } = useAppContext();

  const openHabitDetailsModal = (e) => {
    e.stopPropagation();
    onOpen();
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_HABIT", payload: habit.id });
  };

  const addToArchiveHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_ARCHIVE", payload: habit });
  };

  return (
    <>
      <Card
        maxW="sm"
        mt={2}
        onClick={openHabitDetailsModal}
        _hover={{ cursor: "pointer" }}
      >
        <CardBody>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="md">{habit.title}</Heading>
            {!isArchived && (
              <Flex gap={2}>
                <EditButton habit={habit} />
                <IconButton
                  icon={<FontAwesomeIcon icon={faTrash} />}
                  borderRadius="full"
                  variant="ghost"
                  onClick={deleteHandler}
                />
                <IconButton
                  icon={<FontAwesomeIcon icon={faInbox} />}
                  borderRadius="full"
                  variant="ghost"
                  onClick={addToArchiveHandler}
                />
              </Flex>
            )}
          </Flex>
        </CardBody>
      </Card>
      <HabitDetailsModal isOpen={isOpen} onClose={onClose} habit={habit} />
    </>
  );
};

export default HabitCard;
