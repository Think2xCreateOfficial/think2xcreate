import ServiceCard from "../service/ServiceCard";

function ServiceGrid({ services, styles }) {
  return (
    <div className={styles.grid}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          styles={styles}
        />
      ))}
    </div>
  );
}

export default ServiceGrid;