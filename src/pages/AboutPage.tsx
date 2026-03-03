import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative pt-20 pb-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="fade-left" className="lg:col-span-7 space-y-8">
              <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase pl-1 border-l-2 border-accent">Special Edition - 2024</span>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-primary leading-[0.9] tracking-tight">
                Rooted in <br /><span className="font-bold italic">Tradition,</span><br />
                Driven by <span className="text-accent">Change.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-xl leading-relaxed mt-8 border-l-4 border-border pl-6">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img alt="Woman looking forward" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQDQLp5OBF7RViJn-D-bGkmn_QwH4CmiHx4xSO-pYkMLNK9ek73-R_cgVVDi7x02ay_CRSY7mEYm0cMaYwHp0f0tSJhRcm11LzNyZ8zbgPH6q3hzTypNrnHFWefTcS5UCMF8iQY_Wz5uDgByCwtNM68GpvVnVcQLbVF3IakwomluSHcRtKmpID5sKrwQOkv5itWoH536VAhRa9UHGsv4MjbD5HMd7I4Aj7YMh0UWloUom3o3zyCiiwWvAZzDQl1_bWwXm7r7fzz0o" />
                <div className="absolute bottom-0 left-0 bg-card p-4 max-w-[80%] border-t-4 border-accent">
                  <p className="font-display text-primary italic text-lg leading-tight">Since 2006, bridging rural potential and modern opportunity.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal variant="fade-right" className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-4">Chapter 1: Vision</span>
                <h3 className="font-display text-3xl text-primary font-bold mb-4">The Human Foundation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Our philosophy centers on the belief that geography should not dictate destiny.</p>
              </div>
            </Reveal>
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <Reveal variant="fade-up">
                  <img alt="Empowering women in rural India" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 mb-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9pRcl8wSWxn68CXLXXLGiqNdWUcFH6Qs7D01pONPTUBvxsCI-9QizzF-ZHbaLgcrWwSF4nNlliSDJcrnGJUXnv2vpSlRDo0zwgd5GlSMUYMYLLEl3OeVxmM8wL_GWS8ulQuDxHKiGA5ZKD8r_GRVt0uFvTXBrr241YxfTkcfBq2z0_xIzzh55nnG_7sjTE_C9tmAOppeGglqOQR587zQrSsGad95Y17vnbPvP_I64mx1rfEzop--vSRXpGsakBDqanMbinnTEBLQ" />
                </Reveal>
                <Reveal variant="fade-up" delay={150} className="flex flex-col justify-center">
                  <p className="text-lg text-foreground leading-relaxed drop-cap font-serif">
                    We envision a society where traditional artisans command global respect, where rural youth lead innovation, and where every woman has the economic independence to shape her own future. Our goal is not just charity, but the construction of self-sustaining ecosystems of growth.
                  </p>
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-display text-2xl text-primary font-bold mb-3">Core Values</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-accent mt-1">handshake</span>
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Dignity</strong>
                          <span className="text-muted-foreground text-sm">Empowerment is cultivated, not given.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-accent mt-1">diversity_3</span>
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Heritage</strong>
                          <span className="text-muted-foreground text-sm">Deep respect for the culture of the Brij region.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-6">Chapter 2: History</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-primary mb-6">17 Years of Impact</h2>
              <p className="text-muted-foreground italic font-serif text-xl">"A chronicle of change, a legacy of welfare."</p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block"></div>
            <div className="space-y-24">
              {[
                { year: "2006", title: "The Foundation", desc: "Khajani Welfare Society is registered in Mathura with a focus on basic literacy and hygiene for rural families.", side: "left" },
                { year: "2010", title: "Vocational Expansion", desc: "Launch of the first dedicated Sewing & Tailoring center. 500 women trained in the first year.", side: "right" },
                { year: "2015", title: "UPSDM Partnership", desc: "Became an official training partner for Uttar Pradesh Skill Development Mission, scaling operations to 5 districts.", side: "left" },
                { year: "2023", title: "Global Recognition", desc: "Received ISO 9001:2015 certification and partnered with World Bank initiatives for pro-poor tourism.", side: "right" },
              ].map((item, i) => (
                <Reveal key={item.year} variant={item.side === "left" ? "fade-right" : "fade-left"} delay={i * 100}>
                  <div className="relative flex md:flex-row flex-col items-center justify-between group">
                    {item.side === "left" ? (
                      <>
                        <div className="md:w-[45%] text-right pr-12 md:pr-16">
                          <span className="text-8xl font-display font-bold text-muted/50 absolute -top-10 right-10 -z-10 group-hover:text-muted transition-colors duration-500">{item.year}</span>
                          <h3 className="text-3xl font-display font-bold text-primary mb-2 relative z-10">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed border-r-2 border-accent pr-4 inline-block">{item.desc}</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-card shadow-lg z-10 hidden md:block"></div>
                        <div className="md:w-[45%] pl-12 md:pl-16"></div>
                      </>
                    ) : (
                      <>
                        <div className="md:w-[45%] pr-12 md:pr-16 hidden md:block"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-2 border-primary rounded-full z-10 hidden md:block group-hover:bg-primary transition-colors"></div>
                        <div className="md:w-[45%] pl-12 md:pl-16">
                          <span className="text-8xl font-display font-bold text-muted/50 absolute -top-10 left-10 -z-10 group-hover:text-muted transition-colors duration-500">{item.year}</span>
                          <h3 className="text-3xl font-display font-bold text-primary mb-2 relative z-10">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4 inline-block">{item.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal variant="fade-right" className="lg:col-span-4">
              <span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase block mb-4">Chapter 3: People</span>
              <h2 className="text-5xl font-display font-medium mb-6">Leadership</h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-light mb-8">
                Guided by visionaries with decades of experience in social work, public administration, and education.
              </p>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Dr. Anjali Sharma", role: "Founder & President", desc: "A PhD in Sociology with 25 years of field experience.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFLkeOXW_xNl_Ttlfo0qEDDEpJd0z2Iuv2rZK5OVsDBsiFHHyCvB7djxwR2f56iTv-Mm3EurExzfDhGE7MHSona7dNu2wyCr7sxjuy5hvvHVrE5x4WxBdzdnom4UrA0B_xxrlnZ0b4MVNiKaz6jrdkTKU3TjULs82TKbHldWfl7ZSmepFJ-yP7f2c1dSFTJVXnM16wWCsRliykZDt8Vcyhqy30ANZsDCXGWcdBj7LfXyjZRpxWA2eQgY_2z04Z0QL5Obk_6QS4Of0" },
                  { name: "Mr. Rajesh Verma", role: "Director of Ops", desc: "Former civil servant bringing administrative rigor.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBISlAFLX4NktcEtXDRf2jmNKLs7WZwLthhAp3iPCvaBIxHCKRMlJ-KZWrSeLYzQH-SLbXHgoDXhJE6xwBTs2Kds2j-XS3Mn6hVw9rPE8dwC17e_bSS0amLiGmRTlgxQ3FJepf4PvqPvLkTuCZt3ACf-ZP2BY1eZ58vBpHghAcs_i5-o9bZKXwg4hpKFFfJgXussGoiAlY5ISZIiC5tk8KNPmkFyFN05eF98OnjWpagJhEm6OATpmkdYOxkvlibIMr9FshL0laOaNg" },
                  { name: "Mrs. Sunita Gupta", role: "Head of Training", desc: "Expert in textile design and skill development.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBOoBavBsKnt69IYS6g3vqXInyzJAtEbKqvpxym8jI4TXT9Wk1w3DQ4OLm3X-mUYsO0PafJwYp3ReoESapyEps_55bnQ9kPATc_sRg0VEDw5J1QB6Ao7X39ZzxpYgM4_R2b9HkH0N4x7HNOnXaQNqXMrDbiq317u9ryGpeVSj-b7uO60ZYUtn5Z7748oQNewcX6da_MmCsLkrofTkQD6LpNOMZYvfcgCWFpsDy2L04GQylF_m3yjnU6sZzjVi39AaQS_XTPW6IxBg" },
                ].map((person, i) => (
                  <Reveal key={person.name} variant="fade-up" delay={i * 150}>
                    <div className="text-center group">
                      <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-foreground/10 group-hover:border-accent transition-colors duration-300">
                        <img alt={person.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src={person.img} />
                      </div>
                      <h3 className="text-2xl font-display font-medium text-primary-foreground mb-1">{person.name}</h3>
                      <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-4">{person.role}</p>
                      <p className="text-primary-foreground/50 text-sm leading-relaxed">{person.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8">
              <div>
                <span className="bg-card border border-border text-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-4 shadow-sm">Chapter 4: Geography</span>
                <h2 className="text-5xl font-display font-medium text-primary">Presence in Brij</h2>
              </div>
              <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0 italic font-serif">"Serving over 100 villages within a 50km radius."</p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-card shadow-xl">
              <div className="relative h-[600px] w-full bg-muted overflow-hidden group">
                <img alt="Map of Brij Region presence" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZWvbrS0EybNfS-uPl_eHgJeywysa7rccpBcehzxMHcK8_IhEfXxwNV26RqGXgpA06x7pZx17y2LTD873cTR2YTB1ic0YDY_zoZz5h_-1OH09Ic9B5jsABxvCYrMkI-f5r8tA4_luyNYde5cA82reXY4HW4u9Mx72Wr_hwbb3tmC_e60EyCVq0fax3rG2NhiuuZEYm4vIAg_kqHFkWHozkSnNFR43GxhwCeFd1l3eZ1uYf73SwYbqpq4NiWO620xtfaIzXScGwkc" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-accent rounded-full border-2 border-card shadow-md relative z-10"></div>
                  <span className="bg-card text-primary text-[10px] font-bold px-2 py-0.5 mt-2 uppercase tracking-wide border border-border shadow-sm">Mathura HQ</span>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center bg-card relative">
                <div className="space-y-10">
                  {[
                    { num: "01", name: "Mathura HQ", desc: "Administrative hub & Advanced IT Training Center. The heart of our operations." },
                    { num: "02", name: "Vrindavan Cluster", desc: "Focus on textile, embroidery, and souvenir crafting for the tourism market." },
                    { num: "03", name: "Govardhan Unit", desc: "Agri-based skill development and organic farming workshops." },
                  ].map((loc) => (
                    <div key={loc.num} className="group cursor-pointer">
                      <div className="flex items-center mb-2">
                        <span className="text-accent font-bold text-sm mr-3">{loc.num}.</span>
                        <h3 className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">{loc.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm pl-8 border-l border-border ml-1.5">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
