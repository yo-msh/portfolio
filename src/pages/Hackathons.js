import React from 'react';
import Main from '../layouts/Main'; // Assuming you're using the same layout

const Hackathons = () => (
  <Main title="Hackathons" description="Learn about the hackathons I have participated in.">
    <article className="post" id="hackathons">
      <header>
        <div className="title">
          <h2>Hackathons</h2>
        </div>
      </header>
      <section>
        <div className="hackathon-details">
          <h3>Code for Good - JP Morgan Chase</h3>
          <p>Participated in JP Morgan Chase&apos;s &apos;Code for Good&apos; 2024, Bangalore
            hackathon. Our team was tasked with building a platform to empower underprivileged
            girls. We developed the
            platform using the MERN stack (MongoDB, Express, React, Node.js), ensuring scalability
            and ease of use. The platform featured tutorials, coding guides, and videos to help
            girls develop their technical skills. We integrated a mentorship program, allowing
            the girls to connect with tech professionals for guidance. A real-time chat system
            using Socket.io was built for collaboration. JWT (JSON Web Tokens) were used for
            secure authentication, ensuring the safety and privacy of users. The platform helped
            increase the NGO&apos;s engagement by 40&#37;, positively impacting the confidence
            and skills of young girls.
          </p>
        </div>
        <div className="hackathon-details">
          <h3>Smart India Hackathon (SIH)</h3>
          <p>
            Participated in the Smart India Hackathon, focusing on building a sign
            language-to-English/Gujarati
            converter app for the deaf and mute community. We developed the app using
            a machine learning model trained on sign gestures to convert them into real-time
            text. Built using React Native, the app ensured cross-platform compatibility.
            It supported multiple languages and allowed users to create custom gestures
            for emojis and frequently used symbols. The solution bridged the communication gap
            for the deaf and mute community, receiving positive feedback. Future development
            includes scaling the app for more languages and real-time accuracy improvements,
            with discussions for government support.
          </p>
        </div>
      </section>
    </article>
  </Main>
);

export default Hackathons;
