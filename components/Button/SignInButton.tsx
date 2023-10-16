"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react"

import { Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
    const { data: session } = useSession();

    if(session && session.user) {
        return (
            <>
                <h1>{session.user.name}</h1>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </>
        )
    }

    return (
        <Button leftIcon={<FcGoogle />} variant='outline' colorScheme='#95AA88' size='md' onClick={() => signIn()} width="100%">
            <Text fontSize='sm' color="#636363" fontWeight={500}>Continuar com Google</Text>
        </Button>
    )
}

export default SignInButton;