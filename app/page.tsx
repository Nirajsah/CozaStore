'use client'
import Body from './components/Body'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="lg:w-[1320px] h-[2380px]">
        <div className="w-full h-full">
          <Body />
        </div>
      </div>
    </main>
  )
}
