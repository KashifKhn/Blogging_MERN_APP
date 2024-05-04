const topics1 = [
  {
    id: "ai",
    text: "Artificial Intelligence",
  },
  {
    id: "chatgpt",
    text: "ChatGPT",
  },
  {
    id: "conversational_ai",
    text: "Conversational AI",
  },
  {
    id: "deep_learning",
    text: "Deep Learning",
  },
  {
    id: "large_language_models",
    text: "Large Language Models",
  },
  {
    id: "machine_learning",
    text: "Machine Learning",
  },
  {
    id: "blockchain",
    text: "Blockchain",
  },
  {
    id: "bitcoin",
    text: "Bitcoin",
  },
  {
    id: "cryptocurrency",
    text: "Cryptocurrency",
  },
  {
    id: "decentralized_finance",
    text: "Decentralized Finance",
  },
  {
    id: "ethereum",
    text: "Ethereum",
  },
  {
    id: "nft",
    text: "NFT",
  },
  {
    id: "data_science",
    text: "Data Science",
  },
  {
    id: "analytics",
    text: "Analytics",
  },
  {
    id: "data_engineering",
    text: "Data Engineering",
  },
  {
    id: "data_visualization",
    text: "Data Visualization",
  },
  {
    id: "database_design",
    text: "Database Design",
  },
  {
    id: "sql",
    text: "SQL",
  },
  {
    id: "gadgets",
    text: "Gadgets",
  },
  {
    id: "ebook",
    text: "eBook",
  },
  {
    id: "internet_of_things",
    text: "Internet of Things",
  },
  {
    id: "ipad",
    text: "iPad",
  },
  {
    id: "smart_home",
    text: "Smart Home",
  },
  {
    id: "smartphones",
    text: "Smartphones",
  },
  {
    id: "makers",
    text: "Makers",
  },
  {
    id: "3d_printing",
    text: "3D Printing",
  },
  {
    id: "arduino",
    text: "Arduino",
  },
  {
    id: "diy",
    text: "DIY",
  },
  {
    id: "raspberry_pi",
    text: "Raspberry Pi",
  },
  {
    id: "robotics",
    text: "Robotics",
  },
  {
    id: "security",
    text: "Security",
  },
  {
    id: "cybersecurity",
    text: "Cybersecurity",
  },
  {
    id: "data_security",
    text: "Data Security",
  },
  {
    id: "encryption",
    text: "Encryption",
  },
  {
    id: "infosec",
    text: "Infosec",
  },
  {
    id: "passwords",
    text: "Passwords",
  },
  {
    id: "tech_companies",
    text: "Tech Companies",
  },
  {
    id: "amazon",
    text: "Amazon",
  },
  {
    id: "apple",
    text: "Apple",
  },
  {
    id: "google",
    text: "Google",
  },
  {
    id: "mastodon",
    text: "Mastodon",
  },
  {
    id: "medium",
    text: "Medium",
  },
  {
    id: "design",
    text: "Design",
  },
  {
    id: "accessibility",
    text: "Accessibility",
  },
  {
    id: "design_systems",
    text: "Design Systems",
  },
  {
    id: "design_thinking",
    text: "Design Thinking",
  },
  {
    id: "graphic_design",
    text: "Graphic Design",
  },
  {
    id: "icon_design",
    text: "Icon Design",
  },
  {
    id: "product_management",
    text: "Product Management",
  },
  {
    id: "agile",
    text: "Agile",
  },
  {
    id: "innovation",
    text: "Innovation",
  },
  {
    id: "kanban",
    text: "Kanban",
  },
  {
    id: "lean_startup",
    text: "Lean Startup",
  },
  {
    id: "mvp",
    text: "MVP",
  },
  {
    id: "product",
    text: "Product",
  },
  {
    id: "strategy",
    text: "Strategy",
  },
];

const topics2 = [
  {
    id: "software_development",
    text: "Software Development",
  },
  {
    id: "programming",
    text: "Programming",
  },
  {
    id: "android_development",
    text: "Android Development",
  },
  {
    id: "coding",
    text: "Coding",
  },
  {
    id: "flutter",
    text: "Flutter",
  },
  {
    id: "frontend_engineering",
    text: "Frontend Engineering",
  },
  {
    id: "ios_development",
    text: "iOS Development",
  },
  {
    id: "mobile_development",
    text: "Mobile Development",
  },
  {
    id: "software_engineering",
    text: "Software Engineering",
  },
  {
    id: "web_development",
    text: "Web Development",
  },
  {
    id: "programming_languages",
    text: "Programming Languages",
  },
  {
    id: "angular",
    text: "Angular",
  },
  {
    id: "css",
    text: "CSS",
  },
  {
    id: "html",
    text: "HTML",
  },
  {
    id: "java",
    text: "Java",
  },
  {
    id: "javascript",
    text: "JavaScript",
  },
  {
    id: "nodejs",
    text: "Node.js",
  },
  {
    id: "python",
    text: "Python",
  },
  {
    id: "react",
    text: "React",
  },
  {
    id: "ruby",
    text: "Ruby",
  },
  {
    id: "typescript",
    text: "TypeScript",
  },
  {
    id: "dev_ops",
    text: "Dev Ops",
  },
  {
    id: "aws",
    text: "AWS",
  },
  {
    id: "databricks",
    text: "Databricks",
  },
  {
    id: "docker",
    text: "Docker",
  },
  {
    id: "kubernetes",
    text: "Kubernetes",
  },
  {
    id: "terraform",
    text: "Terraform",
  },
  {
    id: "operating_systems",
    text: "Operating Systems",
  },
  {
    id: "android_os",
    text: "Android",
  },
  {
    id: "ios_os",
    text: "iOS",
  },
  {
    id: "linux",
    text: "Linux",
  },
  {
    id: "macos",
    text: "macOS",
  },
  {
    id: "windows",
    text: "Windows",
  },
];

const topics3 = [
  {
    id: "media",
    text: "Media",
  },
  {
    id: "writing",
    text: "Writing",
  },
  {
    id: "30_day_challenge",
    text: "30 Day Challenge",
  },
  {
    id: "book_reviews",
    text: "Book Reviews",
  },
  {
    id: "books",
    text: "Books",
  },
  {
    id: "creative_nonfiction",
    text: "Creative Nonfiction",
  },
  {
    id: "diary",
    text: "Diary",
  },
  {
    id: "fiction",
    text: "Fiction",
  },
  {
    id: "haiku",
    text: "Haiku",
  },
  {
    id: "hello_world",
    text: "Hello World",
  },
  {
    id: "memoir",
    text: "Memoir",
  },
  {
    id: "nonfiction",
    text: "Nonfiction",
  },
  {
    id: "personal_essay",
    text: "Personal Essay",
  },
  {
    id: "poetry",
    text: "Poetry",
  },
  {
    id: "screenwriting",
    text: "Screenwriting",
  },
  {
    id: "short_stories",
    text: "Short Stories",
  },
  {
    id: "this_happened_to_me",
    text: "This Happened To Me",
  },
  {
    id: "writing_prompts",
    text: "Writing Prompts",
  },
  {
    id: "writing_tips",
    text: "Writing Tips",
  },
  {
    id: "art",
    text: "Art",
  },
  {
    id: "comics",
    text: "Comics",
  },
  {
    id: "contemporary_art",
    text: "Contemporary Art",
  },
  {
    id: "drawing",
    text: "Drawing",
  },
  {
    id: "fine_art",
    text: "Fine Art",
  },
  {
    id: "generative_art",
    text: "Generative Art",
  },
  {
    id: "illustration",
    text: "Illustration",
  },
  {
    id: "painting",
    text: "Painting",
  },
  {
    id: "portraits",
    text: "Portraits",
  },
  {
    id: "street_art",
    text: "Street Art",
  },
  {
    id: "gaming",
    text: "Gaming",
  },
  {
    id: "game_design",
    text: "Game Design",
  },
  {
    id: "game_development",
    text: "Game Development",
  },
  {
    id: "indie_game",
    text: "Indie Game",
  },
  {
    id: "metaverse",
    text: "Metaverse",
  },
  {
    id: "nintendo",
    text: "Nintendo",
  },
  {
    id: "playstation",
    text: "PlayStation",
  },
  {
    id: "videogames",
    text: "Video Games",
  },
  {
    id: "virtual_reality",
    text: "Virtual Reality",
  },
  {
    id: "xbox",
    text: "Xbox",
  },
  {
    id: "humor",
    text: "Humor",
  },
  {
    id: "comedy",
    text: "Comedy",
  },
  {
    id: "jokes",
    text: "Jokes",
  },
  {
    id: "parody",
    text: "Parody",
  },
  {
    id: "satire",
    text: "Satire",
  },
  {
    id: "stand_up_comedy",
    text: "Stand Up Comedy",
  },
  {
    id: "movies",
    text: "Movies",
  },
  {
    id: "cinema",
    text: "Cinema",
  },
  {
    id: "film",
    text: "Film",
  },
  {
    id: "filmmaking",
    text: "Filmmaking",
  },
  {
    id: "movie_reviews",
    text: "Movie Reviews",
  },
  {
    id: "oscars",
    text: "Oscars",
  },
  {
    id: "music",
    text: "Music",
  },
  {
    id: "hip_hop",
    text: "Hip Hop",
  },
  {
    id: "indie_music",
    text: "Indie",
  },
  {
    id: "metal",
    text: "Metal",
  },
  {
    id: "pop_music",
    text: "Pop",
  },
  {
    id: "rap",
    text: "Rap",
  },
  {
    id: "news",
    text: "News",
  },
  {
    id: "data_journalism",
    text: "Data Journalism",
  },
  {
    id: "fake_news",
    text: "Fake News",
  },
  {
    id: "journalism",
    text: "Journalism",
  },
  {
    id: "misinformation",
    text: "Misinformation",
  },
  {
    id: "true_crime",
    text: "True Crime",
  },
  {
    id: "photography",
    text: "Photography",
  },
  {
    id: "cameras",
    text: "Cameras",
  },
  {
    id: "photography_tips",
    text: "Photography Tips",
  },
  {
    id: "photojournalism",
    text: "Photojournalism",
  },
  {
    id: "photos",
    text: "Photos",
  },
  {
    id: "street_photography",
    text: "Street Photography",
  },
  {
    id: "podcasts",
    text: "Podcasts",
  },
  {
    id: "podcast_equipment",
    text: "Podcast Equipment",
  },
  {
    id: "podcast_recommendations",
    text: "Podcast Recommendations",
  },
  {
    id: "podcasting",
    text: "Podcasting",
  },
  {
    id: "podcasting_tips",
    text: "Podcasting Tips",
  },
  {
    id: "radio",
    text: "Radio",
  },
  {
    id: "television",
    text: "Television",
  },
  {
    id: "hbo_max",
    text: "HBO Max",
  },
  {
    id: "hulu",
    text: "Hulu",
  },
  {
    id: "netflix",
    text: "Netflix",
  },
  {
    id: "reality_tv",
    text: "Reality TV",
  },
  {
    id: "tv_reviews",
    text: "TV Reviews",
  },
];

const topics4 = [
  {
    id: "new_programming_languages",
    text: "New Programming Languages",
  },
  {
    id: "language_comparison",
    text: "Language Comparison",
  },
  {
    id: "software_development_best_practices",
    text: "Software Development Best Practices",
  },
  {
    id: "object_oriented_programming",
    text: "Object Oriented Programming",
  },
  {
    id: "data_structures_algorithms",
    text: "Data Structures & Algorithms",
  },
  {
    id: "functional_programming",
    text: "Functional Programming",
  },
  {
    id: "web_development",
    text: "Web Development",
  },
  {
    id: "frontend_frameworks",
    text: "Frontend Frameworks",
  },
  {
    id: "javascript_frameworks",
    text: "JavaScript Frameworks",
  },
  {
    id: "css_frameworks",
    text: "CSS Frameworks",
  },
  {
    id: "responsive_web_design",
    text: "Responsive Web Design",
  },
  {
    id: "backend_development",
    text: "Backend Development",
  },
  {
    id: "server_side_frameworks",
    text: "Server Side Frameworks",
  },
  {
    id: "api_development",
    text: "API Development",
  },
  {
    id: "serverless_computing",
    text: "Serverless Computing",
  },
  {
    id: "microservices_architecture",
    text: "Microservices Architecture",
  },
  {
    id: "big_data_technologies",
    text: "Big Data Technologies",
  },
  {
    id: "machine_learning_ai",
    text: "Machine Learning & AI",
  },
  {
    id: "deep_learning",
    text: "Deep Learning",
  },
  {
    id: "neural_networks",
    text: "Neural Networks",
  },
  {
    id: "natural_language_processing",
    text: "Natural Language Processing",
  },
  {
    id: "computer_vision",
    text: "Computer Vision",
  },
  {
    id: "reinforcement_learning",
    text: "Reinforcement Learning",
  },
  {
    id: "data_science",
    text: "Data Science",
  },
  {
    id: "data_visualization",
    text: "Data Visualization",
  },
  {
    id: "quantum_computing",
    text: "Quantum Computing",
  },
  {
    id: "blockchain_technology",
    text: "Blockchain Technology",
  },
  {
    id: "cryptocurrencies",
    text: "Cryptocurrencies",
  },
  {
    id: "smart_contracts",
    text: "Smart Contracts",
  },
  {
    id: "solidity_programming",
    text: "Solidity Programming",
  },
  {
    id: "ethereum_development",
    text: "Ethereum Development",
  },
  {
    id: "cryptography",
    text: "Cryptography",
  },
  {
    id: "cybersecurity",
    text: "Cybersecurity",
  },
  {
    id: "ethical_hacking",
    text: "Ethical Hacking",
  },
  {
    id: "penetration_testing",
    text: "Penetration Testing",
  },
  {
    id: "network_security",
    text: "Network Security",
  },
  {
    id: "web_security",
    text: "Web Security",
  },
  {
    id: "code_optimization",
    text: "Code Optimization",
  },
  {
    id: "performance_tuning",
    text: "Performance Tuning",
  },
  {
    id: "memory_management",
    text: "Memory Management",
  },
  {
    id: "debugging_techniques",
    text: "Debugging Techniques",
  },
  {
    id: "version_control",
    text: "Version Control",
  },
  {
    id: "git",
    text: "Git",
  },
  {
    id: "github",
    text: "GitHub",
  },
  {
    id: "gitlab",
    text: "GitLab",
  },
  {
    id: "bitbucket",
    text: "Bitbucket",
  },
  {
    id: "continuous_integration",
    text: "Continuous Integration",
  },
  {
    id: "continuous_deployment",
    text: "Continuous Deployment",
  },
  {
    id: "devops",
    text: "DevOps",
  },
  {
    id: "infrastructure_as_code",
    text: "Infrastructure as Code",
  },
  {
    id: "cloud_computing",
    text: "Cloud Computing",
  },
  {
    id: "aws",
    text: "AWS",
  },
  {
    id: "azure",
    text: "Azure",
  },
  {
    id: "google_cloud_platform",
    text: "Google Cloud Platform",
  },
  {
    id: "docker",
    text: "Docker",
  },
  {
    id: "kubernetes",
    text: "Kubernetes",
  },
  {
    id: "container_orchestration",
    text: "Container Orchestration",
  },
  {
    id: "server_administration",
    text: "Server Administration",
  },
  {
    id: "linux",
    text: "Linux",
  },
  {
    id: "shell_scripting",
    text: "Shell Scripting",
  },
  {
    id: "bash_scripting",
    text: "Bash Scripting",
  },
  {
    id: "python_scripting",
    text: "Python Scripting",
  },
  {
    id: "powershell",
    text: "PowerShell",
  },
  {
    id: "windows_server",
    text: "Windows Server",
  },
  {
    id: "macos",
    text: "macOS",
  },
  {
    id: "mobile_app_development",
    text: "Mobile App Development",
  },
  {
    id: "ios_development",
    text: "iOS Development",
  },
  {
    id: "android_development",
    text: "Android Development",
  },
  {
    id: "cross_platform_development",
    text: "Cross Platform Development",
  },
  {
    id: "flutter",
    text: "Flutter",
  },
  {
    id: "react_native",
    text: "React Native",
  },
  {
    id: "xamarin",
    text: "Xamarin",
  },
  {
    id: "unity",
    text: "Unity",
  },
  {
    id: "game_development",
    text: "Game Development",
  },
  {
    id: "game_engines",
    text: "Game Engines",
  },
  {
    id: "virtual_reality",
    text: "Virtual Reality",
  },
  {
    id: "augmented_reality",
    text: "Augmented Reality",
  },
  {
    id: "iot_development",
    text: "IoT Development",
  },
  {
    id: "embedded_systems",
    text: "Embedded Systems",
  },
  {
    id: "microcontrollers",
    text: "Microcontrollers",
  },
  {
    id: "raspberry_pi",
    text: "Raspberry Pi",
  },
  {
    id: "arduino",
    text: "Arduino",
  },
  {
    id: "wearable_tech",
    text: "Wearable Tech",
  },
  {
    id: "robotics",
    text: "Robotics",
  },
  {
    id: "ui_ux_design",
    text: "UI/UX Design",
  },
  {
    id: "user_interface_design",
    text: "User Interface Design",
  },
  {
    id: "user_experience_design",
    text: "User Experience Design",
  },
  {
    id: "prototyping",
    text: "Prototyping",
  },
  {
    id: "wireframing",
    text: "Wireframing",
  },
  {
    id: "usability_testing",
    text: "Usability Testing",
  },
  {
    id: "accessibility",
    text: "Accessibility",
  },
  {
    id: "web_performance",
    text: "Web Performance",
  },
  {
    id: "page_speed_optimization",
    text: "Page Speed Optimization",
  },
  {
    id: "seo",
    text: "SEO",
  },
  {
    id: "search_engine_optimization",
    text: "Search Engine Optimization",
  },
  {
    id: "content_management_systems",
    text: "Content Management Systems",
  },
  {
    id: "wordpress",
    text: "WordPress",
  },
  {
    id: "drupal",
    text: "Drupal",
  },
  {
    id: "joomla",
    text: "Joomla",
  },
  {
    id: "headless_cms",
    text: "Headless CMS",
  },
  {
    id: "e_commerce_development",
    text: "E-commerce Development",
  },
  {
    id: "payment_gateways",
    text: "Payment Gateways",
  },
  {
    id: "web_hosting",
    text: "Web Hosting",
  },
  {
    id: "domain_management",
    text: "Domain Management",
  },
  {
    id: "website_security",
    text: "Website Security",
  },
  {
    id: "ssl_certificates",
    text: "SSL Certificates",
  },
  {
    id: "malware_protection",
    text: "Malware Protection",
  },
  {
    id: "data_backup",
    text: "Data Backup",
  },
  {
    id: "disaster_recovery",
    text: "Disaster Recovery",
  },
  {
    id: "regulatory_compliance",
    text: "Regulatory Compliance",
  },
];

const topics5 = [
  {
    id: "python_programming",
    text: "Python Programming",
  },
  {
    id: "python_frameworks",
    text: "Python Frameworks",
  },
  {
    id: "django_web_framework",
    text: "Django Web Framework",
  },
  {
    id: "flask_microframework",
    text: "Flask Microframework",
  },
  {
    id: "pandas_library",
    text: "Pandas Library",
  },
  {
    id: "numpy_library",
    text: "NumPy Library",
  },
  {
    id: "tensorflow_framework",
    text: "TensorFlow Framework",
  },
  {
    id: "keras_library",
    text: "Keras Library",
  },
  {
    id: "pytorch_framework",
    text: "PyTorch Framework",
  },
  {
    id: "scikit_learn_library",
    text: "Scikit-Learn Library",
  },
  {
    id: "matplotlib_library",
    text: "Matplotlib Library",
  },
  {
    id: "seaborn_library",
    text: "Seaborn Library",
  },
  {
    id: "nltk_library",
    text: "NLTK Library (Natural Language Toolkit)",
  },
  {
    id: "opencv_library",
    text: "OpenCV Library (Open Source Computer Vision Library)",
  },
  {
    id: "ruby_programming",
    text: "Ruby Programming",
  },
  {
    id: "ruby_on_rails_framework",
    text: "Ruby on Rails Framework",
  },
  {
    id: "sinatra_framework",
    text: "Sinatra Framework",
  },
  {
    id: "javascript_programming",
    text: "JavaScript Programming",
  },
  {
    id: "nodejs_runtime_environment",
    text: "Node.js Runtime Environment",
  },
  {
    id: "react_framework",
    text: "React Framework",
  },
  {
    id: "angular_framework",
    text: "Angular Framework",
  },
  {
    id: "vuejs_framework",
    text: "Vue.js Framework",
  },
  {
    id: "expressjs_framework",
    text: "Express.js Framework",
  },
  {
    id: "d3js_library",
    text: "D3.js Library",
  },
  {
    id: "jquery_library",
    text: "jQuery Library",
  },
  {
    id: "typescript_language",
    text: "TypeScript Language",
  },
  {
    id: "coffeescript_language",
    text: "CoffeeScript Language",
  },
  {
    id: "java_programming",
    text: "Java Programming",
  },
  {
    id: "spring_framework",
    text: "Spring Framework",
  },
  {
    id: "hibernate_framework",
    text: "Hibernate Framework",
  },
  {
    id: "android_development",
    text: "Android Development",
  },
  {
    id: "kotlin_programming",
    text: "Kotlin Programming",
  },
  {
    id: "swift_programming",
    text: "Swift Programming",
  },
  {
    id: "ios_development",
    text: "iOS Development",
  },
  {
    id: "objective_c_programming",
    text: "Objective-C Programming",
  },
  {
    id: "csharp_programming",
    text: "C# Programming",
  },
  {
    id: "dotnet_framework",
    text: ".NET Framework",
  },
  {
    id: "aspnet_framework",
    text: "ASP.NET Framework",
  },
  {
    id: "entity_framework",
    text: "Entity Framework",
  },
  {
    id: "xamarin_framework",
    text: "Xamarin Framework",
  },
  {
    id: "unity_game_engine",
    text: "Unity Game Engine",
  },
  {
    id: "unreal_engine",
    text: "Unreal Engine",
  },
  {
    id: "cplus_plus_programming",
    text: "C++ Programming",
  },
  {
    id: "qt_framework",
    text: "Qt Framework",
  },
  {
    id: "boost_library",
    text: "Boost Library",
  },
  {
    id: "stl",
    text: "STL (Standard Template Library)",
  },
  {
    id: "rust_programming",
    text: "Rust Programming",
  },
  {
    id: "go_programming",
    text: "Go Programming",
  },
  {
    id: "gin_framework",
    text: "Gin Framework",
  },
  {
    id: "echo_framework",
    text: "Echo Framework",
  },
  {
    id: "php_programming",
    text: "PHP Programming",
  },
  {
    id: "laravel_framework",
    text: "Laravel Framework",
  },
  {
    id: "symfony_framework",
    text: "Symfony Framework",
  },
  {
    id: "codeigniter_framework",
    text: "CodeIgniter Framework",
  },
  {
    id: "wordpress_development",
    text: "WordPress Development",
  },
  {
    id: "joomla_development",
    text: "Joomla Development",
  },
  {
    id: "drupal_development",
    text: "Drupal Development",
  },
  {
    id: "perl_programming",
    text: "Perl Programming",
  },
  {
    id: "catalyst_framework",
    text: "Catalyst Framework",
  },
  {
    id: "mojolicious_framework",
    text: "Mojolicious Framework",
  },
  {
    id: "r_programming",
    text: "R Programming",
  },
  {
    id: "shiny_framework",
    text: "Shiny Framework",
  },
  {
    id: "julia_programming",
    text: "Julia Programming",
  },
  {
    id: "haskell_programming",
    text: "Haskell Programming",
  },
  {
    id: "elm_programming",
    text: "Elm Programming",
  },
  {
    id: "erlang_programming",
    text: "Erlang Programming",
  },
  {
    id: "elixir_programming",
    text: "Elixir Programming",
  },
  {
    id: "phoenix_framework",
    text: "Phoenix Framework",
  },
  {
    id: "scala_programming",
    text: "Scala Programming",
  },
  {
    id: "play_framework",
    text: "Play Framework",
  },
  {
    id: "akka_framework",
    text: "Akka Framework",
  },
  {
    id: "clojure_programming",
    text: "Clojure Programming",
  },
  {
    id: "clojurescript_language",
    text: "ClojureScript Language",
  },
  {
    id: "lisp_programming",
    text: "LISP Programming",
  },
  {
    id: "scheme_programming",
    text: "Scheme Programming",
  },
  {
    id: "common_lisp",
    text: "Common Lisp",
  },
  {
    id: "tcl_tk_programming",
    text: "Tcl/Tk Programming",
  },
  {
    id: "dart_programming",
    text: "Dart Programming",
  },
  {
    id: "flutter_framework",
    text: "Flutter Framework",
  },
  {
    id: "lua_programming",
    text: "Lua Programming",
  },
  {
    id: "corona_sdk",
    text: "Corona SDK",
  },
  {
    id: "torch_framework",
    text: "Torch Framework",
  },
  {
    id: "rubymotion",
    text: "RubyMotion",
  },
  {
    id: "crystal_programming",
    text: "Crystal Programming",
  },
  {
    id: "assembly_language",
    text: "Assembly Language",
  },
  {
    id: "mips_assembly",
    text: "MIPS Assembly",
  },
  {
    id: "arm_assembly",
    text: "ARM Assembly",
  },
  {
    id: "x86_assembly",
    text: "x86 Assembly",
  },
  {
    id: "web_assembly",
    text: "WebAssembly",
  },
  {
    id: "cuda_programming",
    text: "CUDA Programming",
  },
  {
    id: "parallel_computing",
    text: "Parallel Computing",
  },
  {
    id: "mpi",
    text: "MPI (Message Passing Interface)",
  },
  {
    id: "openmp",
    text: "OpenMP",
  },
  {
    id: "posix_threads",
    text: "POSIX Threads",
  },
  {
    id: "concurrent_programming",
    text: "Concurrent Programming",
  },
  {
    id: "functional_programming_languages",
    text: "Functional Programming Languages",
  },
  {
    id: "logic_programming_languages",
    text: "Logic Programming Languages",
  },
  {
    id: "declarative_programming_languages",
    text: "Declarative Programming Languages",
  },
  {
    id: "domain_specific_languages",
    text: "Domain Specific Languages",
  },
  {
    id: "scripting_languages",
    text: "Scripting Languages",
  },
];

export const topics = [
  ...topics1,
  ...topics2,
  ...topics3,
  ...topics4,
  ...topics5,
];
