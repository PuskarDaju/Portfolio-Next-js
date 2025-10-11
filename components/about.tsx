export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Profile Image */}
        <div className="relative group">
          <div className="aspect-square overflow-hidden rounded-2xl shadow-lg ring-4 ring-primary/10">
            <img
              src="/puskar.png" // 👉 replace this with your actual image path
              alt="Puskar Niroula"
              className="object-cover w-100 h-120 transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md text-sm">
            Full-Stack Developer 💻
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            I’m <span className="font-semibold text-foreground">Puskar Niroula</span>, a passionate full-stack developer 
            dedicated to building clean, scalable, and high-performing web applications.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            My expertise includes backend development using PHP and JavaScript
            within enterprise-level frameworks like <span className="font-semibold">Laravel</span>, 
            <span className="font-semibold">Symfony</span>, and <span className="font-semibold">Laminas</span>.
            I also specialize in database design and performance optimization with 
            MySQL, PostgreSQL, and SQL Server.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            I love solving real-world problems through code, following clean architecture and 
            modern design principles. I’m always learning and exploring new technologies to 
            stay at the forefront of innovation.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.facebook.com/puskar.niroula.224425"
              className="bg-primary text-white px-5 py-2 rounded-full shadow-md hover:bg-primary/90 transition"
            >
              Contact Me
            </a>
       
          </div>
        </div>
      </div>
    </section>
  );
}
