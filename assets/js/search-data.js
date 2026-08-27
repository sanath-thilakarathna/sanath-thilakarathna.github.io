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
          description: "Practical articles by Sanath Thilakarathna about mechatronics engineering, robotics, embedded systems, microcontrollers, automation, and programming.",
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
        },{id: "post-syncing-zotero-across-my-pc-and-ipad-without-paying-for-more-storage",
        
          title: "Syncing Zotero Across My PC and iPad Without Paying for More Storage",
        
        description: "A simple, low-cost way to sync Zotero PDFs across devices using a local WebDAV server in Docker, with a hostname to avoid IP changes on the network.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/zotero-webdav/";
          
        },
      },{id: "post-i-saw-this-in-a-movie-then-realized-it-s-used-in-scienc",
        
          title: '“I Saw This in a Movie… Then Realized It’s Used in Scienc <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/i-saw-this-in-a-movie-then-realized-its-used-in-scienc-4df0e6455dcd?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-the-machine-that-taught-me-more-than-any-textbook",
        
          title: "The Machine That Taught Me More Than Any Textbook",
        
        description: "A real-world observation of two tea bag production machines that reveals a deeper truth about mechatronics and the role of mechanical engineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mechatronics-tea-bag-machine/";
          
        },
      },{id: "post-the-most-underrated-skill-in-mechatronics",
        
          title: "The Most Underrated Skill in Mechatronics",
        
        description: "Why mechanical engineering is the most overlooked yet fundamental part of mechatronics, and how ignoring it leads to failed systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mechatronics-skills-underrated-mechanical/";
          
        },
      },{id: "post-must-have-skills-for-mechatronics-engineers-in-2026",
        
          title: "Must-Have Skills for Mechatronics Engineers in 2026",
        
        description: "A practical and realistic guide to the essential skills every mechatronics engineer must develop to stay relevant in 2026 and beyond.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mechatronics-skills-2026/";
          
        },
      },{id: "post-architecting-intelligence-how-npus-solved-the-von-neumann-bottleneck-for-the-ai-era",
        
          title: 'Architecting Intelligence: How NPUs Solved the Von Neumann Bottleneck for the AI Era... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/architecting-intelligence-how-npus-solved-the-von-neumann-bottleneck-for-the-ai-era-b97e789f4b38?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-artemis-ii-humanity-s-return-to-the-moon",
        
          title: 'Artemis II: Humanity’s Return to the Moon <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/artemis-ii-humanitys-return-to-the-moon-b1846fbd6d05?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-what-is-mechatronics-engineering-a-complete-beginner-friendly-guide",
        
          title: "What is Mechatronics Engineering? A Complete Beginner-Friendly Guide",
        
        description: "A clear and practical introduction to mechatronics engineering, covering its core components, real-world applications, and career pathways.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mechatronics/";
          
        },
      },{id: "post-how-did-everything-begin-creation-of-the-universe-through-religion-and-science",
        
          title: 'How Did Everything Begin? Creation of the Universe Through Religion and Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/how-did-everything-begin-creation-of-the-universe-through-religion-and-science-7700213a6278?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-why-technology-fails-at-the-worst-possible-moments",
        
          title: 'Why Technology Fails at the Worst Possible Moments <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/why-technology-fails-at-the-worst-possible-moments-eff9dcb60658?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-why-video-editing-takes-a-long-time-even-when-you-change-only-a-few-frames",
        
          title: "Why Video Editing Takes a Long Time Even When You Change Only a...",
        
        description: "If you have ever edited a video and wondered why exporting takes so long even after changing only a few frames, the answer lies in how modern video compression works. This article explains in simple terms how frames, compression, and bitrate affect video editing and why small edits can require processing thousands of frames.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/video-file-size/";
          
        },
      },{id: "post-top-down-design-approach",
        
          title: "Top-Down Design Approach",
        
        description: "An introduction to the Top-Down Design approach in engineering and software development, explaining its benefits and methodology.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/top-down-design-approach/";
          
        },
      },{id: "post-is-ai-really-intelligent-here-s-the-truth",
        
          title: 'Is AI Really Intelligent? Here’s the Truth <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/is-ai-really-intelligent-heres-the-truth-617db0e58d11?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-why-sumatra-pdf-boosted-my-reading-efficiency",
        
          title: 'Why Sumatra PDF Boosted My Reading Efficiency? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/why-sumatra-pdf-boosted-my-reading-efficiency-35c740a0db76?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-how-microcontrollers-39-see-39-the-real-world",
        
          title: "How Microcontrollers &#39;See&#39; the Real World",
        
        description: "Explore how microcontrollers and DAQ systems handle analog inputs, from voltage sensing with ADCs to the complexities of current measurement, differentiating between hobbyist and professional approaches.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/analogInput/";
          
        },
      },{id: "post-why-aren-t-keyboard-keys-in-alphabetical-order",
        
          title: 'Why Aren’t Keyboard Keys in Alphabetical Order? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/why-arent-keyboard-keys-in-alphabetical-order-f2ae6dbbdf11?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-demystifying-multimedia-processing-codecs-formats-and-the-power-of-ffmpeg",
        
          title: 'Demystifying Multimedia Processing: Codecs, Formats, and the Power of FFmpeg <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/demystifying-multimedia-processing-codecs-formats-and-the-power-of-ffmpeg-41eff45056b9?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-bertha-benz-the-first-test-driver-who-changed-the-world",
        
          title: 'Bertha Benz: The First Test Driver Who Changed the World <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@sanathkt/bertha-benz-the-first-test-driver-who-changed-the-world-cebbc8e33b7c?source=rss-cbe0def0a051------2", "_blank");
          
        },
      },{id: "post-understanding-strain-how-materials-deform",
        
          title: "Understanding Strain – How Materials Deform",
        
        description: "Learn what strain is in material mechanics—how materials deform under stress, types of strain, and why it&#39;s important in engineering design.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/strain/";
          
        },
      },{id: "post-what-is-stress-the-foundation-of-material-mechanics",
        
          title: "What is Stress? – The Foundation of Material Mechanics",
        
        description: "Learn the basic concept of stress in material mechanics—what it is, how it&#39;s calculated, and why it&#39;s essential in engineering design.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/stress_intro/";
          
        },
      },{id: "post-what-every-roboticist-must-know-about-ros-part-01",
        
          title: "What Every Roboticist Must Know About ROS - Part 01",
        
        description: "An overview of the Robot Operating System (ROS), its importance in modern robotics, and the transition from ROS 1 to ROS 2.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ros/";
          
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
          
            window.location.href = "/blog/2025/advanced-features-of-c/";
          
        },
      },{id: "post-exploring-every-feature-of-c-from-basics-to-advanced-c-post-05",
        
          title: "Exploring Every Feature of C-From Basics to Advanced - C Post 05",
        
        description: "A comprehensive guide covering all features of the C programming language, from fundamental concepts to advanced techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/exploring-every-feature-of-c/";
          
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
          section: "News",},{id: "projects-ieee-robotics-competition",
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
            },},{id: "teaching-latex-guide-basics",
          title: 'LaTeX Guide - Basics',
          description: "Teaching LaTex for Engineering and Scientific Documantation",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/1_latex_guide_basics/";
            },},{id: "teaching-computer-vision-and-image-processing",
          title: 'Computer Vision and Image Processing',
          description: "Teaching Image Processing and Computer Vision for engineering students",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2_image_processing_and_computer_vision/";
            },},{id: "teaching-latex-guide",
          title: 'LaTeX Guide',
          description: "Teaching LaTex for Engineering and Scientific Documantation",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/4_project%20copy/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6D%73%6B%73%61%6E%61%74%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/profile.php?id=61574984081359", "_blank");
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
          window.open("https://medium.com/@sanathkt", "_blank");
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
