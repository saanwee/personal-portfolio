"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
];

const experience = [
  {
    title: "Threat Research Intern",
    company: "Safe Security",
    period: "May 2025 - July 2025",
    description: [
      "Built cross-sector risk propagation model analyzing how cyberattacks on healthcare companies impact connected industries (finance, insurance, supply chain); model integrated real-time breach data to predict downstream vulnerabilities, improving assessment accuracy by 14%",
      "Authored 300+ threat intelligence briefs translating breach findings into quantified risk metrics",
      "Automated data collection from SOCRadar and Breachnet APIs using Python, reducing threat research cycle time by 40%",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "SkillUp Technologies",
    period: "May 2024 - July 2024",
    description: [
      "Designed engagement analytics dashboard tracking login frequency and course progress for 10,000+ e-learning users",
      "Cut report generation time from 12 seconds to 9 seconds by indexing PostgreSQL queries and implementing Redis caching",
      "Built 8 reusable React chart components adopted across company reporting infrastructure",
    ],
  },
  {
    title: "Generative AI Research Intern",
    company: "Ernst & Young (EY)",
    period: "May 2023 - July 2023",
    description: [
      "Prototyped VAE-based anomaly detector for financial transaction logs, achieving 82% precision on test dataset; benchmarked against baseline classification methods",
      "Researched 12 generative AI use cases for enterprise audit workflows and presented feasibility analysis to 15-person risk management team",
    ],
  },
];

const education = [
  {
    title: "Computer Science B.S., Mathematics B.A. with Data Science Minor",
    company: "University of North Carolina at Chapel Hill",
    period: "August 2022 - May 2026",
    description: [
      "Computer Science GPA: 3.6/4.0",
      "Relevant Coursework: Algorithm Analysis, Machine Learning, Compilers, Cryptography, Artificial Intelligence, Advanced Calculus, Numerical Analysis",
      "Societies: Mathematics Teaching Assistant, Undergraduate Senator, Rams Hack, Carolina Data Science",
    ],
  },
];

const projects = [
  {
    title: "Yoga Pose Estimator",
    tech: "Python, TensorFlow, MobileNetV2, OpenCV, Scikit-Learn",
    description: [
      "Trained MobileNetV2 CNN on Yoga-82 dataset for 12 pose classes achieving 78% test accuracy; applied data augmentation and class weighting to handle imbalanced training data",
      "Built real-time pose classification system processing camera footage at 30 fps on CPU; implemented 3 practice modes (standing-only, hard, full class) guiding users through pose sequences with live feedback",
    ],
  },
  {
    title: "SYLQ (UNC Hardware Security Lab)",
    tech: "Python, Z3 SMT Solver, NetworkX, Verilog, C++",
    description: [
      "Optimized SYLQ (a Python-based symbolic execution engine) by implementing superset/subset caching and expression simplification to optimize Z3 constraint solving",
      "Currently prototyping an approach in Sylvia that analyzes circuits one cycle at a time, then combines results to handle longer execution paths while controlling state explosion",
    ],
  },
  {
    title: "Portfolio",
    tech: "Next.js, React, TypeScript, LangChain, Pinecone, Notion",
    description: [
      "Built a full stack portfolio website with technical blog posts on ML, tech policies and mathematic concepts; implemented CI/CD pipeline with GitHub Actions for automatic deployment to Vercel",
      "Integrated a RAG-based chatbot using LangChain and OpenAI API with a Pinecone vector database",
    ],
  },
  {
    title: "Regional Sales Forecasting Dashboard",
    tech: "Python, XGBoost, Scikit-Learn, pandas",
    description: [
      "Built forecasting tool for Azure Knowledge Corporation's client, a local automotive parts retailer, tracking sales across 3 store locations and 8 product categories",
      "Trained XGBoost regression model on 2 years of transaction data, achieving 12% MAPE on hold-out test set (vs 18% for Ridge baseline)",
      "Engineered 20+ features including rolling averages, seasonality indicators, and promotional event flags to capture sales patterns",
    ],
  },
  {
    title: "Diplomacy Lab",
    tech: "Blender, 3D Animation, Video Production",
    description: [
      "Created Blender-based 3D videos simplifying technical policies for the N.C. State Department",
      "Developed educational content to make complex policy concepts more accessible and engaging",
    ],
  },
];

const leadership = [
  {
    title: "Volunteer",
    company: "Computer Shiksha",
    period: "",
    description: [
      "Founded and led computer literacy initiative providing free technology education to underprivileged children in rural communities",
      "Secured funding and coordinated donations of refurbished computers from local organizations to establish functional computer labs",
      "Developed comprehensive curriculum covering basic computing, internet safety, and essential software skills, impacting 100+ students",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "UNC Mathematics Department",
    period: "",
    description: [
      "Facilitated learning for 500+ students in discrete mathematics, multivariable calculus, reasoning with data and pre-calculus through weekly office hours and recitation sessions",
      "Collaborated with professors to develop supplementary materials and practice problems aligned with course objectives",
    ],
  },
  {
    title: "Undergraduate Senator",
    company: "UNC Student Government",
    period: "",
    description: [
      "Represented 20,000+ Computer Science students in UNC Student Government, advocating for academic policy improvements and student welfare initiatives",
      "Co-authored and passed legislation to expand transfer credit acceptance, benefiting hundreds of transfer students annually",
    ],
  },
  {
    title: "Head of Engagement",
    company: "CIRA (Carolina International Relations Association)",
    period: "",
    description: [
      "Led outreach and member engagement initiatives for Carolina International Relations Association (CIRA), growing active membership by organizing workshops and networking events",
      "Competed in and secured awards at multiple Model United Nations conferences nationwide, representing UNC at the highest collegiate level of diplomatic simulation",
    ],
  },
  {
    title: "Active Member",
    company: "Alpha Phi Omega",
    period: "",
    description: [
      "Completed 30+ volunteer hours each semester through national co-ed service fraternity focused on leadership, friendship, and service",
      "Participated in diverse community service projects including teaching literacy programs, Habitat for Humanity construction builds, and Lake Jordan environmental cleanup initiatives",
    ],
  },
  {
    title: "Volunteer",
    company: "People for Animals",
    period: "",
    description: [
      "Provided direct care for rescued puppies including feeding, grooming, and socialization to prepare them for adoption",
      "Secured funding through fundraising campaigns and coordinated successful adoptions, finding permanent homes for 20+ animals",
    ],
  },
];



export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderTimeline = (items: typeof experience) => (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative pl-0 sm:pl-6 animate-fade-in-up group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Timeline line */}
          <div
            className={cn(
              "hidden sm:block absolute left-0 top-0 bottom-0 w-1 rounded-full transition-colors duration-300",
              "bg-border",
              "group-hover:bg-[hsl(var(--accent))]"
            )}
          />

          {/* Card */}
          <div
            className={cn(
              "glass-card p-6 ml-0 sm:ml-4 transition-all duration-300",
              "group-hover:border-[hsl(var(--accent))]/50"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3
                className={cn(
                  "font-semibold text-lg transition-colors duration-300",
                  "group-hover:text-[hsl(var(--accent-blue-light))]"
                )}
              >
                {item.title}
              </h3>

              {item.period && (
                <span className="text-sm font-mono text-[hsl(var(--accent-blue-light))]">
                  {item.period}
                </span>
              )}
            </div>

            <p className="text-[hsl(var(--accent))] mb-2">{item.company}</p>
            
            <div className="text-muted-foreground space-y-2">
              {item.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={cn(
            "glass-card p-6 transition-all duration-300 animate-fade-in-up group",
            "hover:border-[hsl(var(--accent))]/50"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h3
            className={cn(
              "font-semibold text-lg mb-2 transition-colors duration-300",
              "group-hover:text-[hsl(var(--accent-blue-light))]"
            )}
          >
            {project.title}
          </h3>

          <p className="text-sm font-mono mb-3 text-[hsl(var(--accent-blue-light))]">
            {project.tech}
          </p>

          <div className="text-muted-foreground space-y-2">
            {project.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up text-center">
          <h1 className="text-4xl font-bold text-[hsl(var(--accent-blue-light))]">
            Resume
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-10 animate-fade-in-up delay-100 text-[0.8rem] sm:text-sm md:text-base">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center px-3 py-2 font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "text-[hsl(var(--accent-blue-light))]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {index < tabs.length - 1 && (
                <span className="ml-3 text-muted-foreground/50">|</span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in-up delay-200">
          {activeTab === "experience" && renderTimeline(experience)}
          {activeTab === "education" && renderTimeline(education)}
          {activeTab === "projects" && renderProjects()}
          {activeTab === "leadership" && renderTimeline(leadership)}
        </div>
      </div>
    </div>
  );
}