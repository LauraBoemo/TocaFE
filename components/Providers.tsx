"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

import theme from "@/app/theme";

interface Props {
    children: ReactNode;
}

const Providers = (props: Props) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <SessionProvider>
                    {props.children}
                </SessionProvider>
            </ChakraProvider>
        </CacheProvider>
    ) 
}

export default Providers;
