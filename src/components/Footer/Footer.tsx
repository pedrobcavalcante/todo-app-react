import React from 'react';
import styles from './ListFooter.module.scss';

interface FooterProps {
  remainingTasks: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

const ListFooter: React.FC<FooterProps> = ({
  remainingTasks,
  filter,
  setFilter,
  clearCompleted,
}) => {
  return (
    <footer className={styles.footer}>
      <span>{remainingTasks} items left</span>
      <div className={styles.filters}>
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? styles.activeFilter : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? styles.activeFilter : ''}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? styles.activeFilter : ''}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} className={styles.clearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
};

export default ListFooter;
