import { useEffect } from 'react';
import { ButtonBack } from '../components';
import { Terms } from '../components/TermList';

const HostAgreement = () => {
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
              title: 'Aceptación del Acuerdo',
              content: `Al publicar ofertas de fulldays en Nawara, usted acepta las condiciones establecidas en este Acuerdo del Organizador, así como en los Términos de Uso y la Política de Privacidad de Nawara. Si no está de acuerdo con alguna parte de este acuerdo, no deberá usar la plataforma para publicar o gestionar fulldays.`,
            },
            {
              title: 'Responsabilidades del Organizador',
              content: `Como organizador de fulldays, se compromete a: </br>
              
              </br>• Cumplir con todas las reservas pactadas a través de Nawara, proporcionando el servicio en las fechas, horarios y condiciones anunciadas.
              </br>• Aceptar y adherirse al plan de métodos de pago ofrecido por Nawara, gestionando todas las transacciones financieras a través de la plataforma para garantizar la seguridad y la trazabilidad.
              </br>• Ser responsable frente a los usuarios que reserven sus servicios, asegurando una experiencia de alta calidad y respetando los derechos de los consumidores.`,
            },
            {
              title: 'Calidad y Cumplimiento',
              content: `Debe asegurarse de que las descripciones de los fulldays sean precisas y veraces. Cualquier incumplimiento de lo prometido en su oferta puede resultar en la disminución de su reputación en la plataforma, y en casos severos, la suspensión o terminación de su cuenta.`,
            },
            {
              title: 'Sanciones por Incumplimiento',
              content: `Si incumple con una reserva confirmada sin una causa justificada, su balance en la plataforma puede ser ajustado para cubrir daños ocasionados a los usuarios, incluyendo costos de alojamiento alternativo y compensaciones. Esto está sujeto a nuestra política de resolución de disputas.`,
            },
            {
              title: 'Derechos de Nawara',
              content: `Nawara se reserva el derecho de retirar o modificar su acceso a la plataforma en caso de que incumpla con los términos de este acuerdo, los Términos de Uso o cualquier ley aplicable. También nos reservamos el derecho de modificar este acuerdo en cualquier momento, con notificación previa.`,
            },
            {
              title: 'Independencia del Organizador',
              content: `Reconoce que su relación con Nawara es la de un contratista independiente. Nawara no proporciona cobertura de seguro, beneficios, ni impone horarios específicos. Usted es responsable de cumplir con todas las leyes y regulaciones locales pertinentes, incluyendo pero no limitado a permisos, licencias y seguros requeridos para la operación de sus actividades.`,
            },
            {
              title: 'Contacto',
              content: `Para consultas relacionadas con este acuerdo o cualquier aspecto de su participación en Nawara, por favor contáctenos a través de app.nawara.css@nawara.com.`,
            },
          ]}
          title="Acuerdo del Organizador de Fulldays para Nawara"
          date="Fecha de entrada en vigor: 29 de abril de 2024"
        />
      </div>
    </>
  );
};

export { HostAgreement };
