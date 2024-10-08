import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Definir Tawk_API globalmente para evitar errores
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Crear el script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67049aae02d78d1a30ede388/1i9kvoelk';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Añadir el script al head de la página
    document.head.appendChild(script);

    // Cleanup: Remover el script si el componente es desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // No es necesario renderizar nada
};

export default TawkTo;
