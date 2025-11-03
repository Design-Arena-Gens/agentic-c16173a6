import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>Elite Estate Advisors</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#project">Featured Project</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className={styles.contactBtn}>Get In Touch</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Your Trusted Partner in Premium Real Estate</p>
          <h1 className={styles.heroTitle}>Finding Your Legacy,<br />One Estate at a Time</h1>
          <p className={styles.heroDescription}>
            With over a decade of experience in luxury farmhouse properties, I help families discover more than just land—I help them find their dream, their sanctuary, their legacy.
          </p>
          <a href="#contact" className={styles.heroCta}>Begin Your Journey</a>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to Explore</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>250+</div>
              <div className={styles.statLabel}>Happy Families</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>₹500Cr+</div>
              <div className={styles.statLabel}>Properties Sold</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}>
                <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="500" fill="#C9A962" opacity="0.1"/>
                  <circle cx="200" cy="180" r="60" fill="#C9A962" opacity="0.3"/>
                  <rect x="140" y="260" width="120" height="150" rx="10" fill="#C9A962" opacity="0.3"/>
                </svg>
              </div>
              <div className={styles.experienceBadge}>
                <div className={styles.badgeNumber}>12+</div>
                <div className={styles.badgeText}>Years of<br />Excellence</div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionTag}>My Story</span>
              <h2 className={styles.sectionTitle}>More Than an Agent,<br />A Trusted Advisor</h2>
              <div className={styles.aboutText}>
                <p>
                  My journey in real estate began not with transactions, but with a simple belief: <strong>every family deserves a place where their dreams can take root.</strong>
                </p>
                <p>
                  I still remember the first family I helped—a young couple searching for their perfect farmhouse. When they found it, there were tears of joy. That moment changed everything for me. It wasn't about selling property; it was about changing lives.
                </p>
                <p>
                  Over the past 12 years, I've built my reputation on three unshakeable principles: <strong>unwavering integrity, deep market knowledge, and genuine care for every client.</strong> I don't just show you properties—I listen to your dreams, understand your needs, and work tirelessly to make them reality.
                </p>
                <p>
                  My clients don't just buy land from me; they gain a lifelong advisor who's invested in their success and happiness.
                </p>
              </div>
              <div className={styles.certifications}>
                <div className={styles.certItem}>✓ RERA Certified Agent</div>
                <div className={styles.certItem}>✓ Licensed Property Consultant</div>
                <div className={styles.certItem}>✓ Member, National Real Estate Association</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="project" className={styles.project}>
        <div className={styles.container}>
          <div className={styles.projectHeader}>
            <span className={styles.sectionTag}>Featured Project</span>
            <h2 className={styles.sectionTitle}>The Grandeur Estate</h2>
            <p className={styles.projectSubtitle}>
              A masterpiece of luxury living—where nature meets sophistication
            </p>
          </div>

          <div className={styles.projectShowcase}>
            <div className={styles.projectImage}>
              <div className={styles.imagePlaceholder}>
                <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="500" fill="#C9A962" opacity="0.1"/>
                  <rect x="200" y="180" width="400" height="200" fill="#C9A962" opacity="0.3"/>
                  <polygon points="400,100 600,180 200,180" fill="#C9A962" opacity="0.4"/>
                  <rect x="300" y="280" width="80" height="100" fill="#C9A962" opacity="0.5"/>
                </svg>
              </div>
            </div>

            <div className={styles.projectFeatures}>
              <div className={styles.featureGrid}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🏡</div>
                  <h3>Premium Farmhouses</h3>
                  <p>Architect-designed villas with contemporary amenities and traditional charm</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🌳</div>
                  <h3>Lush Landscapes</h3>
                  <p>50+ acres of meticulously landscaped gardens and natural greenery</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>💎</div>
                  <h3>Luxury Amenities</h3>
                  <p>Clubhouse, pool, gym, spa, and exclusive recreational facilities</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🛡️</div>
                  <h3>Gated Security</h3>
                  <p>24/7 security with smart surveillance and controlled access</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🌾</div>
                  <h3>Organic Farming</h3>
                  <p>Dedicated spaces for sustainable farming and organic gardens</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>📍</div>
                  <h3>Prime Location</h3>
                  <p>Just 45 minutes from city center, perfect balance of peace and accessibility</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.detailsContent}>
              <h3>An Investment in Your Future</h3>
              <p>
                The Grandeur Estate represents more than luxury—it's a lifestyle transformation.
                Imagine waking up to birdsong, breathing pristine air, while still being connected
                to urban conveniences. This is where your children will make memories, where you'll
                host celebrations, and where you'll build your legacy.
              </p>
              <div className={styles.projectStats}>
                <div className={styles.projectStat}>
                  <strong>Plot Sizes:</strong> 3,000 - 10,000 sq.ft
                </div>
                <div className={styles.projectStat}>
                  <strong>Investment:</strong> Starting ₹1.2 Cr
                </div>
                <div className={styles.projectStat}>
                  <strong>Possession:</strong> Immediate to 12 months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>Why Choose Me</span>
          <h2 className={styles.sectionTitle}>Your Success is My Mission</h2>

          <div className={styles.valueProps}>
            <div className={styles.valueProp}>
              <div className={styles.valuePropNumber}>01</div>
              <h3>Uncompromising Integrity</h3>
              <p>
                Every property I recommend has been personally vetted. I only present opportunities
                I'd invest in myself. Your trust is sacred to me, and I protect it with complete
                transparency and honest guidance.
              </p>
            </div>
            <div className={styles.valueProp}>
              <div className={styles.valuePropNumber}>02</div>
              <h3>Deep Market Expertise</h3>
              <p>
                12 years of specializing in luxury farmhouse properties means I know every nuance—
                from legal compliance to future appreciation potential. My insights save you time,
                money, and stress.
              </p>
            </div>
            <div className={styles.valueProp}>
              <div className={styles.valuePropNumber}>03</div>
              <h3>Personalized Service</h3>
              <p>
                You're not a transaction number to me. I take time to understand your vision, your
                family's needs, and your financial goals. Then I work tirelessly to exceed your
                expectations at every step.
              </p>
            </div>
            <div className={styles.valueProp}>
              <div className={styles.valuePropNumber}>04</div>
              <h3>End-to-End Support</h3>
              <p>
                From property search to legal documentation, from financing assistance to
                post-purchase support—I'm with you throughout. Many clients become lifelong
                friends, and I'm proud of that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.container}>
          <span className={styles.sectionTag}>Client Stories</span>
          <h2 className={styles.sectionTitle}>Words That Mean Everything</h2>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                "We were skeptical about investing in a farmhouse, but his patience and expertise
                changed everything. He showed us The Grandeur Estate and we instantly knew—this
                was our dream. Three years later, it's the best decision we ever made. He didn't
                just sell us property; he gave our family a paradise."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Rajesh & Priya Sharma</strong>
                <span>Business Owners, Mumbai</span>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                "What impressed me most was his integrity. He pointed out potential issues with
                properties and steered us toward the best investment. In an industry where trust
                is rare, he stands out. Professional, knowledgeable, and genuinely caring."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Amit Patel</strong>
                <span>Tech Entrepreneur, Bangalore</span>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                "We wanted a weekend retreat for our aging parents. He understood our emotional
                needs and found the perfect property—peaceful, accessible, and beautiful. The
                entire process was smooth, and he handled every detail. Our parents are happier
                than ever. Thank you for making this happen."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Dr. Meena Krishnan</strong>
                <span>Physician, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🏆</div>
              <h3>Award-Winning Service</h3>
              <p>Excellence in Real Estate Award 2023</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🤝</div>
              <h3>100% Client Retention</h3>
              <p>Every client becomes family</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚖️</div>
              <h3>Legal Compliance</h3>
              <p>Full RERA certification & transparency</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>💼</div>
              <h3>Exclusive Properties</h3>
              <p>Access to off-market luxury estates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactLeft}>
              <span className={styles.sectionTag}>Let's Connect</span>
              <h2 className={styles.sectionTitle}>Your Dream Estate<br />Awaits</h2>
              <p className={styles.contactDescription}>
                Whether you're ready to invest or just exploring options, I'm here to help.
                Let's have a conversation about your vision, and I'll show you how we can
                make it reality together.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div>
                    <strong>Call/WhatsApp</strong>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>✉️</div>
                  <div>
                    <strong>Email</strong>
                    <p>contact@eliteestate.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <strong>Office</strong>
                    <p>Mumbai | Bangalore | Chennai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h3>Get in Touch</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <select required>
                  <option value="">I'm interested in...</option>
                  <option>The Grandeur Estate</option>
                  <option>Other Luxury Farmhouses</option>
                  <option>Land Investment</option>
                  <option>General Consultation</option>
                </select>
                <textarea placeholder="Tell me about your vision..." rows={4}></textarea>
                <button type="submit" className={styles.submitBtn}>
                  Schedule a Consultation
                </button>
              </form>
              <p className={styles.formNote}>
                I personally review every inquiry and respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>Elite Estate Advisors</h3>
              <p>Building legacies, one estate at a time.</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#about">About</a>
              <a href="#project">Projects</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Elite Estate Advisors. All rights reserved. | RERA Certified</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
