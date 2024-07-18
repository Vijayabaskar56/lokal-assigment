import * as themes from './themes'
import { config } from "@tamagui/config";


import { createTamagui } from "tamagui";
export const tamaguiConfig = createTamagui({ ...config, themes  });
export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf { }
}
