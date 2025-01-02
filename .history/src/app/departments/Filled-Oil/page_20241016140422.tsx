import Link from "next/link"

const FilledOilPage = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Filled Oil</h1>
      <div className="flex items-center justify-end mb-20">
<Link
href="/departments"
className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
>
  New Contract
</Link>
      </div>
    </section>
  )
}

export default FilledOilPage