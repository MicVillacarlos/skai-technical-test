import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardLayout } from "./shared/CardLayout";

export interface AdminProfile {
  name: string;
  email: string;
  avatarUrl?: string;
  role: string;
  department: string;
  employeeId: string;
  permissions: string[];
}

export interface AdminActions {
  onEdit?: () => void;
  onPromote?: () => void;
  onDelete?: () => void;
}

export interface AdminCardProps {
  admin: AdminProfile;
  actions?: AdminActions;
}

function AdminCardContent({ admin }: { admin: AdminProfile }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Role:</span>
        <span className="font-medium">{admin.role}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Department:</span>
        <span className="font-medium">{admin.department}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Employee ID:</span>
        <span className="font-mono text-xs font-medium">{admin.employeeId}</span>
      </div>
      {admin.permissions.length > 0 && (
        <div className="space-y-1">
          <span className="text-sm text-muted-foreground">Permissions:</span>
          <div className="flex flex-wrap gap-1">
            {admin.permissions.map((permission) => (
              <Badge key={permission} variant="outline" className="text-xs">
                {permission}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AdminCardActions({ actions }: { actions: AdminActions }) {
  return (
    <>
      {actions.onEdit && (
        <Button variant="default" onClick={actions.onEdit} size="sm">
          Edit
        </Button>
      )}
      {actions.onPromote && (
        <Button variant="outline" onClick={actions.onPromote} size="sm">
          Promote
        </Button>
      )}
      {actions.onDelete && (
        <Button variant="destructive" onClick={actions.onDelete} size="sm">
          Delete
        </Button>
      )}
    </>
  );
}

export function AdminCard({ admin, actions = {} }: AdminCardProps) {
  return (
    <CardLayout
      user={admin}
      badge={<Badge variant="destructive">Admin</Badge>}
      content={<AdminCardContent admin={admin} />}
      actions={<AdminCardActions actions={actions} />}
    />
  );
}