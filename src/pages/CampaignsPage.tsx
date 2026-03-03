import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const CampaignsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-24 overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-left" className="max-w-4xl">
            <span className="block text-accent font-bold tracking-[0.2em] text-xs uppercase mb-6">Social Movements Hub</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.9] mb-8">
              Beyond the <br /><span className="text-accent italic">Ordinary Care</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-l-4 border-accent pl-6 mt-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic max-w-2xl leading-relaxed">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-10 pointer-events-none">
          <span className="text-[400px] font-display font-bold text-primary leading-none -mr-20 -mt-20 block">K</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
        {/* Shakti Ek Adhaar */}
        <section className="group pt-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <Reveal variant="fade-right" className="lg:w-5/12 pt-8">
              <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter I : Empowerment</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Shakti Ek Adhaar:<br />Foundations of Strength
              </h2>
              <p className="drop-cap text-muted-foreground font-serif leading-relaxed text-lg">
                Celebrating the remarkable contributions of women across sectors. 'Shakti Ek Adhaar' is not just a campaign but a movement to honor the strength, resilience, and achievements of women who inspire change.
              </p>
              <p className="text-base font-sans mt-6 text-muted-foreground">
                We focus on maternal health, child nutrition, and skill development, recognizing that the health of a community is directly proportional to the strength of its smallest units.
              </p>
              <div className="mt-10 pt-8 border-t border-border">
                <a className="group/link inline-flex items-center gap-3 text-primary font-display text-xl italic hover:text-accent transition-colors" href="#">
                  Explore the Narrative
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1 text-accent">arrow_right_alt</span>
                </a>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img alt="Shakti Ek Adhaar" className="w-full h-full object-cover transition duration-1000 transform group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy3rTu_soF2Aw8RiHeFaeKpVTVg8sfRliFtM3kSJZESUH1PK6kfWHwFeOh8wicDJ3VdT6SnBjadCJ40gtypt4IuMHtWaKhSqBR5ZfDmpS7i2DTGa91oewksftrZHGNQ36VnfUlc9IDZcrLMWpRGxkMNa2_TFvQ-zMJ6d7jXrYUlGNx8SsI_d5sYyV3hVX7xZBb6OMW1xEdiIvNMNpgWo1gM9h4b-X20yhbPc3WwMAHcZ8cDcNJFYymdt3OaYo_pQMRJ6Loc5zbmKM" />
                <div className="absolute bottom-0 left-0 bg-card p-6 max-w-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">Latest Event</span>
                  <span className="font-display text-lg font-bold text-foreground">International Women's Day 2024</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Brij Seva */}
        <section className="group relative">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-start">
            <Reveal variant="fade-left" className="lg:w-5/12 pt-8">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter II : Service</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Brij-Seva:<br />Reviving the Landscape
              </h2>
              <div className="bg-primary text-primary-foreground p-8 md:p-10 mb-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
                <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-center opacity-90 relative z-10">
                  "Service to the destitute is service to the divine."
                </p>
                <p className="text-center text-[10px] uppercase tracking-[0.3em] mt-6 text-primary-foreground/50">Khajani Core Values</p>
              </div>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                Dedicated to the welfare of the Braj region, 'Brij-Seva' focuses on holistic community development. From healthcare to maintaining clean public spaces, this initiative is the heartbeat of our operations.
              </p>
              <div className="mt-8 flex flex-col gap-4 border-l-2 border-accent pl-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border"></span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Healthcare Camps</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border"></span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Food Distribution</span>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-7/12 relative mt-12 lg:mt-0">
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img alt="Brij-Seva" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcqKyuFnUb8Doh7mMIC9c1l5hgIHRcfQxMx6u0i4hpIaTx9_AvLXQsDVjiiRz3b7_vqSiihiGbPwaMFk2WEbyjgBwbJBmv-ocWuMJqiY1yI0ZZ7nL8mrebql3-VDgFGBWZGMrXjVq8B6UVFZO8J8ifmyehdIAgrAoSQlnYkX5cnc23E_yO1X8T9e-_AU3y2Yg-SfKNTFzcFtL6Qhhy2QCO1lK15Dyu7JGaZV6s9x8feKMyNjOWJo4M7jVp7tVRJwDY1TM_AEuvAE" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Business Directory */}
        <section className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] relative overflow-hidden mt-12">
                  <img alt="Artisan" className="absolute inset-0 w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKNcltRg1g0bg83gp5lp_L2-MQt0Rjl3h_OQr5kftMoqOSMooGeM5KJrTl2_Agw2jSDQShOBNNOCS76-qkGwVlaXeLonpjLFcm791VvefIbtnS3JTmo4barphpfTN6xToO0L_Y3Z8upPecGF6UGVxG8bPIaGgqn6--r33luLLEXBdlg6qOoC3R8nEA7ZN5Dl4xaDZ29Jctwf7HbWfxA5C1uoR6812EIV_MwyGlnG0CNAwu4hgI1rK-ziLrt9zp0FUC1vudP7v1EY" />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden bg-muted flex items-center justify-center p-8 text-center">
                  <div className="border border-border p-8 h-full w-full flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary mb-2">500+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Businesses Listed</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="lg:col-span-5 lg:pl-12 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Brij Business<br />Women Directory
              </h2>
              <p className="text-muted-foreground text-lg font-serif leading-relaxed mb-8">
                Creating a digital ecosystem for women entrepreneurs in the Brij region. This directory connects local artisans with wider markets.
              </p>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Digital Listing", desc: "A curated database of local talent." },
                  { num: "02", title: "Market Linkage", desc: "Direct access to buyers and fairs." },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted text-accent font-display text-xl italic group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors">{item.num}</div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-sm tracking-wide">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a className="inline-block border border-foreground text-foreground px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" href="#">
                  Access Directory
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="bg-primary relative overflow-hidden py-24 lg:py-32">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">
            The Future is a <br /><span className="text-accent italic">Collective Canvas.</span>
          </h2>
          <p className="mt-6 text-xl text-primary-foreground/60 font-serif italic max-w-2xl mx-auto">
            Your support fuels the initiatives that change lives.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/donate" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition transform hover:-translate-y-1">
              Get Involved
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default CampaignsPage;
