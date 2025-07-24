import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import Wrapper from '../../components/Wrapper';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme ==='light' ? sun : moon;
  const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
  const githubIcon = theme ==='light' ? githubLight : githubDark;
  const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;

  return (
    <Wrapper id="hero">
        <div className="flex md:flex-row-reverse flex-col md:items-center mt-14 md:justify-evenly gap-12"> 
        <div className="relative">
            <img className="min-w-[300px] md:max-w-[350px] md:w-[350px] 2xl:max-w-[400px] 2xl:w-[400px]" src={heroImg} alt="profile"/>
            <button onClick={toggleTheme}><img className="absolute right-0 top-0 w-6 cursor-pointer" src={themeIcon} alt='color mode icon' /></button>
        </div>
        <div className="space-y-3">
          <h1 className="text-[#222] dark:text-white uppercase font-stardom text-[32px] font-black tracking-widest">Shaik Khaja <br/> Mohiddin</h1>
          <h2 className="text-[#222] uppercase dark:text-zinc-300 font-satoshi text-xl font-bold">Fullstack developer</h2>
          <span className="flex  gap-4 justify-center">
            <a className="m-0 w-fit self-center" href="https://twitter.com/" target='_blank'>
              <img className="w-[30px]" src={twitterIcon} alt="Twitter Icon"/>
            </a>
            <a className="m-0 w-fit self-center" href="https://github.com/" target='_blank'>
              <img className="w-[30px]" src={githubIcon} alt="Github Icon"/>
            </a>
            <a className="m-0 w-fit self-center" href="https://linkedin.com/" target='_blank'>
              <img className="w-[30px]" src={linkedinIcon} alt="Linkedin Icon"/>
            </a>
          </span>
          <p className="max-w-[300px] text-[#222] dark:text-zinc-300 font-satoshi text-base font-light mt-2">I build modern, user-focused digital experiences through full stack development and UI/UX design. With hands-on experience, I turn ideas into impactful web solutions</p>
          <a href={CV} download>
            <button className="bg-[#0987f2] cursor-pointer dark:text-black dark:bg-zinc-200 text-white border-0 rounded-[20px] w-[126px] h-[50px] text-xl font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-shadow duration-200 ease-in-out hover:scale-105 active:translate-y-0.5 active:shadow-[0_2px_2px_rbga(0,0,0,0.25)] mt-3">Resume</button>
          </a>
        </div>
        </div>
    </Wrapper>
  );
}

export default Hero
  