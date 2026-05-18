import { Instagram, Mail, WhatsApp, YouTube } from "@mui/icons-material";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/918595901990?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    icon: WhatsApp,
    bg: "bg-[hsl(142,70%,45%)]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codeweave1327/",
    icon: Instagram,
    bg: "bg-[hsl(330,70%,50%)]",
  },
  {
    label: "Email",
    href: "mailto:codeweave1327@gmail.com",
    icon: Mail,
    bg: "bg-[hsl(220,70%,50%)]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCdL7XtgIMC64BQ4SpZ8qWDA",
    icon: YouTube,
    bg: "bg-[hsl(0,70%,50%)]",
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-20 right-2 flex flex-col gap-2 z-10">
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-10 h-10 rounded-full ${s.bg} text-[hsl(0,0%,100%)] shadow-md hover:scale-110 transition duration-300`} aria-label={s.label}>
          <s.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks