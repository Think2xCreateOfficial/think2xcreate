import DashboardHeader from "./DashboardHeader";
import BarChart from "./BarChart";
import MetricsGrid from "./MetricsGrid";

function HeroDashboard({ content, styles }) {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashboardCard}>
        <DashboardHeader content={content.dashboard} styles={styles} />
        <BarChart data={content.dashboard.barData} styles={styles} />
        
        <div className={styles.xAxis}>
          {content.dashboard.months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
        
        <MetricsGrid metrics={content.dashboard.metrics} styles={styles} />
      </div>
    </div>
  );
}

export default HeroDashboard;