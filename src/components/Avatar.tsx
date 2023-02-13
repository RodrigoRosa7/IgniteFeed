import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

/*export function Avatar(props) props sem desestruturação */

//se uma propriedade é opcional pode ser feito com o "?" antes dos ":"
//Aula Extensão de Interfaces: desta forma é possível fazer com que uma interface herde
//todas os atributos de um elemento html usando por exemplo ImgHTMLAttributes
interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

/* usando desestruturação, prop com valor padrão e rest operator para não nomear props que já existem
em um elemento html comum como src e alt.*/
export function Avatar({ hasBorder = true, ...props }: avatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
