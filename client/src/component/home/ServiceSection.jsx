import { serviceContent } from '../../utils/constant/homeConstant'
import { serviceStyles } from "../../utils/styles/homeStyle";
import ServiceHeader from './service/ServiceHeader';
import ServiceGrid from './service/ServiceGrid';

function ServiceSection() {
  const content = serviceContent;
  const styles = serviceStyles;
  const services = serviceContent.services;

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <ServiceHeader content={content} styles={styles} />
        <ServiceGrid services={services} styles={styles} />
      </div>
    </section>
  );
}

export default ServiceSection;