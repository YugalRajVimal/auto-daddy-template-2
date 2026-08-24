export default function MapSection() {
  return (
    <section className="w-full h-[380px] sm:h-[460px] bg-gray-light flex items-center justify-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199389531225!2d-122.41941518468143!3d37.77492927975905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c89d9c35d%3A0xe7e6d9b063a7f6c7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680816237359!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "380px", minWidth: "100%" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-lg"
      ></iframe>
    </section>
  );
}
