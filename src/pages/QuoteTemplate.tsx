import React from 'react';
import { TemplateForm } from '../components/template/TemplateForm';
import { TemplatePreview } from '../components/template/TemplatePreview';

export function QuoteTemplate() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Quote Template</h1>
        <p className="mt-2 text-gray-600">
          Customize your quote template and branding
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TemplateForm />
        <TemplatePreview />
      </div>
    </div>
  );
}