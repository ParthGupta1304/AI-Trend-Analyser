import Link from "next/link";
export default function Navbar() {
  const nav_items = [{name:"About",href:"/about"}, {name:"Features",href:"/features"}, {name:"Pricing",href:"/pricing"}, {name:"Contact",href:"/contact"}];
  return (
    <>
      <div className="flex justify-between mt-4 ml-4 mr-5 p-3">
        <div className="flex font-mono text-lg mt-2">
          <Link href={"/"}>SentiMax.ai</Link>
        </div>
        <div className= "flex gap-8 text-lg font-serif mt-2">
            {nav_items.map((item)=>(
              <Link key={item.name} href={item.href} className="hover:underline cursor-pointer">{item.name}</Link>
            ))}

        </div>
        <div className="flex gap-3 mb-2 font-mono">
            <button className=" py-2 px-6 rounded-3xl hover:bg-gray-200 font-medium">Log In</button>
            <button className="bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-300 hover:text-black">Register</button>
        </div>
      </div>
    </>
  );
}
