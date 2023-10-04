import styles from '../styles/Testimonials.module.css';


export default function Testionials() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                    <span className={styles.testimonial}>
                        <em className={styles.quote}>
                            “Asmar Studios is a talented group of builders and artists who can produce pretty much anything you can
                            think up. We depend on their expertise and high‐quality work. It’s also fun to drop by the studio, just to get a
                            look at all the cool stuff they’re making at any given moment.”
                        </em>
                        <p className={styles.quotee}>‐Maury Blitz ‐ Wide Angle Group</p>
                    </span>
                    <span className={styles.testimonial}>
                        <em className={styles.quote}>
                            “Asmar Studio and Pete are fantastic to work with.  He and his team have created some of the most
                            enormous and spectacular sculptures for our events. There is almost no scale he won’t undertake and I know
                            it will always be completed on time.”
                        </em>
                        <p className={styles.quotee}>-Jim O’Banion, VP, Scenic Services - 1540 Productions</p>
                    </span>
            </div>
            <div className={styles.row}>
                    <span className={styles.testimonial}>
                        <em className={styles.quote}>
                            "Asmar Studio is best in class. As an exhibit house, we rely on trustworthy partners that know how to produce
                            quality pieces, communicate effectively, and get the job done right as well as on time. They are a talented
                            group with a tremendous eye for detail. You won't regret working with them."
                        </em>
                        <p className={styles.quotee}>-Jeff Pascarella, Director of Business Development - Marketing Genome</p>
                    </span>
                <span className={styles.testimonial}>
                    <em className={styles.quote}>
                        “I have enjoyed producing some amazing work with Peter and the team at Asmar Studios.
                        The Asmar team is eager to accept challenging projects in tight timelines and have never failed to deliver us
                        an awesome product - no matter what we ask them to make or fast we ask them to make it!
                        Peter is a pleasure to work with and I look forward to many years of collaboration going forward.”
                    </em>
                    <p className={styles.quotee}>- Michael Daniels</p>
                </span>
            </div>
            <div className={styles.row}>
                <span className={styles.testimonial}>
                    <em className={styles.quote}>
                        “Asmar Studio not only goes above and beyond on every project we work with them on, but the quality they
                        deliver allows you to focus on the other event components while giving you the confidence in knowing that
                        the fabrication centerpiece is in the best of hands.  The level of quality and caring that every inch of the
                        fabrication is perfect and then some, has excelled Asmar Studio into the top fabrication company in the
                        business.  Working at a movie studio and agency for almost 25 years, there is no company out there like
                        Asmar Studio.  The Asmar Studio team is not just an amazing partner on projects, but they have grown to be
                        part of our family.  To correct Vin Diesel, the only people you can always count on isn’t just Family, it’s also
                        the team at Asmar Studio.”
                    </em>
                    <p className={styles.quotee}>-Mike G., Marketing Exec.</p>
                </span>
                <span className={styles.testimonial}>
                    <em className={styles.quote}>
                        “Asmar Studios has been a great partner in helping us update and enhance our pedestrian safety set used to
                        educate thousands of 1<sup>st</sup> - 3<sup>rd</sup> graders on how to safely cross the street and navigate walking near, in, and
                        around streets. They listened to our ideas and brought them to life with vibrant paintings, interactive parts,
                        and durable set pieces. We continue to collaborate with Asmar Studios for routine maintenance and
                        developed a great working relationship that has led to the discussion of future projects. Their professionalism
                        and quality of work is unmatched and I would highly recommend their services.”
                    </em>
                    <p className={styles.quotee}>-Dr. Chantel Lowery, Injury Prevention Program at Children’s Hospital Los Angeles</p>
                </span>
            </div>
            <div className={styles.row}>
                <div className={styles.testimonialWrapper}>
                    <span className={styles.testimonial}>
                        <em className={styles.quote}>
                            "Asmar Studio has been a great partner - When we have complicated builds without easy solutions they help
                            us figure out the plan and they get it done - It&#39;s really great working with these guys!"
                        </em>
                        <p className={styles.quotee}>-Ryan Grayson - Fabrication Project Manager, Los Angeles</p>
                    </span>
                </div>
            </div>
        </div>
    )
}