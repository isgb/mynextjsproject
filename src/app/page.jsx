// "use client"

import Users from "@/src/components/Users"

export const metada = {
    title: "Mi pagina especial Home"
}
// gogle buscar nextjs react server components
export default function HomePage(){
    return <section>
        <h1>Hello World</h1>
        {/* <button onClick={() =>{ alert("hello")}}>
            click
        </button> */}
        <Users/>
    </section>
}