import Chart from 'react-apexcharts';
import styles from './RevenueChart.module.css';

const RevenueChart = () => {
  const settings = {
    series: [
      {
        name: 'Last 6 days',
        data: [40, 50, 45, 60, 80, 55, 70, 60, 50, 75, 80, 85], // بيانات وهمية
      },
      {
        name: 'Last Week',
        data: [30, 40, 35, 50, 60, 45, 55, 45, 40, 60, 65, 70], // بيانات وهمية
      }
    ],
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false }, // لإخفاء قائمة التحميل
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '40%',
        }
      },
      dataLabels: { enabled: false },
      colors: ['#4A503D', '#C2C5AA'], // الألوان الزيتونية والبيج من تصميمك
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        axisBorder: { show: false },
      },
      grid: {
        strokeDashArray: 5, // لجعل الخطوط الخلفية منقطة كما في التصميم
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Revenue</p>
          <h2 className={styles.amount}>IDR 7.852.000</h2>
          <span className={styles.stats}><span className={styles.up}>↑ 2.1%</span> vs last week</span>
        </div>
        <button className={styles.viewButton}>View Report</button>
      </div>
      <Chart options={settings.options} series={settings.series} type="bar" height={250} />
    </div>
  );
};

export default RevenueChart;
