import { serviceContent } from '../../utils/constant/homeConstant'
import { serviceStyles } from "../../utils/styles/homeStyle";
import ServiceHeader from './service/ServiceHeader';
import ServiceGrid from './service/ServiceGrid';

function ServiceSection() {
  const content = serviceContent;
  const styles = serviceStyles;
  const services = serviceContent.services;

  return (
    <section id="services" className={`${styles.section} relative overflow-hidden`}>
      {/* Decorative Overlays */}
      <div 
        className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] opacity-[0.03] pointer-events-none bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/temple3.png')" }}
      />
      <div 
        className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] opacity-[0.03] pointer-events-none bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/city2.png')" }}
      />
      
      <div className={`${styles.container} relative z-10`}>
        <ServiceHeader content={content} styles={styles} />
        <ServiceGrid services={services} styles={styles} />
      </div>
    </section>
  );
}

export default ServiceSection;