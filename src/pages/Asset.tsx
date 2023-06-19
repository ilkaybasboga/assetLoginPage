import {
  Button,
  Card,
  Group,
  Paper,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";

import mockdata from "../helper/data";
import { TbArticle, TbTrash, TbBoxModel, TbVideo } from "react-icons/tb";

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
      <hr />
      <hr />

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
                <Card
                  shadow="xl"
                  radius="lg"
                  p="lg"
                  withBorder
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[1],
                    },
                  })}
                >
                  <TbArticle size={26} />
                  <Text w={200} truncate fz="lg">
                    {present.description}
                  </Text>
                  <TbTrash size={26} />
                </Card>
              ))}
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="videos" pt="lg">
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
                <Card
                  shadow="xl"
                  radius="lg"
                  p="lg"
                  withBorder
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[1],
                    },
                  })}
                >
                  <TbVideo size={26} />
                  <Text w={200} truncate fz="lg">
                    {videos.description}
                  </Text>
                  <TbTrash size={26} />
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
                <Card
                  shadow="xl"
                  radius="lg"
                  p="lg"
                  withBorder
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    "&:hover": {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[5]
                          : theme.colors.gray[1],
                    },
                  })}
                >
                  <TbBoxModel size={26} />
                  <Text w={200} truncate fz="lg">
                    {models.description}
                  </Text>
                  <TbTrash size={26} />
                </Card>
              ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default Asset;
