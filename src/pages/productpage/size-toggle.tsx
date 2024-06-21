import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function Size() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="L" className="bg-beige1 hover:bg-brown2 hover:text-white">
        <span>XL</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="XL" className="bg-beige1 hover:bg-brown2 hover:text-white">
        <span>XL</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="XS" className="bg-beige1 hover:bg-brown2 hover:text-white">
        <span>XL</span>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
