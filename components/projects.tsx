import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with seamless payment integration, inventory management, and an intuitive admin dashboard. Built for scalability and performance using Laravel and Vue.js.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis"],
    github: "https://github.com/PuskarDaju/e_commerce",
  },
  {
    title: "Blog Application API",
    description:
      "A robust API backend for a blog platform, providing secure authentication, rate limiting, and efficient request routing. Developed with Laravel and MySQL, optimized for high concurrency.",
    technologies: ["Laravel", "MySQL", "Docker", "REST API"],
    github: "https://github.com/PuskarDaju/BlogApp-laravel-",
  },
  {
    title: "StoreMaster CMS",
    description:
      "A custom CMS built with the Laminas framework, featuring multi-language support, role-based access control, and a RESTful API for seamless integration with front-end applications.",
    technologies: ["Laminas", "MySQL", "JavaScript", "Bootstrap", "REST API", "Chart.js"],
    github: "https://github.com/PuskarDaju/StoreMaster",
  },
  {
    title: "Portfolio Website for Artists",
    description:
      "A dynamic platform for artists to showcase portfolios with real-time analytics, interactive galleries, and performance tracking. Built with modern front-end frameworks for a responsive experience.",
    technologies: ["JavaScript", "Vue.js"],
    github: "https://github.com/PuskarDaju/art_portfolio",
  },
];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
