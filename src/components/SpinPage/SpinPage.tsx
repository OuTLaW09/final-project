import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './SpinPage.scss';

export const SpinPage = () => {
  return (
    <div style={{
      width:'100%',
      height:'100%',
     

    }}>
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24,
     display:'flex',
     justifyContent:'center',
     marginLeft:'500px',
     marginTop:'400px'
   
      }} spin />} />
    </div>
   
  );
};
