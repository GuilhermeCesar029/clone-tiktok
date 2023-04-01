import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="GuilhermeCesar029"
          description="Descrição do Video" 
          music="Musica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={400}
          messages={200}
          shares={500}
          name="GuilhermeCesar029"
          description="Descrição do Video" 
          music="Musica" 
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
