import Section from "../Section";
import BodyText from "../typography/BodyText";
import BoldText from "../typography/BoldText";

const About = () => (
  <Section id="about" header="About Me">
    <div className="flex flex-col gap-8">
      <BodyText>I craft seamless digital experiences as a <BoldText>full-stack software engineer</BoldText>.</BodyText>
      <BodyText>Growing up, I've always been fascinated with technology. Small coding projects and experiments as a teenager kept me curious about computer programming early on in my life which inspired me to study computer science in college. Nowadays, I've had the opportunity to develop software for a <BoldText>mid-sized corporation</BoldText> as well as a <BoldText>start-up</BoldText> my friend and I created.</BodyText>
      <BodyText>I <BoldText>specialize in frontend development</BoldText>, having an inclination towards creating <BoldText>modern</BoldText>, <BoldText>intuitive</BoldText>, and <BoldText>performant</BoldText> user interfaces. I have experience creating and maintaining <BoldText>design systems</BoldText> from scratch. At my current job, I work on building full stack applications as a frontend specialist with <BoldText>React</BoldText>. Additionally, I have experience working with <BoldText>backend</BoldText> technologies (Express), <BoldText>database</BoldText> technologies (SQL, MongoDB), and <BoldText>cloud</BoldText> technologies (AWS).</BodyText>
      <BodyText>While I'm not busy coding, I'm usually reading, enjoying board games with friends & family, or enjoying my favorite puzzle and strategy games such as Modern Tetris, Chess, Teamfight Tactics, and VALORANT.</BodyText>
    </div>
  </Section>
);

export default About;
