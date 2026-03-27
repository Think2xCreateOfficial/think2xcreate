function BarChart({ data, styles }) {
  return (
    <div className={styles.barChart}>
      {data.map((height, index) => (
        <div
          key={index}
          className={styles.bar(index >= 9)}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export default BarChart;