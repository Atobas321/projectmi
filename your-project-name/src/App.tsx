import './App.css';
import { IconProp } from '@fortawesome/font-awesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faFacebook, faGithub, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faGithub, faWhatsapp, faInstagram, faHouse, faUser)

{/*interface Props{
  img: IconProp;
}*/}

const myIcons: IconProp[] = [faInstagram, faUser, faWhatsapp, faGithub, faHouse];

function App() {
  return (
    <>
    
      <div className='bg-black h-screen'>
      <h6 className='text-5xl text-white  py-20 text-justify'>
        Nice to meet you ! I'm <span className='underline'>Adam Keyes</span></h6>

        <p className='text-white pr-5'>Based in the Uk i'm a front-end developer 
        passionate about building accessible web apps that users love</p>
        
      </div>
      <hr className=' border-b border-solid bg-red-500 mt-[-10rem]'></hr>
      <div className='sub-color'>
      <div className='text-center text-2xl flex gap-5'>
   
        <FontAwesomeIcon icon ={["fab", "twitter"]}/>
      {/* <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" /> */}
        <FontAwesomeIcon icon ={["fab", "facebook"]} />
        <FontAwesomeIcon icon= {["fab", "pinterest"]}/>
       {/* <FontAwesomeIcon className='p-5' icon="fa-brand fa-instagram" />
        <FontAwesomeIcon className='p-5' icon="fa-regular fa-user" /> */}

       {myIcons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} />
      ))}

        < img src='beverage.jpg' className='rtr flex justify-center '/>
        </div>
      </div>
     <div className=/*'mid-container text-white flex'*/" grid grid-cols-3  grid-rows-2 text-white p-2 text-center">
      <div>
        <h5 className='text-xl'>HTML</h5>
        <h1 className='m-5' >4 years experience</h1>
        </div>
      <div>
      <h5 className='text-xl'>CSS</h5>
        <h1 >4 years experience</h1>
      </div>
      <div>
      <h5 className='text-xl'>JAVASCRIPT</h5>
        <h1>4 years experience</h1>
      </div>
      <div> <h5 className='text-xl'>Accessibility</h5>
        <h1 >4 years experience</h1>
      </div>
      <div> <h5 className='text-xl'>React</h5>
        <h1 >4 years experience</h1></div>
      <div> <h5 className='text-xl'>Sass</h5>
        <h1 >4 years experience</h1></div>

     {/* <div className='cont-1 flex-initial w-1/3'>
        <h5 className='aaa'>HTML</h5>
        <p className='sub pl-0'>4 yrs experience</p>
        </div>
        <div className='cont-2 flex-initial w-1/3'>
        <h5 className='aab'>HTML</h5>
        <p className='sup pl-0'>4 yrs experience</p>
      </div>
      <div className='cont-3 flex-initial   '>
        <h5 className='aac'>HTML</h5>
        <p className='suk pl-0'>4 yrs experience</p>
       </div>*/}
      
     </div>   
     <div className=' bg-black w-ful h-screen'>
     <div className='text-white text-3xl flex justify-center  ttt'>Project<span className='underline text-sm'>Contact</span></div>

     <div className= "grid grid-rows-3 grid-cols-2 gap-4  m-8  text-md text-center">
      <div className='row-3 bg-white  rounded-lg   tt'>4 
      <div className='grid grid-rows-2 grid-cols-2'>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <h2>DESIGN PORTFOLIO</h2>
      </div>
      <span className='' ></span></div>
      <div className='row-span-2 bg-white  rounded-lg tt'>5
      <div className='grid grid-rows-2 grid-cols-2'>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <h2>E-LEARNING  LANDING PAGE</h2>
      </div>
      </div>
      <div className='row-span-2 bg-white rounded-lg tt text-red'>6
      <div className='grid grid-rows-2 grid-cols-2'>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <h2>TODO WEB</h2>
      </div>
      </div>
      <div className='row-end-1 bg-white rounded-lg tt'>7
      <div className='grid grid-rows-2 grid-cols-2'>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <div className='box-border h-30 w-20  border-red-500 border-2 p-6 m-5'></div>
      <h2>ENTERTAINMENT APP </h2>
      </div>
      </div>
     {/* <div>8</div>
      <div>9</div>
        {/*<div className='row-span-4 bg-blue-500  p-5 w-1/2 m-5 rounded-lg '>2</div>
        <div className='col-span-4 bg-blue-500  p-5 w-1/3 m-5 rounded-lg '>2</div>
       <div className='col-span-4 bg-blue-500  p-5 w-1/3 m-5 rounded-lg '>2</div>  */}
     </div>

     </div>
    
     <div className=' bg-gray-900 w-ful h-screen'>
        <div className='grid grid-cols-2 grid-rows-1 p-5 tuc'>
          <div className='text-3xl '>Contact<div className='text-sm'>i would love to hear about your project and how i could help 
          pleas fill the form, and i will get back to you as soon as possible
          </div>git 
          
          </div>
          <div className=' grid grid-rows-2'>    
          
          <input className="pt-5 border-b border-teal-500 bg-transparent focus:outline-none " placeholder='Name' type = 'text'></input>
          <input className="pt-5 border-b border-teal-500 bg-transparent focus:outline-none" placeholder='Email' type = 'text'></input>
          <input className="pt-5 border-b border-teal-500 bg-transparent focus:outline-none pt-10" placeholder='Message' type = 'text'></input>
          
          </div>
           
         
        </div>
        <div className='flex justify-end text-xl '>
        <input className='mt-10  border-b border-teal-500  w-1/5 p-5 mr-5 focus:outline-non bg-transparent'
            placeholder= 'send message'></input>
     
         </div>
         <div className=' border-b border-teal-500 flex justify-center w-5/6 m-10'></div>
         < div className='flex justify-end pr-10 gap-4'>
         {myIcons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon}  className='text-white'/>
      ))}
         
        {/*  
         <FontAwesomeIcon icon ={["fab", "twitter"]}/>
         <FontAwesomeIcon icon ={["fab", "whatsapp"]}/>
         <FontAwesomeIcon icon ={["fab", "facebook"]}/>
         <FontAwesomeIcon icon ={["fab", "House"]}/>*/}

         </div>
         <div className='flex justify-start pt-0 text-white'>advantage</div>
     </div>
    </>
  )
}

export default App