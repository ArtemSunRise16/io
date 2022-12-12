import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function InitialFocus({ formText, formFunc, buttonText }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onChangeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Box>
      <Button onClick={onOpen}>{buttonText}</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{formText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={onChangeUsernameHandler}
                ref={initialRef}
                placeholder="Username"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={onChangePasswordHandler}
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                formFunc(username, password);
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default InitialFocus;
