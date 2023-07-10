import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const OCR = React.lazy(() => Federated.importModule('ocr', './App'));

const OCRScreen = () => {
  return (
    <ErrorBoundary name="OCRScreen">
      <React.Suspense
        fallback={<Placeholder label="Booking" icon="calendar" />}>
        <OCR />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default OCRScreen;
