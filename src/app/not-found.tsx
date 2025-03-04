import { Text } from "@/design-system/atoms";
import { Box } from "@/design-system/layout";

export default async function NotFound() {
  return (
    <Box container>
      <div>
        <Text size="lg" weight="bold">No se encontró la página</Text>
        <Text size="lg">No hemos podido encontrar la página que buscabas</Text>
        <Text size="lg">Intenta con estos links:</Text>
        <ul>
          <li><a href="/loans?id=1">Id: 1</a></li>
          <li><a href="/loans?id=2">Id: 2</a></li>
        </ul>
      </div>
    </Box>
  )
}
