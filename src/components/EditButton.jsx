import { IconButton, useDisclosure } from "@chakra-ui/react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EditHabitModal from "./EditHabitModal";

const EditButton = ({ habit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editHandler = (e) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <>
      <IconButton
        icon={<FontAwesomeIcon icon={faPenToSquare} />}
        borderRadius="full"
        variant="ghost"
        onClick={editHandler}
      />
      <EditHabitModal isOpen={isOpen} onClose={onClose} habit={habit} />
    </>
  );
};

export default EditButton;
