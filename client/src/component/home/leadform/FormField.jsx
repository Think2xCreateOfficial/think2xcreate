function FormField({ field, name, value, error, onChange, styles }) {
  const inputClass = `${styles.inputBase} ${error ? styles.inputError : "border-gray-200"}`;
  
  if (field.type === "textarea") {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={field.placeholder}
        className={`${inputClass} resize-none`}
      />
    );
  }
  
  return (
    <input
      name={name}
      type={field.type || "text"}
      value={value}
      onChange={onChange}
      placeholder={field.placeholder}
      className={inputClass}
    />
  );
}

export default FormField;