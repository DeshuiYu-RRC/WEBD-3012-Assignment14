export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options?: DropdownOption[];
  backgroundColor?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}
