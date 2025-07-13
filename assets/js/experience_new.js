AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Engineer, BI-ML/Ops, Data Engineer",
    cardImage: "assets/images/experience-page/imdea.png",
    place: "IMDEA Networks Institute",
    time: "(Aug 2023 – Present)",
    desp: "<li>Conducted data analysis on large-scale redundant databases to identify inefficiencies and optimize query responses.</li> <li>Developed proof-of-concept LLM-based solutions to improve information retrieval for business questions.</li> <li>Designed workflows for process automation and business intelligence reporting, improving decision-making efficiency.</li> <li>Integrated and optimized APIs for internal AI applications, facilitating data-driven insights across departments.</li> <li>Implementing and maintaining Kubernetes clusters for AI workloads, supporting scalable deployments.</li> <li>Developing and managing CI/CD pipelines for automating model training and deployment.</li> <li>Deploying and orchestrating workflows using Apache Airflow to streamline ML and data processing tasks.</li> <li>Utilizing MLflow as an interim solution for model tracking and deployment, planning migration to Kubeflow.</li>",
  },
  {
    title: "Data Scientist / BI Developer",
    cardImage: "assets/images/experience-page/4uk.png",
    place: "4UK Handel's GmbH",
    time: "(Feb 2023 – July 2023)",
    desp: "<li>Built 10+ automated analytics dashboards for KPI tracking and market insights.</li><li>Conducted data scraping on 100,000+ records and NLP-based sentiment analysis for marketing insights.</li><li>Developed 3 predictive models improving customer retention by 15%.</li><li>Worked remotely with international team to deliver data-driven solutions for business optimization.</li>",
  },
  {
    title: "Project PAD & Account Manager",
    cardImage: "assets/images/experience-page/caixabank.png",
    place: "CaixaBank SAU (Randstad)",
    time: "(Mar 2022 – Sept 2022)",
    desp: "<li>Project PAD: Led digital transformation initiatives impacting 500+ clients, educating them on digital banking tools.</li><li>Vacationing Account Manager: Managed 50+ loan and credit applications, providing digital banking assistance to clients.</li><li>Facilitated client onboarding to digital banking platforms and provided technical support.</li><li>Collaborated with cross-functional teams to improve customer experience and digital adoption rates.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Data Science Consulting",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Providing data science consulting services to small and medium businesses, helping them leverage data for strategic decision-making.",
  },
  {
    title: "Legal Tech Innovation",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Contributing to legal technology projects that bridge the gap between traditional law practice and modern data analytics.",
  },
  {
    title: "Digital Banking Mentoring",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring professionals transitioning to digital banking and fintech, sharing insights from compliance and data science perspectives.",
  },
  {
    title: "Anti-Money Laundering Awareness",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Conducting workshops and seminars on AML compliance and financial crime prevention in the digital era.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Data Science Bootcamp",
    subtitle: "Mentor",
    image: "assets/images/experience-page/mentor1.png",
    desp: "Mentoring aspiring data scientists in their journey from traditional backgrounds to data science careers, sharing practical insights from real-world projects.",
    href: "#",
  },
  {
    title: "Legal Tech Hackathon",
    subtitle: "Judge",
    image: "assets/images/experience-page/mentor2.png",
    desp: "Evaluating innovative legal technology solutions that leverage AI and data analytics to improve access to justice and legal services.",
    href: "#",
  },
  {
    title: "Fintech Innovation Challenge",
    subtitle: "Advisor",
    image: "assets/images/experience-page/mentor3.png",
    desp: "Advising teams developing compliance and risk management solutions for financial institutions, focusing on AML and regulatory technology.",
    href: "#",
  },
  {
    title: "Digital Transformation Workshop",
    subtitle: "Speaker",
    image: "assets/images/experience-page/mentor4.png",
    desp: "Speaking at corporate workshops about digital transformation strategies, combining legal compliance with data-driven business intelligence.",
    href: "#",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
