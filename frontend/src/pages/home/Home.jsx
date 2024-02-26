import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1">
      <Sidebar />
    </div>
  );
};

export default Home;
