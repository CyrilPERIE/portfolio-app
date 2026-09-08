import ImageHero from "@/src/components/hero/image.hero"
import Text from "@/src/components/hero/text.hero"
import { cn } from "cn"

const Hero = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center justify-center gap-4", className)}>
            <ImageHero />
            <Text />
        </div>
    )
}

export default Hero