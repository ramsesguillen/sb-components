import './myLabel.css';


export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * El es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean

  /**
   * Colores básicos del botón
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * What background color to use
   */
  fontColor?: string;


}

export const MyLabel = ( {
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
}: MyLabelProps ) => {

  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() : label.toLowerCase() }
    </span>
  )
}

