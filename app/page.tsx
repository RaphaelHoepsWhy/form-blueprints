import DemoForm from "@/components/DemoForm"

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1000px] flex-col justify-center gap-4 px-20 py-20">
        <DemoForm />
      </div>
    </div>
  )
}
