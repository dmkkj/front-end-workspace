import { getFetchThen, getAwait, getAxios } from "./api/movie";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    });
  };

  const loadAwait = async () => {
    const result = await getAwait();
    setData(result);
  };

  const loadAxios = async () => {
    const result = await getAxios();
    setData(result);
  };
  useEffect(() => {
    //loadFetchThen();
    //loadAwait();
    loadAxios();
  }, []);
  return (
    <>
      {data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
        </div>
      ))}
    </>
  );
};
export default App;

// useEffect 보다 useState를 더 많이 사용
// 변화된 것을 찾으려면(useEffect) 먼저 변화를 시켜야 함(useState)
// 상태가 변화되는 시점 찾기. 데이터는 useState로 관리한다를 기본으로 생각하기!
