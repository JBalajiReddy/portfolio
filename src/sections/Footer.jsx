import { mySocials } from "../constants";
const Footer = () => {
  const githubLink = mySocials.find(social => social.name === 'GitHub')?.href;
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <p>
          Made with <span className="text-pink-500">💖</span> by{" "}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            JBalajiReddy
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
