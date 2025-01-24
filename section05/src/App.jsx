import "./App.css";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";

function App() {
  const buttonProps = {
    text: "메일",
    coler: "red",
  };

  return (
    <>
      {/* <Button text={"메일"} /> */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
