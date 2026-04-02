import Chart from 'react-apexcharts';
import styles from './OrderStatisticsChart.module.css';

const OrderStatisticsChart = () => {
  const settings = {
    // البيانات للخطين (الأخضر الغامق والرمادي الفاتح)
    series: [
      {
        name: 'Last 6 days',
        data: [20, 15, 40, 35, 70, 50] // بيانات تقريبية من الرسم
      },
      {
        name: 'Last Week',
        data: [35, 25, 45, 30, 55, 40] // بيانات تقريبية من الرسم
      }
    ],
    options: {
      chart: {
        type: 'line',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ['#4A503D', '#C2C5AA'], // الألوان من تصميمك
      stroke: {
        curve: 'smooth', // لجعل الخطوط منحنية وانسيابية
        width: 3
      },
      markers: {
        size: 0 // إخفاء النقاط على الخط لتطابق التصميم
      },
      grid: {
        strokeDashArray: 5,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } }
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06'],
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        show: false // إخفاء أرقام المحور الرأسي كما في التصميم
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        markers: { radius: 12 }
      },
      dataLabels: { enabled: false }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Order</p>
          <h2 className={styles.amount}>2.568</h2>
          <span className={styles.stats}>
            <span className={styles.down}>↓ 2.1%</span> vs last week
          </span>
          <p className={styles.dateRange}>Sales from 1-6 Dec, 2020</p>
        </div>
        <button className={styles.viewButton}>View Report</button>
      </div>
      
      <div className={styles.chartWrapper}>
        <Chart options={settings.options} series={settings.series} type="line" height={180} />
      </div>
    </div>
  );
};

export default OrderStatisticsChart;
