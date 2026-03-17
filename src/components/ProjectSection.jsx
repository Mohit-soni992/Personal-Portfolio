import { Github } from "lucide-react"
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id:1,
        title:"City Hostel Finder",
        description:"A upcoming website which helps to find hostel's & PG's in your city",
        image:"/Projects/project.png",
        tags:["Html"," Css"," Js"],
        githubUrl:"https://github.com/Mohit-soni992/cityhosteljodhpur",

    },
    {
        id:2,
        title:"Portfolio Website",
        description:"A portfolio website to showcase my projects and skills",
        image:"/Projects/project1.png",
        tags:["Html"," Css"," Js"," React"],
        githubUrl:"https://github.com/Mohit-soni992/Personal-Portfolio",

    },
    // for more project you can add here 
]

export const ProjectSection = () => {
    return (
    <section id = "projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p>
                Some of my Projects | More to come
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground  ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl}
                                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Mohit-soni992"
                >
                    Github <ArrowRight size={16} /> 
                </a>
            </div>
        </div>
    </section>)
}