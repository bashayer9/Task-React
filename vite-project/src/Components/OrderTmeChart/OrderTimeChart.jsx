import Chart from 'react-apexcharts';
import styles from './OrderTimeChart.module.css';

const OrderTimeChart = () => {
  const settings = {
    // القيم المئوية من تصميمك في فيجما
    series: [40, 32, 28], 
    options: {
      chart: {
        type: 'donut',
      },
      // الألوان الزيتونية المتدرجة من فاتح لغامق كما في الصورة
      colors: ['#4A503D', '#8B9178', '#C2C5AA'], 
      labels: ['Afternoon', 'Evening', 'Morning'],
      plotOptions: {
        pie: {
          donut: {
            size: '75%', // لترك مساحة في المنتصف
            labels: {
              show: false // إخفاء الأرقام في المنتصف لتطابق التصميم
            }
          }
        }
      },
      dataLabels: {
        enabled: false // إخفاء الأرقام المباشرة على الرسم
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        markers: {
            radius: 12, // لجعل نقاط الليجند دائرية
        },
        formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%"
        }
      },
      stroke: {
        show: false // إخفاء الحدود البيضاء بين الأقسام
      },
      tooltip: {
        enabled: true,
        theme: 'dark'
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Order Time</p>
          <span className={styles.dateRange}>From 1-6 Dec, 2020</span>
        </div>
        <button className={styles.viewButton}>View Report</button>
      </div>

      <div className={styles.chartWrapper}>
        <Chart 
          options={settings.options} 
          series={settings.series} 
          type="donut" 
          width="100%" 
        />
      </div>
    </div>
  );
};

export default OrderTimeChart;
