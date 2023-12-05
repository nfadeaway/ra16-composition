import './App.css'
import Card from './components/Card.jsx';

function App() {
  const cardSettings = {
    class : {
      card: {
        style: {
          width: '18rem'
        }
      },
      cardImgTop: {
        src: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
        alt: ''
      },
      cardTitle: {
        text: 'Card title'
      },
      cardText: {
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },
      btnPrimary: {
        text: 'Go somewhere',
        href: '#'
      }
    },
    photoBlock: true
  }

  return (
    <>
      <Card cardSettings={cardSettings}/>
    </>
  )
}

export default App
