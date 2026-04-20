import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  icon: ReactNode;
  iconBgClass: string;
}

export default function StatsCard({ title, value, unit, subtitle, icon, iconBgClass }: StatsCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-lg shrink-0", iconBgClass)}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors mb-1">{title}</p>
            <p className="text-2xl font-bold text-foreground">
              {value} {unit && <span className="text-sm font-normal text-muted-foreground">{unit}</span>}
            </p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
