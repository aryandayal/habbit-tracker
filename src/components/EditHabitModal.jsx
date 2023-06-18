import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const EditHabitModal = ({ isOpen, onClose, habit }) => {
  const [habitDetails, setHabitDetails] = useState(habit);
  const { dispatch } = useAppContext();

  const submitHabit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "EDIT_HABIT", payload: habitDetails });
    onClose();
  };

  const inputHandler = (e, inputName) => {
    setHabitDetails((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" m="2">
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>New Habit</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={submitHabit}>
          <ModalBody justifyContent="space-between">
            <Flex flexDir="column" gap={2}>
              <Flex gap={5}>
                <Flex display="flex" flexDir="column" gap={2}>
                  <Heading size="md"></Heading>
                  <Text></Text>
                </Flex>
              </Flex>

              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter Habit"
                  value={habitDetails.title}
                  onChange={(e) => inputHandler(e, "title")}
                />
              </FormControl>
              <Flex gap={4}>
                <FormControl>
                  <FormLabel>Repeat</FormLabel>
                  <Select
                    value={habitDetails.repeat}
                    onChange={(e) => inputHandler(e, "repeat")}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Goal</FormLabel>
                  <Select
                    value={habitDetails.goal}
                    onChange={(e) => inputHandler(e, "goal")}
                  >
                    <option value="one">1 time daily</option>
                    <option value="two">2 times daily</option>
                    <option value="three">3 times daily</option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex gap={4}>
                <FormControl>
                  <FormLabel>Time of day</FormLabel>
                  <Select
                    value={habitDetails.timeOfDay}
                    onChange={(e) => inputHandler(e, "timeOfDay")}
                  >
                    <option value="any">Any Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="night">Night</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Start Date</FormLabel>
                  <Select
                    value={habitDetails.startDate}
                    onChange={(e) => inputHandler(e, "startDate")}
                  >
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="nextWeek">Next Week</option>
                  </Select>
                </FormControl>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              colorScheme="teal"
              type="submit"
              onClick={submitHabit}
            >
              {"Update"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditHabitModal;
