import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Anuška" body="Moj prvi razumljivi prop!" />
      <Post author="Nada" body="React is awesome!!!" />
      <Post />
      <Post />
    </main>
  );
}

export default App;
