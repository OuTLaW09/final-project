import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './SpinPage.scss';
import spinBg from '../../assets/Images/spinnerBackground.png';
import spinner from '../../assets/Images/spinner.svg';


export const SpinPage = () => {
  return (
    <div className='spinner-page'>
      <img src={spinBg} alt="/" />
     
    <div className='spin-icon'>
      <img src={spinner} alt="" className='spinner-logo'/>
    

    </div>
   
    </div>
   
  );
};
