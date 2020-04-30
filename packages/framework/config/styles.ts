import { Styles } from "@framework/interfaces/core/Config";
import { BorderRadius, Shadow } from "@framework/interfaces/core/Styles";

const config: Styles = {
    tile: {
        predefinedStyles: {
            grid: {
                background: "white",
                padding: 4,
                shadow: Shadow.MD,
                border: {
                    radius: BorderRadius.MD,
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
