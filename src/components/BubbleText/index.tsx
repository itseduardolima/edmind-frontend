import { Subtitle, Title } from "../../sections/Hero/styled";
import styles from "./bubble.module.css";

export const BubbleText = () => {
  return (
    <div>
      <Title>
        {"Excelentes soluções de TI para o seu sucesso"
          .split("")
          .map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
      </Title>

      <Subtitle>
        {"Transformando visões em realidade digital com design inovador, desenvolvimento de websites personalizados, estratégias de SEO sob medida e uma gama completa de soluções para impulsionar o seu sucesso online."
          .split("")
          .map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
      </Subtitle>
    </div>
  );
};
