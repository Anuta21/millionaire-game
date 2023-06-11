export interface IOptionButtonProps {
  id?: number;
  state?: string;
  text: string;
  optionLetter: string;
  onClickFunc?: (id: number) => void;
}

export interface IButtonStyleProps {
  state: string;
}
