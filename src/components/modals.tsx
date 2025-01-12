"use client";

import { CreateWorkspacesModal } from "@/features/workspaces/components/create-workspaces-modal";
import { useEffect, useState } from "react";

export const Modals = () => {

    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <CreateWorkspacesModal />
        </>
    );
};