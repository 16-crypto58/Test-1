import './index.css';

// Single-file production architecture is embedded in index.html.
// Ensure React mount is non-destructive if invoked.
const rootElement = document.getElementById('root');
if (rootElement && rootElement.dataset.renderReact === 'true') {
  import('react-dom/client').then(({ createRoot }) => {
    import('./App.tsx').then(({ default: App }) => {
      createRoot(rootElement).render(<App />);
    });
  });
}

