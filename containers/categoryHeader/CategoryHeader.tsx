import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        margin: 10,
      },
      backgroundColor: theme.palette.primary.light,
      borderRadius: 3,
      padding: 10,
      textTransform: "uppercase",
    },
  };
});
interface CategoryHeaderProps {
  title: string;
}
const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  const theme = useTheme();
  const { root } = useStyles({ theme });
  return (
    <>
      <h3 className={root}>{title}</h3>
    </>
  );
};

export default CategoryHeader;
