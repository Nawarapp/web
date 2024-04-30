import { useEffect } from 'react';
import { ButtonBack } from '../components';

import { Terms } from '../components/TermList';

const Politics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" px-4 md:px-20 py-8">
        <ButtonBack />
        <Terms
          items={[
            {
              title: 'Introducción',
              content: `En <strong>APPS TURISMO C.A.</strong>, operador de Nawara, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recolectamos, utilizamos, divulgamos y protegemos la información que usted nos proporciona al utilizar nuestra aplicación móvil Nawara.`,
            },
            {
              title: 'Información que Recolectamos',
              content: `Podemos recolectar información personal que usted nos proporciona al crear una cuenta, como su nombre, dirección de correo electrónico, número de teléfono, y dirección. Además, al comprar paquetes turísticos, podemos recolectar detalles de pago y otras informaciones necesarias para procesar las transacciones.`,
            },
            {
              title: 'Uso de la Información',
              content: `La información que recolectamos se utiliza para:</br>                          
              
              </br>• Procesar sus transacciones.
              </br>• Proporcionar servicios de atención al cliente.
              </br>• Enviar comunicaciones relacionadas con el servicio, incluidas confirmaciones, facturas, avisos técnicos, actualizaciones y mensajes de seguridad.
              </br>• Proteger contra fraudes y otras actividades ilegales.
              </br>• Mejorar y personalizar nuestros servicios.              
              </br>• Cumplir con las leyes y regulaciones aplicables.`,
            },
            {
              title: 'Compartir Información',
              content: `No vendemos ni alquilamos su información personal a terceros. Sin embargo, podemos compartir su información con:</br>
              
              </br>• Proveedores de servicios que nos ayudan con operaciones comerciales (como procesamiento de pagos, servicios de análisis, etc.).
              </br>• Autoridades legales cuando sea requerido por ley o para proteger nuestros derechos o los derechos de terceros.`,
            },
            {
              title: 'Seguridad',
              content: `Implementamos medidas de seguridad para proteger la información contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión de datos por internet o almacenamiento electrónico es completamente segura, por lo que no podemos garantizar su seguridad absoluta.`,
            },
            {
              title: 'Acceso y Actualización de su Información',
              content: `Usted puede revisar y actualizar su información personal accediendo a su cuenta en la aplicación`,
            },
            {
              title: 'Cambios a la Política de Privacidad',
              content: `Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Si hacemos cambios materiales, le notificaremos por correo electrónico o mediante un aviso en nuestra aplicación antes de que el cambio entre en efecto.`,
            },
            {
              title: 'Contacto',
              content: `Si tiene preguntas sobre esta política de privacidad o las prácticas de esta aplicación, puede contactarnos a través de <strong>app.nawara.css@gmail.com</strong> `,
            },
          ]}
          title="POLÍTICA DE PRIVACIDAD"
          date="Última actualización: 29 de abril de 2024"
        />
      </div>
    </>
  );
};

export { Politics };
