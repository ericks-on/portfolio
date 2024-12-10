import Image from "next/image";
import { FaLink } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
          title: "Classification of Online Shoppers",
          description: "Developed a classification model to predict customer purchase intent using logistic regression and decision trees. Conducted feature engineering, handled missing values, and optimized model performance.",
          link: "https://github.com/ericks-on/predicting_purchase_intent",
          techStack: ["Python", "Logistic Regression", "Decision Trees", "Scikit-learn"],
          image: "/images/shopping.jpg" 
        },
        {
          title: "NLP: AI-Generated Text Detection",
          description: "Created a machine learning model for detecting AI-generated text using various algorithms. Integrated the model into a Flask-based web application.",
          link: "https://github.com/ericks-on/NLP-Ai_generated_Text_detection",
          techStack: ["Python", "NLP", "Scikit-learn", "TensorFlow", "Flask", "NLTK", "Pandas"],
          image: "/images/aitext.jpg" 
        },
        {
          title: "Fraud Detection System for Insurance Claims",
          description: "Developed a Logistic Regression model fine-tuned through Grid Search to detect fraudulent claims. Created dashboards for monitoring claims and provided insights through Tableau.",
          link: "https://github.com/ericks-on/insurance-fraud-detection",
          techStack: ["Python", "Logistic Regression", "Grid Search", "Tableau", "TensorFlow", "Keras"],
          image: "/images/insurance.png" 
        }
      ];
      
    return (
        <div className="pt-20 flex flex-col gap-6">
            <h1 className="text-6xl text-center">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <div key={index} className="w-full md:w-1/3 h-1/2 p-4">
                        <div className="shadow-blue-500 shadow rounded-lg p-4">
                            <Image 
                                src={project.image}
                                alt={project.title}
                                width={640}
                                height={640}
                                className="w-full h-48 object-cover object-center" />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                                <div className="mt-4 flex items-center gap-2">
                                    <a href={project.link} target="blank" className="text-blue-500 hover:underline">View on GitHub</a>
                                    <FaLink className="inline-block ml-2" />
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="mr-2 border border-green-500 rounded-full px-2 py-1 text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>

    );
}