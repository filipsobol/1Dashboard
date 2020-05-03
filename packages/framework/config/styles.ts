import { Styles } from "@framework/interfaces/core/Config";
import { BorderRadius, BorderWidth } from "@framework/interfaces/core/Styles";

const config: Styles = {
    tile: {
        predefinedStyles: {
            grid: {
                background: "white",
                padding: 4,
                border: {
                    width: BorderWidth.BASE,
                    radius: BorderRadius.LG,
                    color: "border-gray-200",
                }
            },
            content: {
                padding: 1,
            },
        }
    }
};

export default config;
