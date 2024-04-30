import { useEffect } from 'react';
import { ButtonBack } from '../components';
import { Terms } from '../components/TermList';

const RequestDeleteUser = () => {
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
              title: '¿Cómo puede solicitar la eliminación de sus datos?',
              content: `Si desea que eliminemos su información personal de nuestros sistemas, por favor envíenos una solicitud por correo electrónico a app.nawara.css@nawara.com. Para proteger su privacidad y seguridad, tomaremos medidas razonables para verificar su identidad antes de procesar cualquier solicitud de eliminación.`,
            },
            {
              title: 'Proceso de Eliminación',
              content: `Una vez recibida su solicitud, procederemos a eliminar su información personal de nuestras bases de datos activas dentro de un plazo razonable, conforme a nuestras políticas de retención de datos y a la legislación aplicable. Tenga en cuenta que es posible que debamos retener cierta información para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.`,
            },
            {
              title: 'Información Adicional',
              content: `Si tiene preguntas sobre cómo manejar su información personal o cualquier otra consulta relacionada con su privacidad, no dude en contactarnos a través del correo electrónico proporcionado.`,
            },
          ]}
          title="Derecho a la Eliminación de Datos"
          date="En APPS TURISMO C.A., respetamos su privacidad y le proporcionamos la opción de solicitar la eliminación de su información personal de nuestros registros."
        />
      </div>
    </>
  );
};

export { RequestDeleteUser };
