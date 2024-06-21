import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function Color() {
  return (
    <ToggleGroup type="single" className="gap-3">
      <ToggleGroupItem variant="default" size="default" className="rounded-full w-8 h-8 hover:outline-2 hover:outline-black bg-red-500" value="red">
      </ToggleGroupItem>
      <ToggleGroupItem variant="default" size="default" className="rounded-full w-8 h-8 hover:outline-2 hover:outline-black bg-red-500" value="red">
      </ToggleGroupItem>
      <ToggleGroupItem variant="default" size="default" className="rounded-full w-8 h-8 hover:outline-2 hover:outline-black bg-red-500" value="red">
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
