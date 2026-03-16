import { useEffect, useRef, useState } from "react";

export const ParticleNetwork = () => {
    const canvasRef = useRef(null);
    const [isDark, setIsDark] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        // Theme change observe karta rahega
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isDark) return; // Light mode mein canvas hi mat chalao

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animId;
        let particles = [];

        const COUNT = 80;
        const MAX_DIST = 130;
        const PRIMARY = "139, 92, 246";
        const CYAN = "6, 182, 212";

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const rand = (min, max) => Math.random() * (max - min) + min;

        for (let i = 0; i < COUNT; i++) {
            particles.push({
                x: rand(0, canvas.width),
                y: rand(0, canvas.height),
                vx: rand(-0.3, 0.3),
                vy: rand(-0.3, 0.3),
                r: rand(1.5, 3),
                color: Math.random() > 0.5 ? PRIMARY : CYAN,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, 0.8)`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) {
                        const alpha = (1 - dist / MAX_DIST) * 0.4;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(${p.color}, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, [isDark]); // ← isDark change hone par re-run hoga

    // Light mode mein canvas render hi mat karo
    if (!isDark) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};