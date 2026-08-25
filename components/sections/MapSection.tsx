export default function MapSection() {
  return (
    <section className="w-full h-[380px] sm:h-[460px] bg-gray-light flex items-center justify-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.0946125277155!2d-79.72925889999999!3d43.6877964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e232ef848bf%3A0xc4e60b9a79aebded!2s255%20Rutherford%20Rd%20S%20Unit%20109%2C%20Brampton%2C%20ON%20L6W%204N7%2C%20Canada!5e0!3m2!1sen!2sin!4v1787641532148!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "380px", minWidth: "100%" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="rounded-xl shadow-lg"
      ></iframe>
    </section>
  );
}
