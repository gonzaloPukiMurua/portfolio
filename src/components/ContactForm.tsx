'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { buttonPrimary, textLink } from '@/components/ui/styles';
import { formspreeEndpoint } from '@/content';
import type { Dictionary } from '@/content/types';

type FieldName = 'name' | 'email' | 'service' | 'message';
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldOrder: FieldName[] = ['name', 'email', 'service', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  copy: Dictionary['contact'];
  serviceOptions: string[];
  email: string;
};

export default function ContactForm({ copy, serviceOptions, email }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const successHeading = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Until this runs, the form is a plain HTML form: it posts straight to
  // Formspree and relies on native `required` validation. Once hydrated, it
  // switches to inline validation and fetch.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    form.noValidate = true;
    form.dataset.ready = '';
  }, []);

  useEffect(() => {
    if (status === 'success') successHeading.current?.focus();
  }, [status]);

  function validate(data: FormData): Errors {
    const value = (name: FieldName) => String(data.get(name) ?? '').trim();
    const found: Errors = {};
    if (!value('name')) found.name = copy.fields.name.error;
    if (!value('email')) found.email = copy.fields.email.error;
    else if (!emailPattern.test(value('email'))) found.email = copy.fields.email.invalid;
    if (!value('service')) found.service = copy.fields.service.error;
    if (!value('message')) found.message = copy.fields.message.error;
    return found;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);

    const firstInvalid = fieldOrder.find((name) => found[name]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  // Clear a field's error as soon as the visitor edits it.
  function handleInput(event: FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as FieldName;
    if (!errors[name]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  if (status === 'success') {
    return (
      <div role="status">
        <h3 ref={successHeading} tabIndex={-1} className="text-card font-semibold focus:outline-none">
          {copy.success.title}
        </h3>
        <p className="mt-2 text-muted">{copy.success.body}</p>
      </div>
    );
  }

  const fieldProps = (name: FieldName) => ({
    id: `contact-${name}`,
    name,
    required: true,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `mt-2 w-full rounded-control border bg-surface px-3.5 py-2.5 transition-colors duration-150 focus:border-accent ${
      errors[name] ? 'border-error' : 'border-field'
    }`,
  });

  const label = (name: FieldName, text: string) => (
    <label htmlFor={`contact-${name}`} className="text-sm font-medium">
      {text}
    </label>
  );

  const error = (name: FieldName) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-error">
        {errors[name]}
      </p>
    );

  return (
    <form
      ref={formRef}
      action={formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      onInput={handleInput}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          {label('name', copy.fields.name.label)}
          <input type="text" autoComplete="name" {...fieldProps('name')} />
          {error('name')}
        </div>
        <div>
          {label('email', copy.fields.email.label)}
          <input type="email" autoComplete="email" {...fieldProps('email')} />
          {error('email')}
        </div>
      </div>

      <div>
        {label('service', copy.fields.service.label)}
        <select defaultValue="" {...fieldProps('service')}>
          <option value="" disabled>
            {copy.fields.service.placeholder}
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error('service')}
      </div>

      <div>
        {label('message', copy.fields.message.label)}
        <textarea rows={5} {...fieldProps('message')} />
        {error('message')}
      </div>

      {/* Honeypot: Formspree drops submissions where this field is filled. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-error">
          {copy.error}{' '}
          <a href={`mailto:${email}`} className={`${textLink} break-all`}>
            {email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`${buttonPrimary} disabled:opacity-60`}
      >
        {status === 'submitting' ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}
