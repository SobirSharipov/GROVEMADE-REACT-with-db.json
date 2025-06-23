
import { useEffect, useState } from 'react'
import { Button, Input, Modal } from 'antd';
import './App.css'
import img from './assets/logo.png'
import img1 from './assets/img1 (1).png'
import img2 from './assets/img1 (2).png'
import img3 from './assets/img1 (3).png'
import img4 from './assets/img1 (4).png'
import img5 from './assets/img1 (5).png'
import img6 from './assets/img1 (6).png'
import img7 from './assets/img1 (7).png'
import img8 from './assets/img1 (8).png'
import img9 from './assets/img1 (9).png'
import img10 from './assets/img1 (10).png'
import img11 from './assets/img1 (11).png'
import img12 from './assets/img1 (12).png'
import img13 from './assets/img1 (13).png'
import img14 from './assets/img1 (14).png'
import img15 from './assets/img1 (15).png'
import img16 from './assets/img1 (16).png'
import img17 from './assets/img1 (17).png'
import img18 from './assets/img1 (18).png'
import img19 from './assets/img1 (19).png'
import img20 from './assets/img1 (20).png'
import img21 from './assets/img1 (21).png'
import img22 from './assets/img1 (22).png'
import img23 from './assets/img1 (23).png'
import img24 from './assets/img1 (24).png'
import img25 from './assets/img1 (25).png'
import img26 from './assets/img1 (26).png'
import img27 from './assets/img1 (27).png'
import img28 from './assets/img1 (28).png'


function App() {
  let api = "http://localhost:3000/data"
  let [User, setUser] = useState([])

  async function get() {
    try {
      let res = await fetch(api)
      let data = await res.json()
      setUser(data)
    } catch (error) {
      console.error(error);

    }
  }

  async function DeletUser(id) {
    try {
      await fetch(`${api}/${id}`, { method: "DELETE" })
      get()
    } catch (error) {
      console.error(error);

    }
  }

  let [Search, setSearch] = useState("")
  let [SelectAll, setSelectAll] = useState("")


  const [isModalOpen, setIsModalOpen] = useState(false);
  let [Addname, setAddname] = useState("")
  let [Addprase, setAddpsrase] = useState("")
  let [Addimg, setAddimg] = useState("")
  let [Addstatus, setAddstatus] = useState("true")

  const [isModalEdit, setIsModalEdit] = useState(false);
  let [Editname, setEditname] = useState("")
  let [Editprase, setEditpsrase] = useState("")
  let [Editimg, setEditimg] = useState("")
  let [Editstatus, setEditstatus] = useState("true")
  let [idx, setidx] = useState(null)

  const [isModalInfo, setIsModalInfo] = useState(false);
  let [Infoname, setInfoname] = useState("")
  let [Infoprase, setInfopsrase] = useState("")
  let [Infoimg, setInfoimg] = useState("")
  let [Infostatus, setInfostatus] = useState("true")

  function updateUser(el) {
    setIsModalEdit(true)
    setEditname(el.name)
    setEditimg(el.img)
    setEditpsrase(el.prase)
    setEditstatus(el.status ? "ture" : "false")
    setidx(el.id)
  }
  function InfoUser(el) {
    setIsModalInfo(true)
    setInfoname(el.name)
    setInfoimg(el.img)
    setInfopsrase(el.prase)
    setInfostatus(el.status ? "ture" : "false")
    
  }
  async function EditUser() {
    let updatenewuser = {
      name: Editname,
      prase: Editprase,
      img: Editimg,
      status: Editstatus == "true"
    }
    try {
      await fetch(`${api}/${idx}`, {
        method: "PUT",
        headers: { "Conten-type": "application/json" },
        body: JSON.stringify(updatenewuser)
      })
      get()
      setIsModalEdit(false)
    } catch (error) {
      console.error(error);

    }
  }

  async function AddUser() {
    let newUser = {
      name: Addname,
      prase: Addprase,
      status: Addstatus == "true",
      img: Addimg,
    }
    try {
      await fetch(api, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser)
      })
      get()
      setIsModalOpen(false)
    } catch (error) {
      console.error(error);

    }
  }

  const showModal = () => {
    setIsModalOpen(true);
     

  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalEdit(false)
    setIsModalInfo(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalEdit(false)
     setIsModalInfo(false)
  };


  async function ChecUser(el) {
    try {
      let res = await fetch(`${api}/${el.id}`, {
        method: "PUT",
        headers: { "Conten-type": "application" },
        body: JSON.stringify({
          ...el,
          status: !el.status
        })
      })
      get()
    } catch (error) {
      console.error(error);

    }
  }



  useEffect(() => {
    get()
  }, [])

  return (
    <div>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={AddUser}
        onCancel={handleCancel}
      >
        <Input value={Addname} onChange={(e) => setAddname(e.target.value)} placeholder='Name...'></Input> <br /> <br />
        <Input value={Addprase} onChange={(e) => setAddpsrase(e.target.value)} placeholder='Prase...'></Input> <br /> <br />
        <Input placeholder='Img...' value={Addimg} onChange={(e) => setAddimg(e.target.value)}></Input> <br /> <br />
        <select value={Addstatus} onChange={(e) => setAddstatus(e.target.value)}> <br /> <br />
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalEdit}
        onOk={EditUser}
        onCancel={handleCancel}
      >
        <Input value={Editname} onChange={(e) => setEditname(e.target.value)} placeholder='Name...'></Input> <br /> <br />
        <Input value={Editprase} onChange={(e) => setEditpsrase(e.target.value)} placeholder='Prase...'></Input> <br /> <br />
        <Input placeholder='Img...' value={Editimg} onChange={(e) => setEditimg(e.target.value)}></Input> <br /> <br />
        <select value={Editstatus} onChange={(e) => setEditstatus(e.target.value)}> <br /> <br />
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalInfo}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <div className='flex gap-[30px] items-center'>
        <div>
          <img src={Infoimg} alt="" />
        </div>
        <div>
          <h1 className='font-extrabold text-3xl'>{Infoname}</h1>
          <h1 className='font-black'>{Infoprase}</h1>
          <h1 className='font-black'>{Infostatus?"Active":"Inactive"}</h1>

        </div>
       </div>

      </Modal>
      <header className='flex justify-around items-center py-[20px]'>
        <div className='lg:flex gap-[20px] hidden'>
          <a href="">Shop</a>
          <a href="">Explore</a>
        </div>
        <div>
          <img src={img} alt="" className='w-[200px] h-[250px]' />
        </div>
        <div className='hidden lg:block'>
          <a href="">My Cart</a>
        </div>
        <div className='flex lg:hidden gap-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>
      </header>
      <div className='bgimg w-[100%] text-center h-[500px] items-center'>
        <h1 className='font-extrabold text-5xl'>The Desk Shelf System</h1>
        <p className='my-[20px]'>Available in Walnut or Maple</p>
        <p>LEARN MORE</p>
      </div>
      <div className='text-center my-[30px]'>
        <div className='mx-[30px]'>
        <h1 className='font-black text-3xl my-[20px]'>Design Inspires</h1>
        <p>Build your dream workspace, so you can get your best work done.</p>
        <p>GET STARTED</p>
        </div>
        <div className='flex justify-center lg:gap-[40px] gap-[20px] lg:mx-[0px] mx-[20px] my-[50px]'>
          <div className='lg:w-[30%]'>
            <img src={img2} alt="" />
            <p className='font-black lg:text-2xl mt-[20px]'>Desk Pads</p>
            <p>LEARN MORE</p>
          </div>
          <div className='lg:w-[30%]'>
            <img src={img1} alt="" />
            <p className='font-black lg:text-2xl mt-[20px]'>Laptop Stands</p>
            <p>LEARN MORE</p>
          </div>
        </div>
      </div>
      <div className='text-center my-[50px]'>
        <h1 className='font-black text-4xl my-[20px]'>Featured Products</h1>
        <p>See What’s Trending Right Now</p>
        <div className='flex justify-center gap-[20px] my-[20px]'>
          <div className='w-[10px] h-[10px]  bg-gray-500'></div>
          <div className='w-[10px] h-[10px] border bg-black'></div>
          <div className='w-[10px] h-[10px]  bg-gray-500'></div>
        </div>
      </div>
      <div className='lg:flex justify-around items-center my-[50px]'>
        <div className='lg:w-[35%] w-[90%] mx-auto flex gap-[10px] items-center border rounded-2xl p-[5px] pl-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input className='w-[100%] p-[10px] rounded-2xl ' value={Search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Name....' />
        </div>
        <div className='flex justify-between lg:w-[20%] w-[90%] mx-auto my-[20px] items-center gap-[40px] '>
        <div className=''>
          <select className=' border text-center  p-[5px] rounded-[10px]' value={SelectAll} onChange={(e) => setSelectAll(e.target.value)}>
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <div>
        <button onClick={() => showModal()} className='font-extrabold text-6xl hover:text-green-700'>+</button>

        </div>
        </div>
      </div>
      <div className='box   group'>
        {
          User.filter(el => el.name.toLowerCase().includes(Search.toLowerCase())).filter(el => el.status.toString().includes(SelectAll)).map(el => {
            return (
              <div key={el.id} className='lg:w-[18%]  flex-shrink-0 text-gray-500'>
                <img src={el.img} alt="" className='w-[200px] h-[250px]' />
                <h1 className='my-[10px]'>{el.name}</h1>
                <div className='flex gap-[50px] mb-[20px]'>
                  <h1>{el.status ? "Active" : "Inactive"}</h1>
                  <h1>{`$${el.prase}`}</h1>
                </div>
                <div className='gap-[20px] hidden group-hover:flex justify-around'>
                  <input type="checkbox" checked={el.status} onClick={() => ChecUser(el)} />
                    <button onClick={()=>InfoUser(el)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                  </button>
                  <button className='text-blue-600' onClick={() => updateUser(el)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                  </button>
                  <button onClick={() => DeletUser(el.id)} className='text-red-700 hidden group-hover:block '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                
                  
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='bgimg bgimg1 w-[100%] mt-[150px] text-center h-[500px] items-center'>
        <h1 className='font-bold text-5xl'>Home Office Inspiration</h1>
        <p className='my-[20px]'>Working from home can be a challenge—see some creative solutions to get it just right.</p>
        <p>LEARN MORE</p>
      </div>
      <div className='lg:w-[55%] px-[20px] text-center mx-auto my-[50px]'>
        <h1 className='font-black text-4xl my-[30px]'>Made The Hard Way</h1>
        <p className='text-gray-400'>Our signature craftsmanship has been honed over a decade of manufacturing innovation here in Portland,
          Oregon. We combine the skills of our small in-house team with the collective strength of collaborators throughout
          the US to deliver quality products worth investing in.</p>
        <img src={img3} alt="" className='my-[30px]' />
        <h1 className='font-black text-4xl mt-[40px]'>Make Work Meaningful</h1>
        <p className='text-gray-400 my-[20px]'>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
      </div>
      <div className='grid lg:grid-cols-6 grid-cols-4 m-[20px] gap-[20px]'>
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
        <img src={img13} alt="" />
        <img src={img14} alt="" />
        <img src={img15} alt="" />
        <img src={img16} alt="" />
        <img src={img17} alt="" />
        <img src={img18} alt="" />
        <img src={img19} alt="" />
        <img src={img20} alt="" />
        <img src={img21} alt="" />
        <img src={img22} alt="" />
        <img src={img23} alt="" />
        <img src={img24} alt="" />
        <img src={img25} alt="" />
        <img src={img26} alt="" />
        <img src={img27} alt="" />
      </div>
      <div className='text-center my-[50px]'>
        <h1 className='font-bold text-3xl my-[30px]'>We Hope You'll Join Us</h1>
        <p>READ MORE ABOUT OUR STORY</p>
      </div>
      <div className='bg-[#9AA8B1] text-white text-center px-[20px] w-[90%] mx-auto rounded-2xl h-[300px] pt-[100px]'>
        <div className='flex justify-center'>
          <img src={img28} alt="" />
        </div>
        <h1 className='font-extrabold text-3xl my-[20px]'>Design Inspires</h1>
        <p>Build your dream workspace, so you can get your best work done.</p>
      </div>
      <footer className='bg-[#F9F9F9] p-[20px] mt-[50px]'>
        <div className='flex gap-[30px] my-[50px] lg:mx-[20px]'>
          <div className='font-black block'>
            <a href='' className='my-[10px]'>Shop</a> <br />
            <a href='' className='my-[10px]'>About</a> <br />
            <a href='' className='my-[10px]'>Journal</a> <br />
            <a href='' className='my-[10px]'>Support</a> <br />
            <a href='' className='my-[10px]'>COVID-19 Info</a> <br />
            <a href='' className='my-[10px]'>Order Status</a> <br />
            <a href='' className='my-[10px]'>Corporate Sales</a> <br />
          </div>
          <div className='lg:w-[27%] w-[60%]'>
            <p className='font-black'>Newsletter Signup</p>
            <p className='my-[30px]'>Sign up to our Newsletter to hear about new product releases,
              learn about our design process, and everything else going on behind the scenes at Grovemade.</p>
            <hr />
          </div>
        </div>
        <div className='flex justify-end gap-[50px]'>
          <p className='text-gray-400' >©2020 Grovemade</p>
          <a className='text-gray-400' href="">Terms & Conditions</a>
          <a className='text-gray-400' href="">Privacy Policy</a>
          <a href="" className='font-bold'>Site by Department</a>
        </div>
      </footer>
    </div>
  )
}

export default App
