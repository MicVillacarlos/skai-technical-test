import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BaseUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface CardLayoutProps {
  user: BaseUser;
  badge?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export function CardLayout({ user, badge, content, actions }: CardLayoutProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle>{user.name}</CardTitle>
              {badge}
            </div>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </div>
      </CardHeader>

      {content && <CardContent className="space-y-4">{content}</CardContent>}
      {actions && <CardFooter className="flex gap-2">{actions}</CardFooter>}
    </Card>
  );
}