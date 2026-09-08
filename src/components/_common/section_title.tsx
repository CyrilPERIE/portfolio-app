import { Separator } from "@/src/ui/separator"

export const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-xl font-bold mb-4 text-primary">{title} <span className="text-muted-foreground text-base">{subtitle.toUpperCase()}</span></p>
            <Separator className="bg-border flex-1" />
        </div>
    )
}