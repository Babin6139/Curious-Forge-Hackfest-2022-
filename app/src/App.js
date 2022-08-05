import { GlobalStyles } from '@mui/styled-engine';
import GlobalStyle from './common/styles/global-style';
import AppRoute from './Pages/routes';

const App= ()=> {
  return (
    <>
    <GlobalStyles styles={GlobalStyle}/>
    <AppRoute/>
    </>
  );
}

export default App;
