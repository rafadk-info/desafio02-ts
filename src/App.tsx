import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { MyButton } from './components/Button/button';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Card />
      </Box>
    </ChakraProvider>
  );
}

export default App;
