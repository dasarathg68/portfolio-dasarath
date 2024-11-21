import { motion } from "framer-motion";

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </a>
  </motion.div>
);
