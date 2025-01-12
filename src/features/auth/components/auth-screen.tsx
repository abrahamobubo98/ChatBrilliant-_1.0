"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");
    return (<div className="min-h-screen h-full flex items-center justify-center bg-[#00cc99]">
        {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
    </div>
    );
};