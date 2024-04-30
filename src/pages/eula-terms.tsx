import { useEffect } from 'react';

import { Terms } from '../components/TermList';
import { ButtonBack } from '../components';

const EULATerms = () => {
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
              title: 'Aceptación de los Términos',
              content:
                'Al acceder y utilizar la aplicación Nawara, usted acepta estar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable. Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.',
            },
            {
              title: 'Descripción del Servicio',
              content:
                'Nawara ofrece una plataforma digital para la venta y compra de paquetes turísticos en Venezuela, incluyendo pero no limitado a fulldays, excursiones y experiencias turísticas similares. Nawara actúa como intermediario entre proveedores de servicios turísticos y usuarios que buscan experiencias turísticas.',
            },
            {
              title: 'Registro y Cuenta',
              content:
                'Para acceder a algunas funciones de la aplicación, deberá crear una cuenta proporcionando información verídica y actualizada. Es responsable de mantener la confidencialidad de su contraseña y cuenta, y es completamente responsable de todas las actividades que ocurran bajo su cuenta.',
            },
            {
              title: 'Uso Apropiado',
              content:
                'Se compromete a utilizar Nawara únicamente para fines legales y de manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute de la aplicación por parte de cualquier tercero. La conducta prohibida incluye acosar o causar molestias o inconvenientes a cualquier usuario, transmitir contenido obsceno o ofensivo o interrumpir el flujo normal de diálogo dentro de Nawara.',
            },
            {
              title: 'Propiedad Intelectual',
              content:
                'El contenido, la disposición y el diseño de Nawara, incluyendo textos, gráficos, imágenes, software y otros materiales son propiedad intelectual de Nawara o sus licenciantes y están protegidos por derechos de autor y otros derechos de propiedad intelectual.',
            },
            {
              title: 'Limitación de Responsabilidad',
              content:
                'Nawara no será responsable de cualquier daño indirecto, incidental, especial, consecuente o punitivo que resulte del uso o la incapacidad de uso de los servicios ofrecidos. Aunque Nawara intenta ofrecer información verídica y de calidad, no garantiza la exactitud, la completitud o la utilidad de ninguna información en la aplicación.',
            },
            {
              title: 'Modificación de los Términos',
              content:
                'Nawara se reserva el derecho, a su discreción, de modificar o reemplazar estos términos en cualquier momento. Si las revisiones son materiales, nos esforzaremos por proporcionar un aviso con al menos 30 días de anticipación antes de que nuevos términos entren en vigor.',
            },
            {
              title: 'Ley Aplicable',
              content:
                'Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Venezuela sin tener en cuenta su conflicto de disposiciones legales',
            },
            {
              title: 'Contacto',
              content:
                'Si tiene preguntas sobre estos términos, por favor contáctenos a través de app.nawara.css@gmail.com .',
            },
          ]}
          title="Términos y Condiciones de Uso para Nawara"
          date="Última actualización: 29 de abril de 2024"
        />
      </div>
    </>
  );
};

export { EULATerms };
