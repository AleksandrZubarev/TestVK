import Table from './Table';
import { IRowData } from '../types/DataTypes';


const Home: React.FunctionComponent<{ tableData: IRowData[] }> = ({
  tableData,
}) => {
 
   
  return (
    <div className="home-page">
      <h1>Список сотрудников</h1>
      <Table data={tableData} />
    </div>
  );
};

export default Home;