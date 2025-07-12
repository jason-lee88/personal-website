import Section from "../Section";
import BodyText from "../typography/BodyText";
import BoldText from "../typography/BoldText";

const About = () => (
  <Section id="about" header="About Me">
    <div className="flex flex-col gap-8">
      <BodyText>I craft seamless digital experiences as a <BoldText>full-stack software engineer</BoldText>.</BodyText>
      <BodyText>Growing up, I've always been fascinated with technology. Small coding projects and experiments as a teenager kept me curious about computer programming early on in my life which inspired me to study computer science in college. Nowadays, I've had the opportunity to develop software for a <BoldText>mid-sized corporation</BoldText> as well as a <BoldText>start-up</BoldText> my friend and I created.</BodyText>
      <BodyText>I specialize in frontend development, having a natural inclination towards creating <BoldText>modern, intuitive, and performant user interfaces</BoldText>. I have experience creating and maintaining <BoldText>design systems</BoldText> from scratch. At work, I'm an expert of building end-to-end applications using <BoldText>React</BoldText>.</BodyText>
      <BodyText>While I'm not busy coding, I'm usually reading, enjoying board games with friends & family, or enjoying my favorite strategy and puzzle games (Modern Tetris, Chess, Teamfight Tactics).</BodyText>
    </div>
  </Section>
);

export default About;
