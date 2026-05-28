from langchain_core.documents import Document

docs: list[Document] = [
    # --- BIO ---
    Document(
        page_content=(
            "Saanvi Arora is a senior at UNC Chapel Hill double majoring in Computer Science and Mathematics "
            "with a minor in Data Science, graduating May 2026. She is seeking full-time roles at the intersection "
            "of software development, data engineering, and security. She is passionate about building technology that's accessible and impactful."
        ),
        metadata={"section": "bio"},
    ),
    Document(
        page_content=(
            "Saanvi has experience working across the full stack with strong foundations in Python, Java, C/C++, "
            "and low-level systems, alongside hands-on exposure to cybersecurity, machine learning, and symbolic analysis. "
            "She is deeply interested in how technology intersects with law, policy, and social good, which she pursues "
            "through leadership, volunteering, and research focused on making complex systems more accessible and equitable."
        ),
        metadata={"section": "bio"},
    ),

    # --- EDUCATION ---
    Document(
        page_content=(
            "Education: Computer Science B.S. and Mathematics B.A. with a Data Science Minor at the University of "
            "North Carolina at Chapel Hill (UNC Chapel Hill), August 2022 – May 2026. Computer Science GPA: 3.6/4.0. "
            "Relevant coursework: Algorithm Analysis, Machine Learning, Compilers, Cryptography, Artificial Intelligence, "
            "Advanced Calculus, Numerical Analysis. Societies: Mathematics Teaching Assistant, Undergraduate Senator, "
            "Rams Hack, Carolina Data Science."
        ),
        metadata={"section": "education", "school": "UNC Chapel Hill"},
    ),

    Document(
        page_content=(
            "Saanvi's relevant coursework at UNC Chapel Hill includes: Algorithm Analysis, Machine Learning, "
            "Compilers, Cryptography, Artificial Intelligence, Advanced Calculus, and Numerical Analysis."
        ),
        metadata={"section": "education", "school": "UNC Chapel Hill"},
    ),

    # --- EXPERIENCE ---
    Document(
        page_content=(
            "Work Experience: Threat Research Intern at Safe Security (May 2025 – July 2025). "
            "Built a cross-sector risk propagation model analyzing how cyberattacks on healthcare companies impact "
            "connected industries (finance, insurance, supply chain); the model integrated real-time breach data to "
            "predict downstream vulnerabilities, improving assessment accuracy by 14%. "
            "Authored 300+ threat intelligence briefs translating breach findings into quantified risk metrics. "
            "Automated data collection from SOCRadar and Breachnet APIs using Python, reducing threat research cycle time by 40%."
        ),
        metadata={"section": "experience", "company": "Safe Security", "role": "Threat Research Intern"},
    ),
    Document(
        page_content=(
            "Work Experience: Software Engineer Intern at SkillUp Technologies (May 2024 – July 2024). "
            "Designed an engagement analytics dashboard tracking login frequency and course progress for 10,000+ e-learning users. "
            "Cut report generation time from 12 seconds to 9 seconds by indexing PostgreSQL queries and implementing Redis caching. "
            "Built 8 reusable React chart components adopted across the company's reporting infrastructure."
        ),
        metadata={"section": "experience", "company": "SkillUp Technologies", "role": "Software Engineer Intern"},
    ),
    Document(
        page_content=(
            "Work Experience: Generative AI Research Intern at Ernst & Young (EY) (May 2023 – July 2023). "
            "Prototyped a VAE-based anomaly detector for financial transaction logs, achieving 82% precision on the test dataset; "
            "benchmarked against baseline classification methods. "
            "Researched 12 generative AI use cases for enterprise audit workflows and presented feasibility analysis to a "
            "15-person risk management team."
        ),
        metadata={"section": "experience", "company": "Ernst & Young", "role": "Generative AI Research Intern"},
    ),

    # --- PROJECTS ---
    Document(
        page_content=(
            "Project: Yoga Pose Estimator (Python, TensorFlow, MobileNetV2, OpenCV, Scikit-Learn). "
            "Trained a MobileNetV2 CNN on the Yoga-82 dataset for 12 pose classes, achieving 78% test accuracy; "
            "applied data augmentation and class weighting to handle imbalanced training data. "
            "Built a real-time pose classification system processing camera footage at 30 fps on CPU; implemented "
            "3 practice modes (standing-only, hard, full class) guiding users through pose sequences with live feedback."
        ),
        metadata={"section": "projects", "project": "Yoga Pose Estimator"},
    ),
    Document(
        page_content=(
            "Project: SYLQ – UNC Hardware Security Lab (Python, Z3 SMT Solver, NetworkX, Verilog, C++). "
            "Optimized SYLQ, a Python-based symbolic execution engine, by implementing superset/subset caching and "
            "expression simplification to optimize Z3 constraint solving. "
            "Prototyping an approach in Sylvia that analyzes circuits one cycle at a time, then combines results to "
            "handle longer execution paths while controlling state explosion."
        ),
        metadata={"section": "projects", "project": "SYLQ"},
    ),
    Document(
        page_content=(
            "Project: Personal Portfolio Website (Next.js, React, TypeScript, LangChain, Pinecone, Notion). "
            "Built a full-stack portfolio website with technical blog posts on ML, tech policies, and mathematical concepts; "
            "implemented a CI/CD pipeline with GitHub Actions for automatic deployment to Vercel. "
            "Integrated a RAG-based chatbot using LangChain and OpenAI API with a Pinecone vector database."
        ),
        metadata={"section": "projects", "project": "Portfolio Website"},
    ),
    Document(
        page_content=(
            "Project: Regional Sales Forecasting Dashboard (Python, XGBoost, Scikit-Learn, pandas). "
            "Built a forecasting tool for Azure Knowledge Corporation's client, a local automotive parts retailer, "
            "tracking sales across 3 store locations and 8 product categories. "
            "Trained an XGBoost regression model on 2 years of transaction data, achieving 12% MAPE on the hold-out "
            "test set versus 18% for Ridge baseline. "
            "Engineered 20+ features including rolling averages, seasonality indicators, and promotional event flags."
        ),
        metadata={"section": "projects", "project": "Sales Forecasting Dashboard"},
    ),
    Document(
        page_content=(
            "Project: Diplomacy Lab (Blender, 3D Animation, Video Production). "
            "Created Blender-based 3D videos simplifying technical policies for the North Carolina State Department. "
            "Developed educational content to make complex policy concepts more accessible and engaging."
        ),
        metadata={"section": "projects", "project": "Diplomacy Lab"},
    ),

    # --- SKILLS ---
    Document(
        page_content=(
            "Skills – Languages: Python, Java, C++, JavaScript, TypeScript, SQL, Rust, Verilog. "
            "Frameworks & Libraries: React, Next.js, TensorFlow, Scikit-Learn, XGBoost, FastAPI, Flask, LangChain, pandas, OpenCV. "
            "Databases: PostgreSQL, MySQL, Redis, Pinecone, MongoDB. "
            "Tools: Docker, Git, Vercel, Z3 Solver, NetworkX, Blender."
        ),
        metadata={"section": "skills"},
    ),

    # --- LEADERSHIP ---
    Document(
        page_content=(
            "Leadership: Volunteer at Computer Shiksha. "
            "Founded and led a computer literacy initiative providing free technology education to underprivileged children "
            "in rural communities. Secured funding and coordinated donations of refurbished computers. "
            "Developed a comprehensive curriculum covering basic computing, internet safety, and essential software skills, "
            "impacting 100+ students."
        ),
        metadata={"section": "leadership", "org": "Computer Shiksha"},
    ),
    Document(
        page_content=(
            "Leadership: Teaching Assistant at UNC Mathematics Department. "
            "Facilitated learning for 500+ students in discrete mathematics, multivariable calculus, reasoning with data, "
            "and pre-calculus through weekly office hours and recitation sessions. "
            "Collaborated with professors to develop supplementary materials and practice problems."
        ),
        metadata={"section": "leadership", "org": "UNC Mathematics Department"},
    ),
    Document(
        page_content=(
            "Leadership: Undergraduate Senator at UNC Student Government. "
            "Represented 20,000+ Computer Science students in UNC Student Government, advocating for academic policy "
            "improvements and student welfare initiatives. "
            "Co-authored and passed legislation to expand transfer credit acceptance, benefiting hundreds of transfer students annually."
        ),
        metadata={"section": "leadership", "org": "UNC Student Government"},
    ),
    Document(
        page_content=(
            "Leadership: Head of Engagement at CIRA (Carolina International Relations Association). "
            "Led outreach and member engagement initiatives, growing active membership by organizing workshops and networking events. "
            "Competed in and secured awards at multiple Model United Nations conferences nationwide, representing UNC "
            "at the highest collegiate level of diplomatic simulation."
        ),
        metadata={"section": "leadership", "org": "CIRA"},
    ),
    Document(
        page_content=(
            "Leadership: Active Member of Alpha Phi Omega, a national co-ed service fraternity focused on leadership, "
            "friendship, and service. Completed 30+ volunteer hours each semester. "
            "Participated in diverse community service projects including teaching literacy programs, Habitat for Humanity "
            "construction builds, and Lake Jordan environmental cleanup initiatives."
        ),
        metadata={"section": "leadership", "org": "Alpha Phi Omega"},
    ),
    Document(
        page_content=(
            "Leadership: Volunteer at People for Animals. "
            "Provided direct care for rescued puppies including feeding, grooming, and socialization to prepare them for adoption. "
            "Secured funding through fundraising campaigns and coordinated successful adoptions, finding permanent homes for 20+ animals."
        ),
        metadata={"section": "leadership", "org": "People for Animals"},
    ),

    # --- CONTACT ---
    Document(
        page_content=(
            "Contact Saanvi Arora: Email saanviarora4@gmail.com | "
            "GitHub: github.com/saanwee | "
            "LinkedIn: linkedin.com/in/saanviarora-"
        ),
        metadata={"section": "contact"},
    ),
]
