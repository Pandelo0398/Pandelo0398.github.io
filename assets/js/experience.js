AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Engineer, BI-ML/Ops, Data Engineer",
    cardImage: "assets/images/experience-page/imdeanetworks.png",
    place: "IMDEA Networks Institute",
    time: "(Aug 2023 – Present)",
    desp: "<li>Conducted data analysis on large-scale redundant databases to identify inefficiencies and optimize query responses.</li> <li>Developed proof-of-concept LLM-based solutions to improve information retrieval for business questions.</li> <li>Designed workflows for process automation and business intelligence reporting, improving decision-making efficiency.</li> <li>Integrated and optimized APIs for internal AI applications, facilitating data-driven insights across departments.</li> <li>Implementing and maintaining Kubernetes clusters for AI workloads, supporting scalable deployments.</li> <li>Developing and managing CI/CD pipelines for automating model training and deployment.</li> <li>Deploying and orchestrating workflows using Apache Airflow to streamline ML and data processing tasks.</li> <li>Utilizing MLflow as an interim solution for model tracking and deployment, planning migration to Kubeflow.</li>",
  },
  {
    title: "Data Scientist / BI Developer",
    cardImage: "assets/images/experience-page/4uk.jpg",
    place: "4UK Handel's GmbH",
    time: "(Feb 2023 – July 2023)",
    desp: "<li>Built 10+ automated analytics dashboards for KPI tracking and market insights.</li><li>Conducted data scraping on 100,000+ records and NLP-based sentiment analysis for marketing insights.</li><li>Developed 3 predictive models improving customer retention by 15%.</li><li>Worked remotely with international team to deliver data-driven solutions for business optimization.</li>",
  },
  {
    title: "Project PAD & Account Manager",
    cardImage: "assets/images/experience-page/CaixaBank.png",
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
