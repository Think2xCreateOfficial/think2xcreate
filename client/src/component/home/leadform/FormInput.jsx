import FormField from "./FormField";

function FormInput({ fieldKey, field, value, error, onChange, styles }) {
  return (
    <div>
      <label className={styles.label}>
        {field.label}
        {field.required && <span className={styles.required}> *</span>}
      </label>
      <FormField
        name={fieldKey}
        field={field}
        value={value}
        error={error}
        onChange={onChange}
        styles={styles}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default FormInput;