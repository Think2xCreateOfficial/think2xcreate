import { leadformContent, businessOptions, serviceOptions } from '../../../utils/constant/homeConstant';
import { leadformStyles } from '../../../utils/styles/homeStyle';
import { useLeadform } from '../../../hooks/useLeadform';
import LeadformHeader from './LeadformHeader';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import SuccessMessage from './SuccessMessage';

function Leadform() {
  const content = leadformContent;
  const styles  = leadformStyles;

  const {
    form, errors, submitted, loading, apiError,
    handleChange, handleSubmit, resetForm,
  } = useLeadform();

  // Early return for success state — clean, no duplication
  if (submitted) {
    return (
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <SuccessMessage content={content.success} resetForm={resetForm} styles={styles} />
        </div>
      </section>
    );
  }

  const fields     = content.form.fields;
  const SubmitIcon = content.form.submitButton.icon;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <LeadformHeader content={content.header} styles={styles} />

        <div className={`${styles.formContainer} transition-all duration-500`}>

          {/* FIX: apiError banner was orphaned outside return() — now correctly inside JSX */}
          {apiError && (
            <div className="w-full px-4 py-3 mb-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className={styles.form}>

            <div className={styles.grid}>
              <FormInput fieldKey="name"  field={fields.name}  value={form.name}  error={errors.name}  onChange={handleChange} styles={styles} />
              <FormInput fieldKey="phone" field={fields.phone} value={form.phone} error={errors.phone} onChange={handleChange} styles={styles} />
            </div>

            <FormInput fieldKey="email" field={fields.email} value={form.email} error={errors.email} onChange={handleChange} styles={styles} />

            <div className={styles.grid}>
              <SelectInput fieldKey="businessType" field={fields.businessType} value={form.businessType} error={errors.businessType} onChange={handleChange} options={businessOptions} styles={styles} />
              <SelectInput fieldKey="service"      field={fields.service}      value={form.service}      error={errors.service}      onChange={handleChange} options={serviceOptions}  styles={styles} />
            </div>

            <FormInput fieldKey="message" field={fields.message} value={form.message} error={errors.message} onChange={handleChange} styles={styles} />

            <button
              type="submit"
              disabled={loading}
              className={`${styles.submitButton} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  <SubmitIcon size={16} />
                  {content.form.submitButton.text}
                </>
              )}
            </button>

            <p className={styles.privacyText}>{content.form.privacyText}</p>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Leadform;