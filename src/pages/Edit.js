import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  //   const id = searchParams.get("id"); // 파라미터에서 id를 가져옴
  //   const mode = searchParams.get("mode");
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "ayun" })}>QS 바꾸기</button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1); // 뒤로 한번이니까 -1
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
