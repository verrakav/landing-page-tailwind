//  NOTE: look how you can abstract h2 into a custom className

const Dashboard = () => {
  return (
    <section className="p-8 bg-white mx-4">
      <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-gray-100 p-6 rounded shadow-md">Card 1</div>
        <div className="bg-gray-100 p-6 rounded shadow-md">Card 2</div>
        <div className="bg-gray-100 p-6 rounded shadow-md">Card 3</div>
        <div className="bg-gray-100 p-6 rounded shadow-md">Card 4</div>
      </div>
    </section>
  );
};

export default Dashboard;
