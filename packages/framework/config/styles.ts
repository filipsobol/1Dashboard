import { Styles } from "@framework/interfaces/core/Config";
import { BorderRadius, BorderStyle, BorderWidth, Shadow } from "@framework/interfaces/core/Styles";

const config: Styles = {
    tile: {
        predefinedStyles: {
            grid: {
                background: "white",
                padding: 4,
                shadow: Shadow.NONE,
                border: {
                    style: BorderStyle.SOLID,
                    radius: BorderRadius.NEUTRAL,
                    width: BorderWidth.BASE,
                    color: "gray-300",
                }
            },
            content: {
                background: "transparent",
                padding: 1,
                shadow: Shadow.NONE,
                border: {
                    radius: BorderRadius.NEUTRAL,
                }
            },
        }
    }
};

export default config;
