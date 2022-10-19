import Header from './components/Header'
import { GlobalStyle } from './global';
import { client, getCategories, getCurrencies } from './services/api';
import { PureComponent } from 'react';
import axios from 'axios';
import { DataContext } from './contexts/data';
import Routes from './routes';
import { Main } from './style';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class App extends PureComponent {
  static contextType = DataContext;

  headerDataValidation = (method, ...params) => {
    if (!params[0])
      params[0] = 0;
    if (params.length > 1)
      params[1] = params[1][params[0]].name;
    method(...params);
  }

  componentDidMount() {
    const { toggleActive, setBag, setHeaderData, toggleCurrency, toggleCategory, setBodyHeight } = this.context;
    
    const fetchData = async () => {
      const queryResult = await axios.post(client, { query: `{${getCategories},${getCurrencies}}` })
      const result = queryResult.data.data;
      this.headerDataValidation(toggleCategory, localStorage.getItem("categoryIndex"), result.categories)
      setHeaderData(result);
    };
    fetchData();

    setBag(JSON.parse(localStorage.getItem("bag")));
    this.headerDataValidation(toggleCurrency, localStorage.getItem("currencyIndex"))

    const clickListener = (event) => {
      const { isSelectingCurrency, isLookingCart } = this.context;

      if (isSelectingCurrency || isLookingCart) {
        toggleActive(event, false, false);
      }
    }

    setBodyHeight(window.innerHeight);

    const resizeListener = (bodyHeight) => {
      const { setBodyHeight } = this.context;

      setBodyHeight(bodyHeight);
    }

    window.addEventListener('click', (event) => clickListener(event));
    window.addEventListener('resize', () => resizeListener(window.innerHeight))
  }

  render() {

    const { isLookingCart } = this.context;

    return (
      <div >
        <GlobalStyle />
        <Header />
        <Main isLookingCart={isLookingCart}>
          <Routes />
        </Main>
        <ToastContainer position='bottom-right' autoClose={2000}
          hideProgressBar={false} closeOnClick={true}
          pauseOnHover={true} draggable={true} />
      </div>
    );
  }
}

export default App;
