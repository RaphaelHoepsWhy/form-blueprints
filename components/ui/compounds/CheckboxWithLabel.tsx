import { Label } from "@radix-ui/react-label"
import { Checkbox } from "../checkbox"

interface Props extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  label: string
  id: string
}

export function CheckboxWithLabel({ label, id, ...rest }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} {...rest} />
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )
}
