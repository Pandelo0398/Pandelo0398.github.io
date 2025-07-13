AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Versatile programming language for data science, AI, and backend development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/pytorch.png",
    langName: "PyTorch",
    langDesc: "<li>Flexible and powerful deep learning framework for research and production.</li>",
  },
  {
    langImage: "assets/images/techstack-page/tensorflow.png",
    langName: "TensorFlow",
    langDesc: "<li>Machine learning framework for training and deploying models.</li>",
  },
  {
    langImage: "assets/images/techstack-page/dockers.png",
    langName: "Docker",
    langDesc: "<li>Containers for development, deployment, and application portability.</li>",
  },
  {
    langImage: "assets/images/techstack-page/kubernetes.png",
    langName: "Kubernetes",
    langDesc: "<li>Container orchestrator for application deployment and scalability.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mlflow.png",
    langName: "MLflow",
    langDesc: "<li>Lifecycle management for machine learning models.</li>",
  },
  {
    langImage: "assets/images/techstack-page/airflow.png",
    langName: "Airflow",
    langDesc: "<li>Workflow and data pipeline orchestration.</li>",
  },
  {
    langImage: "assets/images/techstack-page/fastapi.png",
    langName: "FastAPI",
    langDesc: "<li>Modern and fast framework for building APIs with Python.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Version control system for project management and collaboration.</li>",
  },
  {
    langImage: "assets/images/techstack-page/huggingface.png",
    langName: "Hugging Face",
    langDesc: "<li>Transformers and Diffusers libraries for language models and image generation in AI.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nixtla.png",
    langName: "Nixtla",
    langDesc: "<li>Advanced tools for time series and forecasting.</li>",
  },
  {
    langImage: "assets/images/techstack-page/shap.png",
    langName: "SHAP",
    langDesc: "<li>Model explainability using SHAP values.</li>",
  },
  {
    langImage: "assets/images/techstack-page/vllm.png",
    langName: "vLLM",
    langDesc: "<li>Efficient engine for inference of large language models.</li>",
  },
  {
    langImage: "assets/images/techstack-page/llamdaindex.png",
    langName: "LlamaIndex",
    langDesc: "<li>Infrastructure to efficiently connect data with LLM models.</li>",
  },
  {
    langImage: "assets/images/techstack-page/langchain.png",
    langName: "LangChain",
    langDesc: "<li>Framework for building applications with LLMs and intelligent agents.</li>",
  },
  {
    langImage: "assets/images/techstack-page/qwen.png",
    langName: "Qwen",
    langDesc: "<li>Multilingual LLM model from Alibaba for advanced AI tasks.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nvidia.png",
    langName: "NVIDIA CUDA",
    langDesc: "<li>Technology for parallel computing with GPU, used to accelerate tensor operations in AI and deep learning.</li>",
  },
  {
    langImage: "assets/images/techstack-page/cicd.png",
    langName: "CI/CD",
    langDesc: "<li>Continuous integration and delivery to automate development workflows.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
