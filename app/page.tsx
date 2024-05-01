import Search from "./_components/ui/search-input";
import Header from "./_components/ui/header";

const Home = () => {
  return (
    <>
      <Header/>
      <div className="px-5 pt-6">
        <Search/>
      </div>
    </>
    );
};
 
export default Home;