"use client"
import {useRouter} from 'next/navigation';

export const metadata = {
    title: "About Page",
  }

function AboutPage(){

    const router = useRouter();

    return <section>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti eum nam delectus a similique hic numquam voluptatibus
        eveniet facere fugit, perspiciatis veniam provident reprehenderit incidunt ea quae, 
        eligendi nostrum veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti eum nam delectus a similique hic numquam voluptatibus
        eveniet facere fugit, perspiciatis veniam provident reprehenderit incidunt ea quae, 
        eligendi nostrum veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti eum nam delectus a similique hic numquam voluptatibus
        eveniet facere fugit, perspiciatis veniam provident reprehenderit incidunt ea quae, 
        eligendi nostrum veritatis.</p>
       
        <button 
          className="bg-sky-400 px-3 rounded-md"
          onClick={() => {
              alert('Executing code!')
              router.push('/')
          }}
        >
           Click
        </button>

    </section>
}

export default AboutPage;