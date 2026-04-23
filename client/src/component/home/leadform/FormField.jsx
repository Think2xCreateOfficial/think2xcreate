function FormField({ name, field, value, error, onChange, styles }) {
  const baseClass = `${styles.inputBase} ${error ? styles.inputError : 'border-gray-200'}`;

  if (field.type === 'textarea') {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        rows={4}
        className={`${baseClass} resize-none`}
      />
    );
  }

  return (
    <input
      name={name}
      type={field.type || 'text'}
      value={value}
      onChange={onChange}
      placeholder={field.placeholder}
      className={baseClass}
      autoComplete={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'off'}
    />
  );
}

export default FormField;