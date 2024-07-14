import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>


      <link rel="stylesheet" href="styles.css" />

      <header className="headroom">
        <div className="container">
          <nav className="navbar">
            <a href="index.html">
              <img src="assets/logo.png" alt="Logo" className="logo" />
            </a>
            <div className="navbar-menu">
              <div className="navbar-links">
                <a href="#" className="nav-link active">
                  Home
                </a>
                <a href="#" className="nav-link">
                  About
                </a>
                <a href="#" className="nav-link">
                  Services
                </a>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </div>
              <a href="/cart/" className="cart-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={9} cy={21} r={1} />
                  <circle cx={20} cy={21} r={1} />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </a>
              <a href="/support" className="btn btn-secondary">
                Support
              </a>
              <a href="/login" className="btn btn-primary">
                Login
              </a>
              <button
                className="navbar-toggler"
                id="navbar-toggler"
                aria-expanded="false"
                aria-controls="dropdown-content"
                aria-label="Toggle navigation"
              >
                ☰
              </button>
              <div className="dropdown-content" id="dropdown-content">
                <ul>
                  <li>
                    <a href="#" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="main-banner">
        <div className="hero-content">
          <h1>Trusted IT Solutions for a Secure Digital World</h1>
          <p>
            Zenith emphasizes the importance of reliable and effective IT services
            in ensuring digital security. In today's technology-driven environment,
            robust IT solutions are crucial for protecting sensitive data and
            maintaining system integrity. This commitment to trust and security
            helps businesses operate smoothly and safeguards against cyber threats.
            With trusted IT solutions, companies can focus on growth and innovation,
            knowing their digital assets are secure. Embracing advanced security
            measures and best practices, these solutions provide peace of mind in an
            increasingly complex digital landscape.
          </p>
        </div>
        <a href="/get-started" className="btn btn-start">
          GET STARTED
        </a>
        <div className="bg-image">
          <img
            src="https://cdn0.iconfinder.com/data/icons/creative-illustrations-1/1000/designer_designer_working_new_project_computer_graphic_man-1024.png"
            alt="pc"
          />
        </div>
      </div>
      <section className="our-features">
        <h2>Our Features</h2>
        <div className="features-section">
          <div className="feature-card">
            <h3>Advanced Cybersecurity Solutions</h3>
            <p>
              Ensure robust protection for sensitive data and systems with our
              advanced cybersecurity measures, safeguarding against emerging cyber
              threats.
            </p>
          </div>
          <div className="feature-card">
            <h3>Efficient Data Management</h3>
            <p>
              Optimize data integrity and security with our efficient IT services,
              ensuring seamless management and protection of your valuable digital
              assets.
            </p>
          </div>
          <div className="feature-card">
            <h3>Innovative Technology Solutions</h3>
            <p>
              Drive innovation securely with our trusted IT solutions, leveraging
              cutting-edge technologies to enhance operational efficiency.
            </p>
          </div>
        </div>
      </section>
      <section className="recent-works">
        <h2>Our Recent Works</h2>
        <div className="works-container">
          <div className="work-card">
            <div
              className="work-image"
              style={{ backgroundImage: 'url("assets/cloud.png")' }}
            />
            <div className="work-details">
              <h3>Cloud Migration Project for ABC Corp</h3>
              <p>
                Successfully transitioned ABC Corp's legacy systems to a secure,
                scalable cloud infrastructure, enhancing operational efficiency and
                reducing costs.
              </p>
            </div>
          </div>
          <div className="work-card">
            <div
              className="work-image"
              style={{ backgroundImage: 'url("assets/software.png")' }}
            />
            <div className="work-details">
              <h3>Custom Software Development for XYZ Ltd</h3>
              <p>
                Developed a tailored software solution for XYZ Ltd, streamlining
                their internal processes and boosting productivity by 40%.
              </p>
            </div>
          </div>
          <div className="work-card">
            <div
              className="work-image"
              style={{ backgroundImage: 'url("assets/security.png")' }}
            />
            <div className="work-details">
              <h3>Network Security Overhaul for DEF Inc</h3>
              <p>
                Revamped DEF Inc's network security framework, implementing advanced
                cybersecurity measures to protect against evolving threats.
              </p>
            </div>
          </div>
          <div className="work-card">
            <div
              className="work-image"
              style={{ backgroundImage: 'url("assets/data.png")' }}
            />
            <div className="work-details">
              <h3>Data Analytics Implementation for GHI Solutions</h3>
              <p>
                Implemented a comprehensive data analytics platform for GHI
                Solutions, providing actionable insights and improving
                decision-making processes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="user-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-carousel">
          <div className="carousel-container">
            <div className="carousel-content">
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user1.png")' }}
                />
                <div className="review-details">
                  <h3>Matt Damon</h3>
                  <p className="reviewer-role">Software Engineer</p>
                  <p>
                    Innovative solutions that exceeded our expectations! Highly
                    recommend their services.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user2.png")' }}
                />
                <div className="review-details">
                  <h3>Jane Doe</h3>
                  <p className="reviewer-role">Product Manager</p>
                  <p>
                    Professional team with a deep understanding of our industry's
                    challenges.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user3.png")' }}
                />
                <div className="review-details">
                  <h3>John Smith</h3>
                  <p className="reviewer-role">CTO at DEF Inc</p>
                  <p>
                    Transformed our operations with seamless integration and
                    cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user4.png")' }}
                />
                <div className="review-details">
                  <h3>Emily Johnson</h3>
                  <p className="reviewer-role">CEO at GHI Solutions</p>
                  <p>
                    Exceptional support and commitment to delivering on time, every
                    time.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user5.png")' }}
                />
                <div className="review-details">
                  <h3>Michael Brown</h3>
                  <p className="reviewer-role">IT Manager at XYZ Ltd</p>
                  <p>
                    Revolutionized our data analytics capabilities, unlocking new
                    insights.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user6.png")' }}
                />
                <div className="review-details">
                  <h3>Sarah Lee</h3>
                  <p className="reviewer-role">Marketing Director</p>
                  <p>Responsive and adaptive to our evolving business needs.</p>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="reviewer-image"
                  style={{ backgroundImage: 'url("assets/user7.png")' }}
                />
                <div className="review-details">
                  <h3>David Wang</h3>
                  <p className="reviewer-role">Financial Analyst</p>
                  <p>
                    Efficient and effective solutions that boosted our productivity
                    instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-btn prev">‹</button>
          <button className="carousel-btn next">›</button>
        </div>
      </section>
      <section id="pricing-plans" className="pricing-plans">
        <div className="pricing-container">
          <div className="pricing-title">
            <h2>Pricing Plans</h2>
          </div>
          <div className="plans">
            <div className="plan">
              <h3>BASIC PLAN</h3>
              <div className="plan-price">
                <span className="currency">$</span>15.00
                <span className="period">/Mon</span>
              </div>
              <ul>
                <li>5 GB Bandwidth</li>
                <li>Highest Speed</li>
                <li>1 GB Storage</li>
                <li>Unlimited Website</li>
                <li>Unlimited Users</li>
                <li>24x7 Great Support</li>
                <li className="unavailable">Data Security and Backups</li>
                <li className="unavailable">Monthly Reports and Analytics</li>
              </ul>
              <a href="#" className="select-plan">
                Select Plan
              </a>
            </div>
            <div className="plan">
              <h3>ADVANCED PLAN</h3>
              <div className="plan-price">
                <span className="currency">$</span>35.00
                <span className="period">/Mon</span>
              </div>
              <ul>
                <li>10 GB Bandwidth</li>
                <li>Highest Speed</li>
                <li>3 GB Storage</li>
                <li>Unlimited Website</li>
                <li>Unlimited Users</li>
                <li>24x7 Great Support</li>
                <li>Data Security and Backups</li>
                <li className="unavailable">Monthly Reports and Analytics</li>
              </ul>
              <a href="#" className="select-plan">
                Select Plan
              </a>
            </div>
            <div className="plan">
              <h3>EXPERT PLAN</h3>
              <div className="plan-price">
                <span className="currency">$</span>65.00
                <span className="period">/Mon</span>
              </div>
              <ul>
                <li>15 GB Bandwidth</li>
                <li>Highest Speed</li>
                <li>5 GB Storage</li>
                <li>Unlimited Website</li>
                <li>Unlimited Users</li>
                <li>24x7 Great Support</li>
                <li>Data Security and Backups</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
              <a href="#" className="select-plan">
                Select Plan
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png"
              alt="Team Member 1"
            />
            <h3>James</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-1024.png"
              alt="Team Member 2"
            />
            <h3>John</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-1024.png"
              alt="Team Member 3"
            />
            <h3>Emily</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
      <div className="green-circle1">
        <img src="assets/logo4.png" alt="Logo" className="shape" />
      </div>
      <div className="blue-triangle1">
        <img src="assets/logo5.png" alt="Logo" className="shape" />
      </div>
      <div className="green-circle">
        <img src="assets/logo4.png" alt="Logo" className="shape" />
      </div>
      <div className="blue-triangle">
        <img src="assets/logo5.png" alt="Logo" className="shape" />
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <img src="assets/logo.png" alt="Spet logo" className="footer-logo" />
              <p>
                Providing trusted and effective IT solutions to ensure a secure
                digital world. Learn more about our mission, vision, and team.
              </p>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Address</h3>
              <ul>
                <li>Mumbai, India</li>
                <li>Email: zenith@gmail.com</li>
                <li>Phone: + 1234567890</li>
              </ul>
              <div className="social-media">
                <a href="https://twitter.com/?lang=en">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_6-twitter-1024.png"
                    alt="Twitter"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-1024.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://in.linkedin.com/">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-1024.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Zenith. All rights reserved.</p>
        </div>
      </footer>

      <script src="script.js"></script>
    </>
  )
}