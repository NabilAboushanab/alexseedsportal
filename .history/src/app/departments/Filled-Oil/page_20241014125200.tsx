import Link from "next/link";

async function createCtr() {
  
}
const FilledOil = () => {
  return (
    //for add title
    <div className="w-auto mx-auto rounded-md p-5 bg-slate-300 border-2 border-gray-300" >
<h1 className="mb-7 font-bold text-3xl">Add Ctr Number</h1>

<form action="" >
  <input type="text"
   name="CtrNumber"
    placeholder="Ctr Number" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 font-bold mx-auto "
    />  
</form>

<form action="">
  <input type="date"
   name="DDate"
    placeholder="Date" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold mx-auto"
    />  
</form>

<form action="">
  <input type="text"
   name="ClientName"
    placeholder="Client Name" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold mx-auto"
    />  
</form>

<form action="">
  <input type="number"
   name="ClientCode"
    placeholder="Client Code" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
    />  
</form>

<form action="">
  <input type="text"
   name="CtrType"
    placeholder="Ctr Type" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
    />  
</form>


<form action="">
  <input type="text"
   name="Currency"
    placeholder="Currency" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
    />  
</form>

<button type="submit" className="bg-green-600 hover:bg-cyan-400 text-white font-semibold text-xl rounded-md p-3 transition-colors">
  Submit</button>
    </div>
  )
}

export default FilledOil