import { services } from "../Constant"
import ServicesCard from "../Component/ServicesCard"
const Services = () => {
  return (
    <section>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServicesCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services