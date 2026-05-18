import { lazy } from 'react'
import { ArrowRight } from 'lucide-react'
import { Element } from 'react-scroll'
import * as Images from '../assets/work'
import { motion as Motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Navigation = lazy(() => import('../components/Navigation.jsx'))
const Advertisement = lazy(()=>import('../section/Advertisement'))
const Footer = lazy(() => import('../components/Footer.jsx'))

const projects = [
  {
    tag: "Business Website",
    title: "Omega Tutorials",
    webLink: "https://www.omegatutorials.in/",
    desc: "Designed and developed a fully responsive coaching institute website with advanced SEO optimization, modern UI, fast loading performance, and business-focused branding.",
    image: Images.Project1,
  },
  {
    tag: "Company Website",
    title: "Outect — Business Website",
    webLink: "https://www.outect.com",
    desc: "Designed and developed a modern company website for Outect with a professional UI, responsive experience, strong brand presentation, and optimized performance tailored for business growth.",
    image: Images.Project2,
  },
  {
    tag: "Business Website",
    title: "The Learning Edges",
    webLink: "https://www.thelearningedges.in/",
    desc: "Built a professional coaching center website with advanced SEO, responsive layouts, optimized performance, and a modern design tailored for student engagement and lead generation.",
    image: Images.Project3,
  },
];

const Work = () => {
  const text = "Digital products designed to scale.";
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.02,
        delayChildren: 0.02 * i,
      },
    }),
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Our Work | SaaS & Web Development Projects | CodeWeave</title>
        <meta name="description" content="Explore CodeWeave's portfolio of SaaS platforms, business websites, ERP systems, and scalable web applications built for startups, coaching institutes, and modern businesses." />
        <meta name="keywords" content="CodeWeave portfolio, SaaS projects, web development projects, ERP development India, business website development, scalable web applications" />
        <link rel="canonical" href="https://codeweave.in/work" />
        <meta property="og:title" content="Our Work | CodeWeave Projects" />
        <meta property="og:description" content="Discover SaaS platforms, modern business websites, and scalable digital products developed by CodeWeave." />
        <meta property="og:url" content="https://codeweave.in/work" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | CodeWeave Projects" />
        <meta name="twitter:description" content="Explore scalable SaaS products, ERP systems, and modern web applications built by CodeWeave." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "CodeWeave Portfolio",
              "url": "https://codeweave.in/work",
              "description": "Portfolio of SaaS products, ERP systems, and business websites developed by CodeWeave.",
              "publisher": {
                "@type": "Organization",
                "name": "CodeWeave",
                "url": "https://codeweave.in"
              }
            }
          `}
        </script>
      </Helmet>

      <Element name='work' className='w-screen min-h-[80vh] lg:min-h-[100vh] px-4 md:px-12 lg:px-20 pb-8 bg-[url(/src/assets/hero.webp)] bg-cover bg-center flex flex-col gap-48'>
        <Navigation />

        <div className="flex flex-col gap-3 text-white">
          <Motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <Motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter === "\n" ? <br /> : letter}
              </Motion.span>
            ))}
          </Motion.h1>
          <Motion.p className="text-lg my-6 md:w-2/3 lg:w-1/2"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1}}
          >From web apps to enterprise SaaS platforms — we partner with startups and businesses to design, engineer, and launch products users genuinely love.</Motion.p>
        </div>
      </Element>

      <section className="grid lg:grid-cols-2 gap-8 py-12 lg:py-24 px-4 lg:px-16">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col gap-4 rounded-3xl p-4 border border-gray-200 hover:-translate-y-1 hover:shadow-[0_15px_45px_hsl(243_75%_59%/0.15)] transition duration-300">
            <img src={project.image} loading="lazy" decoding="async" alt={project.title} className="w-full h-full object-cover"/>

            <div className="flex flex-col gap-4 p-4">
              <span className="text-xs font-medium uppercase tracking-wider text-[#5048E5]">{project.tag}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.desc}</p>
              </div>
              <a href={project.webLink} target="_blank" rel="noopener noreferrer" aria-label="View project" className="self-end flex items-center bg-white border border-gray-200 p-1 rounded-full font-semibold hover:bg-gray-200 group transition duration-300">
                <p className="text-black px-5">Explore</p>
                <ArrowRight size={40} className="bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out"/>
              </a>
            </div>
          </div>
        ))}
      </section>

      <Advertisement />
      <Footer />
    </>
  )
}

export default Work