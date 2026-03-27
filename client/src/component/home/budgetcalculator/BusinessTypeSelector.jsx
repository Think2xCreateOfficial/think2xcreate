function BusinessTypeSelector({ types, selectedType, onSelect, styles }) {
  return (
    <div>
      <p className={styles.cardLabel}>Your Business Type</p>
      <div className={styles.businessTypeContainer}>
        {types.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={styles.businessButton(selectedType === type.id)}
            >
              <Icon size={16} className="inline mr-1" />
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BusinessTypeSelector;