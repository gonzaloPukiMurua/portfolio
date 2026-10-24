import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Process from '@/sections/Process';
import Services from '@/sections/Services';
import Work from '@/sections/Work';

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <Contact />
    </>
  );
}
