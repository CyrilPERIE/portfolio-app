import LeftColumn from './components/leftColumn/left-column'
import RightColumn from './components/rightColumn/right-column'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <LeftColumn />
      <RightColumn />
    </main>
  )
}
