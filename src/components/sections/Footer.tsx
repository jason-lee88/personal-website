import BodyText from "../typography/BodyText";
import Link from "../link/Link";

const Footer = () => (
  <div className="flex flex-col w-full justify-start items-start mb-10">
    <BodyText>Designed and built from scratch with <Link href="https://react.dev/">React</Link> and <Link href="https://tailwindcss.com/">Tailwind CSS</Link>.</BodyText>
    <BodyText>Deployed and hosted with <Link href="https://www.netlify.com/">Netlify</Link>.</BodyText>
  </div>
)

export default Footer;