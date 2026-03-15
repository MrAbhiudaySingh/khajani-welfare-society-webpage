import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

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
    title: "Brij-Hunar",
    description: "Vocational skill training in Beauty Therapy and Tailoring. 400+ women trained annually, 20,000+ since 2007.",
    category: "Vocational",
    image: "/images/projects/brij-hunar-icon.jpg",
    link: "/projects/brij-hunar",
  },
  {
    title: "Brij-Nipun",
    description: "Short-term skill camps building awareness and confidence. 750+ women participate annually in training programs.",
    category: "Vocational",
    image: "/images/projects/brij-nipun-icon.jpg",
    link: "/projects/brij-nipun",
  },
  {
    title: "Brij-Anshuman",
    description: "Vocational training for women inmates at Mathura Jail, supporting rehabilitation and livelihood opportunities after release.",
    category: "Vocational",
    image: "/images/projects/brij-anshuman-icon.jpg",
    link: "/projects/brij-anshuman",
  },
  {
    title: "Khajani Learning Academy",
    description: "Academic support for girls Classes 6-10. 100+ girls supported with goal of 120 for 2026-27. Learn Today, Lead Tomorrow.",
    category: "Education",
    image: "/images/projects/kla-students.jpg",
    link: "/projects/kla",
  },
  {
    title: "Digi-Shala",
    description: "Digital literacy and computer training for women, bridging the digital divide through practical skill development.",
    category: "Education",
    image: "/images/projects/digi-shala-icon.jpg",
    link: "/projects/digi-shala",
  },
  {
    title: "EDUDAKSH",
    description: "Remedial learning for government school girls aged 10-14, strengthening academic foundations in core subjects.",
    category: "Education",
    image: "/images/projects/edudaksh-icon.jpg",
    link: "/projects/edudaksh",
  },
  {
    title: "Brij-Sangini",
    description: "Women's health awareness and hygiene education. Health check-up camps, menstrual hygiene sessions, and blood donation drives.",
    category: "Health",
    image: "/images/projects/brij-sangini-icon.jpg",
    link: "/projects/brij-sangini",
  },
  {
    title: "Sanitary Napkin Initiative",
    description: "Ensuring dignity in education through vending machines, health education, and safe disposal facilities.",
    category: "Health",
    image: "/images/projects/sanitary-napkin.jpg",
    link: "/projects/sanitary-napkin",
  },
  {
    title: "Brij-Seva",
    description: "Community welfare through Jal Seva (5+ years running), Daan Utsav during Makar Sankranti, and plantation drives.",
    category: "Environment",
    image: "/images/projects/brij-seva-icon.jpg",
    link: "/projects/brij-seva",
  },
  {
    title: "Brij-Surabhi",
    description: "Supporting SHG women through Braj art, craft, and eco-friendly products. Strengthening women-led enterprises since 2007.",
    category: "Culture",
    image: "/images/projects/brij-surabhi-cow.jpg",
    link: "/projects/brij-surabhi",
  },
  {
    title: "Brij-Surabhi Cow Welfare",
    description: "Transforming cow waste into eco-friendly Panchagavya commodities. Sustainable rural empowerment initiative.",
    category: "Environment",
    image: "/images/projects/brij-surabhi-cow-craft.jpg",
    link: "/projects/brij-surabhi-cow-welfare",
  },
  {
    title: "Shakti Ek Adhaar",
    description: "Annual Day celebration honoring women leaders, educators, and entrepreneurs who inspire change in communities.",
    category: "Culture",
    image: "/images/projects/shakti-ek-adhaar-1.jpg",
    link: "/projects/shakti-ek-adhaar",
  },
  {
    title: "Radha Krishna Poshak Training",
    description: "Preserving sacred deity garment making through World Bank Pro-Poor Tourism project partnership.",
    category: "Culture",
    image: "/images/projects/poshak-sanjhi.jpg",
    link: "/projects/radha-krishna-poshak",
  },
  {
    title: "Royal Sanjhi Art Training",
    description: "Reviving Brij stencil art heritage through MSME training programs in fashion, apparel, and interior design.",
    category: "Culture",
    image: "/images/projects/royal-sanjhi-training.jpg",
    link: "/projects/royal-sanjhi",
  },
  {
    title: "SHGs & Brij Surabhi Federation",
    description: "Organized Self Help Groups building sustainable livelihoods. 10 active SHGs empowering women entrepreneurs.",
    category: "Vocational",
    image: "/images/projects/shg-federation.jpg",
    link: "/projects/shg-federation",
  },
  {
    title: "UPSDM Certified Training",
    description: "Government-backed skill development under Uttar Pradesh Skill Development Mission. Industry-ready professionals.",
    category: "Vocational",
    image: "/images/projects/upsdm-sewing.jpg",
    link: "/projects/upsdm-training",
  },
  {
    title: "Brij Women Business Directory",
    description: "Digital directory of Braj women entrepreneurs. Promoting women-owned businesses and connecting artisans to markets. Coming Soon.",
    category: "Vocational",
    image: "/images/projects/shg-federation.jpg",
    link: undefined,
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
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Working Since 2007
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-2 leading-tight">
            Our Programs <span className="font-serif italic">&</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-accent italic leading-tight mb-6">
            Initiatives
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering girls and women from marginalized communities in the Braj region through vocational training, education, health awareness, and community welfare programs.
          </p>
        </Reveal>
      </section>

      {/* Category Tabs */}
      <Reveal variant="fade-up" delay={100}>
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
      </Reveal>

      {/* Project Grid */}
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <Reveal key={project.title} variant="fade-up" delay={i % 3 * 100}>
                <div className="bg-card border border-border group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
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
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-muted-foreground text-xs font-bold uppercase tracking-widest gap-1 cursor-default">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 relative z-10">
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
        </Reveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
