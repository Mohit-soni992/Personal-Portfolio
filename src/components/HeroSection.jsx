import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // cn utility ka use opacity transition ke liye

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Window height ka 40% calculate karna
            const scrollThreshold = window.innerHeight * 0.4;
            
            if (window.scrollY > scrollThreshold) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1">Hello, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">Mohit </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">Soni</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Beginner frontend developer passionate about learning and building modern, responsive web applications.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll-to-hide Arrow with transition */}
            <div className={cn(
                "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-all duration-700 ease-in-out",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
            )}>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};