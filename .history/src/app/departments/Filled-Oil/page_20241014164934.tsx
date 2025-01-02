import Link from "next/link"

const AddTaskPage = () => {
  return (
    <section>
    <div className='w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300'>
<h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
<form action="">
  <input type="text" name="title" placeholder="Tas" />
</form>
    </div>
    </section>
  )
}

export default AddTaskPage