import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const categories = ["All Projects", "Vocational", "Education", "Health", "Environment", "Culture"] as const;

type Category = typeof categories[number];

interface Project {
  title: string;
  description: string;
  category: Category;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project Brij-Hunar",
    description: "Empowering rural women through advanced pottery and rural training, connecting local artisans directly to urban markets to ensure…",
    category: "Vocational",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvGlYjpEeKctCyTLWUUZugCYE0j1Qft8SF2pCMN9hXCbM1WzeORo4yKbU3pU4xFnBOknhdrY7lzQFlqiLJEmqgSHLK-YpWqhFnvCDoAfybVFtqWTWRrYm9RUOn4we-LrEcuuCF_cqkkbi-QedqUbx4r905ZBJIh39tlUQ92srTh15PPWB2823Xc99a-uqUd1ustBjuB9EA-h1fPHdDMTUAscpahKSCyrjufvfTanaYFu8h7CcNf9MYgPlL6K_okiZjK_Khu-pRh0",
    link: "/projects/brij-hunar",
  },
  {
    title: "Brij-Surabhi",
    description: "Preserving and promoting the cultural heritage of Brij through traditional arts, music, and craftsmanship programs across villages.",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy3rTu_soF2Aw8RiHeFaeKpVTVg8sfRliFtM3kSJZESUH1PK6kfWHwFeOh8wicDJ3VdT6SnBjadCJ40gtypt4IuMHtWaKhSqBR5ZfDmpS7i2DTGa91oewksftrZHGNQ36VnfUlc9IDZcrLMWpRGxkMNa2_TFvQ-zMJ6d7jXrYUlGNx8SsI_d5sYyV3hVX7xZBb6OMW1xEdiIvNMNpgWo1gM9h4b-X20yhbPc3WwMAHcZ8cDcNJFYymdt3OaYo_pQMRJ6Loc5zbmKM",
    link: "/projects/brij-surabhi",
  },
  {
    title: "Shiksha Adhikar",
    description: "Providing quality primary education and digital literacy to underprivileged children in remote villages, bridging the urban-rural divide.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    title: "Swasthya Setu",
    description: "Mobile medical units delivering critical healthcare services, maternal care, and nutritional support to villages with limited access.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    title: "Green Braj Initiative",
    description: "A massive afforestation drive aiming to restore the ecological beauty of the Yamuna belt through community-led plantation efforts.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    title: "Sanskriti Samrakshan",
    description: "Preserving the intangible cultural heritage of Brij through archive documentation, folk art, and supporting traditional musicians.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&q=80",
  },
  {
    title: "Maati Kala",
    description: "Supporting traditional potters with modern equipment and market linkages to keep the ancient art of clay pottery alive while ensuring sustainability.",
    category: "Vocational",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    title: "Nirmal Jal",
    description: "Installing community water filtration plants in arsenic-affected villages to provide safe, clean drinking water and reduce waterborne diseases.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1581093458791-4b041a98425f?w=600&q=80",
  },
  {
    title: "Digital Sakshar",
    description: "A focused digital literacy program for rural youth, equipping them with essential computer skills to navigate the modern job market.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  },
  {
    title: "Swachh Braj",
    description: "Implementing sustainable waste management systems in pilgrimage towns, focusing on plastic recycling and composting organic waste.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
  {
    title: "Kisan Samriddhi",
    description: "Training small-scale farmers in organic farming techniques and value-added processing to increase crop yields and market profitability.",
    category: "Vocational",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    title: "Matri Shakti",
    description: "A comprehensive health program for rural and semi-urban hygiene management and reproductive health awareness for adolescent girls.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Projects");

  const filtered = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Our Impact Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-2 leading-tight">
            Core Initiatives <span className="font-serif italic">&</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-accent italic leading-tight mb-6">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring our cornerstone initiatives dedicated to fostering sustainable growth, preserving cultural heritage, and empowering the communities of the Brij region.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-background pb-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all border ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground border-accent shadow-md"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {project.link ? (
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1"
                    >
                      View Project
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-muted-foreground text-xs font-bold uppercase tracking-widest gap-1 cursor-default">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
            Want to partner on a<br />
            <span className="text-secondary italic">Specific Initiative?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            We welcome corporate partnerships and individual sponsorships for specific projects. Let's build a tailored impact plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collaborations"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
            >
              Partner With Us
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-full uppercase tracking-widest text-sm hover:border-primary-foreground/60 transition-all"
            >
              Download Project Brochure
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
