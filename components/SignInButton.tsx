"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react"

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

    return <button onClick={() => signIn()}>Sign In</button>
}

export default SignInButton;