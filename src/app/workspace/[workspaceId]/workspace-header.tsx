import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger, 
    DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Doc } from "../../../../convex/_generated/dataModel";
import { ChevronDown, ListFilter, SquarePen } from "lucide-react";
import { Hint } from "@/components/hint";

interface WorkspaceHeaderProps {
    workspace: Doc<"workspaces">;
    isAdmin: boolean;
}

export const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
    return (
        <div className="flex items-center justify-between gap-0.5 h-[49px] px-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button 
                    variant="transparent" 
                    className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
                    size="sm">
                        
                        <span className="truncate">{workspace?.name}</span>
                        <ChevronDown className="size-4 ml-1.5"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="bottom" className="w-64">
                    <DropdownMenuItem
                    className="cursor-pointer capitalize">
                        <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                            {workspace.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-bold">{workspace.name}</p>
                            <p className="text-xs text-muted-foreground">Active Group</p>
                        </div>
                    </DropdownMenuItem>
                    {isAdmin && (
                        <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                        className="cursor-pointer py-2"
                        onClick={() => {}}>
                            Invite Members to {workspace.name}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                        className="cursor-pointer py-2"
                        onClick={() => {}}>
                            Preferences
                        </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-0.5">
                <Hint label="Filter Conversations" side="bottom">
                    <Button variant="transparent" size="iconSm">
                        <ListFilter className="size-4" />
                    </Button>
                </Hint>
                <Hint label="New Message" side="bottom">
                    <Button variant="transparent" size="iconSm">
                        <SquarePen className="size-4" />
                    </Button>
                </Hint>
            </div>
        </div>
    );
};