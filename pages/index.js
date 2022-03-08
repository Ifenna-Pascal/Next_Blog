import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Eachpost from '../components/Eachpost'

export default function Home() {
  return (
    <div> 
       <Nav />
      <div className='my-8 max-w-[85%] mx-auto'>
          <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4'> 
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />   
               <Eachpost image="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
          </div>
      </div>
      
    </div>
  )
}
