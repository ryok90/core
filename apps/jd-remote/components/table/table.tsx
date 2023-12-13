import localPackage from 'local-package';
import styles from './table.module.css';

export type TableData = {
  name: string;
  age: number;
  email: string;
};

export interface TableProps {
  data: TableData[];
}

export function Table({ data }: TableProps) {
  return (
    <>
      <h3 className="text-center font-bold">
        This is the <span className="text-yellow-700">local-package</span>{' '}
        version being call from remote:{' '}
        <span className={styles.redText}>[{localPackage()}]</span>
      </h3>
      <table className={`${styles.table} mt-6`}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Age</th>
            <th className={styles.tableHeader}>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className={styles.tableRow} key={row.email}>
              <td className={styles.tableCell}>{row.name}</td>
              <td className={styles.tableCell}>{row.age}</td>
              <td className={styles.tableCell}>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
