function SelectInput({ fieldKey, field, value, error, onChange, options, styles }) {
  return (
    <div>
      <label className={styles.label}>
        {field.label}
        {field.required && <span className={styles.required}> *</span>}
      </label>
      <select
        name={fieldKey}
        value={value}
        onChange={onChange}
        className={`${styles.inputBase} ${error ? styles.inputError : "border-gray-200"} cursor-pointer`}
      >
        <option value="">{field.placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default SelectInput;