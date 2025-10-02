import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardLayout } from "./shared/CardLayout";

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
  memberSince: string;
  points: number;
  level: string;
}

export interface UserActions {
  onViewProfile?: () => void;
  onMessage?: () => void;
}

export interface UserCardProps {
  user: UserProfile;
  actions?: UserActions;
}

function UserCardContent({ user }: { user: UserProfile }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Member Since:</span>
        <span className="font-medium">{user.memberSince}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Points:</span>
        <span className="font-medium">{user.points.toLocaleString()}</span>
      </div>
    </div>
  );
}

function UserCardActions({ actions }: { actions: UserActions }) {
  return (
    <>
      {actions.onViewProfile && (
        <Button variant="default" onClick={actions.onViewProfile} className="flex-1">
          View Profile
        </Button>
      )}
      {actions.onMessage && (
        <Button variant="outline" onClick={actions.onMessage} className="flex-1">
          Message
        </Button>
      )}
    </>
  );
}

export function UserCard({ user, actions = {} }: UserCardProps) {
  return (
    <CardLayout
      user={user}
      badge={<Badge variant="secondary">{user.level}</Badge>}
      content={<UserCardContent user={user} />}
      actions={<UserCardActions actions={actions} />}
    />
  );
}