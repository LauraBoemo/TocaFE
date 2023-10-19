import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

const LogoTypography = () => {
    return (
        <Stack direction="column" alignItems="center" spacing={-0.5}>
            <Text fontSize='4xl' fontWeight={700} color="#95AA88" lineHeight="35px" ml="-6px" letterSpacing="-4px">
                Toca 
            </Text>
            <Text fontSize='sm' mt={-1.5} fontWeight={200} color="#708265">
                O seu local
            </Text>
        </Stack>
    )
}

export default LogoTypography;
