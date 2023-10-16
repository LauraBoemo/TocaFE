import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

const LogoTypography = () => {
    return (
        <Stack direction="column" alignItems="center">
            <Image
                width="auto"
                height="25px"
                objectFit='cover'
                src='/Toca.svg'
                alt='Toca'
            />
            <Text fontSize='xl' marginTop={-3.5} fontWeight={200} color="#708265">
                O seu local
            </Text>
        </Stack>
    )
}

export default LogoTypography;
