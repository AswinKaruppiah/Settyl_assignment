import Charts from "./Charts";
import Nav from "./Nav";
import Usefetch from "./Usefetch";
import { useSelector } from "react-redux";

function App() {
  const { error, loading } = Usefetch();
  const apidata = useSelector((state) => state.api.data);
  // console.log(apidata);

  return (
    <>
      <Nav />
      <div>
        <h1>Charts</h1>
      </div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>error</h1>
      ) : (
        apidata && (
          <div className="holder">
            <Charts data={apidata} />
          </div>
        )
      )}
    </>
  );
}

export default App;
