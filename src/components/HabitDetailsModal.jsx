import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HabitDetailsModal = ({ isOpen, onClose, habit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" m="2">
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>{habit?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody justifyContent="space-between" mb={4}>
          <Flex flexDir="column" gap={4}>
            <Text>Name: {habit?.title}</Text>
            <Text>Repeat: {habit?.repeat}</Text>
            <Text>Goal: {habit?.goal}</Text>
            <Text>Time of day: {habit?.timeOfDay}</Text>
            <Text>Start date: {habit?.startDate}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HabitDetailsModal;
