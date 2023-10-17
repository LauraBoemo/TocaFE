import React from "react";
import { Image } from "@chakra-ui/react";

const LogoRounded = () => {
    return (
        <Image
            boxSize='60px'
            padding="5px"
            border="1px solid #95AA88"
            borderRadius="100%"
            backgroundColor="#FFFFFF"
            objectFit='cover'
            src='/TocaLogo.svg'
            alt='Logo Toca'
        />
    )
}

export default LogoRounded;
