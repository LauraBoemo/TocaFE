import React from "react";
import { AbsoluteCenter, Box, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";

import LogoRounded from "./Logo/LogoRounded";
import LogoTypography from "./Logo/LogoTypography";

import SignInButton from "./Button/SignInButton";
import ContinueButton from "./Button/ContinueButton";

const LoginModal = () => {
    return (
        <Modal isOpen={true} onClose={() => {}}>
          <ModalOverlay />
          <ModalContent maxH="65vh" maxW="35%">           
            <ModalHeader>
              <Stack direction="column" alignItems="center" spacing={0.5}>
                <LogoRounded />
                <LogoTypography />
              </Stack>
            </ModalHeader>
            <ModalBody>
              <Stack direction="column" alignItems="center" spacing="15px" margin="0 40px">
                <Text fontSize='md' color="#708265" fontWeight={300}>
                  Faça seu login
                </Text>
                <SignInButton />
                <Box position='relative' padding='2.5'>
                  <Divider width="200px" color="#708265" opacity="1" />
                  <AbsoluteCenter bg='white' px='4'>
                    <Text fontSize='md' color="#708265" fontWeight={300}>
                      Ou
                    </Text>
                  </AbsoluteCenter>
                </Box>
                <Text fontSize='md' color="#708265" fontWeight={300}>
                  Continue sem Login
                </Text>
                <ContinueButton />
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Stack width="100%" alignItems="center">
                <Text fontSize='xs' color="#63636380" fontWeight={300}>
                  Toca© 2023, Brasil
                </Text>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>  
    )
}

export default LoginModal;
