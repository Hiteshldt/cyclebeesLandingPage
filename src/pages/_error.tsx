import React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';

interface ErrorPageProps {
  statusCode?: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {statusCode ? `Error ${statusCode}` : 'Client-side error'}
        </h1>
        <p className="text-gray-600 mb-8">
          {statusCode === 404
            ? 'This page could not be found.'
            : 'An error occurred. Please try again later.'}
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-secondary-100 px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;