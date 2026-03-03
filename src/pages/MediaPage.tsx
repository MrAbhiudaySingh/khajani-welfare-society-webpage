import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const MediaPage = () => {
  const articles = [
    { source: "Times of India", category: "Education", date: "Oct 15, 2023", title: '"Khajani Society Launches New Skill Hub for Rural Youth in Lucknow"', desc: "The Times of India covers our latest initiative to bridge the urban-rural divide.", page: "Pg. 04, Lucknow Ed.", icon: "newspaper" },
    { source: "Dainik Jagran", category: "Women Empowerment", date: "Aug 22, 2023", title: '"आत्मनिर्भर भारत: Women Artisans Find Global Market through Local NGO"', desc: "A feature story on how 500+ women artisans are exporting their handmade crafts.", page: "Pg. 02, Feature", icon: "article" },
    { source: "Amar Ujala", category: "Healthcare", date: "Jun 10, 2023", title: '"Mega Health Camp Serves Over 2,000 Villagers in Unnao District"', desc: "Coverage of our annual health drive providing free checkups and cataract surgeries.", page: "Pg. 05, Regional", icon: "feed" },
    { source: "Hindustan Times", category: "Awards", date: "Mar 08, 2023", title: '"Khajani Welfare Society Honored with Best NGO Award for 2022"', desc: "Recognition at the State NGO Summit. Award presented by the Honorable Chief Minister.", page: "Pg. 01, Main", icon: "campaign" },
    { source: "The Hindu", category: "Policy", date: "Jan 12, 2023", title: '"Policy Advocacy: NGO Panel Discusses Rural Development Roadmap"', desc: "Roundtable discussion led by Khajani Welfare Society influencing policy changes.", page: "Pg. 07, Op-Ed", icon: "history_edu" },
    { source: "All India Radio", category: "Community Radio", date: "Nov 05, 2022", title: '"Voice of the People: Radio Feature on Khajani\'s Impact"', desc: "A special broadcast highlighting success stories of beneficiaries.", page: "11:00 AM Slot", icon: "podcasts" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <header className="bg-card relative overflow-hidden pt-24 pb-16 border-b border-border">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-right"></div>
        <Reveal variant="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Archive & Coverage</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight">
              Beyond the <br /><span className="text-accent italic">Headlines.</span>
            </h1>
            <div className="h-1 w-24 bg-secondary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Documenting our journey of impact through the lens of leading regional and national publications. A chronicle of change since 2007.
            </p>
          </div>
        </Reveal>
      </header>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal variant="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-2">In The News</h2>
              <p className="text-muted-foreground italic font-display text-lg">Curated articles and press clippings.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              {["All", "Print", "Digital", "Awards"].map((filter, i) => (
                <button key={filter} className={`px-4 py-2 text-sm font-bold transition ${i === 0 ? "text-primary-foreground bg-primary rounded" : "text-muted-foreground hover:text-primary"}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Reveal key={i} variant="fade-up" delay={i % 3 * 100}>
              <article className="bg-card p-8 rounded-lg shadow-sm hover:shadow-xl border border-border transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-muted p-3 rounded-lg border border-border">
                    <span className="material-symbols-outlined text-3xl text-muted-foreground group-hover:text-primary transition-colors">{article.icon}</span>
                  </div>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-sm">{article.source}</span>
                </div>
                <div className="mb-3 flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  <span className="text-accent">{article.category}</span>
                  <span className="mx-2 text-border">|</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light flex-1">{article.desc}</p>
                <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                  <span className="text-xs text-muted-foreground font-mono">{article.page}</span>
                  <a className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Press Kit CTA */}
        <Reveal variant="scale">
          <div className="mt-32 rounded-3xl overflow-hidden bg-primary relative shadow-2xl">
            <div className="absolute inset-0 bg-primary opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
              <div className="text-left">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Media Enquiries & Press Kit</h3>
                <p className="text-primary-foreground/60 text-lg mb-10 max-w-lg font-light leading-relaxed">
                  Download our official press kit containing high-resolution logos, leadership bios, and brand guidelines.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a className="bg-secondary text-secondary-foreground hover:bg-card hover:text-primary transition-all px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 shadow-lg" href="#">
                    <span className="material-symbols-outlined">download</span>
                    Download Press Kit
                  </a>
                  <a className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3" href="#">
                    <span className="material-symbols-outlined">mail</span>
                    Contact PR Team
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="bg-card p-6 rounded-xl shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500 max-w-sm w-full">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mx-auto mb-4 shadow-md">K</div>
                    <p className="text-primary font-bold text-lg mb-1">Khajani Welfare Society</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">Official Brand Assets 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </Layout>
  );
};

export default MediaPage;
