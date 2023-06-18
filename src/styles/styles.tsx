import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  smallTitle: {
    weight: "bold",
    mb: "sm",
    fontSize: "1.7rem",
  },
  outCard: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[0],
    minHeight: rem(100),
    shadow: "xl",
  },
  inCard: {
    marginTop: rem(10),
    width: "30%",
    minWidth: "25rem",
    marginBottom: rem(10),
    shadow: "xl",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: "2rem",
  },
  trash: {
  
    "&:hover": {
      transition: "box-shadow 150ms ease, transform 100ms ease",
    
      
    },
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justify: "center",
    align: "flex-start",
    flexWrap: "wrap",
  },

  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    // borderRadius: theme.radius.lg,
    padding:rem(10),
    height: rem(80),
    width: "85%",
    margin: "1rem auto",
    backgroundColor: theme.colors.indigo[0],
    transition: "box-shadow 150ms ease, transform 100ms ease",
    borderRadius: "1rem 0",
    border:"solid 2px rgb(170, 235, 230)",
       "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
      
    },
  },
}));
export default useStyles;
