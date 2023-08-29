import './App.css';
import ProfileCard from './Components/ProfileCard';

function App() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.code === 'KeyI') ||
        e.code === 'F12' ||
        (e.metaKey && e.altKey && e.code === 'KeyI')
      ) {
        e.preventDefault();
      }
    });

    document.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
  return (
    <ProfileCard/>
  );
}

export default App;
