import {
  Button,
  Card,
  Group,
  Paper,
  SimpleGrid,
  Tabs,
  Text,
  Image,
  Divider,
} from "@mantine/core";

import mockdata from "../helper/data";

const Asset = () => {
  return (
    <Paper
      shadow="xl"
      radius="lg"
      p="lg"
      withBorder
      sx={{ margin: "5rem auto", width: "90%" }}
    >
      <Group position="apart">
        <Text fw={700} fz="xl">
          Asset management
        </Text>

        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          UPLOAD
        </Button>
      </Group>

      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />

      <Tabs defaultValue="presentations">
        <Tabs.List>
          <Tabs.Tab value="presentations" fw={500} fz="md">
            Presentations
          </Tabs.Tab>
          <Tabs.Tab value="videos" fw={500} fz="md">
            Videos
          </Tabs.Tab>
          <Tabs.Tab value="models" fw={500} fz="md">
            Models
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="presentations" pt="xl">
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            {mockdata.presentations &&
              mockdata?.presentations.map((present) => (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section
                    component="a"
                    href="https://dev2.metaqampus.com/assets"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUNdsOirwnIK7clHImWd0eyeDaJ7Mex7W_K6wQveZhhjvMan8nXGrTrqRbD3XKZQ3Ucc&usqp=CAU"
                      height={160}
                      fit="contain"
                      mt="md"
                      alt="presentations"
                    />
                  </Card.Section>
                  <Text weight={500} fz="xl" mt="md">
                    {present.description}
                  </Text>
                  <Button
                    variant="light"
                    color="red"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    DELETE
                  </Button>
                </Card>
              ))}
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="videos" pt="xl">
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            {mockdata.videos &&
              mockdata?.videos.map((videos) => (
                <Card shadow="xl" padding="lg" radius="md" withBorder>
                  <Card.Section
                    component="a"
                    href="https://dev2.metaqampus.com/assets"
                  >
                    <Image
                      src="data:image/png;base64,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"
                      height={160}
                      fit="contain"
                      mt="md"
                      alt="videos"
                    />
                  </Card.Section>
                  <Text weight={500} fz="xl" mt="md">
                    {videos.description}
                  </Text>
                  <Button
                    variant="light"
                    color="red"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    DELETE
                  </Button>
                </Card>
              ))}
          </SimpleGrid>
        </Tabs.Panel>
        <Tabs.Panel value="models" pt="xl">
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            {mockdata.models &&
              mockdata?.models.map((models) => (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section
                    component="a"
                    href="https://dev2.metaqampus.com/assets"
                  >
                    <Image
                      src="https://png.pngtree.com/png-clipart/20200707/ourlarge/pngtree-fresh-technology-mobile-phone-like-3d-element-png-image_2302096.jpg"
                      height={160}
                      fit="contain"
                      mt="md"
                      alt="models"
                    />
                  </Card.Section>
                  <Text weight={500} fz="xl" mt="md">
                    {models.description}
                  </Text>
                  <Button
                    variant="light"
                    color="red"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    DELETE
                  </Button>
                </Card>
              ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default Asset;
