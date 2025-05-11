// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses I teach or taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-bertha-benz-the-first-test-driver-who-changed-the-world",
        
          title: 'Bertha Benz: The First Test Driver Who Changed the World <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/bertha-benz-the-first-test-driver-who-changed-the-world-cebbc8e33b7c?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-what-is-stress-the-foundation-of-material-mechanics",
        
          title: "What is Stress? – The Foundation of Material Mechanics",
        
        description: "Learn the basic concept of stress in material mechanics—what it is, how it&#39;s calculated, and why it&#39;s essential in engineering design.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/stress_intro/";
          
        },
      },{id: "post-a-50-year-old-soviet-spacecraft-is-about-to-crash-back-to-earth",
        
          title: 'A 50-Year-Old Soviet Spacecraft Is About to Crash Back to Earth <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/a-50-year-old-soviet-spacecraft-is-about-to-crash-back-to-earth-ff59e5f34458?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-the-rise-and-fall-of-skype-a-digital-pioneer-bows-out",
        
          title: 'The Rise and Fall of Skype: A Digital Pioneer Bows Out <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/the-rise-and-fall-of-skype-a-digital-pioneer-bows-out-3e867a46c369?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-the-mathematician-who-built-the-bomb-then-built-the-field-of-game-theory",
        
          title: 'The Mathematician Who Built the Bomb — Then Built the Field of Game Theory <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/the-mathematician-who-built-the-bomb-then-built-the-field-of-game-theory-8a63f09071b7?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-why-sri-lanka-uses-bs-1363-electrical-plugs-and-sockets",
        
          title: 'Why Sri Lanka Uses BS 1363 Electrical Plugs and Sockets <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/why-sri-lanka-uses-bs-1363-electrical-plugs-and-sockets-45a632e54044?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-what-every-roboticist-must-know-about-ros-part-01",
        
          title: "What Every Roboticist Must Know About ROS - Part 01",
        
        description: "An overview of the Robot Operating System (ROS), its importance in modern robotics, and the transition from ROS 1 to ROS 2.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ros/";
          
        },
      },{id: "post-types-of-databases-an-overview-for-modern-applications",
        
          title: 'Types of Databases: An Overview for Modern Applications <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/types-of-databases-an-overview-for-modern-applications-8b13cc517de4?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-thorium-reactors-powering-the-future-with-safer-smarter-nuclear-energy",
        
          title: 'Thorium Reactors: Powering the Future with Safer, Smarter Nuclear Energy <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/thorium-reactors-powering-the-future-with-safer-smarter-nuclear-energy-a6d2a6c16764?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-how-china-s-new-transistors-could-reshape-global-computing",
        
          title: 'How China’s New Transistors Could Reshape Global Computing <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/how-chinas-new-transistors-could-reshape-global-computing-36bbc81724e8?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-magnetic-cooling-revolutionizing-refrigeration-technology",
        
          title: 'Magnetic Cooling: Revolutionizing Refrigeration Technology <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/magnetic-cooling-revolutionizing-refrigeration-technology-2fd26189fecb?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-the-man-who-pulled-bread-from-air-and-gas-from-hell",
        
          title: 'The Man Who Pulled Bread from Air and Gas from Hell <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/the-man-who-pulled-bread-from-air-and-gas-from-hell-5a87421aae33?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-fourier-transforms-seeing-sounds",
        
          title: "Fourier Transforms - Seeing Sounds",
        
        description: "Discover how Fourier Transforms turn sound waves into visual patterns, enabling everything from music analysis to image compression.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fourier-transform/";
          
        },
      },{id: "post-mathematics-in-ancient-greece-4",
        
          title: "Mathematics in Ancient Greece #4",
        
        description: "Exploring the mathematical advancements in Ancient Greece, including the development of formal proofs, geometry, and the contributions of great mathematicians like Pythagoras, Euclid, and Archimedes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/math-in-ancient-greece/";
          
        },
      },{id: "post-mathematics-in-ancient-egypt-3",
        
          title: "Mathematics in Ancient Egypt #3",
        
        description: "Exploring the mathematical advancements in Ancient Egypt, including their numeral system, geometry, and applications in engineering and administration.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/math-in-ancient-egypy/";
          
        },
      },{id: "post-mathematics-in-ancient-mesopotamia-2",
        
          title: "Mathematics in Ancient Mesopotamia #2",
        
        description: "Exploring the mathematical advancements in Ancient Mesopotamia, including their numeral system, algebraic methods, and applications in astronomy and trade.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/math-in-ancient-mesopotamia/";
          
        },
      },{id: "post-mathematics-in-prehistoric-times-1",
        
          title: "Mathematics in Prehistoric Times #1",
        
        description: "Exploring the origins of mathematics in prehistoric times, from early counting methods to the use of geometry in survival and construction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/math-in-prehistoric-time/";
          
        },
      },{id: "post-creating-a-pid-controller-using-atmega328p-theory-and-implementation",
        
          title: "Creating a PID Controller Using ATmega328P: Theory and Implementation",
        
        description: "A comprehensive guide to understanding and implementing a PID controller on the ATmega328P microcontroller, covering the mathematical theory and practical C code implementation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-PID-post/";
          
        },
      },{id: "post-understanding-interrupts-and-real-time-execution-in-microcontrollers",
        
          title: "Understanding Interrupts and Real-Time Execution in Microcontrollers",
        
        description: "A highly detailed guide to microcontroller interrupts and real-time execution, covering interrupt types, handling mechanisms, nesting, priority management, real-time system design, RTOS integration, and advanced performance techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/MicrocontrollerArchi-post-04/";
          
        },
      },{id: "post-understanding-instruction-set-architecture-in-microcontrollers",
        
          title: "Understanding Instruction Set Architecture in Microcontrollers",
        
        description: "An in-depth exploration of microcontroller instruction set architecture (ISA), covering RISC vs. CISC, instruction types, execution techniques, memory addressing modes, and advanced optimization methods.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/MicrocontrollerArchi-post-03/";
          
        },
      },{id: "post-understanding-microcontroller-memory-systems",
        
          title: "Understanding Microcontroller Memory Systems",
        
        description: "A detailed exploration of microcontroller memory systems, including RAM, ROM, EEPROM, stack, heap, and memory addressing techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/MicrocontrollerArchi-post-02/";
          
        },
      },{id: "post-a-deep-dive-into-microcontroller-architectures",
        
          title: "A deep dive into microcontroller architectures",
        
        description: "A detailed introduction to microcontroller architectures, including their role, types, and key differences between Von Neumann and Harvard architectures and many more including fetch, decode, execute cycle.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/MicrocontrollerArchi-post-01/";
          
        },
      },{id: "post-i2c-and-spi-communication-on-atmega328p",
        
          title: "I2C and SPI Communication on ATmega328P",
        
        description: "Learn how to implement I2C and SPI communication on ATmega328P for interfacing with sensors and memory devices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-post-05/";
          
        },
      },{id: "post-uart-communication-on-atmega328p",
        
          title: "UART Communication on ATmega328P",
        
        description: "Learn how to set up and use UART serial communication on ATmega328P for interfacing with a PC terminal.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-post-04/";
          
        },
      },{id: "post-understanding-timers-and-pwm-on-atmega328p",
        
          title: "Understanding Timers and PWM on ATmega328P",
        
        description: "Learn how to use timers and PWM on ATmega328P for precise timing and analog-like signal generation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-post-03/";
          
        },
      },{id: "post-the-crisis-of-blackbody-radiation-a-problem-for-classical-physics",
        
          title: "The Crisis of Blackbody Radiation: A Problem for Classical Physics",
        
        description: "A comprehensive exploration of the ultraviolet catastrophe and how Max Planck&#39;s revolutionary idea of quantized energy set the foundation for quantum mechanics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/quantum-physiscs-post-02-copy/";
          
        },
      },{id: "post-understanding-atmega328p-registers-and-gpio-control",
        
          title: "Understanding ATmega328P Registers and GPIO Control",
        
        description: "Understanding how to use ATmega328P registers (DDR, PORT, and PIN) for efficient GPIO control in embedded systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-post-02/";
          
        },
      },{id: "post-the-age-of-classical-physics-a-world-of-certainty",
        
          title: "The Age of Classical Physics: A World of Certainty",
        
        description: "An in-depth exploration of classical physics before the quantum revolution, covering Newtonian mechanics, Maxwell&#39;s electromagnetism, thermodynamics, and the early signs of cracks in the classical framework.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/quantum-physiscs-post-01/";
          
        },
      },{id: "post-introduction-to-atmega328p-and-usbasp",
        
          title: "Introduction to ATmega328P and USBasp",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ATMEGA328p-post-01/";
          
        },
      },{id: "post-c-vs-c-which-one-should-you-choose",
        
          title: "C vs C++ Which One Should You Choose?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2-c-vs-c++-post/";
          
        },
      },{id: "post-difference-between-c-and-embedded-c",
        
          title: "Difference Between C and Embedded C",
        
        description: "A guide on writing and using libraries in C, covering static and dynamic libraries, header file organization, and linking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/c-vs-emb-c-post/";
          
        },
      },{id: "post-secure-and-robust-c-programming-c-post-10",
        
          title: "Secure and Robust C Programming - C Post 10",
        
        description: "A guide to writing secure and robust C programs, covering buffer overflows, integer overflows, safe memory handling, and security best practices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/c-post-10/";
          
        },
      },{id: "post-writing-and-using-libraries-in-c-c-post-09",
        
          title: "Writing and Using Libraries in C - C Post 09",
        
        description: "A guide on writing and using libraries in C, covering static and dynamic libraries, header file organization, and linking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/c-post-09/";
          
        },
      },{id: "post-system-calls-and-file-handling-in-c-c-post-08",
        
          title: "System Calls and File Handling in C - C Post 08",
        
        description: "Understanding system calls and file handling in C, including process management, file operations, and inter-process communication (IPC).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/c-post-08/";
          
        },
      },{id: "post-multi-threading-and-concurrency-in-c-c-post-07",
        
          title: "Multi-threading and Concurrency in C - C Post 07",
        
        description: "A deep dive into multi-threading and concurrency in C, covering pthreads, synchronization mechanisms, race conditions, and parallel processing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/c-post-07/";
          
        },
      },{id: "post-advanced-features-of-c-unlocking-the-full-potential-c-post-06",
        
          title: "Advanced Features of C - Unlocking the Full Potential - C Post 06...",
        
        description: "Understanding how a C compiler toolchain transforms source code into an executable by breaking it into preprocessing, compilation, assembly, and linking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/";
          
        },
      },{id: "post-exploring-every-feature-of-c-from-basics-to-advanced-c-post-05",
        
          title: "Exploring Every Feature of C-From Basics to Advanced - C Post 05",
        
        description: "A comprehensive guide covering all features of the C programming language, from fundamental concepts to advanced techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/";
          
        },
      },{id: "post-how-the-compiler-toolchain-works-c-post-04",
        
          title: "How the Compiler Toolchain Works - C Post 04",
        
        description: "Understanding how a C compiler toolchain transforms source code into an executable by breaking it into preprocessing, compilation, assembly, and linking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/How-the-Compiler-Tool-Chain-Works/";
          
        },
      },{id: "post-the-evolution-of-c-and-its-compiler-from-the-first-version-to-modern-day-c-post-03",
        
          title: "The Evolution of C and Its Compiler - From the First Version to...",
        
        description: "The journey of C and its compiler from their inception to modern times is a story of continuous innovation and adaptation, shaping modern programming.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/The-Evolution-of-C-and-Its-Compiler/";
          
        },
      },{id: "post-the-birth-of-the-first-c-compiler-c-post-02",
        
          title: "The Birth of the First C Compiler - C Post 02",
        
        description: "The first C compiler was a groundbreaking development that transformed the C programming language into a practical tool for software development. This post explores how it was created, its challenges, and its impact.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/The-Birth-of-the-First-C-Compiler/";
          
        },
      },{id: "post-history-of-the-c-programming-language-c-post-01",
        
          title: "History of the C Programming Language - C Post 01",
        
        description: "The C programming language has shaped modern computing. In this post, we explore its origins, the languages that preceded it, and its impact on software development.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/History-of-the-C-Programming-Language/";
          
        },
      },{id: "post-difference-between-microprocessors-and-microcontrollers",
        
          title: "Difference Between Microprocessors and Microcontrollers",
        
        description: "In the world of embedded systems and computing, the terms microprocessor and microcontroller often come up, and while they might sound similar, they serve different purposes and have distinct characteristics. Let&#39;s delve into the key differences between these two crucial components.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/difference-between-microprocessors-and-microcontrollers/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project%20copy/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project%20copy/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-ieee-robotics-competition",
          title: 'IEEE Robotics Competition',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-mag-lev-system",
          title: 'Mag Lev System',
          description: "Steel ball levitation using a hybrid electro magnet at zero power condition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-autonomous-delivery-robot",
          title: 'Autonomous Delivery Robot',
          description: "A mechanism for lifting cartons",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autonomousdeliveryrobot/";
            },},{id: "projects-carton-lifting-mechanism",
          title: 'Carton Lifting Mechanism',
          description: "A mechanism for lifting cartons",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cartonliftingmechanism/";
            },},{id: "projects-micromouse-robot",
          title: 'Micromouse Robot',
          description: "A micromouse robot for competitions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/micromouserobot/";
            },},{id: "teaching-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6D%73%6B%73%61%6E%61%74%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sanath-thilakarathna", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sanaththilakarathna", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@sanaththi", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/94719626147", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
