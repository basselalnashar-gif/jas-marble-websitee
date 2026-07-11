import { countryCodes } from "@/data/country-codes";
import { inputClasses } from "@/components/forms/field";
import { cn } from "@/lib/utils";

/**
 * Phone input with a country-code selector (flag + dial code) alongside the
 * number field. Submits as two form fields — `phoneCountry` (the dial code,
 * e.g. "+971") and `phoneNumber` (the local number) — which the parent form
 * combines into a single value.
 */
export function PhoneField({
  label = "Phone",
  required,
  defaultCountry = "AE",
}: {
  label?: string;
  required?: boolean;
  defaultCountry?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phoneNumber" className="text-sm font-medium text-fg">
        {label}
        {required ? <span className="text-navy-dynamic"> *</span> : null}
      </label>
      <div className="flex gap-2">
        <select
          id="phoneCountry"
          name="phoneCountry"
          defaultValue={defaultCountry}
          aria-label="Country code"
          className={cn(inputClasses, "w-[6.5rem] shrink-0 px-2")}
        >
          {countryCodes.map((c) => (
            <option key={c.iso2} value={c.dial}>
              {c.flag} {c.dial}
            </option>
          ))}
        </select>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required={required}
          placeholder="50 123 4567"
          className={cn(inputClasses, "flex-1")}
        />
      </div>
    </div>
  );
}
