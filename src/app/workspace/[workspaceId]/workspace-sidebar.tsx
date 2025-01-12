import { useCurrentMember } from "@/features/memebers/api/use-current-member";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader2 } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { WorkspaceHeader } from "./workspace-header";

export const WorkspaceSidebar = () => {
    const workspaceId = useWorkspaceId();

    const { data: member, isLoading: memberLoading } = useCurrentMember( { workspaceId } );
    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace( { id: workspaceId } );

    if (workspaceLoading || memberLoading) {
        return <div className="flex flex-col bg-[#008060] h-full items-center justify-center">
            <Loader2 className="size={5} animate-spin text-white" />
        </div>;
    }

    if (!workspace || !member) {
        return <div className="flex flex-col bg-[#008060] h-full items-center justify-center">
            <AlertTriangle className="size-5 text-white" />
        </div>;
    }

    return (
        <div className="flex flex-col bg-[#008060] h-full">
            <WorkspaceHeader workspace={workspace} isAdmin={member.role === "admin"} />
        </div>
    );
};