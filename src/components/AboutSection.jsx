import { Code } from "lucide-react";

export const AboutSection = () =>{
    return ( <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & More to be</h3>
                    <p className="text-muted-foreground">
                        Beginner or Fresher in this field but dreams to be a great Developer
                    </p>
                    <p className="text-muted-foreground">
                        I am a passionate Full-Stack Developer and an AI/ML enthusiast. With a strong foundation in Java, Python, and Web Technologies, I love building efficient applications and exploring the potential of Machine Learning. As a fresher, I am eager to apply my technical skills to real-world projects and continuously learn in a fast-paced environment
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-content">
                        <a href="#contact" className="cosmic-button">
                            Let's do it together
                        </a>
                       <a 
                        href="/Mohit's resume.pdf" 
                        download="Mohit_Soni_Resume.pdf" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Frontend | HTML, CSS, JavaScript<br />
                                    Backend | Java, Python, Node.js
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Programming & Databases</h4>
                                <p className="text-muted-foreground">
                                    Software Engineering | Java, Python<br />
                                    Data | SQL & Database Management
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Future Tech</h4>
                                <p className="text-muted-foreground">
                                    AI & Machine Learning <br />
                                    Exploring Intelligent Systems
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    )
};