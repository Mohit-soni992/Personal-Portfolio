import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
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
            <div className="container max-w-6xl mx-auto z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Text */}
                    <div className="space-y-6 text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in-delay-1 whitespace-nowrap">Hello, I'm </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2 whitespace-nowrap">Mohit Soni</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-4">
                            Beginner frontend developer passionate about learning and building modern, responsive web applications.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Photo Card */}
                    <div className="flex justify-center opacity-0 animate-fade-in-delay-4">
                        <div className="relative p-[2px] rounded-[20px]"
                            style={{
                                background: "linear-gradient(135deg, hsl(var(--primary)), #06b6d4, hsl(var(--primary)))"
                            }}
                        >
                            <div className="relative w-100 h-96 rounded-[18px] overflow-hidden bg-card/80 backdrop-blur-xl">
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl" />
                                <img
                                    src="/images/mohit.jpg"
                                    alt="Mohit Soni"
                                    className="relative z-10 w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Arrow */}
            <div className={cn(
                "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-all duration-700 ease-in-out",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
            )}>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};