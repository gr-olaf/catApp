import clsx from 'clsx';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={clsx(cls.PageError, className)}>
      <p>Что то пошло не так</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </div>
  );
};
