import Head from 'next/head'
import Nav from '../components/Nav'
import Eachpost from '../components/Eachpost'
import Layer2_post from '../components/Layer2_post'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '..';


export default function Home() {
  const dispatch = useDispatch();
  const {loading, posts} = useSelector((state) => state.posts);
  console.log(loading, posts);
  useEffect(() => {
    dispatch(fetchPosts())
  }, []);
  return (
    <div> 
       <Nav />
      <div className='my-8 max-w-[85%] mx-auto'>
      {
               loading && <div> Loading.... </div>
             }
          <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8'> 
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />   
               <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
          </div>
      </div>
      <Layer2_post />
      <div className='my-8 max-w-[85%] mx-auto'>
          <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8'> 
          <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
              <Eachpost img="/images/image.png" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas." />
          </div>
      </div>
    </div>
  )
}
