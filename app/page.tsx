import { InputWithCompactLabel } from "@/components/ui/compounds/InputWithLabel"

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1000px] px-20 py-20">
        <InputWithCompactLabel label="Name" />
      </div>
    </div>
  )
}
