import type { ReactNode } from 'react';



export const inputStyles =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground transition-colors placeholder:text-muted/70 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200";


export function FormSection({title,children,}: {title: string;children: ReactNode;}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <fieldset className="min-w-0">
        <legend className="mb-5 font-serif text-lg font-semibold text-sage-800">
          {title}
        </legend>
        <div className="space-y-5">{children}</div>
      </fieldset>
    </div>
  );
}


export function FieldErrors({id,errors,}: {id: string;errors?: string[];}) {
  return (
    <div id={`${id}-error`} aria-live="polite">
      {errors?.map((error) => (
        <p key={error} className="mt-1.5 text-sm text-[#9a4a3a]">
          {error}
        </p>
      ))}
    </div>
  );
}


export function Field({id,label,help,errors,children,}: {id: string;label: string;help?: string;errors?: string[];children: ReactNode;}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-sage-900">
        {label}
      </label>

      <div className="mt-1.5">{children}</div>

      {help && (
        <p id={`${id}-help`} className="mt-1.5 text-xs text-muted">
          {help}
        </p>
      )}

      <FieldErrors id={id} errors={errors} />
    </div>
  );
}