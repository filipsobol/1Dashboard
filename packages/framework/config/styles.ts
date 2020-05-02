import { Styles } from "@framework/interfaces/core/Config";
import { BorderRadius, BorderStyle, BorderWidth, Shadow } from "@framework/interfaces/core/Styles";

const config: Styles = {
    tile: {
        predefinedStyles: {
            grid: {
                background: "white",
                padding: 4,
                shadow: Shadow.MD,
                border: {
                    style: BorderStyle.SOLID,
                    width: BorderWidth.NONE,
                    radius: BorderRadius.LG,
                    color: "border-gray-100",
                }
            },
            content: {
                background: "transparent",
                padding: 1,
                shadow: Shadow.NONE,
                border: {
                    radius: BorderRadius.NONE,
                }
            },
        }
    }
};

export default config;
