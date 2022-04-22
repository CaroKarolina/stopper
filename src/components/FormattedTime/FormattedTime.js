import styles from './FormattedTime.module.scss'; 

const FormattedTime = ({ time }) => {
    const formatTime = millseconds => {
      const millsecondsInHor = 3600000;
      const millsecondsInMinute = 60000;
      const h = Math.floor(millseconds / millsecondsInHor);
      const min = Math.floor(millseconds / millsecondsInMinute % 60);
      const sec = Math.floor(millseconds % millsecondsInMinute / 1000);
      const mill = millseconds % millsecondsInMinute % 1000;
      let minutesToDisplay = min;
      if (min < 10) {
        minutesToDisplay = '0' + min;
      }
      let secondToDisplay = sec;
      if (sec < 10) {
        secondToDisplay = '0' + sec;
      }
      return h + ':' + minutesToDisplay + ':' + secondToDisplay + '.' + mill;
    };
 
   return (
     <div className={styles.styles}>
        {formatTime(time)}
     </div>
   );
 
 };
 
 export default FormattedTime;