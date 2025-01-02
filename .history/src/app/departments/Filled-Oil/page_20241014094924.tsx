import Link from "next/link";


const FilledOil = () => {
  return (
    //for add title
    <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300                " >
<h1 className="mb-7 font-bold text-3xl">Add Ctr Number</h1>

<form action="">
  <input type="text"
   name="CtrNumber"
    placeholder="Ctr Number" 
    className="p-2 text-xl rounded-md text-gray-950"
    />  
</form>

<form action="">
  <input type="date"
   name="DDate"
    placeholder="Date" 
    className="p-2 text-xl rounded-md text-gray-950 border-2"
    />  
</form>

<form action="">
  <input type="text"
   name="ClientName"
    placeholder="Client Name" 
    className="p-2 text-xl rounded-md text-gray-950 border-2"
    />  
</form>

<form action="">
  <input type="number"
   name="ClientCode"
    placeholder="Client Code" 
    className="p-2 text-xl rounded-md text-gray-950 border-2"
    />  
</form>

<form action="">
  <input type="text"
   name="Ctr"
    placeholder="Client Code" 
    className="p-2 text-xl rounded-md text-gray-950 border-2"
    />  
</form>


    </div>
  )
}

export default FilledOil