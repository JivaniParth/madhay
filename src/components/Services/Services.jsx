import React from 'react';
import "./Services.css";
import { Link } from 'react-router-dom';

function Services() {
    return (
        <>
            <div className="services-container">
                <div className="services-hero-section">
                    <div className="services-hero-text">
                        <h1>Our Services</h1>
                    </div>
                </div>

                <section className="commercial-construction">
                    <h2 className="commercial-construction-heading">
                        Commercial Construction
                    </h2>
                    <div className="commercial-construction-content">
                        <p>
                            Madhay Construction specializes in a wide range of commercial
                            construction projects, including office buildings, retail
                            spaces, industrial facilities, and more. Madhay Construction
                            has a vast team of skilled laborers. Madhay Construction works
                            with Builders and Land Developers by applying tenders to them.
                            Madhay Construction is not building houses for individual home
                            owner. Madhay Construction has different rates for different
                            types of construction. Also Madhay Construction is
                            professional and prioritize safety and timely submission of
                            work.
                        </p>
                        <br />
                        <p>
                            We possess a vast team of skilled laborers, enabling us to handle
                            projects of varying scale and complexity efficiently.
                        </p>
                        <br />
                        <p>
                            We primarily collaborate with builders and land developers by
                            actively participating in tender processes, ensuring competitive
                            and well-managed project execution.
                        </p>
                        <br />
                        <p>
                            While we do not build houses for individual homeowners, our
                            expertise lies in larger-scale commercial and residential
                            developments.
                        </p>
                        <br />
                        <p>
                            Our rates are tailored to the specific requirements and
                            complexities of each construction type, ensuring fair and accurate
                            pricing.
                        </p>
                        <br />
                        <p>
                            At Madhay Construction, we prioritize professionalism, adhering to
                            the highest industry standards in every aspect of our work. Safety
                            is paramount on all our sites, and we are committed to timely
                            project submission, understanding the importance of deadlines for
                            our clients.
                        </p>
                        <br />
                    </div>
                </section >

                <section className="residential-construction">
                    <h2 className="residential-construction-heading">
                        Residential Construction
                    </h2>
                    <div className="residential-construction-content">
                        <p> Madhay Construction primarily focuses on residential projects
                            in partnership with builders and land developers, undertaking
                            large-scale residential developments through tenders. We
                            utilize our vast team of skilled laborers to deliver
                            high-quality construction for residential complexes,
                            subdivisions, and other large residential projects.
                        </p>
                        <br />
                        <p>
                            <strong>Please note:</strong> Madhay Construction does not
                            currently build individual houses for private homeowners. Our
                            focus is on larger residential developments in collaboration with
                            developers.
                        </p>
                        <br />
                        <p>
                            Our approach emphasizes quality craftsmanship, attention to
                            detail, and the use of durable materials in all residential
                            projects.
                        </p>
                        <br />
                        <p>
                            We prioritize professionalism, safety, and timely submission in
                            all residential construction endeavors.
                        </p>
                        <br />
                        <p>
                            Madhay Construction has specific rate structures for residential
                            construction projects, tailored to the scale and type of
                            development.
                        </p>
                    </div>
                </section >

                <section className="industrial-construction">
                    <h2 className="industrial-construction-heading">
                        Industrial Construction
                    </h2>
                    <div className="industrial-construction-content">
                        <p>
                            Madhay Construction possesses extensive experience in
                            industrial construction, handling projects such as factories,
                            warehouses, and various infrastructure developments. Our vast
                            and experienced team of laborers is equipped to manage the
                            complexities of industrial builds. We actively collaborate
                            with industrial clients and developers, often securing
                            projects through the tender process.
                        </p>
                        <br />
                        <p>
                            Our vast and experienced team of laborers is equipped to manage
                            the complexities of industrial builds, ensuring efficiency and
                            expertise in specialized industrial areas.
                        </p>
                        <br />
                        <p>
                            We actively collaborate with industrial clients and developers,
                            often securing projects through the tender process, demonstrating
                            our capability in large-scale industrial ventures.
                        </p>
                        <br />
                        <p>
                            Our approach is centered on understanding the specific, often
                            demanding requirements of industrial environments, focusing on
                            efficiency, durability, and strict adherence to timelines and
                            safety protocols.
                        </p>
                        <br />
                        <p>
                            Professionalism, stringent safety measures, and timely submission
                            are paramount in all our industrial construction projects,
                            ensuring a safe and efficient working environment.
                        </p>
                        <br />
                        <p>
                            Madhay Construction has specialized rate structures for industrial
                            construction, reflecting the unique demands and scale of these
                            projects, providing transparent and competitive pricing.
                        </p>
                        <br />
                    </div>
                </section >

                <section className="our-expertise">
                    <h1>Our Expertise / Why Choose Us:</h1>
                    <p>
                        At Madhay Construction, we stand out due to our unwavering
                        commitment to excellence and a set of core strengths that define our
                        approach:
                    </p>
                    <ul>
                        <li>
                            <strong>Experienced and skilled team:</strong> Our team is comprised of seasoned professionals with a wealth of experience in various construction disciplines.
                        </li>
                        <li>
                            <strong>Vast team of dedicated laborers:</strong> We have a large and dedicated workforce ready to tackle projects of any size, ensuring efficiency and timely completion.
                        </li>
                        <li>
                            <strong>Commitment to quality and craftsmanship:</strong> We are passionate about delivering high-quality results that stand the test of time, paying meticulous attention to detail in every project.
                        </li>
                        <li>
                            <strong>Transparent communication:</strong> We believe in open and honest communication throughout the construction process, keeping you informed and involved every step of the way.
                        </li>
                        <li>
                            <strong>On-time and within-budget delivery:</strong> We are committed to completing projects within agreed-upon timelines and budgets, ensuring a smooth and predictable experience.
                        </li>
                        <li>
                            <strong>Strong safety record:</strong> Safety is our top priority. We maintain rigorous safety standards on all our sites to protect our workers, clients, and the public.
                        </li>
                        <li>
                            <strong>Professionalism, Safety, and Timely Submission:</strong>{" "}
                            These are the pillars of our operations, ensuring high-quality and
                            efficient project delivery.
                        </li>
                    </ul>
                </section>

                <section className="call-to-action">
                    <h2>Ready to Start Your Project?</h2>
                    <p>
                        We are eager to discuss your construction needs and provide a personalized solution. Contact us today to get a free consultation or quote.
                    </p>
                    <div className="contact-info">
                        <p>Phone: +91 97123 38989</p>
                        <p>Email: madhayconstruction89@gmail.com</p>
                    </div>
                    <Link to="/contact-us" className="contact-button">
                        Get a Free Consultation
                    </Link>
                </section>
            </div >
        </>
    );
}

export default Services;
