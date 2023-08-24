import { useThemeStore } from "../../styledComponents/themesStorage";
import { Span, P, Div, DivIcon, Input, Label } from "./ButtonThemeStyled";

const ButtonTheme = (props) => {
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const handleClick = () => {
    changeTheme(`${props.id}`);
    props.onHandle();
  };
  return (
    <Div>
      <Input type="radio" id={props.id} name="background" />
      <Label
        id={props.id}
        htmlFor={props.id}
        checked={props.checked}
        onClick={handleClick}
      >
        <DivIcon>
          <Span checked={props.checked} onClick={handleClick} />
        </DivIcon>
        <P>{props.name}</P>
      </Label>
    </Div>
  );
};

export default ButtonTheme;
