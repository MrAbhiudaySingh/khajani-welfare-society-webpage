import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Heart, Users, Sparkles, Calendar, Store, ArrowRight, TrendingUp } from "lucide-react";

const ImpactBox = ({ number, label, icon: Icon }: { number: string; label: string; icon: any }) => (
  <div className="bg-card border border-border p-6 rounded-lg text-center hover:border-accent transition-colors">
    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
    <div className="text-3xl font-bold text-primary font-display mb-1">{number}</div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
  </div>
);

const ProgramCard = ({ 
  title, 
  tagline, 
  description, 
  items, 
  impact,
  link,
  image 
}: { 
  title: string; 
  tagline?: string;
  description: string; 
  items?: { label: string; value: string }[];
  impact?: { number: string; label: string }[];
  link?: string;
  image?: string;
}) => (
  <Reveal variant="fade-up">
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-display font-bold text-primary mb-1">{title}</h3>
        {tagline && <p className="text-accent text-sm font-medium italic mb-3">{tagline}</p>}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        
        {items && items.length > 0 && (
          <div className="space-y-2 mb-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-sm text-muted-foreground"><strong className="text-primary">{item.label}:</strong> {item.value}</span>
              </div>
            ))}
          </div>
        )}
        
        {impact && impact.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border">
            {impact.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-accent font-display">{item.number}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {link && (
          <Link to={link} className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mt-4 hover:gap-3 transition-all">
            Learn More <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  </Reveal>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ProjectsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up" className="text-center max-w-4xl mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Working Since 2007
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Our Programs <span className="italic">&</span> Initiatives
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Khajani Welfare Society empowers girls and women from marginalized communities 
              in the Braj region through vocational training, education, health awareness, 
              and community welfare programs.
            </p>
          </Reveal>
          
          {/* Key Impact Numbers */}
          <Reveal variant="fade-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              <ImpactBox number="20K+" label="Women Trained" icon={Users} />
              <ImpactBox number="400+" label="Women/Year" icon={TrendingUp} />
              <ImpactBox number="100+" label="Girls in KLA" icon={GraduationCap} />
              <ImpactBox number="18+" label="Years of Impact" icon={Heart} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="1. Women Skill Training & Livelihood Programs" 
            subtitle="Empowering women through vocational skill training and livelihood opportunities since 2007"
          />
          
          <div className="mb-8 p-6 bg-muted rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Khajani Welfare Society focuses primarily on women from marginalized communities in the Braj region, 
              enabling them to develop practical skills that lead to employment, entrepreneurship, and financial independence. 
              Training programs are implemented through UPSDM, MSME initiatives, and ProPoor livelihood programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brij-Hunar */}
            <ProgramCard
              title="Brij-Hunar"
              description="Vocational skill training program focused on employable skills and self-employment opportunities for women."
              items={[
                { label: "Courses", value: "Assistant Beauty Therapist, Self Employed Tailor" }
              ]}
              impact={[
                { number: "400+", label: "Women Trained Annually" },
                { number: "20,000+", label: "Women Since 2007" }
              ]}
              link="/projects/brij-hunar"
              image="/images/projects/brij-hunar-icon.jpg"
            />
            
            {/* Brij-Nipun */}
            <ProgramCard
              title="Brij-Nipun"
              description="Short-term skill and activity-based training camps designed to build awareness, practical exposure, and confidence among women."
              impact={[
                { number: "750+", label: "Women Participate Annually" }
              ]}
              link="/projects/brij-nipun"
              image="/images/projects/brij-nipun-icon.jpg"
            />
            
            {/* Brij-Anshuman */}
            <ProgramCard
              title="Brij-Anshuman"
              description="Vocational skill training programs conducted for women inmates of Mathura Jail, supporting rehabilitation and livelihood opportunities after release."
              impact={[
                { number: "Regular", label: "Training Batches" }
              ]}
              link="/projects/brij-anshuman"
              image="/images/projects/brij-anshuman-icon.jpg"
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="2. Education & Youth Development" 
          />
          
          <div className="max-w-4xl mx-auto">
            <ProgramCard
              title="Khajani Learning Academy (KLA)"
              tagline="Learn Today, Lead Tomorrow"
              description="Provides academic support and holistic development opportunities for girls from marginalized communities studying in Classes 6 to 10. The academy focuses on strengthening academic foundations while building confidence and personality development."
              items={[
                { label: "Subjects", value: "Mathematics, Science, Social Science, English Communication" },
                { label: "Activities", value: "Personality development, educational trips, cultural learning" }
              ]}
              impact={[
                { number: "100+", label: "Girls Supported" },
                { number: "120", label: "Target 2026-27" }
              ]}
              link="/projects/kla"
              image="/images/projects/kla-students.jpg"
            />
          </div>
        </div>
      </section>

      {/* Community Health */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="3. Community Health & Social Awareness" 
          />
          
          <div className="max-w-3xl mx-auto">
            <ProgramCard
              title="Brij-Sangini"
              description="A community initiative focusing on women's health awareness and hygiene education."
              items={[
                { label: "Activities", value: "Women health check-up camps" },
                { label: "", value: "Menstrual hygiene awareness sessions" },
                { label: "", value: "Blood donation camps with district hospitals" }
              ]}
              link="/projects/brij-sangini"
              image="/images/projects/brij-sangini-icon.jpg"
            />
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="4. Community Service & Braj Welfare" 
          />
          
          <div className="max-w-3xl mx-auto">
            <ProgramCard
              title="Brij-Seva"
              description="Community welfare initiative dedicated to supporting people through seasonal and emergency support programs."
              items={[
                { label: "Jal Seva", value: "Running continuously for the past 5 years" },
                { label: "Summer Relief", value: "Distribution of drinking water, sharbat and buttermilk" },
                { label: "Daan Utsav", value: "Blanket and essential distribution during Makar Sankranti" },
                { label: "Environment", value: "Plantation drives and relief support activities" }
              ]}
              link="/projects/brij-seva"
              image="/images/projects/brij-seva-icon.jpg"
            />
          </div>
        </div>
      </section>

      {/* Entrepreneurship */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="5. Women Entrepreneurship Promotion" 
          />
          
          <div className="max-w-3xl mx-auto">
            <ProgramCard
              title="Brij-Surabhi"
              description="Livelihood initiative supporting Self Help Group (SHG) women through promotion of Braj art, craft, devotional products, and eco-friendly items. The program aims to strengthen local women-led enterprises and preserve traditional Braj craftsmanship."
              link="/projects/brij-surabhi"
              image="/images/projects/brij-surabhi-cow.jpg"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Initiative */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="6. Upcoming Initiative" 
          />
          
          <Reveal variant="fade-up">
            <div className="max-w-3xl mx-auto bg-card border border-border border-dashed rounded-xl p-8 text-center">
              <Store className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-primary mb-3">Brij Women Business Directory</h3>
              <p className="text-muted-foreground mb-6">
                Khajani Welfare Society is developing a digital directory of women entrepreneurs across the Braj region. 
                The objective is to promote women-owned businesses, connect artisans with wider markets, and support entrepreneurship among women.
              </p>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider rounded-full">
                Currently Under Development
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Annual Event */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal variant="fade-up">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                7. Annual Event: Shakti Ek Adhaar
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                The Annual Day celebration of Khajani Welfare Society, where women from different fields are recognized 
                for their contributions to society. The event honors women leaders, educators, entrepreneurs, and social 
                contributors who inspire change and strengthen communities.
              </p>
              <Link 
                to="/projects/shakti-ek-adhaar" 
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors"
              >
                Learn About Shakti Ek Adhaar <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Support Our <span className="italic">Initiatives</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to expand the reach of these programs and create lasting impact 
              in the lives of women and girls across the Braj region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partner"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
              >
                Partner With Us
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold rounded-full uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Make a Donation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
