import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit2, Download } from 'lucide-react';
import { getQuoteById, QuoteData } from '../services/quoteService';

export function QuoteView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteData | null>(null);

  useEffect(() => {
    if (id) {
      const quoteData = getQuoteById(id);
      if (quoteData) {
        setQuote(quoteData);
      } else {
        navigate('/quotes');
      }
    }
  }, [id, navigate]);

  if (!quote) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quote Details</h1>
          <p className="mt-2 text-gray-600">
            View quote information and details
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/quotes/${id}/edit`)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            Edit Quote
          </button>
          <button
            onClick={() => {/* Download PDF */}}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Client Information</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Client Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{quote.clientName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{quote.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900">{quote.phone}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Project Details</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Project Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{quote.projectName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Installation Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">
                    {quote.installationAddress}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {quote.spaces.map((space) => (
          <div key={space.id} className="border-b border-gray-200">
            <div className="p-4 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">{space.name}</h3>
            </div>
            <div className="p-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dimensions</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {space.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-3 py-4 text-sm text-gray-900">{item.type}</td>
                      <td className="px-3 py-4 text-sm text-gray-900">{item.material}</td>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        {item.width}" × {item.height}" × {item.depth}"
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-900">{item.quantity}</td>
                      <td className="px-3 py-4 text-sm text-gray-900 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="p-6">
          <div className="flex justify-end">
            <div className="w-80">
              <dl className="space-y-3">
                <div className="flex justify-between text-sm">
                  <dt className="text-gray-500">Subtotal</dt>
                  <dd className="text-gray-900">${quote.total.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-gray-500">Tax (13%)</dt>
                  <dd className="text-gray-900">${(quote.total * 0.13).toFixed(2)}</dd>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-indigo-600">
                    ${quote.total.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}