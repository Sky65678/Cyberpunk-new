import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='Header'>
            <Header></Header>
          <div className='Button-header'>
            <div className='Button-header-text'><h2>Доступно на всех платформах </h2>
            <button id='button-header'>Узнать больше</button></div>
          </div>
        </div>          
      </header>
      {/* <body> */}
            <div className='Under-header-text'>
            <h2>Найт-Сити изменит тебя навсегда!</h2>
            <p className='Under-header-text-p'><span>Cyberpunk 2077</span>— приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            </div>
            <div className='Under-header-img-597'></div>
            <div className='Under-header-img-598'></div>
            <div className='Under-header-img-599'></div>
      {/* </body> */}
    </div>
  );
}

export default App;
