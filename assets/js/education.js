AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science Bootcamp",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - I am a Data Scientist - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - I am a Data Scientist - 2022-12-27.png",
    description: "Comprehensive Data Science program covering all aspects of data analysis and machine learning",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Machine Learning",
    cardImage: "assets/certificates/data-science/TheBridge_DataScience_MachineLearning_2022.png",
    moocLink: "assets/certificates/data-science/TheBridge_DataScience_MachineLearning_2022.png",
    description: "Advanced machine learning algorithms and techniques",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Deep Learning",
    cardImage: "assets/certificates/data-science/TheBridge_DataScience_DeepLearning_2022.png",
    moocLink: "assets/certificates/data-science/TheBridge_DataScience_DeepLearning_2022.png",
    description: "Neural networks and deep learning frameworks",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "MLOps",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - MLOps - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - MLOps - 2022-12-27.png",
    description: "Machine Learning Operations and deployment strategies",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Data Analysis",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - Data Analyst - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - Data Analyst - 2022-12-27.png",
    description: "Statistical analysis and data interpretation techniques",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Data Visualization",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - Data Visualization - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - Data Visualization - 2022-12-27.png",
    description: "Creating effective visualizations and dashboards",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Exploratory Data Analysis",
    cardImage: "assets/certificates/data-science/TheBridge_DataScience_EDA_2022.png",
    moocLink: "assets/certificates/data-science/TheBridge_DataScience_EDA_2022.png",
    description: "Techniques for exploring and understanding datasets",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "TensorFlow & Keras",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - TensorFlow & Keras - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - TensorFlow & Keras - 2022-12-27.png",
    description: "Deep learning with TensorFlow and Keras frameworks",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Time Series Analysis",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - Time Series Analysis - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - Time Series Analysis - 2022-12-27.png",
    description: "Advanced time series forecasting and analysis",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Tableau",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - Tableau - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - Tableau - 2022-12-27.png",
    description: "Business intelligence and data visualization with Tableau",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "GitHub",
    cardImage: "assets/certificates/data-science/Data Science - The Bridge School - GitHub - 2022-12-27.png",
    moocLink: "assets/certificates/data-science/Data Science - The Bridge School - GitHub - 2022-12-27.png",
    description: "Version control and collaborative development with Git",
    institution: "The Bridge School",
    year: "2022"
  },
  {
    title: "Agile Methodology",
    cardImage: "assets/certificates/data-science/TheBridge_DataScience_Agile_2022.png",
    moocLink: "assets/certificates/data-science/TheBridge_DataScience_Agile_2022.png",
    description: "Agile project management and scrum methodology",
    institution: "The Bridge School",
    year: "2022"
  }
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink, description, institution, year }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src="${cardImage}" class="card-img-top content-image" style="height: 60px; object-fit: contain; padding: 10px;">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-certificate fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                    <p class="text-center" style="font-size:10px; color: #666;">${institution} - ${year}</p>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
