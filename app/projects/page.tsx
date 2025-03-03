'use client';
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Classification of Online Shoppers",
      description: "Developed a classification model to predict customer purchase intent using logistic regression and decision trees. Conducted feature engineering, handled missing values, and optimized model performance.",
      link: "https://github.com/ericks-on/predicting_purchase_intent",
      techStack: ["Python", "Logistic Regression", "Decision Trees", "Scikit-learn"],
      image: "/images/shopping.jpg",
    },
    {
      title: "NLP: AI-Generated Text Detection",
      description: "Created a machine learning model for detecting AI-generated text using various algorithms. Integrated the model into a Flask-based web application.",
      link: "https://github.com/ericks-on/NLP-Ai_generated_Text_detection",
      techStack: ["Python", "NLP", "Scikit-learn", "TensorFlow", "Flask", "NLTK", "Pandas"],
      image: "/images/aitext.jpg",
    },
    {
      title: "Fraud Detection System for Insurance Claims",
      description: "Developed a Logistic Regression model fine-tuned through Grid Search to detect fraudulent claims. Created dashboards for monitoring claims and provided insights through Tableau.",
      link: "https://github.com/ericks-on/insurance-fraud-detection",
      techStack: ["Python", "Logistic Regression", "Grid Search", "Tableau", "TensorFlow", "Keras"],
      image: "/images/insurance.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-20 px-6">

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 30px rgba(0, 255, 200, 0.2)" }}
            className="relative border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl overflow-hidden transition-all duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={640}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="border border-gray-400 dark:border-gray-600 bg-gray-200/30 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="mt-4 flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center gap-2 transition-all duration-300"
                >
                  <FaLink />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
