import { Header } from '@/widgets/Header';
import { CurrencyName } from '@/features/CurrencyName';
import { CurrencySelect } from '@/features/CurrencySelect';

const App = () => {
  return (
    <div className="app">
      <Header />
      <CurrencySelect />
      <CurrencyName />
    </div>
  );
};

export default App;
