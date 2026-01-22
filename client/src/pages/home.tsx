import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layout, Smartphone, ArrowRight, Mail, Linkedin, Github, ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-tight">dev.portfolio</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                Available for work
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Junior Frontend Developer <br />
              <span className="text-muted-foreground">crafting clean interfaces.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I build accessible, pixel-perfect, and performant web experiences. 
              Focused on React, modern CSS, and creating intuitive user journeys.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">What I Do</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Responsive Web UI</CardTitle>
                <CardDescription>
                  Layouts that work perfectly on any device, from mobile phones to large desktop screens.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Frontend Dev</CardTitle>
                <CardDescription>
                  Turning designs into functional code using HTML5, CSS3, JavaScript, and React.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Layout className="h-10 w-10 text-primary mb-2" />
                <CardTitle>UI Improvements</CardTitle>
                <CardDescription>
                  Refining existing interfaces, fixing layout bugs, and improving user interaction details.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group overflow-hidden border-border/50 flex flex-col">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <Layout className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold">E-commerce Dashboard</h3>
                  <a href="#" className="text-muted-foreground hover:text-primary"><ExternalLink className="h-4 w-4" /></a>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  A responsive analytics dashboard for an online store showing sales data and inventory status.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">Tailwind</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">Recharts</span>
                </div>
              </CardHeader>
            </Card>

            {/* Project 2 */}
            <Card className="group overflow-hidden border-border/50 flex flex-col">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <Code2 className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold">Task Manager</h3>
                  <a href="#" className="text-muted-foreground hover:text-primary"><ExternalLink className="h-4 w-4" /></a>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  A kanban-style task management application with drag-and-drop functionality for organizing todo items.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">DnD Kit</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">Zustand</span>
                </div>
              </CardHeader>
            </Card>

            {/* Project 3 */}
            <Card className="group overflow-hidden border-border/50 flex flex-col">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <Globe className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold">Weather App</h3>
                  <a href="#" className="text-muted-foreground hover:text-primary"><ExternalLink className="h-4 w-4" /></a>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-time weather dashboard fetching data from a public API with location search and 5-day forecast.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">Axios</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">API</span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Core</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Git"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-background border border-border rounded-md font-medium shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Styling & UI</h3>
              <div className="flex flex-wrap gap-3">
                {["Tailwind CSS", "SASS/SCSS", "Framer Motion", "Responsive Design", "Flexbox/Grid", "Accessibility (a11y)"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-background border border-border rounded-md font-medium shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Figma", "npm/yarn", "Vite", "Chrome DevTools", "GitHub"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-background border border-border rounded-md font-medium shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Let's work together</h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-medium mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open for remote & freelance work
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="h-4 w-4" /> Send me an email
              </a>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Frontend Developer Portfolio. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
