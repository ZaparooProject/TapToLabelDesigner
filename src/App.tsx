import { useContext, lazy, Suspense } from 'react';
import { FileDropContext } from './components/FileDropper';
import './App.css';

const LabelEditor = lazy(() => import('./components/LabelEditor'));

function App() {
  const { files, canvasArrayRef } = useContext(FileDropContext);
  const hasFiles = files.length > 0;

  return (
    <>
      {!hasFiles && (
        <div className="somePadding">
          <h1>
            Start by dropping in the browser one or more images you want to use
            on your labels
          </h1>
          <h4>Or click the button to load your files</h4>
        </div>
      )}
      {files.map((file, index) => (
        <Suspense key={`key-susp-${index}`} fallback={null}>
          <LabelEditor
            index={index}
            key={`key-${index}`}
            file={file}
            canvasArrayRef={canvasArrayRef}
          />
        </Suspense>
      ))}
    </>
  );
}

export default App;
