import { Styles } from "@framework/interfaces/core/Config";
import { Radius, Shadow } from "@framework/interfaces/core/Styles";

const config: Styles = {
    tile: {
        predefinedStyles: {
            grid: {
                background: "white",
                padding: 4,
                shadow: Shadow.NEUTRAL,
                radius: Radius.NEUTRAL,
            },
            content: {
                background: "transparent",
                padding: 1,
                shadow: Shadow.NONE,
                radius: Radius.NEUTRAL,
            },
        }
    }
};

export default config;
