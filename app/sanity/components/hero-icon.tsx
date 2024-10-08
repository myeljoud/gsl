import { hues, type ColorHueKey } from "@sanity/color";
import { Card, Flex, useTheme } from "@sanity/ui";
import { Ban, CalendarCheck, Cog, FileText } from "lucide-react";
import { useMemo, type CSSProperties } from "react";

type IconName = "page" | "activity" | "unlisted" | "siteMeta" | "";

type IconData = {
  name: IconName;
  icon: React.ReactNode;
  color: ColorHueKey;
};

const icons: IconData[] = [
  {
    name: `page`,
    icon: <FileText />,
    color: `blue`,
  },
  {
    name: `activity`,
    icon: <CalendarCheck />,
    color: `blue`,
  },
  {
    name: `unlisted`,
    icon: <Ban />,
    color: `red`,
  },
  {
    name: `siteMeta`,
    icon: <Cog />,
    color: `purple`,
  },
];

export default function HeroIcon({ icon = `` }: { icon: IconName }) {
  const isDarkMode = useTheme()?.sanity?.v2?.color._dark;

  const iconData = icons.find(({ name }) => name === icon) ?? icons[0];

  const cardStyle: CSSProperties = useMemo(
    () => ({
      backgroundColor: hues[iconData.color][isDarkMode ? 950 : 50].hex,
      color: hues[iconData.color][isDarkMode ? 400 : 600].hex,
      borderColor: hues[iconData.color][isDarkMode ? 900 : 100].hex,
      borderWidth: 1,
      borderStyle: `solid`,
      width: `100%`,
      aspectRatio: `1`,
    }),
    [iconData, isDarkMode],
  );

  return (
    <Card style={cardStyle} radius={2}>
      <Flex height="fill" align="center" justify="center" padding={0}>
        <span style={{ transform: `translateY(-1px)` }}>{iconData.icon}</span>
      </Flex>
    </Card>
  );
}
