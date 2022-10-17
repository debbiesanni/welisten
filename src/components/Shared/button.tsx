import MuiButton, { ButtonProps } from "@mui/material/Button";
interface Props extends ButtonProps {
  children: string | JSX.Element;
}
const Button = (props: Props): JSX.Element => {
  const { children, ...otherProps } = props;
  return <MuiButton {...otherProps}>{children} </MuiButton>;
};
export default Button;
