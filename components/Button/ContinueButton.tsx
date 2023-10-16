import React from "react";
import { Button, Text } from "@chakra-ui/react";

const SignInButton = () => {
    return (
        <Button variant='outline' colorScheme='#95AA88' size='md' width="100%">
            <Text fontSize='sm' color="#636363" fontWeight={500}>Accessar o Mapa</Text>
        </Button>
    )
}

export default SignInButton;