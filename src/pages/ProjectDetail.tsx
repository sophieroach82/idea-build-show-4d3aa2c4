import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import studioProjectsCover from "@/assets/studio-projects-cover.jpeg";

interface StudioProject {
  title: string;
  description: string;
  processDescription?: string;
  processPdf?: string;
  images?: string[];
}

const studioProjects: StudioProject[] = [
  {
    title: "Pairs: Salt & Pepper Shakers",
    description: "A sculptural exploration of form and function, these red salt and pepper shakers were designed to complement each other while maintaining distinct identities. The project focused on material integrity and the relationship between paired objects.",
    processPdf: "/documents/Pairs_Process_Book_Final.pdf",
  },
  {
    title: "Wooden Mallet: Exploration of Material Integrity",
    description: "For this project, I designed and built a wooden mallet with a detachable handle, crafted from a single slab of hardwood. My inspiration came from the idea of simplicity in form, in turn to expose and highlight the flaws of the raw material, which are the integral factor in the composition's visual appeal. I wanted the design to feel purposeful, where every curve and connection reflected both function and craft.",
    processDescription: "I created my first shop orthographic drawing to guide fabrication, then used laser cutting to translate digital precision into physical components. By calculating the taper angle of the detachable handle, I combined design intuition with mathematical accuracy, bridging technical drawing and hands-on making. This project deepened my appreciation for craftsmanship, material honesty, and the integration of design thinking into physical making.",
    images: [
      "https://lh3.googleusercontent.com/sitesv/AAzXCkcTEfIHc3Ph9MiJFKzyQHUyZj5taHUiNk80iwmP6UInOa3r9VKViukxv7gLiiGF7yw1pvXkBtdzrEb88gEJw6rdI4xHfNaw0Snh3rjYM6FN8tbeQD9D4rin1MCud3Ckav23P120K7-N9M3JQSdO1Tw7VsJYe_la13HiE0xCh4qTInXKJyvKIevYMnnJS8OEdrbEdppNw4ztVT7sjopzSj6wLp8P83EPcdAj6aQ=w1280",
    ],
  },
  {
    title: "Spatial Composition: Interaction of Line and Plane",
    description: "Inspired by the organic form of a flower, this composition explores the relationship between line and plane through curved paper surfaces and flowing wire elements. The design captures the sense of balance and movement found in nature, emphasizing how simple materials can express spatial harmony. My goal was to capture the dynamism and structural integrity found in natural forms while using minimal materials: paper and wire.",
    processDescription: "I learned to solder wire for the first time, refining precision and control while constructing delicate linear connections. Working with cardstock as a new material, I explored how subtle bends and folds could define planar structure, and by using markers for shading, I developed a deeper understanding of light, shadow, and depth in visual presentation.",
    images: [
      "https://lh3.googleusercontent.com/sitesv/AAzXCkdGqbb8DdGEOZqFQzRLMAfj03G0f5tHYYJ6tKKR4UdSFVkz0jGoq-4XCkGb3UYlUZ1f84PCjPpklN01t0c3t1P0QyVTlymtFMZ46SR0QJuvrnc_TNH_CC_OSbaVVYOfcQPnjtBTIAnMM-qmkGnpFPZn7YNql9Ryu_vcHZq08Wu7pfXUBz9MAa6zcqk0HW7jAMzjZ8eaYJsfMBrv_5Z8dnBLIJ757tdhh1rk=w1280",
    ],
  },
  {
    title: "Dynamic Form: Motion and Tension in Structure",
    description: "Inspired by the mechanics of a bug's pincer, this project explores dynamic motion and structural tension through an abstract form. The composition captures the balance between rigidity and movement, translating the precision of natural mechanisms into an expressive design. I explored how subtle curvature and asymmetry could guide the viewer's eye and create the illusion of motion through form alone.",
    processDescription: "I learned to render a ribs-and-strings model for the first time, developing a stronger understanding of structure, depth, and spatial continuity through layered linework. This project also advanced my technical precision as I refined my laser-cutting skills to achieve smooth, accurate contours. Working with foam for the first time using a hot wire cutter taught me how to control form through gradual shaping.",
    images: [
      "https://lh3.googleusercontent.com/sitesv/AAzXCkcQ8KhEUE6wBH00kczySpU9k-d0Sr2Uny-R2DEZsr-0j827CdCTbsDWxPcwTknCRLz0kegmf7Op1Tn_4tcDmTySf2TqsFCBkfehu3cgWItPA6qfstsS32MlMWenwyKwEUzh0fpiktEP4GLq-iFMm1Ee99-IzOgpCd2i6S3I5Gvw0Sc5FqoVrZC4JX8b9s2UWpo0_YBDv3K_g66HFmnsPh0HfjzrrV0-ihDTnqw=w1280",
    ],
  },
];

const projectData: Record<string, {
  title: string;
  category: string;
  description: string;
  overview: string;
  process: string[];
  tools: string[];
  image: string;
  gallery: string[];
  studioProjects?: StudioProject[];
  processPdf?: string;
}> = {
  "studio-projects": {
    title: "Studio Projects",
    category: "Industrial Design",
    description: "Product sketches, models, and prototypes from Georgia Tech design studio",
    overview: "A collection of Industrial Design studio work at Georgia Tech, featuring concept development, sketching, physical modeling, and prototyping. These projects demonstrate my ability to take ideas from initial concept to tangible form, with a focus on material integrity, form exploration, and human-centered design.",
    process: [
      "Researched user needs and explored material properties",
      "Generated multiple concepts through rapid sketching and ideation",
      "Selected promising directions for further development",
      "Created physical models and prototypes using woodworking, laser cutting, and hand fabrication",
      "Documented the design process through comprehensive process books",
    ],
    tools: ["Sketching", "CAD Software", "3D Modeling", "Woodworking", "Laser Cutting", "Physical Prototyping"],
    image: studioProjectsCover,
    gallery: [],
    studioProjects: studioProjects,
  },
  "website-development": {
    title: "Website Development",
    category: "UI/UX & Coding",
    description: "CS 1301 project using Streamlit, APIs, and JSON",
    overview: "A comprehensive web development project completed for CS 1301 at Georgia Tech, demonstrating the intersection of my design sensibilities with technical programming skills. This project showcases my ability to work with modern web technologies while maintaining focus on user experience and visual clarity.",
    process: [
      "Conceptualized the user interface with wireframes and mockups",
      "Developed the backend using Python and Streamlit framework",
      "Integrated external APIs to fetch and display dynamic data",
      "Implemented JSON data handling for persistent storage",
      "Tested and refined the user experience through iterative development",
    ],
    tools: ["Python", "Streamlit", "APIs", "JSON", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    ],
  },
  "leadership": {
    title: "Panhellenic Council",
    category: "Leadership",
    description: "DEI initiatives and community engagement",
    overview: "As DEI Vice President of the Collegiate Panhellenic Council, I lead initiatives that foster inclusive practices and facilitate meaningful dialogue across Greek life at Georgia Tech. This role combines strategic planning with community engagement, allowing me to develop leadership skills while making a positive impact.",
    process: [
      "Developed comprehensive DEI programming calendar",
      "Facilitated bi-weekly meetings with chapter delegates",
      "Created resources and training materials for chapters",
      "Organized inter-chapter events promoting dialogue and understanding",
      "Measured and reported on initiative outcomes",
    ],
    tools: ["Strategic Planning", "Event Coordination", "Community Building", "Public Speaking"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/#portfolio" className="text-primary hover:underline font-body">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const isStudioProjects = id === "studio-projects";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 -mt-24 relative z-10 pb-24">
          {/* Header */}
          <div className="bg-background p-8 lg:p-12 mb-12">
            <Link
              to="/#portfolio"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm mb-8"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                {project.category}
              </p>
              <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Studio Projects List */}
          {isStudioProjects && project.studioProjects && (
            <section className="mb-16">
              <h2 className="font-display text-2xl text-foreground mb-8">Projects</h2>
              <div className="space-y-12">
                {project.studioProjects.map((studioProject, index) => (
                  <div
                    key={index}
                    className="p-6 lg:p-8 bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <h3 className="font-display text-xl text-foreground mb-3">
                      {studioProject.title}
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed mb-4">
                      {studioProject.description}
                    </p>
                    {studioProject.images && studioProject.images.length > 0 && (
                      <div className="mb-4">
                        <img
                          src={studioProject.images[0]}
                          alt={studioProject.title}
                          className="w-full max-w-2xl rounded-lg"
                        />
                      </div>
                    )}
                    {studioProject.processDescription && (
                      <div className="mb-4">
                        <h4 className="font-display text-lg text-foreground mb-2">Process</h4>
                        <p className="text-muted-foreground font-body font-light leading-relaxed">
                          {studioProject.processDescription}
                        </p>
                      </div>
                    )}
                    {studioProject.processPdf && (
                      <a
                        href={studioProject.processPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
                      >
                        <FileText size={16} />
                        View Process Book
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Process</h2>
            <ol className="space-y-4">
              {project.process.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-display text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground font-body font-light pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Tools */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-body bg-card border border-border text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <section className="mb-16">
              <h2 className="font-display text-2xl text-foreground mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="image-reveal aspect-[3/2] overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="pt-12 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-muted-foreground font-body">
              Interested in this project?
            </p>
            <Link
              to="/#contact"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;