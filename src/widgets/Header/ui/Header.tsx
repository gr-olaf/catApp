import clsx from 'clsx';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(cls.header, className)}>
      <h1>CAT</h1>
      <p>currencies academic terms</p>
    </header>
  );
};

export default Header;
