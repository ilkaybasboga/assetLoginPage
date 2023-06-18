import {
  Paper,
  Card,
  Text,
  UnstyledButton,
  Group,
  Button,
  Flex,
} from "@mantine/core";

import { FcFile, FcOrgUnit, FcEmptyTrash, FcFilmReel } from "react-icons/fc";
import mockdata from "../helper/data";
import useStyles from "../styles/styles";


const Home = () => {
  const { classes, theme } = useStyles();

  return (
    <Paper
      shadow="xl"
      radius="lg"
      p="lg"
      withBorder
      sx={{ margin: "5rem auto", width: "90%" }}
    >
      <Card withBorder radius="md" className={classes.outCard}>
        <Group position="apart">
          <Text className={classes.title}>Asset management</Text>

          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            UPLOAD
          </Button>
        </Group>
        <hr />
        <Flex
          mih={50}
          bg="rgba(229, 242, 248, 0.444)"
          gap="xs"
          justify="space-between"
          align="start"
          direction="row"
          wrap="wrap"
          sx={{ minHeight: "30rem" }}
        >
          <Paper
            shadow="xl"
            radius="lg"
            p="lg"
            withBorder
            className={classes.inCard}
          >
            <Text className={classes.smallTitle}>Presentations</Text>

            {mockdata.presentations &&
              mockdata?.presentations.map((present) => (
                <UnstyledButton key={present.ID} className={classes.item}>
                  <FcFile size={26} />
                  <Text size="rem" mt={7}>
                    {present.description}
                  </Text>
                  <FcEmptyTrash
                    size={26}
                    color={theme.white}
                    className={classes.trash}
                  />
                </UnstyledButton>
              ))}
          </Paper>

          <Paper
            shadow="xl"
            radius="lg"
            p="lg"
            withBorder
            className={classes.inCard}
          >
            <Text className={classes.smallTitle} sx={{ color: "blue" }}>
              Models
            </Text>
            {mockdata.models &&
              mockdata?.models.map((models) => (
                <UnstyledButton key={models.ID} className={classes.item}>
                  <FcOrgUnit size={26} />
                  <Text size="xl" mt={7}>
                    {models.description}
                  </Text>
                  <FcEmptyTrash size={26} />
                </UnstyledButton>
              ))}
          </Paper>
          <Paper
            shadow="xl"
            radius="lg"
            p="lg"
            withBorder
            className={classes.inCard}
          >
            <Text className={classes.smallTitle} sx={{ color: "chocolate" }}>
              Videos
            </Text>
            {mockdata?.videos &&
              mockdata?.videos.map((videos) => (
                <UnstyledButton key={videos.ID} className={classes.item}>
                  <FcFilmReel size={26} />
                  <Text size="xl" mt={7}>
                    {videos.description}
                  </Text>
                  <FcEmptyTrash size={26} color="red" />
                </UnstyledButton>
              ))}
          </Paper>
        </Flex>
      </Card>
    </Paper>
  );
};

export default Home;
