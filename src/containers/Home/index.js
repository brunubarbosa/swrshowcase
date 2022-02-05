import logo from "../../logo.svg";
import "./App.css";
import useProfile from "../../hooks/useProfile";

export const Home = () => {
  const { data } = useProfile(1, {
    //useless options since it always rely on the header options
    revalidateIfStale: true,
    revalidateOnFocus: true,
  });
  console.log("=======");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data && data.name}
          {data && data.id}
        </p>
        revalidateIfStale: true
        <p>but it just gonna happen if the header want it</p>
      </header>
    </div>
  );
};

export default Home;
