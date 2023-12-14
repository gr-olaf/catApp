import { Header } from '@/widgets/Header';
import { ListBox } from '@/shared/ui/ListBox';
import { CurrencyName } from '@/widgets/CurrencyName';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ListBox />
      <CurrencyName />
    </div>
  );
};

export default App;
