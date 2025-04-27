//  NOTE: look how you can abstract h2 into a custom className

const Info = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 gap-8 p-8 bg-gray-50">
      <div className="font-karst-base">
        <h2 className="text-xl font-semibold text-gray-800">About Us</h2>
        <p className="text-gray-900">
          We are passionate about delivering top-notch solutions to our clients.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-900">
          To innovate and lead in our industry with integrity and dedication.
        </p>
      </div>
    </section>
  );
};

export default Info;
